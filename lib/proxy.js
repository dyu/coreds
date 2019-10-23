var factory;
/**
 * Set the factory for creating observables.
 */
export function setFactory(p) {
    factory = p;
}
/**
 * Watch a property (function, 1st arg) and the 2nd arg (function) will be called on change.
 */
export function watch(getter, setter) {
    factory.watch(getter, setter);
}
/**
 * Create an observable.
 */
export function o(val) {
    return factory.wrap_as_fn(factory.create(val));
}
function returnThis() {
    return this;
}
function throwThis() {
    throw this;
}
function maybeProp(obj, key, value, yes) {
    yes && Object.defineProperty(obj, key, {
        enumerable: false,
        writable: false,
        value: value
    });
}
function defScalar(obj, key, val, $) {
    var binding = factory.create(val), g = factory.getter(binding), s = factory.setter(binding);
    Object.defineProperty(obj, key, {
        enumerable: key !== '_',
        configurable: true,
        set: s,
        get: g
    });
    $ && Object.defineProperty($, key, {
        enumerable: key !== '_',
        configurable: true,
        set: throwThis.bind('Cannot set ' + key),
        get: returnThis.bind(factory.wrap_as_fn(binding))
    });
}
function makeReactive(obj, key, val, $) {
    var pd;
    if (val === null || val === undefined) {
        defScalar(obj, key, val, $);
    }
    else if (typeof val === 'function' || (pd = Object.getOwnPropertyDescriptor(obj, key)) && pd.configurable === false) {
        if ($)
            $[key] = val;
    }
    else if (Array.isArray(val) || typeof val !== 'object') {
        defScalar(obj, key, val, $);
    }
    else if (key !== '_') {
        proxy(val, $ && ($[key] = {}));
    }
    else {
        Object.defineProperty(obj, key, {
            enumerable: false,
            configurable: true,
            value: proxy(val, $)
        });
    }
}
/**
 * Make the object/pojo observable.
 */
export function proxy(obj, $) {
    if ($ && typeof $ !== 'object') {
        $ = undefined;
    }
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        makeReactive(obj, key, obj[key], $);
    }
    $ && Object.defineProperty(obj, '$', {
        enumerable: false,
        writable: false,
        value: $
    });
    return obj;
}
function freezeFn(obj, fn) {
    return function () {
        var args = arguments;
        return factory.freeze_fn(function () { return fn.apply(obj, args); });
    };
}
/**
 * Bind the functions to obj.
 */
export function bindPrototypeTo(obj, pt, flags, freezeSuffix) {
    var f = flags || 0, overwrite = 0 !== (1 /* OVERWRITE */ & f), ffn = factory && factory.freeze_fn, x;
    x = {};
    if ((2 /* OWN_KEYS */ & f)) {
        for (var _i = 0, _a = Object.keys(pt); _i < _a.length; _i++) {
            var key_1 = _a[_i];
            if (key_1 === 'constructor') {
                // ignore
            }
            else if (freezeSuffix && ffn && -1 !== key_1.indexOf(freezeSuffix, key_1.length - freezeSuffix.length)) {
                maybeProp(obj, key_1, (x[key_1] = freezeFn(obj, pt[key_1])), overwrite);
            }
            else {
                maybeProp(obj, key_1, (x[key_1] = pt[key_1]['bind'](obj)), overwrite);
            }
        }
    }
    else {
        for (var key in pt) {
            if (key === 'constructor') {
                // ignore
            }
            else if (freezeSuffix && ffn && -1 !== key.indexOf(freezeSuffix, key.length - freezeSuffix.length)) {
                maybeProp(obj, key, (x[key] = freezeFn(obj, pt[key])), overwrite);
            }
            else {
                maybeProp(obj, key, (x[key] = pt[key]['bind'](obj)), overwrite);
            }
        }
    }
    return x;
}
//# sourceMappingURL=proxy.js.map