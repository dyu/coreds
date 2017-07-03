// Generated by fbsgen from p/ds/prk/pd

import { ds } from '../../'

export namespace pd {
    /**
     * ```
     * 
     * message PDD1 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    export interface PDD1 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P1
    }
    export function PDD1$$new(p0: number, p1: number, l: ds.P1): PDD1 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDD4 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    export interface PDD4 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P4
    }
    export function PDD4$$new(p0: number, p1: number, l: ds.P4): PDD4 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDD8 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    export interface PDD8 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P8
    }
    export function PDD8$$new(p0: number, p1: number, l: ds.P8): PDD8 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDDD {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    export interface PDDD {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PD
    }
    export function PDDD$$new(p0: number, p1: number, l: ds.PD): PDDD {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDDK {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    export interface PDDK {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PK
    }
    export function PDDK$$new(p0: number, p1: number, l: ds.PK): PDDK {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDDS {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    export interface PDDS {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PS
    }
    export function PDDS$$new(p0: number, p1: number, l: ds.PS): PDDS {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }


    /**
     * ```
     * 
     * message PDS1 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    export interface PDS1 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.P1
    }
    export function PDS1$$new(p0: number, p1: string, l: ds.P1): PDS1 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDS4 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    export interface PDS4 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.P4
    }
    export function PDS4$$new(p0: number, p1: string, l: ds.P4): PDS4 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDS8 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    export interface PDS8 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.P8
    }
    export function PDS8$$new(p0: number, p1: string, l: ds.P8): PDS8 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDSD {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    export interface PDSD {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.PD
    }
    export function PDSD$$new(p0: number, p1: string, l: ds.PD): PDSD {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDSK {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    export interface PDSK {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.PK
    }
    export function PDSK$$new(p0: number, p1: string, l: ds.PK): PDSK {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDSS {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    export interface PDSS {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.PS
    }
    export function PDSS$$new(p0: number, p1: string, l: ds.PS): PDSS {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }


    /**
     * ```
     * 
     * message PD1 {
     *   required uint64 p0 = 1;
     *   required ds.P1 l = 2;
     * }
     * ```
     */
    export interface PD1 {
        /** p0 = 1, required */
        ['1']: number
        /** l = 2, required */
        ['2']: ds.P1
    }
    export function PD1$$new(p0: number, l: ds.P1): PD1 {
        return {
            '1': p0,
            '2': l
        }
    }

    /**
     * ```
     * 
     * message PD4 {
     *   required uint64 p0 = 1;
     *   required ds.P4 l = 2;
     * }
     * ```
     */
    export interface PD4 {
        /** p0 = 1, required */
        ['1']: number
        /** l = 2, required */
        ['2']: ds.P4
    }
    export function PD4$$new(p0: number, l: ds.P4): PD4 {
        return {
            '1': p0,
            '2': l
        }
    }

    /**
     * ```
     * 
     * message PD8 {
     *   required uint64 p0 = 1;
     *   required ds.P8 l = 2;
     * }
     * ```
     */
    export interface PD8 {
        /** p0 = 1, required */
        ['1']: number
        /** l = 2, required */
        ['2']: ds.P8
    }
    export function PD8$$new(p0: number, l: ds.P8): PD8 {
        return {
            '1': p0,
            '2': l
        }
    }

    /**
     * ```
     * 
     * message PDD {
     *   required uint64 p0 = 1;
     *   required ds.PD l = 2;
     * }
     * ```
     */
    export interface PDD {
        /** p0 = 1, required */
        ['1']: number
        /** l = 2, required */
        ['2']: ds.PD
    }
    export function PDD$$new(p0: number, l: ds.PD): PDD {
        return {
            '1': p0,
            '2': l
        }
    }

    /**
     * ```
     * 
     * message PDK {
     *   required uint64 p0 = 1;
     *   required ds.PK l = 2;
     * }
     * ```
     */
    export interface PDK {
        /** p0 = 1, required */
        ['1']: number
        /** l = 2, required */
        ['2']: ds.PK
    }
    export function PDK$$new(p0: number, l: ds.PK): PDK {
        return {
            '1': p0,
            '2': l
        }
    }

    /**
     * ```
     * 
     * message PDS {
     *   required uint64 p0 = 1;
     *   required ds.PS l = 2;
     * }
     * ```
     */
    export interface PDS {
        /** p0 = 1, required */
        ['1']: number
        /** l = 2, required */
        ['2']: ds.PS
    }
    export function PDS$$new(p0: number, l: ds.PS): PDS {
        return {
            '1': p0,
            '2': l
        }
    }


    /**
     * ```
     * 
     * message PDK1 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    export interface PDK1 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.P1
    }
    export function PDK1$$new(p0: number, p1: string, l: ds.P1): PDK1 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDK4 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    export interface PDK4 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.P4
    }
    export function PDK4$$new(p0: number, p1: string, l: ds.P4): PDK4 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDK8 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    export interface PDK8 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.P8
    }
    export function PDK8$$new(p0: number, p1: string, l: ds.P8): PDK8 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDKD {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    export interface PDKD {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.PD
    }
    export function PDKD$$new(p0: number, p1: string, l: ds.PD): PDKD {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDKK {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    export interface PDKK {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.PK
    }
    export function PDKK$$new(p0: number, p1: string, l: ds.PK): PDKK {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PDKS {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    export interface PDKS {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: string
        /** l = 3, required */
        ['3']: ds.PS
    }
    export function PDKS$$new(p0: number, p1: string, l: ds.PS): PDKS {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }


    /**
     * ```
     * 
     * message PD11 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    export interface PD11 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P1
    }
    export function PD11$$new(p0: number, p1: number, l: ds.P1): PD11 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD14 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    export interface PD14 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P4
    }
    export function PD14$$new(p0: number, p1: number, l: ds.P4): PD14 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD18 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    export interface PD18 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P8
    }
    export function PD18$$new(p0: number, p1: number, l: ds.P8): PD18 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD1D {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    export interface PD1D {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PD
    }
    export function PD1D$$new(p0: number, p1: number, l: ds.PD): PD1D {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD1K {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    export interface PD1K {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PK
    }
    export function PD1K$$new(p0: number, p1: number, l: ds.PK): PD1K {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD1S {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    export interface PD1S {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PS
    }
    export function PD1S$$new(p0: number, p1: number, l: ds.PS): PD1S {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }


    /**
     * ```
     * 
     * message PD81 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    export interface PD81 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P1
    }
    export function PD81$$new(p0: number, p1: number, l: ds.P1): PD81 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD84 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    export interface PD84 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P4
    }
    export function PD84$$new(p0: number, p1: number, l: ds.P4): PD84 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD88 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    export interface PD88 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P8
    }
    export function PD88$$new(p0: number, p1: number, l: ds.P8): PD88 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD8D {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    export interface PD8D {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PD
    }
    export function PD8D$$new(p0: number, p1: number, l: ds.PD): PD8D {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD8K {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    export interface PD8K {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PK
    }
    export function PD8K$$new(p0: number, p1: number, l: ds.PK): PD8K {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD8S {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    export interface PD8S {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PS
    }
    export function PD8S$$new(p0: number, p1: number, l: ds.PS): PD8S {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }


    /**
     * ```
     * 
     * message PD41 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    export interface PD41 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P1
    }
    export function PD41$$new(p0: number, p1: number, l: ds.P1): PD41 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD44 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    export interface PD44 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P4
    }
    export function PD44$$new(p0: number, p1: number, l: ds.P4): PD44 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD48 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    export interface PD48 {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.P8
    }
    export function PD48$$new(p0: number, p1: number, l: ds.P8): PD48 {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD4D {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    export interface PD4D {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PD
    }
    export function PD4D$$new(p0: number, p1: number, l: ds.PD): PD4D {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD4K {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    export interface PD4K {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PK
    }
    export function PD4K$$new(p0: number, p1: number, l: ds.PK): PD4K {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }

    /**
     * ```
     * 
     * message PD4S {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    export interface PD4S {
        /** p0 = 1, required */
        ['1']: number
        /** p1 = 2, required */
        ['2']: number
        /** l = 3, required */
        ['3']: ds.PS
    }
    export function PD4S$$new(p0: number, p1: number, l: ds.PS): PD4S {
        return {
            '1': p0,
            '2': p1,
            '3': l
        }
    }



}

