/**
 * An observable.
 */
export interface DataSignal<T> {
    (): T;
    (val: T): T;
}
/**
 * Factory for creating observables.
 */
export interface Factory {
    create(val: any): any;
    getter(created: any): any;
    setter(created: any): any;
    wrap_as_ds(created: any): any;
    freeze_fn?: any;
}
/**
 * Set the factory for creating observables.
 */
export declare function setFactory(p: Factory): void;
/**
 * Create an observable.
 */
export declare function o<T>(val: T): DataSignal<T>;
/**
 * Make the object/pojo observable.
 */
export declare function proxy<T>(obj: T, $?: any): T;
export declare const enum BindFlags {
    OVERWRITE = 1,
    OWN_KEYS = 2,
}
/**
 * Bind the functions to obj.
 */
export declare function bindPrototypeTo<T>(obj: any, pt: T, flags?: BindFlags, freezeSuffix?: string): T;
