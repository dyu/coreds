import {
    FieldType, PojoSO, PojoState, ChangeFlags,
    HasState, PagerState, SelectionFlags,
    ObservableFactory
} from './types'
import {
    setp, defp, bit_unset, localToUtc, bit_clear_and_set, extractMsg,
    regexDouble, regexInt, regexTime, regexDate, regexDateTime
} from './util'
import {
    formatTime, formatDate, formatDateTime,
    isValidDateStr, isValidDateTimeStr,
    numeral
} from './datetime_util'
import { MultiCAS } from './ds/mc'
import { diffFieldsTo, diffFieldTo, mergeOriginalFrom } from './diff'

const hasOwnProperty = Object.prototype.hasOwnProperty

function addVpropsTo<T>(so: T, descriptor: any, owner: any, withVal?: boolean): T {
    if (descriptor.$fdf) {
        for (let k of descriptor.$fdf) {
            if (!withVal || owner[k] === '') {
                so[k] = null
                owner[k] = null
            } else if (hasOwnProperty.call(owner, k)) {
                so[k] = null
            }
        }
    }

    if (descriptor.$fdikf) {
        for (let k of descriptor.$fdikf) {
            if (!withVal || hasOwnProperty.call(owner, k)) {
                so[k] = null
                owner[k] = null
            }
        }
    }
    
    return so
}

export function initObservable<T>(target: T, descriptor: any, withVal?: boolean): T {
    target['_'] = addVpropsTo({
        state: 0,
        msg: '',
        dfbs: 0,
        vfbs: 0,
        rfbs: 0
    }, descriptor, target, withVal)

    defp(target, '$d', descriptor)
    if (!descriptor.$fmf)
        return target

    for (let fk of descriptor.$fmf) {
        let fd = descriptor[fk]
        initObservable(target[fk], fd.d_fn(), withVal)
    }
    return target
}

// =====================================
// form ops

export function verify_fields(message: any, descriptor: any, update?: boolean, root?: any): boolean {
    let message_ = message._ as PojoSO,
        root_: PojoSO,
        rfbs: number,
        fmf: string[]
    
    if (root) {
        root_ = root._ as PojoSO
    } else {
        root = message
        root_ = message_
    }

    if (message_.vfbs) {
        if (root_.msg) {
            root_.state = bit_unset(root_.state, PojoState.MASK_STATUS)
            root_.msg = ''
        }
        
        return false
    }

    if ((fmf = descriptor.$fmf)) {
        for (let fk of fmf) {
            if (!verify_fields(message[fk], descriptor[fk].d_fn(), update, root))
                return false
        }
    }

    if (update || !(rfbs = descriptor.$rfbs) || rfbs === message_.rfbs)
        return true
    
    root_.state = bit_clear_and_set(root_.state, PojoState.MASK_STATUS, PojoState.ERROR)
    root_.msg = 'All required fields must be provided.'
    
    return false
}

export function clear_fields(message: any, descriptor: any) {
    let message_ = message['_'] as PojoSO,
        fmf
    
    message_.dfbs = 0
    message_.rfbs = 0
    for (let fk of descriptor.$fdf) {
        message[fk] = null
    }
    
    if (!(fmf = descriptor.$fmf))
        return
    
    for (let fk of fmf) {
        clear_fields(message[fk], descriptor[fk].d_fn())
    }
}

// =====================================
// create

export function $success(pojo: any, msg?: string) {
    let pojo_ = pojo['_'] as PojoSO
    
    pojo_.state = bit_clear_and_set(pojo_.state, PojoState.MASK_STATUS|PojoState.LOADING, PojoState.SUCCESS)
    pojo_.msg = msg !== undefined ? msg : 'Successful.'
    
    clear_fields(pojo, pojo['$d'])
}

export function $failed(pojo: any, errmsg: any) {
    let pojo_ = pojo['_'] as PojoSO
    
    pojo_.state = bit_clear_and_set(pojo_.state, PojoState.MASK_STATUS|PojoState.LOADING, PojoState.ERROR)
    pojo_.msg = !errmsg ? 'Error.' : extractMsg(errmsg)
}

export function $prepare(pojo: any, skipVerify?: boolean) {
    let pojo_ = pojo['_'] as PojoSO,
        state = pojo_.state
    
    if ((state & PojoState.LOADING) || (!skipVerify && !verify_fields(pojo, pojo['$d'])))
        return false
    
    pojo_.state = bit_clear_and_set(state, PojoState.MASK_STATUS, PojoState.LOADING)
    pojo_.msg = ''

    return true
}

export function $clear(pojo: any): PojoSO {
    let pojo_ = pojo['_'] as PojoSO

    if (pojo_.msg)
        pojo_.msg = ''
    
    if (!pojo_.dfbs)
        return pojo_
    
    if (pojo_.vfbs)
        pojo_.vfbs = 0
    
    clear_fields(pojo, pojo['$d'])
    
    return pojo_
}

// =====================================
// update

export interface ParamUpdate {
    /** key = 1, required */
    ['1']: string
    /** mc = 2, required */
    ['2']: MultiCAS
    /** id = 3, optional */
    ['3']?: number
}

export function $update_req(key: string, mc: MultiCAS, id?: number): ParamUpdate {
    return {
        '1': key,
        '2': mc,
        '3': id
    }
}

export function $update_success(pojo: any, pager: HasState, original: any, selected?: any) {
    let pojo_ = pojo['_'] as PojoSO
    
    pojo_.state = bit_clear_and_set(pojo_.state, 
            PojoState.MASK_STATUS|PojoState.LOADING, PojoState.SUCCESS)
    pojo_.msg = 'Successful.'
    pojo_.dfbs = 0
    
    mergeOriginalFrom(pojo, pojo['$d'], original, selected)
    
    pager.state ^= PagerState.LOADING
}

export function $update_failed(pojo: any, pager: HasState, errmsg: any) {
    let pojo_ = pojo['_'] as PojoSO
    
    pojo_.state = bit_clear_and_set(pojo_.state, PojoState.MASK_STATUS|PojoState.LOADING, PojoState.ERROR)
    pojo_.msg = !errmsg ? 'Error.' : extractMsg(errmsg)
    
    pager.state ^= PagerState.LOADING
}

export function $update(pojo: any, pager: HasState, original: any, changes?: any): MultiCAS|undefined {
    let pojo_ = pojo['_'] as PojoSO,
        state = pojo_.state,
        $d = pojo['$d']
    
    if ((pager.state & PagerState.LOADING) || (state & PojoState.LOADING) || !verify_fields(pojo, $d, true))
        return undefined
    
    let mc: MultiCAS|undefined,
        fields = pojo_.dfbs ? Object.keys(pojo) : $d.$fdikf,
        diffCount = fields && diffFieldsTo(mc = {}, $d, original, pojo, fields)
    
    if (!diffCount && !changes) {
        if (!pojo_.msg) {
            pojo_.state = bit_clear_and_set(state, PojoState.MASK_STATUS, PojoState.WARNING)
            pojo_.msg = 'No changes were made.'
        }
        
        return undefined
    }

    pojo_.state = bit_clear_and_set(state, PojoState.MASK_STATUS, PojoState.LOADING)
    pojo_.msg = ''

    pager.state |= PagerState.LOADING

    return diffCount ? mc : undefined
}

// =====================================
// toggle

export function $toggle_success(pager: any, pojo_update: any, skipMerge?: boolean, msg?: string): boolean {
    let selected = pager.pojo,
        selected_ = selected['_'] as PojoSO,
        store = pager['store']
    
    pager.state ^= PagerState.LOADING
    if (!skipMerge)
        mergeOriginalFrom(selected, selected['$d'], store.getOriginal(selected), pojo_update)
    
    selected_.state = bit_clear_and_set(selected_.state, PojoState.MASK_STATUS|PojoState.LOADING, PojoState.SUCCESS)
    selected_.msg = msg !== undefined ? msg : 'Update Successful.'
    
    return true
}

export function $toggle_failed(pager: any, errmsg: any) {
    let selected = pager.pojo,
        selected_ = selected['_'] as PojoSO
    
    pager.state ^= PagerState.LOADING
    selected_.state = bit_clear_and_set(selected_.state, PojoState.MASK_STATUS|PojoState.LOADING, PojoState.ERROR)
    selected_.msg = !errmsg ? 'Update failed.' : extractMsg(errmsg)
}

export function $toggle(pager: any, field: string, pojo?: any, changed?: boolean): MultiCAS|null {
    let selected = pojo || pager.pojo,
        selected_ = selected['_'] as PojoSO
    
    if ((pager.state & PagerState.LOADING) || (selected_.state & PojoState.LOADING))
        return null
    
    let d = selected['$d'],
        fd = d[field],
        store = pager['store'],
        original = store.getOriginal(selected),
        mc = {}
    
    if (pojo && pojo !== pager.pojo)
        store.select(pojo, SelectionFlags.CLICKED)

    if (!changed)
        selected[field] = !selected[field]

    diffFieldTo(mc, d, original, selected, fd._)
    
    pager.state |= PagerState.LOADING
    selected_.state |= PojoState.LOADING
    if (selected_.msg)
        selected_.msg = ''

    return mc
}

export function $toggle_prepare(pager: any): boolean {
    let selected = pager.pojo,
        selected_ = selected['_'] as PojoSO
    
    if ((pager.state & PagerState.LOADING) || (selected_.state & PojoState.LOADING))
        return false
    
    pager.state |= PagerState.LOADING
    selected_.state |= PojoState.LOADING
    if (selected_.msg)
        selected_.msg = ''
    
    return true
}

// =====================================
// event handling

function postValidate(message: any, fd: any, fk: string, flag: number, 
        message_: PojoSO, dfbs: number, msg, root: any, dirty: boolean, update: boolean) {
    let root_ = root._ as PojoSO,
        state = message_.state,
        vfbs = message_.vfbs,
        rfbs = message_.rfbs,
        required = fd.m === 2
    
    message_[fk] = msg
    
    if (!(state & PojoState.UPDATE))
        message_.state = state | PojoState.UPDATE
    
    if (dirty) {
        if (!(dfbs & flag))
            message_.dfbs |= flag
    } else if (dfbs & flag) {
        message_.dfbs ^= flag
    }

    if (msg) {
        if (!(vfbs & flag))
            message_.vfbs |= flag
        if (required && (rfbs & flag))
            message_.rfbs ^= flag
    } else {
        if (vfbs & flag)
            message_.vfbs ^= flag
        if (!update && required && (!(rfbs & flag) || !dirty))
            message_.rfbs ^= flag
    }

    if (root_.msg) {
        root_.state = bit_unset(root_.state, PojoState.MASK_STATUS)
        root_.msg = ''
    }
}

function validateString(val: string, message: any, fd: any, fk: string, fk_: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk_])
            message_[fk_] = v
        
        if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(val))) {
            message[fk] = sv = val
            dirty = !update || val !== message_[fk_]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk_]
        else
            el.value = v
    } else if ((v = message[fk]) || v === undefined) {
        el.value = ''
        message[fk] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty, update)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    cbfn(fk, sv, message, fd, root)
    
    return msg
}

function validateFloat(val: any, message: any, fd: any, fk: string, fk_: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk_])
            message_[fk_] = v
        
        if (!regexDouble.test(val)) {
            msg = fd.$n + ' is not a number.'
            message[fk] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn) {
            message[fk] = sv = v = parseFloat(val)
            dirty = !update || v !== message_[fk_]
        } else if (!(msg = fd.vfn(v = parseFloat(val)))) {
            message[fk] = sv = v
            dirty = !update || v !== message_[fk_]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk_]
        else
            el.value = v
    } else if ((v = message[fk]) || v === undefined) {
        el.value = ''
        message[fk] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty, update)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    cbfn(fk, sv, message, fd, root)
    
    return msg
}

function validateInt(val: any, message: any, fd: any, fk: string, fk_: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk_])
            message_[fk_] = v
        
        if (!regexInt.test(val)) {
            msg = fd.$n + ' is not a whole number.'
            message[fk] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn) {
            message[fk] = sv = v = parseInt(val, 10)
            dirty = !update || v !== message_[fk_]
        } else if (!(msg = fd.vfn(v = parseInt(val, 10)))) {
            message[fk] = sv = v
            dirty = !update || v !== message_[fk_]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk_]
        else
            el.value = v
    } else if ((v = message[fk]) || v === undefined) {
        el.value = ''
        message[fk] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty, update)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    cbfn(fk, sv, message, fd, root)
    
    return msg
}

function validateTime(val: any, message: any, fd: any, fk: string, fk_: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk_])
            message_[fk_] = v
        
        if (!regexTime.test(val) || 86399 < (v = numeral().unformat(val.length <= 5 ? (val + ':00') : val))) {
            msg = fd.$n + ' is not a valid time.'
            message[fk] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[fk] = sv = v
            dirty = !update || v !== message_[fk_]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk_]
        else
            el.value = formatTime(v)
    } else if ((v = message[fk]) || v === undefined) {
        el.value = ''
        message[fk] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty, update)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    cbfn(fk, sv, message, fd, root)
    
    return msg
}

function validateDate(e, val: any, message: any, fd: any, fk: string, fk_: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (!e.isTrusted && (v = message[fk])) {
        // dirty
        if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            sv = v
            dirty = !update || v !== message_[fk_]
        } else {
            message[fk] = undefined
        }
    } else if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk_])
            message_[fk_] = v
        
        if (!regexDate.test(val) || !(v = isValidDateStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date.'
            message[fk] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[fk] = sv = v
            dirty = !update || v !== message_[fk_]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk_]
        else
            el.value = formatDate(v)
    } else if ((v = message[fk]) || v === undefined) {
        el.value = ''
        message[fk] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty, update)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    cbfn(fk, sv, message, fd, root)
    
    return msg
}

function validateDateTime(val: any, message: any, fd: any, fk: string, fk_: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk_])
            message_[fk_] = v
        
        if (!regexDateTime.test(val) || !(v = isValidDateTimeStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date and time.'
            message[fk] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[fk] = sv = v
            dirty = !update || v !== message_[fk_]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk_]
        else
            el.value = formatDateTime(v)
    } else if ((v = message[fk]) || v === undefined) {
        el.value = ''
        message[fk] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty, update)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    cbfn(fk, sv, message, fd, root)
    
    return msg
}

/**
 * The update arg means if existing data is modified (not creating new data).
 */
export function $change(e, fk: string, message: any, update: boolean, root?: any, flags?: number, cbfn?: any): string|null {
    let d = message['$d'],
        fd = d[fk]
    
    if (!fd || fd.t === FieldType.BYTES)
        return null
    
    if (!root)
        root = message
    
    if (flags === undefined)
        flags = 0
    
    let message_ = message['_'] as PojoSO,
        dfbs = message_.dfbs,
        fk_ = '0' + fk,
        f = fd._,
        flag = 1 << (f - 1),
        el = e.target,
        msg: string|null = null,
        dirty = true,
        val
    
    switch (fd.t) {
        case FieldType.BOOL:
            if (el.nodeName !== 'SELECT') {
                message[fk] = val = el.checked
                dirty = !(flag & dfbs)
            } else if (update || el.value) {
                message[fk] = val = ('1' === el.value)
                dirty = !(flag & dfbs)
            } else {
                message[fk] = val = null
                dirty = false
            }
            postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty, update)

            if (!cbfn || ((flags & ChangeFlags.CB_ONLY_ON_SET) && val === null))
                break
            cbfn(fk, val, message, fd, root)
            break
        case FieldType.ENUM:
            if (!update) {
                val = (dirty = !!el.value.length) ? parseInt(el.value, 10) : null
            } else if (!(flag & dfbs)) {
                // first update, dirty state
                message_[fk_] = val = parseInt(el.value, 10)
            } else if (message_[fk_] === (val = parseInt(el.value, 10))) {
                // restored to original value, no longer dirty
                dirty = false
            }
            message[fk] = val
            postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty, update)
            
            if (!cbfn || ((flags & ChangeFlags.CB_ONLY_ON_SET) && val === null))
                break
            cbfn(fk, val, message, fd, root)
            break
        case FieldType.STRING:
            msg = validateString(el.value.trim(), message, fd, fk, fk_, flag, message_, dfbs, el, update, root, cbfn, flags)
            break
        case FieldType.FLOAT:
        case FieldType.DOUBLE:
            msg = validateFloat(el.value.trim(), message, fd, fk, fk_, flag, message_, dfbs, el, update, root, cbfn, flags)
            break
        default:
            switch (fd.o || 0) {
                case 1: // time
                    msg = validateTime(el.value.trim(), message, fd, fk, fk_, flag, message_, dfbs, el, update, root, cbfn, flags)
                    break
                case 2: // date
                    msg = validateDate(e, el.value.trim(), message, fd, fk, fk_, flag, message_, dfbs, el, update, root, cbfn, flags)
                    break
                case 4: // datetime
                    msg = validateDateTime(el.value.trim(), message, fd, fk, fk_, flag, message_, dfbs, el, update, root, cbfn, flags)
                    break
                default:
                    msg = validateInt(el.value.trim(), message, fd, fk, fk_, flag, message_, dfbs, el, update, root, cbfn, flags)
            }
    }
    
    return msg
}

export interface VM {
    set: (obj: any) => void
    get: (key?: string) => any
}

export class Form {
    flags: number
    root: any
    constructor(public vm: VM, public $d: any, public update: boolean, public root_key: string,
            flags?: number) {
        this.flags = flags || 0
    }
    
    change(e: any, field: string, message?: any, flags?: number, cbfn?: any) {
        let root = this.root || (this.root = this.vm.get(this.root_key)),
            f = flags || this.flags,
            m = message || root,
            ret = $change(e, field, m, this.update, root, f, cbfn)
        
        if ((f & ChangeFlags.VM_SET)) {
            this.vm.set(!this.root_key ? {} : setp({}, this.root_key, root))
        }
        
        return ret
    }
}

export class FormPojoBuilder {
    map = Object.create(null)
    $d = {
        $rfbs: 0,
        $rfdf: [] as any[],
        //$fikdf: [] as any[],
        $fdf: [] as any[]
    }
    num = 0
    obj = {}
    built = false
    
    constructor(private factory: ObservableFactory) {
        
    }
    
    getFD(name) {
        return this.map[name]
    }
    
    build(withVal?: boolean) {
        if (this.built) throw 'Already built.'
        if (this.num === 0) throw 'No fields defined.'
        
        let ret = initObservable(this.obj, this.$d, withVal),
            inner = ret['_'],
            factory = this.factory
        
        for (let k of Object.keys(inner)) {
            let binding = factory.create(inner[k])            
            Object.defineProperty(inner, k, {
                enumerable: true,
                configurable: true,
                get: factory.getter(binding),
                set: factory.setter(binding)
            })
        }
        Object.defineProperty(ret, '_', {
            enumerable: false,
            configurable: true,
            value: inner
        })
        
        this.built = true
        return ret
    }
    
    _(t: number, a: number, o: number, name: string, value: any, display: string, required?: boolean, vfn?: (val) => string|undefined|null): FormPojoBuilder {
        if (this.built) throw 'Already built.'
        if (this.map[name]) throw `${name} already exists.`
        
        let obj = this.obj,
            $d = this.$d,
            factory = this.factory,
            n = ++this.num,
            fd = {name, v: value, k: String(n), _: n, t, a, o, m: required ? 2 : 1, $n: display, vfn}
        
        this.map[name] = fd
        $d[fd.k] = fd
        $d.$fdf.push(fd.k)
        
        if (required) {
            $d.$rfbs |= (1 << (fd._ - 1))
            $d.$rfdf.push(fd.k)
        }
        
        const binding = factory.create(fd.v),
            get = factory.getter(binding),
            set = factory.setter(binding)
        
        Object.defineProperty(obj, fd.k, {
            enumerable: false,
            configurable: false,
            get,
            set
        })
        Object.defineProperty(obj, fd.name, {
            enumerable: true,
            configurable: false,
            get,
            set
        })
        
        return this
    }
    $bool(name: string, value: boolean|null, display: string): FormPojoBuilder {
        return this._(1, 0, 0, name, value, display)
    }
    $str(name: string, value: string|null, display: string, required?: boolean, vfn?: (val) => string|undefined|null): FormPojoBuilder {
        return this._(3, 0, 0, name, value, display, required, vfn)
    }
    $float(name: string, value: number|null, display: string, required?: boolean, vfn?: (val) => string|undefined|null): FormPojoBuilder {
        return this._(4, 0, 0, name, value, display, required, vfn)
    }
    $double(name: string, value: number|null, display: string, required?: boolean, vfn?: (val) => string|undefined|null): FormPojoBuilder {
        return this._(5, 0, 0, name, value, display, required, vfn)
    }
    $int8(name: string, value: number|null, display: string, required?: boolean, vfn?: (val) => string|undefined|null): FormPojoBuilder {
        return this._(8, 0, 0, name, value, display, required, vfn)
    }
    $int32(name: string, value: number|null, display: string, required?: boolean, vfn?: (val) => string|undefined|null): FormPojoBuilder {
        return this._(10, 0, 0, name, value, display, required, vfn)
    }
    $int64(name: string, value: number|null, display: string, required?: boolean, vfn?: (val) => string|undefined|null): FormPojoBuilder {
        return this._(11, 0, 0, name, value, display, required, vfn)
    }
    $time(name: string, value: number|null, display: string, required?: boolean, vfn?: (val) => string|undefined|null): FormPojoBuilder {
        return this._(10, 0, 1, name, value, display, required, vfn)
    }
    $date(name: string, value: number|null, display: string, required?: boolean, vfn?: (val) => string|undefined|null): FormPojoBuilder {
        return this._(11, 0, 2, name, value, display, required, vfn)
    }
    $datetime(name: string, value: number|null, display: string, required?: boolean, vfn?: (val) => string|undefined|null): FormPojoBuilder {
        return this._(11, 0, 4, name, value, display, required, vfn)
    }
}
