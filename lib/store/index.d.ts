export interface Pager {
    loading: boolean;
    errmsg: string;
    size: number;
    page: number;
    page_count: number;
}
export declare type Entity = {
    /** desc (required) */
    ['1']: string;
    ['2']: number;
};
export interface Item<T> {
    orig: T;
    copy?: T;
    [key: string]: any;
}
export interface VM {
    set: (obj: any) => void;
    get: (key?: string) => any;
}
export declare type ValueChanged<T> = (message: T) => void;
export declare type CreateFn<T> = (message: T) => Item<T>;
export declare type MergeFn<T> = (message: T, pair: Item<T>) => void;
export declare class Store<T extends Entity> {
    vm: VM;
    createFn: CreateFn<T>;
    mergeFn: MergeFn<T>;
    pageSize: number;
    multiplier: number;
    desc: boolean;
    list: Item<T>[];
    private _fetchType;
    _fetchTs: number;
    page: number;
    fetch_key: string;
    constructor(vm: VM, createFn: CreateFn<T>, mergeFn: MergeFn<T>, pageSize: number, multiplier?: number, desc?: boolean, list?: Item<T>[]);
    latest(): T | null;
    prepend(message: T): void;
    prependAll(l: T[], reversed?: boolean): void;
    append(message: T): void;
    appendAll(l: T[], reversed?: boolean): void;
    cbFetchFailed(e: any): void;
    cbFetchSuccess(data: any): void;
    _update(updateList: T[] | undefined): boolean;
    fetchNewer(debounce?: boolean): boolean;
    fetchOlder(debounce?: boolean): boolean;
    fetchUpdate(debounce?: boolean): boolean;
    isVisible(idx: number): boolean;
    toggleDesc<T>(cb?: ValueChanged<T | undefined>, arg?: T): boolean;
    prevOrLoad(): void;
    nextOrLoad(): void;
    goto(page: number): void;
    page_info(): string;
    page_items(): Item<T>[];
}
