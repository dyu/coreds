export declare const hasOwnProperty: (v: string) => boolean;
export declare function noop(): null;
/**
 * ts type hack.
 */
export declare function $any(p: any): any;
export declare function noop_arg(ignore: any): void;
/**
 * Define a getter that should not be configurable.
 * Returns the value
 */
export declare function defg<T>(obj: any, prop: string, val: T): T;
/**
 * Define a property that should not be discoverable.
 * Returns the value
 */
export declare function defp<T>(obj: any, prop: string, val: T): T;
/**
 * Set a property.
 * Returns the object
 */
export declare function setp<T>(obj: T, prop: string, val: any): T;
/**
 * Nullify property.
 * Useful for lazy observable properties that bypasses typescript's strictNullChecks config.
 */
export declare function nullp(obj: any, prop: string): void;
export declare function extractMsg(data: any): string;
/**
 * Returns the new state.
 */
export declare function bit_unset(state: number, value: number): number;
/**
 * Sets the new state.
 */
/**
 * Returns the new state.
 */
export declare function bit_clear_and_set(state: number, clear: number, set: number): number;
/**
 * Sets the new state.
 */
export declare function to_flag(field: number): number;
export declare function to_int32(bytes: any, i: number): number;
export declare function to_int32LE(bytes: any, i: number): number;
export declare const bytesToBase64: (bytes: any) => string;
export declare const base64ToBytes: (base64: string) => any;
export declare const regexKey: RegExp, regexInt: RegExp, regexDouble: RegExp, regexTime: RegExp, regexDate: RegExp, regexDateTime: RegExp;
export declare function getUTCOffset(): number;
export declare const MILLIS_PER_DAY: number, MAX_TIME_IN_MILLIS_PER_DAY: number, MILLIS_PER_HOUR: number, UTC_OFFSET: number, HOST_RAW_OFFSET: number, HOST_RAW_OFFSET_SECONDS: number, SECONDS_PER_HOUR: number;
export declare function hour(h: number): number;
export declare function minute(m: number): number;
export declare const MAX_TIME: number;
export declare function localToUtc(ts: number): number;
export declare function localToUtcSeconds(s: number): number;
export declare function utcToLocal(ts: number): number;
export declare function utcToLocalSeconds(s: number): number;
export declare function extractTime(ts: number, date: number): number;
export declare function isExpired(value: number, duration: number): boolean;
export declare function isExpired24Hrs(value: number): boolean;
export declare function startOfDayMS(ts: number): number;
export declare function isSameDay(ts1: number, ts2: number): boolean;
export declare function addDaysTo(ts: number, days: number): number;
export declare function startOfTodayMS(): number;
export declare function utcNow(): number;
export declare function getKind(key: string): number;
export declare function isZeroKey(key: string): boolean;
export declare function isKey(key: string, kind?: number): boolean;
export declare function getTs(key: string): number;
export declare function incrementKey(key: string): string;
export declare function decrementKey(key: string): string;
export declare function $escape(str: string): string;
/**
 * Returns a double-quoted string for json.
 */
export declare function escapeValue(v: string): string;
