import { FieldType, PojoSO, PojoState, ChangeFlags } from './types'
import {
    bit_unset, localToUtc,
    regexDouble, regexInt, regexTime, regexDate, regexDateTime
} from './util'
import {
    formatTime, formatDate, formatDateTime,
    isValidDateStr, isValidDateTimeStr
} from './datetime_util'

function unformat(str: string): number {
    // TODO
    return 0
}

function timeout100ms(cb) {
    window.setTimeout(cb, 100)
}

const Vue = window['Vue']
const nextTick = !Vue ? timeout100ms : Vue['nextTick']

// =====================================
// event handling

function postValidate(message: any, fd: any, fk: string, f: number, flag: number, 
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

function validateString(val: string, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(val))) {
            message[prop] = sv = val
            dirty = !update || val !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop]
        else
            el.value = v
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    if ((flags & ChangeFlags.CB_NEXT_TICK))
        nextTick(cbfn)
    else
        cbfn(f, sv, message, fd, root)
    
    return msg
}

function validateFloat(val: any, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if (!regexDouble.test(val)) {
            msg = fd.$n + ' is not a number.'
            message[prop] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn) {
            message[prop] = sv = v = parseFloat(val)
            dirty = !update || v !== message_[prop]
        } else if (!(msg = fd.vfn(v = parseFloat(val)))) {
            message[prop] = sv = v
            dirty = !update || v !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop]
        else
            el.value = v
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    if ((flags & ChangeFlags.CB_NEXT_TICK))
        nextTick(cbfn)
    else
        cbfn(f, sv, message, fd, root)
    
    return msg
}

function validateInt(val: any, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if (!regexInt.test(val)) {
            msg = fd.$n + ' is not a whole number.'
            message[prop] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn) {
            message[prop] = sv = v = parseInt(val, 10)
            dirty = !update || v !== message_[prop]
        } else if (!(msg = fd.vfn(v = parseInt(val, 10)))) {
            message[prop] = sv = v
            dirty = !update || v !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop]
        else
            el.value = v
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    if ((flags & ChangeFlags.CB_NEXT_TICK))
        nextTick(cbfn)
    else
        cbfn(f, sv, message, fd, root)
    
    return msg
}

function validateTime(val: any, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if (!regexTime.test(val) || 86399 < (v = /*numeral().*/unformat(val.length <= 5 ? (val + ':00') : val))) {
            msg = fd.$n + ' is not a valid time.'
            message[prop] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[prop] = sv = v
            dirty = !update || v !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop]
        else
            el.value = formatTime(v)
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    if ((flags & ChangeFlags.CB_NEXT_TICK))
        nextTick(cbfn)
    else
        cbfn(f, sv, message, fd, root)
    
    return msg
}

function validateDate(e, val: any, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (!e.isTrusted && (v = message[prop])) {
        // dirty
        if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            sv = v
            dirty = !update || v !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if (!regexDate.test(val) || !(v = isValidDateStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date.'
            message[prop] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[prop] = sv = v
            dirty = !update || v !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop]
        else
            el.value = formatDate(v)
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    if ((flags & ChangeFlags.CB_NEXT_TICK))
        nextTick(cbfn)
    else
        cbfn(f, sv, message, fd, root)
    
    return msg
}

function validateDateTime(val: any, message: any, fd: any, fk, f: number, flag: number, message_: PojoSO, dfbs: number, 
        prop: string, el: any, update: boolean, root: any, cbfn: any, flags: ChangeFlags): string|null {
    let msg: string|null = null,
        dirty = !!val,
        v,
        sv
    if (dirty) {
        // backup data
        if (update && (v = message[prop]) !== undefined && v !== message_[prop])
            message_[prop] = v
        
        if (!regexDateTime.test(val) || !(v = isValidDateTimeStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date and time.'
            message[prop] = undefined
        } else if ((flags & ChangeFlags.SKIP_VALIDATE) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[prop] = sv = v
            dirty = !update || v !== message_[prop]
        } else {
            message[prop] = undefined
        }
    } else if (update) {
        dirty = !!(flag & dfbs)
        // restore data
        if ((v = message[prop]) === undefined)
            message[prop] = message_[prop]
        else
            el.value = formatDateTime(v)
    } else if ((v = message[prop]) || v === undefined) {
        el.value = ''
        message[prop] = sv = null
    } else if (el.value) {
        // remove whitespace
        el.value = ''
        return msg
    }

    postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, dirty)
    
    if (!cbfn || sv === undefined || ((flags & ChangeFlags.CB_ONLY_ON_SET) && sv === null))
        return msg
    
    if ((flags & ChangeFlags.CB_NEXT_TICK))
        nextTick(cbfn)
    else
        cbfn(f, sv, message, fd, root)
    
    return msg
}

/**
 * The update arg means if existing data is modified (not creating new data).
 */
export function $change(e, message: any, field: string|number, update: boolean, root: any, cbfn?: any, flags?: number): string|null {
    let d = message['$d'],
        $ = d.$,
        fk = $ && isNaN(field as any) ? $[field] : String(field),
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
        prop = fd.$ || fk,
        el = e.target,
        msg: string|null = null,
        val
    
    switch (fd.t) {
        case FieldType.BOOL:
            // re-use update var as dirty
            if (el.nodeName !== 'SELECT') {
                message[prop] = val = el.checked
                update = !(flag & dfbs)
            } else if (update || el.value) {
                message[prop] = val = ('1' === el.value)
                update = !(flag & dfbs)
            } else {
                message[prop] = val = null
                update = false
            }
            postValidate(message, fd, fk, f, flag, message_, dfbs, msg, root, update)

            if (!cbfn || ((flags & ChangeFlags.CB_ONLY_ON_SET) && val === null))
                break
            if ((flags & ChangeFlags.CB_NEXT_TICK))
                nextTick(cbfn)
            else
                cbfn(f, val, message, fd, root)
            break
        case FieldType.ENUM:
            // re-use update var as dirty
            if (!update) {
                val = (update = !!el.value.length) ? parseInt(el.value, 10) : null
            } else if (!(flag & dfbs)) {
                // first update, dirty state
                message_[prop] = val = parseInt(el.value, 10)
            } else if (message_[prop] === (val = parseInt(el.value, 10))) {
                // restored to original value, no longer dirty
                update = false
            }
            message[prop] = val
            postValidate(message, fd, fk, f, flag, message_, message_.dfbs, msg, root, update)
            
            if (!cbfn || ((flags & ChangeFlags.CB_ONLY_ON_SET) && val === null))
                break
            if ((flags & ChangeFlags.CB_NEXT_TICK))
                nextTick(cbfn)
            else
                cbfn(f, val, message, fd, root)
            break
        case FieldType.STRING:
            msg = validateString(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags || 0)
            break
        case FieldType.FLOAT:
        case FieldType.DOUBLE:
            msg = validateFloat(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags || 0)
            break
        default:
            switch (fd.o || 0) {
                case 1: // time
                    msg = validateTime(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags || 0)
                    break
                case 2: // date
                    msg = validateDate(e, el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags || 0)
                    break
                case 4: // datetime
                    msg = validateDateTime(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags || 0)
                    break
                default:
                    msg = validateInt(el.value.trim(), message, fd, fk, f, flag, message_, dfbs, prop, el, update, root, cbfn, flags || 0)
            }
    }
    
    return msg
}
