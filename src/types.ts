export const enum FieldType {
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
    ENUM = 16
}

export const enum PojoState {
    NONE = 0,
    SUCCESS = 1,
    ERROR = 2,
    WARNING = 4,
    LOADING = 8,
    
    UPDATE = 16,

    MASK_STATUS = SUCCESS | ERROR | WARNING
}

export interface HasState {
    state: number
    msg: string
}

/**
 * Pojo state object.
 */
export interface PojoSO extends HasState {
    dfbs: number // dirty
    vfbs: number // validation
    rfbs: number // required
}

export const enum EventFlags {
    PREVENT_NONE = 0,
    PREVENT_DEFAULT = 1,
    PREVENT_PROPAGATION = 2,
    PREVENT_BOTH = 3,
    CAPTURING = 4
}

export const enum ChangeFlags {
    SKIP_VALIDATE = 1,
    CB_NEXT_TICK = 2,
    CB_ONLY_ON_SET = 4
}

export interface FormUpdate {
    pojo: any
    pager: HasState
}

/*export interface KV {
    k: string
    v: any
}

export function writeKVsTo<T>(target: T, kvs: KV[]): T {
    for (let kv of kvs) {
        target[kv.k] = kv.v
    }

    return target
}*/

// ====================
// store

export const enum SelectionType {
    NONE = 0,
    RESET = 1,
    /** Do not reference this, for internal use only */
    SELECT = 2,
    RETAIN = 3,
    RESELECT = 4
}

export const enum SelectionFlags {
    NONE = 0,
    CLICKED = 1,
    REFRESH = 2,
    CLICKED_UPDATE = 4,
    FORCE = 8,

    MASK_FORCE_OR_UPDATE = FORCE | CLICKED_UPDATE
}

export const enum PojoListState {
    NONE = 0,
    INCLUDED = 1,
    SELECTED = 2,
    REFRESH = 4,

    MASK_SELECTED_REFRESH = SELECTED | REFRESH
}

export const enum PagerState {
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

    MASK_STATUS = SUCCESS | ERROR | WARNING,
    MASK_RPC = LOAD_NEWER | LOAD_OLDER | RELOAD,
    MASK_RPC_DISABLE = LOADING | LOCAL_SEARCH
}

export interface Pager extends HasState {
    size: number // the total number of fetched items
    msg: string
    array: any[]
    index_selected: number
    index_hidden: number
    q_index: number

    prev_key: string|null
    prev_page: number
    prev_istate: number

    page: number
    page_count: number
    page_vcount: number // visible count
    page_from: number
    page_to: number

    pojo?: any
}

export interface ItemSO extends PojoSO {
    lstate: number
}

export interface KeyHandler {
    inc(key: string): string
    dec(key: string): string
}

export type MergeFn<T> = (src: any, descriptor: any, target: T) => T
