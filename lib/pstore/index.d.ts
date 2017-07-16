import { ItemSO, Pager, SelectionType, SelectionFlags, KeyHandler, MergeFn } from '../types';
import * as prk from '../prk';
export declare const DESCRIPTOR = "$d";
export declare const INDEX = "$index";
export declare const PREV_KEY = "$prev_key";
export declare const PREV_PAGE = "$prev_page";
export declare const PREV_ISTATE = "$prev_istate";
export declare function shallowCopyTo<T>(target: T, src: T): T;
export declare function resolveNextPageIndex(page: number, idx: number, pager: Pager): number;
export declare type FetchFn = (req: prk.ParamRangeKey, pager: Pager) => void;
export interface PagerOptions<T> {
    pageSize: number;
    descriptor: any;
    desc?: boolean;
    multiplier?: number;
    multiplier_conditional?: boolean;
    keyProperty?: string;
    kh?: KeyHandler;
    merge_fn?: MergeFn<T>;
    page?(next: boolean, pager: Pager): any;
    /** create Pojo With Defaults */
    createObservable(so: ItemSO, idx: number): T;
    fetch: FetchFn;
    onSelect(message: T, flags: SelectionFlags): number;
    onAdd?(message: T, main: boolean, latest: boolean): any;
    onUpdate?(message: T, main: boolean, update: T): boolean;
    onRemove?(message: T, main: boolean): any;
    onRemoveArray?(array: Array<T>, main: boolean): any;
    onPopulate?(message: T, main: boolean, target: T, index: number): any;
}
export declare function nullifyVprops(so: ItemSO, descriptor: any): ItemSO | undefined;
export declare class PojoStore<T> {
    options: PagerOptions<T>;
    desc: boolean;
    pager: Pager;
    multiplier: number;
    multiplier_conditional: boolean;
    k: string;
    startObj: T;
    array: Array<T>;
    mainArray: Array<T>;
    private fnMergeFrom;
    constructor(fetchedArray: Array<T>, options: PagerOptions<T>);
    getLastSeenObj(): T | null;
    isEmpty(): boolean;
    size(): number;
    isMainArray(): boolean;
    isSameArray(array: any): boolean;
    repaint(): number;
    populate(type: SelectionType, flags: SelectionFlags, idxSelected: number): number;
    $populate(type: SelectionType, flags: SelectionFlags, main: boolean, idxSelected: number, page: number): any;
    select(current: T, flags: SelectionFlags, idx?: number): number;
    $select(current: T, flags: SelectionFlags, idx: number, page: number, selectWithoutPopulate: boolean): number;
    populateAndSelect(storeIdx: number, flags: SelectionFlags): void;
    notifyAndSelect(storeIdx: number, flags: SelectionFlags): void;
    notify(type?: SelectionType, flags?: SelectionFlags): void;
    /**
     * Add the entity and select it afterwards.
     */
    addAndSelect(entity: T, latest: boolean, flags: SelectionFlags): void;
    get(index: number): T;
    /**
     * Returns the pojo.
     */
    $get(id: number): T;
    getStoreIndex(selected: T): number;
    $getStoreIndex(index: number): number;
    getSelectedOriginal(): T | null;
    getOriginal(selected: T): T;
    remove(index: number): T;
    clear(): void;
    add(entity: T, latest: boolean, mainOnly: boolean): void;
    addAll(array: Array<T>, latest: boolean, mainOnly: boolean): boolean;
    /**
     * Resets the internal arrays and does not notify nor call onRemoveArray
     */
    reinit(array: Array<T>): PojoStore<T>;
    /**
     * Resets the internal arrays and calls the listener methods.
     */
    reset(array: Array<T>, notify?: boolean): void;
    /**
     * Simply sets the array.  No notifications/etc
     */
    setArray(array: Array<T>): void;
    /**
     * Sets the array and notifies.
     */
    replace(array: Array<T>, type?: SelectionType, flags?: SelectionFlags): void;
    /**
     * Returns true if an item was removed.
     */
    update(updateArray: Array<T>): boolean;
    getStartObj(): T | null;
    newRangeKeyForReload(): prk.ParamRangeKey;
    $newRangeKeyForReload(desc: boolean): prk.ParamRangeKey;
    newRangeKeyForLoadNewer(): prk.ParamRangeKey;
    newRangeKeyForLoadOlder(): prk.ParamRangeKey;
    requestNewer(): void;
    requestOlder(): void;
    reload(): void;
    $reload(desc: boolean): void;
    addNewer(array: Array<T>): void;
    addOlder(array: Array<T>): void;
    pagePrevOrLoad(flags: number): number;
    pageNextOrLoad(flags: number): number;
    cbFetchSuccess(array: Array<T>): void;
    cbFetchFailed(errmsg: any): void;
    loading(val: boolean): boolean;
}
export declare function bindFetchSuccess(pstore: PojoStore<any>): any;
export declare function bindFetchFailed(pstore: PojoStore<any>): any;
