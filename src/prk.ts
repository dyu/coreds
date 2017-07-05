/**
 * ```
 * 
 * message ParamRangeKey {
 *   required bool desc = 1;
 *   optional uint32 limit = 2;
 *   optional bytes start_key = 3;
 *   optional bytes parent_key = 4;
 * }
 * ```
 */
export interface ParamRangeKey {
    ['1']: boolean;
    ['2']?: number;
    ['3']?: string;
    ['4']?: string;
}

export const enum $ {
    /** required: 1 */
    desc = '1',
    /** optional: 2 */
    limit = '2',
    /** optional: 3 */
    startKey = '3',
    /** optional: 4 */
    parentKey = '4'
}
export const enum $0 {
    desc = 1,
    limit = 2,
    startKey = 3,
    parentKey = 4
}

export function $new(desc: boolean, limit?: number, startKey?: string, parentKey?: string): ParamRangeKey {
    return {
        '1': desc,
        '2': limit,
        '3': startKey,
        '4': parentKey
    }
}