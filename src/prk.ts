export interface ParamRangeKey {
    ['1']: boolean;
    ['2']?: number;
    ['3']?: string;
    ['4']?: string;
}

export function $newParamRangeKey(desc: boolean, limit?: number, startKey?: string, parentKey?: string): ParamRangeKey {
    return {
        '1': desc,
        '2': limit,
        '3': startKey,
        '4': parentKey
    }
}