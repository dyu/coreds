export declare const enum FieldType {
    MESSAGE = 0,
    BOOL = 1,
    BYTES = 2,
    STRING = 3,
    FLOAT = 4,
    DOUBLE = 5,
    UINT32 = 6,
    UINT64 = 7,
    INT32 = 8,
    INT64 = 9,
    FIXED32 = 10,
    FIXED64 = 11,
    SINT32 = 12,
    SINT64 = 13,
    SFIXED32 = 14,
    SFIXED64 = 15,
    ENUM = 16,
}
export declare const enum PojoState {
    NONE = 0,
    SUCCESS = 1,
    ERROR = 2,
    WARNING = 4,
    LOADING = 8,
    UPDATE = 16,
    MASK_STATUS = 7,
}
export interface HasState {
    state: number;
    msg: string;
}
/**
 * Pojo state object.
 */
export interface PojoSO extends HasState {
    dfbs: number;
    vfbs: number;
    rfbs: number;
}
export declare const enum EventFlags {
    PREVENT_NONE = 0,
    PREVENT_DEFAULT = 1,
    PREVENT_PROPAGATION = 2,
    PREVENT_BOTH = 3,
    CAPTURING = 4,
}
export declare const enum ChangeFlags {
    SKIP_VALIDATE = 1,
    VM_SET = 2,
    CB_ONLY_ON_SET = 4,
}
export interface FormUpdate {
    pojo: any;
    pager: HasState;
}
export declare const enum SelectionType {
    NONE = 0,
    RESET = 1,
    /** Do not reference this, for internal use only */
    SELECT = 2,
    RETAIN = 3,
    RESELECT = 4,
}
export declare const enum SelectionFlags {
    NONE = 0,
    CLICKED = 1,
    REFRESH = 2,
    CLICKED_UPDATE = 4,
    FORCE = 8,
    MASK_FORCE_OR_UPDATE = 12,
}
export declare const enum PojoListState {
    NONE = 0,
    INCLUDED = 1,
    SELECTED = 2,
    REFRESH = 4,
    MASK_SELECTED_REFRESH = 6,
}
export declare const enum PagerState {
    NONE = 0,
    SUCCESS = 1,
    ERROR = 2,
    WARNING = 4,
    LOADING = 8,
    DESC = 16,
    LOAD_NEWER = 32,
    LOAD_OLDER = 64,
    RELOAD = 128,
    LOCAL_SEARCH = 256,
    MASK_STATUS = 7,
    MASK_RPC = 224,
    MASK_RPC_DISABLE = 264,
}
export interface Pager extends HasState {
    size: number;
    msg: string;
    array: any[];
    index_selected: number;
    index_hidden: number;
    q_index: number;
    prev_key: string | null;
    prev_page: number;
    prev_istate: number;
    page: number;
    page_count: number;
    page_vcount: number;
    page_from: number;
    page_to: number;
    pojo?: any;
}
export interface ItemSO extends PojoSO {
    lstate: number;
}
export interface KeyHandler {
    inc(key: string): string;
    dec(key: string): string;
}
export declare type MergeFn<T> = (src: any, descriptor: any, target: T) => T;
