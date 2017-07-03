import { hasOwnProperty, isKey, MAX_TIME, MILLIS_PER_DAY, startOfTodayMS } from './util'

const regexEmail = /^[+a-zA-Z0-9_.-]+@([a-zA-Z0-9-]+[.])+[a-zA-Z0-9]{2,6}$/

function getMultiplier(unit: number): number {
    switch (unit) {
        case 1: // day
            return MILLIS_PER_DAY
        case 2: // hour
            return 1000 * 60 * 60
        case 3: // minute
            return 1000 * 60
        case 4: // second
            return 1000
        default: // millisecond
            return 1
    }
}

export function isAsciiOnly(value: string) {
    for (let i = 0, len = value.length; i < len; i++) {
        if (value.charCodeAt(i) > 127)
            return false
    }
    return true
}

export function isValidAsciiOnly(value: string|string[]): boolean {
    if (!Array.isArray(value))
        return isAsciiOnly(value)
    
    for (let s of value) {
        if (!isAsciiOnly(s)) return false
    }
    
    return true
}

export function isAsciiPrintable(value: string) {
    for (let i = 0, len = value.length, c; i < len; i++) {
        c = value.charCodeAt(i)
        if (c < 32 || c > 127)
            return false
    }
    return true
}

export function isValidAsciiPrintable(value: string|string[]): boolean {
    if (!Array.isArray(value))
        return isAsciiPrintable(value)
    
    for (let s of value) {
        if (!isAsciiPrintable(s)) return false
    }
    
    return true
}

export function isAsciiSafeHtml(value: string) {
    for (let i = 0, len = value.length, c; i < len; i++) {
        c = value.charCodeAt(i)
        //                             &           <           >           \ 
        if (c < 32 || c > 127 || c === 38 || c === 60 || c === 62 || c === 92)
            return false
    }
    return true
}

export function isValidAsciiSafeHtml(value: string|string[]): boolean {
    if (!Array.isArray(value))
        return isAsciiSafeHtml(value)
    
    for (let s of value) {
        if (!isAsciiSafeHtml(s)) return false
    }
    
    return true
}

export function isValidId(id: number): boolean {
    return id > 0
}

export function isValidKey(key: string|string[], kind?: number): boolean {
    if (!Array.isArray(key))
        return isKey(key, kind)
    
    for (let k of key) {
        if (!isKey(k, kind)) return false
    }

    return true
}

export function isValidKeyUnique(keys: string[], kind: number, unique: number): boolean {
    if (!keys || !keys.length) return true

    let map = {}
    for (let k of keys) {
        if (!isKey(k, kind) || hasOwnProperty.call(map, name))
            return false
        map[k] = true
    }
    return true
}

/** placeholder */
export function isValidUnique(list: any[], kindOrUnique: number, unique?: number): boolean {
    return true
}

export function isValidMin(value: number, min: number): boolean {
    return value >= min
}

export function isValidMax(value: number, max: number): boolean {
    return value <= max
}

export function isValidRange(value: number, min: number, max: number): boolean {
    return isValidMin(value, min) && isValidMax(value, max)
}

export function isValidTime(value: number): boolean {
    return isValidRange(value, 0, MAX_TIME)
}

export function isValidDate(value: number): boolean {
    return 0 === value % MILLIS_PER_DAY
}

export function isValidEmail(value: string): boolean {
    return regexEmail.test(value)
}

export function isValidFutureTS(value: number, unit?: number, min?: number, max?: number): boolean {
    if (!unit)
        return value > Date.now()
    
    let today = Date.now(),
        multiplier = getMultiplier(unit)
    
    if (!max)
        return !min ? value > today : value >= (today + (multiplier * min))

    return value >= (today + (multiplier * (min || 0))) && value <= (today + (multiplier * max))
}

export function isValidFutureOrToday(value: number, min?: number, max?: number): boolean {
    if (0 !== value % MILLIS_PER_DAY)
        return false

    let today = startOfTodayMS()
    if (value === today)
        return true

    // no limit
    if (!max)
        return !min ? value > today : value >= (today + (MILLIS_PER_DAY * min))

    return value >= (today + (MILLIS_PER_DAY * (min || 0))) && value <= (today + (MILLIS_PER_DAY * max))
}

export function isValidFuture(value: number, min?: number, max?: number): boolean {
    if (0 !== value % MILLIS_PER_DAY)
        return false

    let today = startOfTodayMS()

    // no limit
    if (!max)
        return !min ? value > today : value >= (today + (MILLIS_PER_DAY * min))

    return value >= (today + (MILLIS_PER_DAY * (min || 0))) && value <= (today + (MILLIS_PER_DAY * max))
}

export function isValidLength(value: string, min: number, max: number): boolean {
    let length = value.length
    return length >= min && length <= max
}

export function isValidGT(value: number, param: number): boolean {
    return value > param
}

export function isValidNotBlank(value: string): boolean {
    return 0 !== value.trim().length
}

export function isValidNotEmpty(value: string|any[]): boolean {
    return 0 !== (Array.isArray(value) ? value.length : value.trim().length)
}

export function isValidNotNull(value: any): boolean {
    return !!value
}

export function isValidNull(value: any): boolean {
    return !value
}

export function isValidNotNullNotEmpty(value: any[]): boolean {
    return value && value.length > 0
}

export function isValidPastTS(value: number, unit?: number, min?: number, max?: number): boolean {
    if (!unit)
        return value < Date.now()
    
    let today = Date.now(),
        multiplier = getMultiplier(unit)

    // no limit
    if (!max)
        return !min ? value < today : value <= (today - (multiplier * min))

    return value <= (today - (multiplier * (min || 0))) && value >= (today - (multiplier * max))
}

export function isValidPastOrToday(value: number, min?: number, max?: number): boolean {
    if (0 !== value % MILLIS_PER_DAY)
        return false

    let today = startOfTodayMS()
    if (value === today)
        return true

    // no limit
    if (!max)
        return !min ? value < today : value <= (today - (MILLIS_PER_DAY * min))

    return value <= (today - (MILLIS_PER_DAY * (min || 0))) && value >= (today - (MILLIS_PER_DAY * max))
}

export function isValidPast(value: number, min?: number, max?: number): boolean {
    if (0 !== value % MILLIS_PER_DAY)
        return false
    
    let today = startOfTodayMS()

    // no limit
    if (!max)
        return !min ? value < today : value <= (today - (MILLIS_PER_DAY * min))

    return value <= (today - (MILLIS_PER_DAY * (min || 0))) && value >= (today - (MILLIS_PER_DAY * max))
}

export function isValidPattern(value: string, pattern: RegExp): boolean {
    return pattern.test(value)
}

// TODO
export function isValidSafeHtml(value: string): boolean {
    return true
}

// TODO
export function isValidScriptAssert(value: string): boolean {
    return true
}

export function isValidSize(value: any[]|string, min: number, max: number): boolean {
    let length = value.length
    return length >= min && length <= max
}

