/**
 * The update arg means if existing data is modified (not creating new data).
 */
export declare function $change(e: any, message: any, field: string | number, update: boolean, root: any, cbfn?: any, flags?: number): string | null;
export interface VM {
    set: (obj: any) => void;
    get: (key?: string) => any;
}
export declare class Form {
    vm: VM;
    $d: any;
    update: boolean;
    root_key: string | undefined;
    root: any;
    constructor(vm: VM, $d: any, update: boolean, root_key?: string | undefined);
    changed(e: any, message: any, field: string | number, cbfn?: any, flags?: number): void;
}
