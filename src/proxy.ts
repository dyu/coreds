/**
 * An observable.
 */
export interface DataSignal<T> {
    () : T;
    (val : T) : T;
}

/**
 * Factory for creating observables.
 */
export interface Factory {
    create(val: any): any
    getter(created: any): any
    setter(created: any): any
    wrap_as_ds(created: any): any
    freeze_fn?: any
}

let factory

/**
 * Set the factory for creating observables.
 */
export function setFactory(p: Factory) {
    factory = p
}

/**
 * Create an observable.
 */
export function o<T>(val: T): DataSignal<T> {
    return factory.wrap_as_fn(factory.create(val))
}

function returnThis(this: any) {
    return this
}

function throwThis(this: any) {
    throw this
}

function maybeProp(obj, key, value, yes?: boolean) {
    yes && Object.defineProperty(obj, key, {
        enumerable: false,
        writable: false,
        value
    })
}

function defScalar(obj, key, val, $) {
    const binding = factory.create(val),
        g = factory.getter(binding),
        s = factory.setter(binding)
    
    Object.defineProperty(obj, key, {
        enumerable: key !== '_',
        configurable: true,
        set: s,
        get: g
    })
    
    $ && Object.defineProperty($, key, {
        enumerable: key !== '_',
        configurable: true,
        set: throwThis.bind('Cannot set ' + key),
        get: returnThis.bind(factory.wrap_as_fn(binding))
    })
}

function makeReactive(obj: any, key: string, val: any, $: any) {
    var pd
    if (val === null || val === undefined) {
        defScalar(obj, key, val, $)
    } else if (typeof val === 'function' || (pd = Object.getOwnPropertyDescriptor(obj, key)) && pd.configurable === false) {
        if ($) $[key] = val
    } else if (Array.isArray(val) || typeof val !== 'object') {
        defScalar(obj, key, val, $)
    } else if (key !== '_') {
        proxy(val, $ && ($[key] = {}))
    } else {
        Object.defineProperty(obj, key, {
            enumerable: false,
            configurable: true,
            value: proxy(val, $)
        })
    }
}

/**
 * Make the object/pojo observable.
 */
export function proxy<T>(obj: T, $?: any): T {
    if ($ && typeof $ !== 'object') {
        $ = undefined
    }
    for (let key of Object.keys(obj)) {
        makeReactive(obj, key, obj[key], $)
    }
    $ && Object.defineProperty(obj, '$', {
        enumerable: false,
        writable: false,
        value: $
    })
    return obj
}

function freezeFn(obj, fn) {
    return function() {
        const args = arguments
        return factory.freeze_fn(() => fn.apply(obj, args))
    }
}

export const enum BindFlags {
    OVERWRITE = 1,
    OWN_KEYS = 2
}

/**
 * Bind the functions to obj.
 */
export function bindPrototypeTo<T>(obj, pt: T, flags?: BindFlags, freezeSuffix?: string): T {
    let f = flags || 0,
        overwrite = 0 !== (BindFlags.OVERWRITE & f),
        ffn = factory && factory.freeze_fn,
        x: any
    
    x = {}
    if ((BindFlags.OWN_KEYS & f)) {
        for (let key of Object.keys(pt)) {
            if (key === 'constructor') {
                // ignore
            } else if (freezeSuffix && ffn && -1 !== key.indexOf(freezeSuffix, key.length - freezeSuffix.length)) {
                maybeProp(obj, key, (x[key] = freezeFn(obj, pt[key])), overwrite)
            } else {
                maybeProp(obj, key, (x[key] = pt[key]['bind'](obj)), overwrite)
            }
        }
    } else {
        for (var key in pt) {
            if (key === 'constructor') {
                // ignore
            } else if (freezeSuffix && ffn && -1 !== key.indexOf(freezeSuffix, key.length - freezeSuffix.length)) {
                maybeProp(obj, key, (x[key] = freezeFn(obj, pt[key])), overwrite)
            } else {
                maybeProp(obj, key, (x[key] = pt[key]['bind'](obj)), overwrite)
            }
        }
    }
    
    return x as T
}

