import { DataSignal, ObservableFactory } from './types';
/**
 * Set the factory for creating observables.
 */
export declare function setFactory(p: ObservableFactory): void;
/**
 * Get the factory for creating observables.
 */
export declare function getFactory(): any;
/**
 * Watch a property (function, 1st arg) and the 2nd arg (function) will be called on change.
 */
export declare function watch(getter: any, setter: any): void;
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
    OWN_KEYS = 2
}
/**
 * Bind the functions to obj.
 */
export declare function bindPrototypeTo<T>(obj: any, pt: T, flags?: BindFlags, freezeSuffix?: string): T;
