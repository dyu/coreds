import { PojoSO, HasState, ObservableFactory } from './types';
import { MultiCAS } from './ds/mc';
export declare function initObservable<T>(target: T, descriptor: any, withVal?: boolean): T;
export declare function verify_fields(message: any, descriptor: any, update?: boolean, root?: any): boolean;
export declare function clear_fields(message: any, descriptor: any): void;
export declare function $success(pojo: any, msg?: string): void;
export declare function $failed(pojo: any, errmsg: any): void;
export declare function $prepare(pojo: any, skipVerify?: boolean): boolean;
export declare function $clear(pojo: any): PojoSO;
export interface ParamUpdate {
    /** key = 1, required */
    ['1']: string;
    /** mc = 2, required */
    ['2']: MultiCAS;
    /** id = 3, optional */
    ['3']?: number;
}
export declare function $update_req(key: string, mc: MultiCAS, id?: number): ParamUpdate;
export declare function $update_success(pojo: any, pager: HasState, original: any, selected?: any): void;
export declare function $update_failed(pojo: any, pager: HasState, errmsg: any): void;
export declare function $update(pojo: any, pager: HasState, original: any, changes?: any): MultiCAS | undefined;
export declare function $toggle_success(pager: any, pojo_update: any, skipMerge?: boolean, msg?: string): boolean;
export declare function $toggle_failed(pager: any, errmsg: any): void;
export declare function $toggle(pager: any, field: string, pojo?: any, changed?: boolean): MultiCAS | null;
export declare function $toggle_prepare(pager: any): boolean;
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
export declare class FormPojoBuilder {
    private factory;
    map: any;
    $d: {
        $rfbs: number;
        $rfdf: any[];
        $fdf: any[];
    };
    num: number;
    obj: {};
    result: any;
    constructor(factory: ObservableFactory);
    getFD(name: any): any;
    build(withVal?: boolean): {};
    _(t: number, a: number, o: number, name: string, value: any, display: string, required?: boolean): FormPojoBuilder;
    $bool(name: string, value: boolean | null, display: string): FormPojoBuilder;
    $str(name: string, value: string | null, display: string, required?: boolean): FormPojoBuilder;
    $float(name: string, value: number | null, display: string, required?: boolean): FormPojoBuilder;
    $double(name: string, value: number | null, display: string, required?: boolean): FormPojoBuilder;
    $int8(name: string, value: number | null, display: string, required?: boolean): FormPojoBuilder;
    $int32(name: string, value: number | null, display: string, required?: boolean): FormPojoBuilder;
    $int64(name: string, value: number | null, display: string, required?: boolean): FormPojoBuilder;
    $time(name: string, value: number | null, display: string, required?: boolean): FormPojoBuilder;
    $date(name: string, value: number | null, display: string, required?: boolean): FormPojoBuilder;
    $datetime(name: string, value: number | null, display: string, required?: boolean): FormPojoBuilder;
}
