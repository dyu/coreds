export declare function diffFieldTo<T>(mc: any, descriptor: any, original: T, modified: T, field: number): boolean;
export declare function diffFieldsTo<T>(mc: any, descriptor: any, original: T, modified: T, fields: string[]): number;
export declare function diffTo<T>(mc: any, descriptor: any, original: T, modified: T): number;
export declare function mergeOriginalFrom<T>(src: any, descriptor: any, target: T, vm?: any): T;
export declare function mergeFrom<T>(src: any, descriptor: any, target: T): T;
