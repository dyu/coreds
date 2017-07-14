// must be a scalar field
export function diffFieldTo(mc /**MultiCAS*/, descriptor, original, modified, field) {
    var d, t, k, array, forig, fmod, i = String(field);
    if (!i ||
        !(d = descriptor[i]) ||
        !d.m ||
        !(t = d.t) ||
        (fmod = modified[i]) === (forig = original[i]))
        return false;
    // enum type converted to int
    k = t === 16 ? '8' : String(t);
    if (!(array = mc[k]))
        mc[k] = array = [];
    array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod });
    return true;
}
// only the scalar fields are diffed
export function diffFieldsTo(mc /**MultiCAS*/, descriptor, original, modified, fields) {
    var d, t, k, array, forig, fmod, diffed = 0; //diffed: KV[] = []
    for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
        var i = fields_1[_i];
        if (!(d = descriptor[i]) ||
            !d.m ||
            !(t = d.t) ||
            (fmod = modified[i]) === (forig = original[i]))
            continue;
        // enum type converted to int
        k = t === 16 ? '8' : String(t);
        if (!(array = mc[k]))
            mc[k] = array = [];
        array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod });
        //diffed.push({ k: i, v: fmod })
        diffed++;
    }
    return diffed;
}
// only the scalar fields are diffed
export function diffTo(mc /**MultiCAS*/, descriptor, original, modified) {
    return diffFieldsTo(mc, descriptor, original, modified, Object.keys(modified));
}
// target is original
export function mergeOriginalFrom(src, descriptor, target, vm) {
    var v;
    for (var _i = 0, _a = Object.keys(src); _i < _a.length; _i++) {
        var i = _a[_i];
        if (!descriptor[i] || target[i] === (v = src[i]))
            continue;
        target[i] = v;
        if (vm)
            vm[i] = v;
    }
    return target;
}
export function mergeFrom(src, descriptor, target) {
    var v;
    for (var _i = 0, _a = Object.keys(src); _i < _a.length; _i++) {
        var i = _a[_i];
        if (!descriptor[i] || target[i] === (v = src[i]))
            continue;
        target[i] = v;
    }
    return target;
}
//# sourceMappingURL=diff.js.map