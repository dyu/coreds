import { FieldType, PojoSO, PojoState, ChangeFlags } from './types'
import {
    setp, defp, bit_unset, localToUtc,
    regexDouble, regexInt, regexTime, regexDate, regexDateTime
} from './util'
import {
    formatTime, formatDate, formatDateTime,
    isValidDateStr, isValidDateTimeStr
} from './datetime_util'

import * as numeral from 'numeral'

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
// event handling

function postValidate(message: any, fd: any, fk: string, flag: number, 
        message_: PojoSO, dfbs: number, msg, root: any, dirty: boolean) {
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
        if (required && !(rfbs & flag))
            message_.rfbs |= flag
    }

    if (root_.msg) {
        root_.state = bit_unset(root_.state, PojoState.MASK_STATUS)
        root_.msg = ''
    }
}

function validateString(val: string, message: any, fd: any, fk: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v
        
        if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(val))) {
            message[fk] = sv = val
            dirty = !update || val !== message_[fk]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk]
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

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    cbfn(fk, sv, message, fd, root)
    
    return msg
}

function validateFloat(val: any, message: any, fd: any, fk: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v
        
        if (!regexDouble.test(val)) {
            msg = fd.$n + ' is not a number.'
            message[fk] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn) {
            message[fk] = sv = v = parseFloat(val)
            dirty = !update || v !== message_[fk]
        } else if (!(msg = fd.vfn(v = parseFloat(val)))) {
            message[fk] = sv = v
            dirty = !update || v !== message_[fk]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk]
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

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    cbfn(fk, sv, message, fd, root)
    
    return msg
}

function validateInt(val: any, message: any, fd: any, fk: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v
        
        if (!regexInt.test(val)) {
            msg = fd.$n + ' is not a whole number.'
            message[fk] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn) {
            message[fk] = sv = v = parseInt(val, 10)
            dirty = !update || v !== message_[fk]
        } else if (!(msg = fd.vfn(v = parseInt(val, 10)))) {
            message[fk] = sv = v
            dirty = !update || v !== message_[fk]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk]
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

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    cbfn(fk, sv, message, fd, root)
    
    return msg
}

function validateTime(val: any, message: any, fd: any, fk: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v
        
        if (!regexTime.test(val) || 86399 < (v = numeral().unformat(val.length <= 5 ? (val + ':00') : val))) {
            msg = fd.$n + ' is not a valid time.'
            message[fk] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[fk] = sv = v
            dirty = !update || v !== message_[fk]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk]
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

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    cbfn(fk, sv, message, fd, root)
    
    return msg
}

function validateDate(e, val: any, message: any, fd: any, fk: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (!e.isTrusted && (v = message[fk])) {
        // dirty
        if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            sv = v
            dirty = !update || v !== message_[fk]
        } else {
            message[fk] = undefined
        }
    } else if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v
        
        if (!regexDate.test(val) || !(v = isValidDateStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date.'
            message[fk] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[fk] = sv = v
            dirty = !update || v !== message_[fk]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk]
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

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    cbfn(fk, sv, message, fd, root)
    
    return msg
}

function validateDateTime(val: any, message: any, fd: any, fk: string, flag: number, message_: PojoSO, dfbs: number, 
        el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v
        
        if (!regexDateTime.test(val) || !(v = isValidDateTimeStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date and time.'
            message[fk] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[fk] = sv = v
            dirty = !update || v !== message_[fk]
        } else {
            message[fk] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk]
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

    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty)
    
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
        f = fd._,
        flag = 1 << (f - 1),
        el = e.target,
        msg: string|null = null,
        val
    
    switch (fd.t) {
        case FieldType.BOOL:
            // re-use update var as dirty
            if (el.nodeName !== 'SELECT') {
                message[fk] = val = el.checked
                update = !(flag & dfbs)
            } else if (update || el.value) {
                message[fk] = val = ('1' === el.value)
                update = !(flag & dfbs)
            } else {
                message[fk] = val = null
                update = false
            }
            postValidate(message, fd, fk, flag, message_, dfbs, msg, root, update)

            if (!cbfn || ((flags & ChangeFlags.CB_ONLY_ON_SET) && val === null))
                break
            cbfn(f, val, message, fd, root)
            break
        case FieldType.ENUM:
            // re-use update var as dirty
            if (!update) {
                val = (update = !!el.value.length) ? parseInt(el.value, 10) : null
            } else if (!(flag & dfbs)) {
                // first update, dirty state
                message_[fk] = val = parseInt(el.value, 10)
            } else if (message_[fk] === (val = parseInt(el.value, 10))) {
                // restored to original value, no longer dirty
                update = false
            }
            message[fk] = val
            postValidate(message, fd, fk, flag, message_, dfbs, msg, root, update)
            
            if (!cbfn || ((flags & ChangeFlags.CB_ONLY_ON_SET) && val === null))
                break
            cbfn(f, val, message, fd, root)
            break
        case FieldType.STRING:
            msg = validateString(el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags)
            break
        case FieldType.FLOAT:
        case FieldType.DOUBLE:
            msg = validateFloat(el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags)
            break
        default:
            switch (fd.o || 0) {
                case 1: // time
                    msg = validateTime(el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags)
                    break
                case 2: // date
                    msg = validateDate(e, el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags)
                    break
                case 4: // datetime
                    msg = validateDateTime(el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags)
                    break
                default:
                    msg = validateInt(el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags)
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
