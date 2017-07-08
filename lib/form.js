import { setp, defp, bit_unset, localToUtc, bit_clear_and_set, extractMsg, regexDouble, regexInt, regexTime, regexDate, regexDateTime } from './util';
import { formatTime, formatDate, formatDateTime, isValidDateStr, isValidDateTimeStr } from './datetime_util';
import { diffTo, diffFieldTo, mergeOriginalFrom } from './diff';
import * as numeral from 'numeral';
var hasOwnProperty = Object.prototype.hasOwnProperty;
function addVpropsTo(so, descriptor, owner, withVal) {
    if (descriptor.$fdf) {
        for (var _i = 0, _a = descriptor.$fdf; _i < _a.length; _i++) {
            var k = _a[_i];
            if (!withVal || owner[k] === '') {
                so[k] = null;
                owner[k] = null;
            }
            else if (hasOwnProperty.call(owner, k)) {
                so[k] = null;
            }
        }
    }
    if (descriptor.$fdikf) {
        for (var _b = 0, _c = descriptor.$fdikf; _b < _c.length; _b++) {
            var k = _c[_b];
            if (!withVal || hasOwnProperty.call(owner, k)) {
                so[k] = null;
                owner[k] = null;
            }
        }
    }
    return so;
}
export function initObservable(target, descriptor, withVal) {
    target['_'] = addVpropsTo({
        state: 0,
        msg: '',
        dfbs: 0,
        vfbs: 0,
        rfbs: 0
    }, descriptor, target, withVal);
    defp(target, '$d', descriptor);
    if (!descriptor.$fmf)
        return target;
    for (var _i = 0, _a = descriptor.$fmf; _i < _a.length; _i++) {
        var fk = _a[_i];
        var fd = descriptor[fk];
        initObservable(target[fk], fd.d_fn(), withVal);
    }
    return target;
}
// =====================================
// form ops
export function verify_fields(message, descriptor, update, root) {
    var message_ = message._, root_, rfbs, fmf, fd;
    if (root) {
        root_ = root._;
    }
    else {
        root = message;
        root_ = message_;
    }
    if (message_.vfbs) {
        if (root_.msg) {
            root_.state = bit_unset(root_.state, 7 /* MASK_STATUS */);
            root_.msg = '';
        }
        return false;
    }
    if ((fmf = descriptor.$fmf)) {
        for (var _i = 0, fmf_1 = fmf; _i < fmf_1.length; _i++) {
            var fk = fmf_1[_i];
            fd = descriptor[fk];
            if (!verify_fields(message[fd.$ || fk], fd.d_fn(), update, root))
                return false;
        }
    }
    if (update || !(rfbs = descriptor.$rfbs) || rfbs === message_.rfbs)
        return true;
    root_.state = bit_clear_and_set(root_.state, 7 /* MASK_STATUS */, 2 /* ERROR */);
    root_.msg = 'All required fields must be provided.';
    return false;
}
export function clear_fields(message, descriptor) {
    var message_ = message['_'], fmf, fd;
    message_.dfbs = 0;
    message_.rfbs = 0;
    for (var _i = 0, _a = descriptor.$fdf; _i < _a.length; _i++) {
        var fk = _a[_i];
        fd = descriptor[fk];
        message[fd.$ || fk] = null;
    }
    if (!(fmf = descriptor.$fmf))
        return;
    for (var _b = 0, fmf_2 = fmf; _b < fmf_2.length; _b++) {
        var fk = fmf_2[_b];
        fd = descriptor[fk];
        clear_fields(message[fd.$ || fk], fd.d_fn());
    }
}
// =====================================
// create
export function $success(pojo, msg) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 1 /* SUCCESS */);
    pojo_.msg = msg || 'Successful.';
    clear_fields(pojo, pojo['$d']);
}
export function $failed(pojo, errmsg) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 2 /* ERROR */);
    pojo_.msg = !errmsg ? 'Error.' : extractMsg(errmsg);
}
export function $prepare(pojo) {
    var pojo_ = pojo['_'], state = pojo_.state;
    if ((state & 8 /* LOADING */) || !verify_fields(pojo, pojo['$d']))
        return false;
    pojo_.state = bit_clear_and_set(state, 7 /* MASK_STATUS */, 8 /* LOADING */);
    pojo_.msg = '';
    return true;
}
export function $clear(pojo) {
    var pojo_ = pojo['_'];
    if (pojo_.msg)
        pojo_.msg = '';
    if (!pojo_.dfbs)
        return pojo_;
    if (pojo_.vfbs)
        pojo_.vfbs = 0;
    clear_fields(pojo, pojo['$d']);
    return pojo_;
}
export function $update_req(key, mc, id) {
    return {
        '1': key,
        '2': mc,
        '3': id
    };
}
export function $update_success(pojo, pager, original, selected) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 1 /* SUCCESS */);
    pojo_.msg = 'Successful.';
    pojo_.dfbs = 0;
    mergeOriginalFrom(pojo, pojo['$d'], original, selected);
    pager.state ^= 8 /* LOADING */;
}
export function $update_failed(pojo, pager, errmsg) {
    var pojo_ = pojo['_'];
    pojo_.state = bit_clear_and_set(pojo_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 2 /* ERROR */);
    pojo_.msg = !errmsg ? 'Error.' : extractMsg(errmsg);
    pager.state ^= 8 /* LOADING */;
}
export function $update(pojo, pager, original, changes) {
    var pojo_ = pojo['_'], state = pojo_.state, $d = pojo['$d'];
    if ((pager.state & 8 /* LOADING */) || (state & 8 /* LOADING */) || !verify_fields(pojo, $d, true))
        return undefined;
    var mc, diffCount = pojo_.dfbs && diffTo(mc = {}, $d, original, pojo);
    if (!diffCount && !changes) {
        if (!pojo_.msg) {
            pojo_.state = bit_clear_and_set(state, 7 /* MASK_STATUS */, 4 /* WARNING */);
            pojo_.msg = 'No changes were made.';
        }
        return undefined;
    }
    pojo_.state = bit_clear_and_set(state, 7 /* MASK_STATUS */, 8 /* LOADING */);
    pojo_.msg = '';
    pager.state |= 8 /* LOADING */;
    return diffCount ? mc : undefined;
}
// =====================================
// toggle
export function $toggle_success(pager, pojo_update, skipMerge) {
    var selected = pager.pojo, selected_ = selected['_'], store = pager['store'];
    pager.state ^= 8 /* LOADING */;
    if (!skipMerge)
        mergeOriginalFrom(selected, selected['$d'], store.getOriginal(selected), pojo_update);
    selected_.state = bit_clear_and_set(selected_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 1 /* SUCCESS */);
    selected_.msg = 'Update Successful.';
    return true;
}
export function $toggle_failed(pager, errmsg) {
    var selected = pager.pojo, selected_ = selected['_'];
    pager.state ^= 8 /* LOADING */;
    selected_.state = bit_clear_and_set(selected_.state, 7 /* MASK_STATUS */ | 8 /* LOADING */, 2 /* ERROR */);
    selected_.msg = !errmsg ? 'Update failed.' : extractMsg(errmsg);
}
export function $toggle(pager, field, pojo, changed) {
    var selected = pojo || pager.pojo, selected_ = selected['_'];
    if ((pager.state & 8 /* LOADING */) || (selected_.state & 8 /* LOADING */))
        return null;
    var d = selected['$d'], fd = d[d.$[field]], store = pager['store'], original = store.getOriginal(selected), mc = {};
    if (pojo && pojo !== pager.pojo)
        store.select(pojo, 1 /* CLICKED */);
    if (!changed)
        selected[field] = !selected[field];
    diffFieldTo(mc, d, original, selected, fd._);
    pager.state |= 8 /* LOADING */;
    selected_.state |= 8 /* LOADING */;
    if (selected_.msg)
        selected_.msg = '';
    return mc;
}
export function $toggle_prepare(pager) {
    var selected = pager.pojo, selected_ = selected['_'];
    if ((pager.state & 8 /* LOADING */) || (selected_.state & 8 /* LOADING */))
        return false;
    pager.state |= 8 /* LOADING */;
    selected_.state |= 8 /* LOADING */;
    if (selected_.msg)
        selected_.msg = '';
    return true;
}
// =====================================
// event handling
function postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty) {
    var root_ = root._, state = message_.state, vfbs = message_.vfbs, rfbs = message_.rfbs, required = fd.m === 2;
    message_[fk] = msg;
    if (!(state & 16 /* UPDATE */))
        message_.state = state | 16 /* UPDATE */;
    if (dirty) {
        if (!(dfbs & flag))
            message_.dfbs |= flag;
    }
    else if (dfbs & flag) {
        message_.dfbs ^= flag;
    }
    if (msg) {
        if (!(vfbs & flag))
            message_.vfbs |= flag;
        if (required && (rfbs & flag))
            message_.rfbs ^= flag;
    }
    else {
        if (vfbs & flag)
            message_.vfbs ^= flag;
        if (required && !(rfbs & flag))
            message_.rfbs |= flag;
    }
    if (root_.msg) {
        root_.state = bit_unset(root_.state, 7 /* MASK_STATUS */);
        root_.msg = '';
    }
}
function validateString(val, message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v;
        if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn || !(msg = fd.vfn(val))) {
            message[fk] = sv = val;
            dirty = !update || val !== message_[fk];
        }
        else {
            message[fk] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk];
        else
            el.value = v;
    }
    else if ((v = message[fk]) || v === undefined) {
        el.value = '';
        message[fk] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    cbfn(fk, sv, message, fd, root);
    return msg;
}
function validateFloat(val, message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v;
        if (!regexDouble.test(val)) {
            msg = fd.$n + ' is not a number.';
            message[fk] = undefined;
        }
        else if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn) {
            message[fk] = sv = v = parseFloat(val);
            dirty = !update || v !== message_[fk];
        }
        else if (!(msg = fd.vfn(v = parseFloat(val)))) {
            message[fk] = sv = v;
            dirty = !update || v !== message_[fk];
        }
        else {
            message[fk] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk];
        else
            el.value = v;
    }
    else if ((v = message[fk]) || v === undefined) {
        el.value = '';
        message[fk] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    cbfn(fk, sv, message, fd, root);
    return msg;
}
function validateInt(val, message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v;
        if (!regexInt.test(val)) {
            msg = fd.$n + ' is not a whole number.';
            message[fk] = undefined;
        }
        else if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn) {
            message[fk] = sv = v = parseInt(val, 10);
            dirty = !update || v !== message_[fk];
        }
        else if (!(msg = fd.vfn(v = parseInt(val, 10)))) {
            message[fk] = sv = v;
            dirty = !update || v !== message_[fk];
        }
        else {
            message[fk] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk];
        else
            el.value = v;
    }
    else if ((v = message[fk]) || v === undefined) {
        el.value = '';
        message[fk] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    cbfn(fk, sv, message, fd, root);
    return msg;
}
function validateTime(val, message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v;
        if (!regexTime.test(val) || 86399 < (v = numeral().unformat(val.length <= 5 ? (val + ':00') : val))) {
            msg = fd.$n + ' is not a valid time.';
            message[fk] = undefined;
        }
        else if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[fk] = sv = v;
            dirty = !update || v !== message_[fk];
        }
        else {
            message[fk] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk];
        else
            el.value = formatTime(v);
    }
    else if ((v = message[fk]) || v === undefined) {
        el.value = '';
        message[fk] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    cbfn(fk, sv, message, fd, root);
    return msg;
}
function validateDate(e, val, message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (!e.isTrusted && (v = message[fk])) {
        // dirty
        if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn || !(msg = fd.vfn(v))) {
            sv = v;
            dirty = !update || v !== message_[fk];
        }
        else {
            message[fk] = undefined;
        }
    }
    else if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v;
        if (!regexDate.test(val) || !(v = isValidDateStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date.';
            message[fk] = undefined;
        }
        else if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[fk] = sv = v;
            dirty = !update || v !== message_[fk];
        }
        else {
            message[fk] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk];
        else
            el.value = formatDate(v);
    }
    else if ((v = message[fk]) || v === undefined) {
        el.value = '';
        message[fk] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    cbfn(fk, sv, message, fd, root);
    return msg;
}
function validateDateTime(val, message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags) {
    var msg = null, dirty = !!val, v, sv;
    if (dirty) {
        // backup data
        if (update && (v = message[fk]) !== undefined && v !== message_[fk])
            message_[fk] = v;
        if (!regexDateTime.test(val) || !(v = isValidDateTimeStr(val)) || !(v = localToUtc(v))) {
            msg = fd.$n + ' is not a valid date and time.';
            message[fk] = undefined;
        }
        else if ((flags & 1 /* SKIP_VALIDATE */) || !fd.vfn || !(msg = fd.vfn(v))) {
            message[fk] = sv = v;
            dirty = !update || v !== message_[fk];
        }
        else {
            message[fk] = undefined;
        }
    }
    else if (update) {
        dirty = !!(flag & dfbs);
        // restore data
        if ((v = message[fk]) === undefined)
            message[fk] = message_[fk];
        else
            el.value = formatDateTime(v);
    }
    else if ((v = message[fk]) || v === undefined) {
        el.value = '';
        message[fk] = sv = null;
    }
    else if (el.value) {
        // remove whitespace
        el.value = '';
        return msg;
    }
    postValidate(message, fd, fk, flag, message_, dfbs, msg, root, dirty);
    if (!cbfn || sv === undefined || ((flags & 4 /* CB_ONLY_ON_SET */) && sv === null))
        return msg;
    cbfn(fk, sv, message, fd, root);
    return msg;
}
/**
 * The update arg means if existing data is modified (not creating new data).
 */
export function $change(e, fk, message, update, root, flags, cbfn) {
    var d = message['$d'], fd = d[fk];
    if (!fd || fd.t === 2 /* BYTES */)
        return null;
    if (!root)
        root = message;
    if (flags === undefined)
        flags = 0;
    var message_ = message['_'], dfbs = message_.dfbs, f = fd._, flag = 1 << (f - 1), el = e.target, msg = null, val;
    switch (fd.t) {
        case 1 /* BOOL */:
            // re-use update var as dirty
            if (el.nodeName !== 'SELECT') {
                message[fk] = val = el.checked;
                update = !(flag & dfbs);
            }
            else if (update || el.value) {
                message[fk] = val = ('1' === el.value);
                update = !(flag & dfbs);
            }
            else {
                message[fk] = val = null;
                update = false;
            }
            postValidate(message, fd, fk, flag, message_, dfbs, msg, root, update);
            if (!cbfn || ((flags & 4 /* CB_ONLY_ON_SET */) && val === null))
                break;
            cbfn(fk, val, message, fd, root);
            break;
        case 16 /* ENUM */:
            // re-use update var as dirty
            if (!update) {
                val = (update = !!el.value.length) ? parseInt(el.value, 10) : null;
            }
            else if (!(flag & dfbs)) {
                // first update, dirty state
                message_[fk] = val = parseInt(el.value, 10);
            }
            else if (message_[fk] === (val = parseInt(el.value, 10))) {
                // restored to original value, no longer dirty
                update = false;
            }
            message[fk] = val;
            postValidate(message, fd, fk, flag, message_, dfbs, msg, root, update);
            if (!cbfn || ((flags & 4 /* CB_ONLY_ON_SET */) && val === null))
                break;
            cbfn(fk, val, message, fd, root);
            break;
        case 3 /* STRING */:
            msg = validateString(el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags);
            break;
        case 4 /* FLOAT */:
        case 5 /* DOUBLE */:
            msg = validateFloat(el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags);
            break;
        default:
            switch (fd.o || 0) {
                case 1:// time
                    msg = validateTime(el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags);
                    break;
                case 2:// date
                    msg = validateDate(e, el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags);
                    break;
                case 4:// datetime
                    msg = validateDateTime(el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags);
                    break;
                default:
                    msg = validateInt(el.value.trim(), message, fd, fk, flag, message_, dfbs, el, update, root, cbfn, flags);
            }
    }
    return msg;
}
var Form = (function () {
    function Form(vm, $d, update, root_key, flags) {
        this.vm = vm;
        this.$d = $d;
        this.update = update;
        this.root_key = root_key;
        this.flags = flags || 0;
    }
    Form.prototype.change = function (e, field, message, flags, cbfn) {
        var root = this.root || (this.root = this.vm.get(this.root_key)), f = flags || this.flags, m = message || root, ret = $change(e, field, m, this.update, root, f, cbfn);
        if ((f & 2 /* VM_SET */)) {
            this.vm.set(!this.root_key ? {} : setp({}, this.root_key, root));
        }
        return ret;
    };
    return Form;
}());
export { Form };
//# sourceMappingURL=form.js.map