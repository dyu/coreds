export declare function initObservable<T>(target: T, descriptor: any, withVal?: boolean): T;
/**
 * The update arg means if existing data is modified (not creating new data).
 */
export declare function $change(e: any, fk: string, message: any, update: boolean, root?: any, flags?: number, cbfn?: any): string | null;
export interface VM {
    set: (obj: any) => void;
    get: (key?: string) => any;
}
export declare class Form {
    vm: VM;
    $d: any;
    update: boolean;
    root_key: string;
    flags: number;
    root: any;
    constructor(vm: VM, $d: any, update: boolean, root_key: string, flags?: number);
    change(e: any, field: string, message?: any, flags?: number, cbfn?: any): string | null;
}
