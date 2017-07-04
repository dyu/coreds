export interface ParamRangeKey {
    ['1']: boolean;
    ['2']?: number;
    ['3']?: string;
    ['4']?: string;
}
export declare function $newParamRangeKey(desc: boolean, limit?: number, startKey?: string, parentKey?: string): ParamRangeKey;
