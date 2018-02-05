var defer = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.setTimeout;
var nt = defer;
export var hasOwnProperty = Object.prototype.hasOwnProperty;
export function noop() { return null; }
export function noop_arg(ignore) { }
export function range(val, min, max, def) {
    return typeof val !== 'number' ? def : Math.max(min, Math.min(val, max));
}
export function setNextTick(fn) {
    // can only be overriden once
    if (nt !== defer && typeof fn === 'function') {
        nt = fn;
    }
}
export function nextTick(fn) {
    nt(fn);
}
/**
 * ts type hack.
 */
export function $any(p) {
    return p;
}
/**
 * Define a getter that should not be configurable.
 * Returns the value
 */
export function defg(obj, prop, val) {
    Object.defineProperty(obj, prop, {
        enumerable: true,
        configurable: false,
        get: function () { return val; },
        set: noop_arg
    });
    return val;
}
/**
 * Define a property that should not be discoverable.
 * Returns the value
 */
export function defp(obj, prop, val) {
    Object.defineProperty(obj, prop, {
        enumerable: false,
        configurable: true,
        value: val
    });
    return val;
}
/**
 * Set a property.
 * Returns the object
 */
export function setp(obj, prop, val) {
    obj[prop] = val;
    return obj;
}
/**
 * Copy a property.
 * Returns the object
 */
export function copyp(obj, prop, src) {
    obj[prop] = src[prop];
    return obj;
}
/**
 * Copy the props to the target object.
 * Returns the object
 */
export function shallowCopyTo(target, src, overwrite) {
    for (var _i = 0, _a = Object.keys(src); _i < _a.length; _i++) {
        var i = _a[_i];
        if (overwrite || undefined === target[i])
            target[i] = src[i];
    }
    return target;
}
/**
 * Nullify property.
 * Useful for lazy observable properties that bypasses typescript's strictNullChecks config.
 */
export function nullp(obj, prop) {
    obj[prop] = null;
}
export function extractMsg(data) {
    return Array.isArray(data) ? data[1]['1'] : String(data);
}
/**
 * Returns the new state.
 */
export function bit_unset(state, value) {
    return state & (~value & 2147483647);
}
/**
 * Sets the new state.
 */
/*export function $bit_unset(obj: any, name: string, value: number) {
    obj[name] &= (~value & 2147483647)
}*/
/**
 * Returns the new state.
 */
export function bit_clear_and_set(state, clear, set) {
    return set | (state & (~clear & 2147483647));
}
/**
 * Sets the new state.
 */
/*export function $bit_clear_and_set(obj: any, name: string, clear: number, set: number) {
    obj[name] = set | (obj[name] & (~clear & 2147483647))
}*/
export function to_flag(field) {
    return 1 << (field - 1);
}
export function to_int32(bytes, i) {
    return ((bytes[i] & 0xFF) << 24) | ((bytes[i + 1] & 0xFF) << 16) | ((bytes[i + 2] & 0xFF) << 8) | (bytes[i + 3] & 0xFF);
}
export function to_int32LE(bytes, i) {
    return ((bytes[i + 3] & 0xFF) << 24) | ((bytes[i + 2] & 0xFF) << 16) | ((bytes[i + 1] & 0xFF) << 8) | (bytes[i] & 0xFF);
}
var base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
function b_to_b64(bytes) {
    for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 <= bytes.length * 8)
                base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
            else
                base64.push('=');
        }
    }
    return base64.join('');
}
function b_to_b64_fn() {
    var b = window['Binary'], b2a = window.btoa, b2s;
    if (b && (b2s = b['bytesToString']) && typeof b2s === 'function' && typeof b2a === 'function') {
        return function (bytes) {
            return b2a(b2s(bytes));
        };
    }
    return b_to_b64;
}
function b64_to_b(base64) {
    // Remove non-base-64 characters
    base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');
    for (var bytes = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
        if (imod4 === 0)
            continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1)) & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2)) | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
    }
    return bytes;
}
function b64_to_b_fn() {
    var b = window['Binary'], a2b = window.atob, s2b;
    if (b && (s2b = b['stringToBytes']) && typeof s2b === 'function' && typeof a2b === 'function') {
        return function (base64) {
            return s2b(a2b(base64));
        };
    }
    return b64_to_b;
}
export var bytesToBase64 = b_to_b64_fn();
export var base64ToBytes = b64_to_b_fn();
var ZERO_KEY = 'AAAAAAAAAAAA';
export var regexKey = /^[A-Za-z0-9+/]+$/, regexInt = /^-?[0-9]+$/, regexDouble = /^-?[0-9]+(\.[0-9]+)?$/, regexTime = /^[0-2]?[0-9]\:[0-5][0-9](\:[0-5][0-9])?$/, regexDate = /^[1-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]$/, regexDateTime = /^[1-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9] [0-2]?[0-9]\:[0-5][0-9]\:[0-5][0-9]$/;
function getDateUTCOffset(date) {
    var n = date.getTimezoneOffset() * -10 / 6, r;
    if (n < 0) {
        r = (n - 10000).toString();
        return r.charAt(0) + r.substr(2);
    }
    else {
        r = (n + 10000).toString();
        return '+' + r.substr(1);
    }
}
export function getUTCOffset() {
    var date = new Date();
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    var offset = getDateUTCOffset(date);
    if (offset.indexOf('+') === 0) {
        return parseInt(offset.substring(1, offset.length - 2), 10);
    }
    else if (offset.indexOf('-') === 0) {
        return -parseInt(offset.substring(1, offset.length - 2), 10);
    }
    else {
        /*
            * IE in some cases will return this value starting with undefined.  That means
            * negative.
            */
        return -parseInt(offset.substring(10, offset.length - 2), 10);
    }
}
/*export function now(): number {
    return Date.now()
}*/
export var MILLIS_PER_DAY = 1000 * 60 * 60 * 24, MAX_TIME_IN_MILLIS_PER_DAY = (1000 * 60 * 60 * 24) - 1, MILLIS_PER_HOUR = 1000 * 60 * 60, UTC_OFFSET = getUTCOffset(), HOST_RAW_OFFSET = UTC_OFFSET * 60 * 60 * 1000, HOST_RAW_OFFSET_SECONDS = UTC_OFFSET * 60 * 60, SECONDS_PER_HOUR = 60 * 60;
export function hour(h) {
    return h * SECONDS_PER_HOUR;
}
export function minute(m) {
    return m * 60;
}
export var MAX_TIME = hour(23) + minute(59) + 59;
export function localToUtc(ts) {
    return ts + HOST_RAW_OFFSET;
}
export function localToUtcSeconds(s) {
    return s + HOST_RAW_OFFSET_SECONDS;
}
export function utcToLocal(ts) {
    return ts - HOST_RAW_OFFSET;
}
export function utcToLocalSeconds(s) {
    return s - HOST_RAW_OFFSET_SECONDS;
}
export function extractTime(ts, date) {
    return Math.floor((localToUtc(ts) - date) / 1000);
}
export function isExpired(value, duration) {
    return Date.now() > (value + duration);
}
export function isExpired24Hrs(value) {
    return isExpired(value, MILLIS_PER_DAY);
}
export function startOfDayMS(ts) {
    ts += HOST_RAW_OFFSET;
    return ts - (ts % MILLIS_PER_DAY);
}
export function isSameDay(ts1, ts2) {
    return startOfDayMS(ts1) === startOfDayMS(ts2);
}
export function addDaysTo(ts, days) {
    return ts + (MILLIS_PER_DAY * days);
}
export function startOfTodayMS() {
    return startOfDayMS(Date.now());
}
/*export function startOfUTCTodayMS(): number {
    return startOfDayMS(Date.now())//startOfDayMS(localDateToUTC(new Date()))
}*/
export function utcNow() {
    return Date.now() + HOST_RAW_OFFSET;
}
// =====================================
export function getKind(key) {
    var bytes = base64ToBytes(key);
    return bytes[bytes.length - 9] & 0xFF;
}
export function isZeroKey(key) {
    return ZERO_KEY === key;
}
export function isKey(key, kind) {
    return regexKey.test(key) && (!kind || kind === getKind(key));
}
function bytesTo6ByteTS(bytes, o) {
    var left = (((bytes[o++] & 0xFF) << 24) | ((bytes[o++] & 0xFF) << 16)), right = (((bytes[o++] & 0xFF) << 24) | ((bytes[o++] & 0xFF) << 16) | ((bytes[o++] & 0xFF) << 8) | (bytes[o] & 0xFF));
    left = left >>> 0;
    right = right >>> 0;
    // 24 is the max left shift, hence this slow operation.
    for (var i = 0; i < 16; i++)
        left = left * 2;
    return left + right;
}
export function getTs(key) {
    var bytes = base64ToBytes(key);
    switch (bytes.length) {
        case 9: return bytesTo6ByteTS(bytes, 1);
        case 18: return bytesTo6ByteTS(bytes, 10);
        default: return 0;
    }
}
export function incrementKey(key) {
    var decoded = base64ToBytes(key);
    decoded[decoded.length - 1] |= 0x02;
    return bytesToBase64(decoded);
}
export function decrementKey(key) {
    var decoded = base64ToBytes(key);
    decoded[decoded.length - 1] &= 0xFE;
    return bytesToBase64(decoded);
}
// from gwt JsonUtils
var out = [
    "\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005",
    "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B",
    "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011",
    "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017",
    "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D",
    "\\u001E", "\\u001F"
];
out[34] = '\\"';
out[92] = '\\\\';
out[0xad] = '\\u00ad'; // Soft hyphen
out[0x600] = '\\u0600'; // Arabic number sign
out[0x601] = '\\u0601'; // Arabic sign sanah
out[0x602] = '\\u0602'; // Arabic footnote marker
out[0x603] = '\\u0603'; // Arabic sign safha
out[0x6dd] = '\\u06dd'; // Arabic and of ayah
out[0x70f] = '\\u070f'; // Syriac abbreviation mark
out[0x17b4] = '\\u17b4'; // Khmer vowel inherent aq
out[0x17b5] = '\\u17b5'; // Khmer vowel inherent aa
out[0x200b] = '\\u200b'; // Zero width space
out[0x200c] = '\\u200c'; // Zero width non-joiner
out[0x200d] = '\\u200d'; // Zero width joiner
out[0x200e] = '\\u200e'; // Left-to-right mark
out[0x200f] = '\\u200f'; // Right-to-left mark
out[0x2028] = '\\u2028'; // Line separator
out[0x2029] = '\\u2029'; // Paragraph separator
out[0x202a] = '\\u202a'; // Left-to-right embedding
out[0x202b] = '\\u202b'; // Right-to-left embedding
out[0x202c] = '\\u202c'; // Pop directional formatting
out[0x202d] = '\\u202d'; // Left-to-right override
out[0x202e] = '\\u202e'; // Right-to-left override
out[0x2060] = '\\u2060'; // Word joiner
out[0x2061] = '\\u2061'; // Function application
out[0x2062] = '\\u2062'; // Invisible times
out[0x2063] = '\\u2063'; // Invisible separator
out[0x2064] = '\\u2064'; // Invisible plus
out[0x206a] = '\\u206a'; // Inhibit symmetric swapping
out[0x206b] = '\\u206b'; // Activate symmetric swapping
out[0x206c] = '\\u206c'; // Inherent Arabic form shaping
out[0x206d] = '\\u206d'; // Activate Arabic form shaping
out[0x206e] = '\\u206e'; // National digit shapes
out[0x206f] = '\\u206f'; // Nominal digit shapes
out[0xfeff] = '\\ufeff'; // Zero width no-break space
out[0xfff9] = '\\ufff9'; // Intralinear annotation anchor
out[0xfffa] = '\\ufffa'; // Intralinear annotation separator
out[0xfffb] = '\\ufffb'; // Intralinear annotation terminator
var regexEscape = /[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g;
function escapeChar(c) {
    return out[c.charCodeAt(0)] || c;
}
export function $escape(str) {
    return str.replace(regexEscape, escapeChar);
}
/**
 * Returns a double-quoted string for json.
 */
export function escapeValue(v) {
    return '"' + $escape(v) + '"';
}
//# sourceMappingURL=util.js.map