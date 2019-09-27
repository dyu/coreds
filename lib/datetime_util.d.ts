/// <reference types="numeral" />
export declare let numeral: Numeral;
export declare function newTimeFormatArray(one: any, ago: any, fromNow: any, aSecondAgo: any, justNow: any, seconds: any, minute: any, minutes: any, hour: any, hours: any, yesterday: any, tomorrow: any, days: any, lastWeek: any, nextWeek: any, weeks: any, lastMonth: any, nextMonth: any, months: any, lastYear: any, nextYear: any, years: any, lastCentury: any, nextCentury: any, centuries: any): any[];
export declare const defaultTimeFormatArray: any[];
export declare function prettyDate(ts: number, targetTimeFormatArray?: string[], ago?: string, fromNow?: string): string;
export declare function formatDate2(date: Date, fmt: string): string;
export declare function toDay(date: Date): string;
export declare function toD(date: Date): string;
export declare function toMD(date: Date, separator: string): string;
export declare function toYM(date: Date, separator: string): string;
export declare function toYMD(date: Date, separator: string): string;
export declare function toYMDTime(dt: Date, separator: string): string;
export declare function removeTime(date: Date): Date;
export declare function formatTime(v: any): string;
export declare function formatDate(v: any): string;
export declare function formatDateTime(v: any): string;
export declare function isValidDateStr(text: string): number | null;
export declare function isValidDateTimeStr(dt: any): number | null;
