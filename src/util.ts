export const hasOwnProperty = Object.prototype.hasOwnProperty
export function noop() { return null }

/**
 * Define a property that should not be discoverable.
 * Returns the value
 */
export function defp<T>(obj: any, prop: string, val: T): T {
    Object.defineProperty(obj, prop, {
        enumerable: false,
        configurable: true,
        value: val
    })

    return val
}
/**
 * Nullify property.
 * Also useful for lazy observable properties that bypasses typescript's strictNullChecks config.
 */
export function nullp(obj: any, prop: string) {
    obj[prop] = null
}

export function extractMsg(data: any): string {
    return Array.isArray(data) ? data[1]['1'] : String(data)
}

/**
 * Returns the new state.
 */
export function bit_unset(state: number, value: number) {
    return state & (~value & 2147483647)
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
export function bit_clear_and_set(state: number, clear: number, set: number) {
    return set | (state & (~clear & 2147483647))
}

/**
 * Sets the new state.
 */
/*export function $bit_clear_and_set(obj: any, name: string, clear: number, set: number) {
    obj[name] = set | (obj[name] & (~clear & 2147483647))
}*/

export function to_flag(field: number): number {
    return 1 << (field - 1)
}

export function to_int32(bytes: any, i: number): number {
    return ((bytes[i]&0xFF) << 24) | ((bytes[i+1]&0xFF) << 16) | ((bytes[i+2]&0xFF) << 8) | (bytes[i+3]&0xFF)
}

export function to_int32LE(bytes: any, i: number): number {
    return ((bytes[i+3]&0xFF) << 24) | ((bytes[i+2]&0xFF) << 16) | ((bytes[i+1]&0xFF) << 8) | (bytes[i]&0xFF)
}

const base64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

function b_to_b64(bytes: any): string {
    for (var base64: string[] = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]
        for (var j = 0; j < 4; j++) {
            if (i * 8 + j * 6 <= bytes.length * 8)
                base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F))
            else
                base64.push('=')
        }
    }

    return base64.join('')
}

function b_to_b64_fn(): (bytes: any) => string {
    var b = window['Binary'], b2a = window.btoa, b2s
    if (b && (b2s = b['bytesToString']) && typeof b2s === 'function' && typeof b2a === 'function') {
        return function(bytes: any): string {
            return b2a(b2s(bytes))
        }
    }

    return b_to_b64
}

function b64_to_b(base64: string): any {
    // Remove non-base-64 characters
    base64 = base64.replace(/[^A-Z0-9+\/]/ig, '')

    for (var bytes: number[] = [], i = 0, imod4 = 0; i < base64.length; imod4 = ++i % 4) {
        if (imod4 === 0)
            continue
        
        bytes.push(((base64map.indexOf(base64.charAt(i - 1)) & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2)) | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)))
    }

    return bytes
}

function b64_to_b_fn(): (base64: string) => any {
    var b = window['Binary'], a2b = window.atob, s2b
    if (b && (s2b = b['stringToBytes']) && typeof s2b === 'function' && typeof a2b === 'function') {
        return function(base64: string): any {
            return s2b(a2b(base64))
        }
    }

    return b64_to_b
}

export const bytesToBase64 = b_to_b64_fn()
export const base64ToBytes = b64_to_b_fn()

const ZERO_KEY = 'AAAAAAAAAAAA'

export const
    regexKey = /^[A-Za-z0-9+/]+$/,
    regexInt = /^-?[0-9]+$/,
    regexDouble = /^-?[0-9]+(\.[0-9]+)?$/,
    regexTime = /^[0-2]?[0-9]\:[0-5][0-9](\:[0-5][0-9])?$/,
    regexDate = /^[1-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9]$/,
    regexDateTime = /^[1-9][0-9][0-9][0-9]\/[0-9][0-9]\/[0-9][0-9] [0-2]?[0-9]\:[0-5][0-9]\:[0-5][0-9]$/

function getDateUTCOffset(date: Date): string {
    var n = date.getTimezoneOffset() * -10 / 6,
        r
    if (n < 0) { 
        r = (n - 10000).toString()
        return r.charAt(0) + r.substr(2)
    } else { 
        r = (n + 10000).toString()
        return '+' + r.substr(1)
    }
}

export function getUTCOffset(): number {
    var date = new Date()
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    
    var offset = getDateUTCOffset(date)
    if (offset.indexOf('+') === 0) {
        return parseInt(offset.substring(1, offset.length - 2), 10)
    } else if (offset.indexOf('-') === 0) {
        return -parseInt(offset.substring(1, offset.length - 2), 10)
    } else {
        /*
            * IE in some cases will return this value starting with undefined.  That means
            * negative.
            */
        return -parseInt(offset.substring(10, offset.length - 2), 10)
    }
}

/*export function now(): number {
    return Date.now()
}*/

export const
    MILLIS_PER_DAY = 1000 * 60 * 60 * 24,
    MAX_TIME_IN_MILLIS_PER_DAY = (1000 * 60 * 60 * 24) - 1,
    MILLIS_PER_HOUR = 1000 * 60 * 60,

    UTC_OFFSET = getUTCOffset(),
    HOST_RAW_OFFSET = UTC_OFFSET * 60 * 60 * 1000,
    HOST_RAW_OFFSET_SECONDS = UTC_OFFSET * 60 * 60,
    SECONDS_PER_HOUR = 60 * 60

export function hour(h: number): number {
    return h * SECONDS_PER_HOUR
}

export function minute(m: number): number {
    return m * 60
}

export const MAX_TIME = hour(23) + minute(59) + 59

export function localToUtc(ts: number): number {
    return ts + HOST_RAW_OFFSET
}
export function localToUtcSeconds(s: number): number {
    return s + HOST_RAW_OFFSET_SECONDS
}
export function utcToLocal(ts: number): number {
    return ts - HOST_RAW_OFFSET
}
export function utcToLocalSeconds(s: number): number {
    return s - HOST_RAW_OFFSET_SECONDS
}

export function extractTime(ts: number, date: number) {
    return Math.floor((localToUtc(ts) - date) / 1000)
}

export function isExpired(value: number, duration: number): boolean {
    return Date.now() > (value + duration)
}

export function isExpired24Hrs(value: number): boolean {
    return isExpired(value, MILLIS_PER_DAY)
}

export function startOfDayMS(ts: number): number {
    ts += HOST_RAW_OFFSET
    return ts - (ts % MILLIS_PER_DAY)
}

export function isSameDay(ts1: number, ts2: number): boolean {
    return startOfDayMS(ts1) === startOfDayMS(ts2)
}

export function addDaysTo(ts: number, days: number): number {
    return ts + (MILLIS_PER_DAY * days)
}

export function startOfTodayMS(): number {
    return startOfDayMS(Date.now())
}

/*export function startOfUTCTodayMS(): number {
    return startOfDayMS(Date.now())//startOfDayMS(localDateToUTC(new Date()))
}*/

export function utcNow(): number {
    return Date.now() + HOST_RAW_OFFSET
}

// =====================================

export function getKind(key: string): number {
    let bytes = base64ToBytes(key)
    return bytes[bytes.length - 9] & 0xFF
}

export function isZeroKey(key: string): boolean {
    return ZERO_KEY === key
}

export function isKey(key: string, kind?: number) {
    return regexKey.test(key) && (!kind || kind === getKind(key))
}

function bytesTo6ByteTS(bytes: number[], o: number) {
    var left = (((bytes[o++] & 0xFF) << 24) | ((bytes[o++] & 0xFF) << 16)),
        right = (((bytes[o++] & 0xFF) << 24) | ((bytes[o++] & 0xFF) << 16) | ((bytes[o++] & 0xFF) << 8) | (bytes[o] & 0xFF));

    left = left >>> 0;
    right = right >>> 0;

    // 24 is the max left shift, hence this slow operation.
    for (var i = 0; i < 16; i++)
        left = left * 2;
    
    return left + right;
}

export function getTs(key: string): number {
    let bytes = base64ToBytes(key)
    switch(bytes.length) {
        case 9: return bytesTo6ByteTS(bytes, 1);
        case 18: return bytesTo6ByteTS(bytes, 10);
        default: return 0;
    }
}

export function incrementKey(key: string): string {
    let decoded = base64ToBytes(key)
    decoded[decoded.length-1] |= 0x02
    return bytesToBase64(decoded)
}

export function decrementKey(key: string): string {
    let decoded = base64ToBytes(key)
    decoded[decoded.length-1] &= 0xFE
    return bytesToBase64(decoded)
}

// from gwt JsonUtils
const out = [
    "\\u0000", "\\u0001", "\\u0002", "\\u0003", "\\u0004", "\\u0005",
    "\\u0006", "\\u0007", "\\b", "\\t", "\\n", "\\u000B",
    "\\f", "\\r", "\\u000E", "\\u000F", "\\u0010", "\\u0011",
    "\\u0012", "\\u0013", "\\u0014", "\\u0015", "\\u0016", "\\u0017",
    "\\u0018", "\\u0019", "\\u001A", "\\u001B", "\\u001C", "\\u001D",
    "\\u001E", "\\u001F"
]
out[34] = '\\"'
out[92] = '\\\\'
out[0xad] = '\\u00ad' // Soft hyphen
out[0x600] = '\\u0600' // Arabic number sign
out[0x601] = '\\u0601' // Arabic sign sanah
out[0x602] = '\\u0602' // Arabic footnote marker
out[0x603] = '\\u0603' // Arabic sign safha
out[0x6dd] = '\\u06dd' // Arabic and of ayah
out[0x70f] = '\\u070f' // Syriac abbreviation mark
out[0x17b4] = '\\u17b4' // Khmer vowel inherent aq
out[0x17b5] = '\\u17b5' // Khmer vowel inherent aa
out[0x200b] = '\\u200b' // Zero width space
out[0x200c] = '\\u200c' // Zero width non-joiner
out[0x200d] = '\\u200d' // Zero width joiner
out[0x200e] = '\\u200e' // Left-to-right mark
out[0x200f] = '\\u200f' // Right-to-left mark
out[0x2028] = '\\u2028' // Line separator
out[0x2029] = '\\u2029' // Paragraph separator
out[0x202a] = '\\u202a' // Left-to-right embedding
out[0x202b] = '\\u202b' // Right-to-left embedding
out[0x202c] = '\\u202c' // Pop directional formatting
out[0x202d] = '\\u202d' // Left-to-right override
out[0x202e] = '\\u202e' // Right-to-left override
out[0x2060] = '\\u2060' // Word joiner
out[0x2061] = '\\u2061' // Function application
out[0x2062] = '\\u2062' // Invisible times
out[0x2063] = '\\u2063' // Invisible separator
out[0x2064] = '\\u2064' // Invisible plus
out[0x206a] = '\\u206a' // Inhibit symmetric swapping
out[0x206b] = '\\u206b' // Activate symmetric swapping
out[0x206c] = '\\u206c' // Inherent Arabic form shaping
out[0x206d] = '\\u206d' // Activate Arabic form shaping
out[0x206e] = '\\u206e' // National digit shapes
out[0x206f] = '\\u206f' // Nominal digit shapes
out[0xfeff] = '\\ufeff' // Zero width no-break space
out[0xfff9] = '\\ufff9' // Intralinear annotation anchor
out[0xfffa] = '\\ufffa' // Intralinear annotation separator
out[0xfffb] = '\\ufffb' // Intralinear annotation terminator

const regexEscape = /[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g

function escapeChar(c: string): string {
    return out[c.charCodeAt(0)] || c
}

export function $escape(str: string): string {
    return str.replace(regexEscape, escapeChar)
}

/**
 * Returns a double-quoted string for json.
 */
export function escapeValue(v: string): string {
    return '"' + $escape(v) + '"'
}

