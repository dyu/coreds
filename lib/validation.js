import { hasOwnProperty, isKey, MAX_TIME, MILLIS_PER_DAY, startOfTodayMS } from './util';
var regexEmail = /^[+a-zA-Z0-9_.-]+@([a-zA-Z0-9-]+[.])+[a-zA-Z0-9]{2,6}$/;
function getMultiplier(unit) {
    switch (unit) {
        case 1: // day
            return MILLIS_PER_DAY;
        case 2: // hour
            return 1000 * 60 * 60;
        case 3: // minute
            return 1000 * 60;
        case 4: // second
            return 1000;
        default: // millisecond
            return 1;
    }
}
export function isAsciiOnly(value) {
    for (var i = 0, len = value.length; i < len; i++) {
        if (value.charCodeAt(i) > 127)
            return false;
    }
    return true;
}
export function isValidAsciiOnly(value) {
    if (!Array.isArray(value))
        return isAsciiOnly(value);
    for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
        var s = value_1[_i];
        if (!isAsciiOnly(s))
            return false;
    }
    return true;
}
export function isAsciiPrintable(value) {
    for (var i = 0, len = value.length, c = void 0; i < len; i++) {
        c = value.charCodeAt(i);
        if (c < 32 || c > 127)
            return false;
    }
    return true;
}
export function isValidAsciiPrintable(value) {
    if (!Array.isArray(value))
        return isAsciiPrintable(value);
    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
        var s = value_2[_i];
        if (!isAsciiPrintable(s))
            return false;
    }
    return true;
}
export function isAsciiSafeHtml(value) {
    for (var i = 0, len = value.length, c = void 0; i < len; i++) {
        c = value.charCodeAt(i);
        //                             &           <           >           \ 
        if (c < 32 || c > 127 || c === 38 || c === 60 || c === 62 || c === 92)
            return false;
    }
    return true;
}
export function isValidAsciiSafeHtml(value) {
    if (!Array.isArray(value))
        return isAsciiSafeHtml(value);
    for (var _i = 0, value_3 = value; _i < value_3.length; _i++) {
        var s = value_3[_i];
        if (!isAsciiSafeHtml(s))
            return false;
    }
    return true;
}
export function isValidId(id) {
    return id > 0;
}
export function isValidKey(key, kind) {
    if (!Array.isArray(key))
        return isKey(key, kind);
    for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
        var k = key_1[_i];
        if (!isKey(k, kind))
            return false;
    }
    return true;
}
export function isValidKeyUnique(keys, kind, unique) {
    if (!keys || !keys.length)
        return true;
    var map = {};
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var k = keys_1[_i];
        if (!isKey(k, kind) || hasOwnProperty.call(map, name))
            return false;
        map[k] = true;
    }
    return true;
}
/** placeholder */
export function isValidUnique(list, kindOrUnique, unique) {
    return true;
}
export function isValidMin(value, min) {
    return value >= min;
}
export function isValidMax(value, max) {
    return value <= max;
}
export function isValidRange(value, min, max) {
    return isValidMin(value, min) && isValidMax(value, max);
}
export function isValidTime(value) {
    return isValidRange(value, 0, MAX_TIME);
}
export function isValidDate(value) {
    return 0 === value % MILLIS_PER_DAY;
}
export function isValidEmail(value) {
    return regexEmail.test(value);
}
export function isValidFutureTS(value, unit, min, max) {
    if (!unit)
        return value > Date.now();
    var today = Date.now(), multiplier = getMultiplier(unit);
    if (!max)
        return !min ? value > today : value >= (today + (multiplier * min));
    return value >= (today + (multiplier * (min || 0))) && value <= (today + (multiplier * max));
}
export function isValidFutureOrToday(value, min, max) {
    if (0 !== value % MILLIS_PER_DAY)
        return false;
    var today = startOfTodayMS();
    if (value === today)
        return true;
    // no limit
    if (!max)
        return !min ? value > today : value >= (today + (MILLIS_PER_DAY * min));
    return value >= (today + (MILLIS_PER_DAY * (min || 0))) && value <= (today + (MILLIS_PER_DAY * max));
}
export function isValidFuture(value, min, max) {
    if (0 !== value % MILLIS_PER_DAY)
        return false;
    var today = startOfTodayMS();
    // no limit
    if (!max)
        return !min ? value > today : value >= (today + (MILLIS_PER_DAY * min));
    return value >= (today + (MILLIS_PER_DAY * (min || 0))) && value <= (today + (MILLIS_PER_DAY * max));
}
export function isValidLength(value, min, max) {
    var length = value.length;
    return length >= min && length <= max;
}
export function isValidGT(value, param) {
    return value > param;
}
export function isValidNotBlank(value) {
    return 0 !== value.trim().length;
}
export function isValidNotEmpty(value) {
    return 0 !== (Array.isArray(value) ? value.length : value.trim().length);
}
export function isValidNotNull(value) {
    return !!value;
}
export function isValidNull(value) {
    return !value;
}
export function isValidNotNullNotEmpty(value) {
    return value && value.length > 0;
}
export function isValidPastTS(value, unit, min, max) {
    if (!unit)
        return value < Date.now();
    var today = Date.now(), multiplier = getMultiplier(unit);
    // no limit
    if (!max)
        return !min ? value < today : value <= (today - (multiplier * min));
    return value <= (today - (multiplier * (min || 0))) && value >= (today - (multiplier * max));
}
export function isValidPastOrToday(value, min, max) {
    if (0 !== value % MILLIS_PER_DAY)
        return false;
    var today = startOfTodayMS();
    if (value === today)
        return true;
    // no limit
    if (!max)
        return !min ? value < today : value <= (today - (MILLIS_PER_DAY * min));
    return value <= (today - (MILLIS_PER_DAY * (min || 0))) && value >= (today - (MILLIS_PER_DAY * max));
}
export function isValidPast(value, min, max) {
    if (0 !== value % MILLIS_PER_DAY)
        return false;
    var today = startOfTodayMS();
    // no limit
    if (!max)
        return !min ? value < today : value <= (today - (MILLIS_PER_DAY * min));
    return value <= (today - (MILLIS_PER_DAY * (min || 0))) && value >= (today - (MILLIS_PER_DAY * max));
}
export function isValidPattern(value, pattern) {
    return pattern.test(value);
}
// TODO
export function isValidSafeHtml(value) {
    return true;
}
// TODO
export function isValidScriptAssert(value) {
    return true;
}
export function isValidSize(value, min, max) {
    var length = value.length;
    return length >= min && length <= max;
}
//# sourceMappingURL=validation.js.map