// Generated by fbsgen from p/ds


import { $change } from '../form'
import mc_ from './mc'

export namespace ds {
    export import MultiCAS = mc_
    /**
     * ```
     * 
     * message ParamId {
     *   required uint32 id = 1;
     * }
     * ```
     */
    export interface ParamId {
        /** id = 1, required */
        ['1']: number
    }
    export namespace ParamId {
        export const enum $ {
            /** required: 1 */
            id = '1'
        }
        export const enum $0 {
            id = 1
        }
        export function $new(id: number): ParamId {
            return {
                '1': id
            }
        }
        export const $d = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1'],
            '1': {_: 1, t: 10, m: 2, a: 0, $: 'id', $n: 'Id'},
            $new, $change
        }

    }


    /**
     * ```
     * 
     * message ParamKey {
     *   required bytes key = 1;
     *   optional bytes parent_key = 2;
     * }
     * ```
     */
    export interface ParamKey {
        /** key = 1, required */
        ['1']: string
        /** parent_key = 2, optional */
        ['2']?: string
    }
    export namespace ParamKey {
        export const enum $ {
            /** required: 1 */
            key = '1',
            /** optional: 2 */
            parentKey = '2'
        }
        export const enum $0 {
            key = 1,
            parentKey = 2
        }
        export function $new(key: string, parentKey?: string): ParamKey {
            return {
                '1': key,
                '2': parentKey
            }
        }
        export const $d = {
            $rfbs: 0,
            $fdikf: ['2'],
            '1': {_: 1, t: 2, m: 2, a: 0, $: 'key', $n: 'Key'},
            '2': {_: 2, t: 2, m: 1, a: 0, $: 'parentKey', $n: 'Parent Key'},
            $new, $change
        }

    }


    /**
     * ```
     * 
     * message ParamUpdate {
     *   required bytes key = 1;
     *   required MultiCAS mc = 2;
     *   optional uint32 id = 3;
     * }
     * ```
     */
    export interface ParamUpdate {
        /** key = 1, required */
        ['1']: string
        /** mc = 2, required */
        ['2']: MultiCAS
        /** id = 3, optional */
        ['3']?: number
    }
    export namespace ParamUpdate {
        export const enum $ {
            /** required: 1 */
            key = '1',
            /** required: 2 */
            mc = '2',
            /** optional: 3 */
            id = '3'
        }
        export const enum $0 {
            key = 1,
            mc = 2,
            id = 3
        }
        export function $new(key: string, mc: MultiCAS, id?: number): ParamUpdate {
            return {
                '1': key,
                '2': mc,
                '3': id
            }
        }
        export const $d = {
            $rfbs: 0,
            $fdf: ['3'],
            $fmf: ['2'],
            '1': {_: 1, t: 2, m: 2, a: 0, $: 'key', $n: 'Key'},
            '2': {_: 2, t: 0, m: 2, a: 0, $: 'mc', $n: 'Mc', d_fn: () => MultiCAS.$d},
            '3': {_: 3, t: 10, m: 1, a: 0, $: 'id', $n: 'Id'},
            $new, $change
        }

    }


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
        /** desc = 1, required */
        ['1']: boolean
        /** limit = 2, optional */
        ['2']?: number
        /** start_key = 3, optional */
        ['3']?: string
        /** parent_key = 4, optional */
        ['4']?: string
    }
    export namespace ParamRangeKey {
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
        export const $d = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2'],
            $fdikf: ['3','4'],
            '1': {_: 1, t: 1, m: 2, a: 0, $: 'desc', $n: 'Desc'},
            '2': {_: 2, t: 6, m: 1, a: 0, $: 'limit', $n: 'Limit'},
            '3': {_: 3, t: 2, m: 1, a: 0, $: 'startKey', $n: 'Start Key'},
            '4': {_: 4, t: 2, m: 1, a: 0, $: 'parentKey', $n: 'Parent Key'},
            $new, $change
        }

    }


    /**
     * ```
     * 
     * message ACResult {
     *   required string name = 1;
     *   required bytes value = 2;
     *   optional uint32 id = 3;
     * }
     * ```
     */
    export interface ACResult {
        /** name = 1, required */
        ['1']: string
        /** value = 2, required */
        ['2']: string
        /** id = 3, optional */
        ['3']?: number
    }
    export namespace ACResult {
        /**
         * ```
         * 
         * message PList {
         *   repeated ACResult p = 1;
         * }
         * ```
         */
        export interface PList {
            /** p = 1, repeated */
            ['1']?: ACResult[]
        }

        export const enum $ {
            /** required: 1 */
            name = '1',
            /** required: 2 */
            value = '2',
            /** optional: 3 */
            id = '3'
        }
        export const enum $0 {
            name = 1,
            value = 2,
            id = 3
        }
        export function $new(name: string, value: string, id?: number): ACResult {
            return {
                '1': name,
                '2': value,
                '3': id
            }
        }
        export const $d = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','3'],
            '1': {_: 1, t: 3, m: 2, a: 0, $: 'name', $n: 'Name'},
            '2': {_: 2, t: 2, m: 2, a: 0, $: 'value', $n: 'Value'},
            '3': {_: 3, t: 10, m: 1, a: 0, $: 'id', $n: 'Id'},
            $new, $change
        }

    }


    /**
     * ```
     * 
     * message P1 {
     *   required int8 value = 1;
     *   optional int8 end = 2;
     *   optional int8 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface P1 {
        /** value = 1, required */
        ['1']: number
        /** end = 2, optional */
        ['2']?: number
        /** pgstart = 3, optional */
        ['3']?: number
        /** prk = 4, required */
        ['4']: ParamRangeKey
    }
    export namespace P1 {
        export const enum $ {
            /** required: 1 */
            value = '1',
            /** optional: 2 */
            end = '2',
            /** optional: 3 */
            pgstart = '3',
            /** required: 4 */
            prk = '4'
        }
        export const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $new(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P1 {
            return {
                '1': value,
                '2': end,
                '3': pgstart,
                '4': prk
            }
        }
        export const $d = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2','3'],
            $fmf: ['4'],
            '1': {_: 1, t: 8, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 8, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 8, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$d},
            $new, $change
        }

    }


    /**
     * ```
     * 
     * message P4 {
     *   required uint32 value = 1;
     *   optional uint32 end = 2;
     *   optional uint32 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface P4 {
        /** value = 1, required */
        ['1']: number
        /** end = 2, optional */
        ['2']?: number
        /** pgstart = 3, optional */
        ['3']?: number
        /** prk = 4, required */
        ['4']: ParamRangeKey
    }
    export namespace P4 {
        export const enum $ {
            /** required: 1 */
            value = '1',
            /** optional: 2 */
            end = '2',
            /** optional: 3 */
            pgstart = '3',
            /** required: 4 */
            prk = '4'
        }
        export const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $new(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P4 {
            return {
                '1': value,
                '2': end,
                '3': pgstart,
                '4': prk
            }
        }
        export const $d = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2','3'],
            $fmf: ['4'],
            '1': {_: 1, t: 6, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 6, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 6, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$d},
            $new, $change
        }

    }


    /**
     * ```
     * 
     * message P8 {
     *   required uint64 value = 1;
     *   optional uint64 end = 2;
     *   optional uint64 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface P8 {
        /** value = 1, required */
        ['1']: number
        /** end = 2, optional */
        ['2']?: number
        /** pgstart = 3, optional */
        ['3']?: number
        /** prk = 4, required */
        ['4']: ParamRangeKey
    }
    export namespace P8 {
        export const enum $ {
            /** required: 1 */
            value = '1',
            /** optional: 2 */
            end = '2',
            /** optional: 3 */
            pgstart = '3',
            /** required: 4 */
            prk = '4'
        }
        export const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $new(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P8 {
            return {
                '1': value,
                '2': end,
                '3': pgstart,
                '4': prk
            }
        }
        export const $d = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2','3'],
            $fmf: ['4'],
            '1': {_: 1, t: 11, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 11, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 11, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$d},
            $new, $change
        }

    }


    /**
     * ```
     * 
     * message PD {
     *   required uint64 value = 1;
     *   optional uint64 end = 2;
     *   optional uint64 pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface PD {
        /** value = 1, required */
        ['1']: number
        /** end = 2, optional */
        ['2']?: number
        /** pgstart = 3, optional */
        ['3']?: number
        /** prk = 4, required */
        ['4']: ParamRangeKey
    }
    export namespace PD {
        export const enum $ {
            /** required: 1 */
            value = '1',
            /** optional: 2 */
            end = '2',
            /** optional: 3 */
            pgstart = '3',
            /** required: 4 */
            prk = '4'
        }
        export const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $new(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): PD {
            return {
                '1': value,
                '2': end,
                '3': pgstart,
                '4': prk
            }
        }
        export const $d = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2','3'],
            $fmf: ['4'],
            '1': {_: 1, t: 11, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 11, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 11, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$d},
            $new, $change
        }

    }


    /**
     * ```
     * 
     * message PB {
     *   required bytes value = 1;
     *   optional bytes end = 2;
     *   optional bytes pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface PB {
        /** value = 1, required */
        ['1']: string
        /** end = 2, optional */
        ['2']?: string
        /** pgstart = 3, optional */
        ['3']?: string
        /** prk = 4, required */
        ['4']: ParamRangeKey
    }
    export namespace PB {
        export const enum $ {
            /** required: 1 */
            value = '1',
            /** optional: 2 */
            end = '2',
            /** optional: 3 */
            pgstart = '3',
            /** required: 4 */
            prk = '4'
        }
        export const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $new(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PB {
            return {
                '1': value,
                '2': end,
                '3': pgstart,
                '4': prk
            }
        }
        export const $d = {
            $rfbs: 0,
            $fmf: ['4'],
            '1': {_: 1, t: 2, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 2, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 2, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$d},
            $new, $change
        }

    }


    /**
     * ```
     * 
     * message PK {
     *   required bytes value = 1;
     *   optional bytes end = 2;
     *   optional bytes pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface PK {
        /** value = 1, required */
        ['1']: string
        /** end = 2, optional */
        ['2']?: string
        /** pgstart = 3, optional */
        ['3']?: string
        /** prk = 4, required */
        ['4']: ParamRangeKey
    }
    export namespace PK {
        export const enum $ {
            /** required: 1 */
            value = '1',
            /** optional: 2 */
            end = '2',
            /** optional: 3 */
            pgstart = '3',
            /** required: 4 */
            prk = '4'
        }
        export const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $new(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PK {
            return {
                '1': value,
                '2': end,
                '3': pgstart,
                '4': prk
            }
        }
        export const $d = {
            $rfbs: 0,
            $fmf: ['4'],
            '1': {_: 1, t: 2, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 2, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 2, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$d},
            $new, $change
        }

    }


    /**
     * ```
     * 
     * message PS {
     *   required string value = 1;
     *   optional string end = 2;
     *   optional string pgstart = 3;
     *   required ParamRangeKey prk = 4;
     * }
     * ```
     */
    export interface PS {
        /** value = 1, required */
        ['1']: string
        /** end = 2, optional */
        ['2']?: string
        /** pgstart = 3, optional */
        ['3']?: string
        /** prk = 4, required */
        ['4']: ParamRangeKey
    }
    export namespace PS {
        export const enum $ {
            /** required: 1 */
            value = '1',
            /** optional: 2 */
            end = '2',
            /** optional: 3 */
            pgstart = '3',
            /** required: 4 */
            prk = '4'
        }
        export const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4
        }
        export function $new(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PS {
            return {
                '1': value,
                '2': end,
                '3': pgstart,
                '4': prk
            }
        }
        export const $d = {
            $rfbs: 1, $rfdf: ['1'],
            $fdf: ['1','2','3'],
            $fmf: ['4'],
            '1': {_: 1, t: 3, m: 2, a: 0, $: 'value', $n: 'Value'},
            '2': {_: 2, t: 3, m: 1, a: 0, $: 'end', $n: 'End'},
            '3': {_: 3, t: 3, m: 1, a: 0, $: 'pgstart', $n: 'Pgstart'},
            '4': {_: 4, t: 0, m: 2, a: 0, $: 'prk', $n: 'Prk', d_fn: () => ParamRangeKey.$d},
            $new, $change
        }

    }




}

