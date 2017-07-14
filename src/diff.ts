
// must be a scalar field
export function diffFieldTo<T>(mc: any/**MultiCAS*/, descriptor: any, original: T, modified: T,
        field: number): boolean {
    var d, t, k, array, forig, fmod,
        i = String(field)

    if (!i ||
        !(d = descriptor[i]) ||
        !d.m ||
        !(t = d.t) ||
        (fmod = modified[i]) === (forig = original[i])) return false

    // enum type converted to int
    k = t === 16 ? '8' : String(t)
    if (!(array = mc[k]))
        mc[k] = array = []

    array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod })

    return true
}

// only the scalar fields are diffed
export function diffFieldsTo<T>(mc: any/**MultiCAS*/, descriptor: any, original: T, modified: T,
        fields: string[]): number {
    var d, t, k, array, forig, fmod, diffed = 0//diffed: KV[] = []

    for (var i of fields) {
        if (!(d = descriptor[i]) ||
            !d.m ||
            !(t = d.t) ||
            (fmod = modified[i]) === (forig = original[i])) continue

        // enum type converted to int
        k = t === 16 ? '8' : String(t)
        if (!(array = mc[k]))
            mc[k] = array = []

        array.push({ '1': parseInt(i, 10), '2': forig, '3': fmod })
        //diffed.push({ k: i, v: fmod })
        diffed++
    }

    return diffed
}

// only the scalar fields are diffed
export function diffTo<T>(mc: any/**MultiCAS*/, descriptor: any, original: T, modified: T): number {
    return diffFieldsTo(mc, descriptor, original, modified, Object.keys(modified))
}

// target is original
export function mergeOriginalFrom<T>(src: any, descriptor: any, target: T, vm?: any): T {
    var v
    for (var i of Object.keys(src)) {
        if (!descriptor[i] || target[i] === (v = src[i])) continue
        
        target[i] = v
        if (vm) vm[i] = v
    }

    return target
}

export function mergeFrom<T>(src: any, descriptor: any, target: T): T {
    var v
    for (var i of Object.keys(src)) {
        if (!descriptor[i] || target[i] === (v = src[i])) continue
        
        target[i] = v
    }
    
    return target
}