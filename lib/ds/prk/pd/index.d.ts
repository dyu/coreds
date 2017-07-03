import { ds } from '../../';
export declare namespace pd {
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
    interface PDD1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PDD1$$new(p0: number, p1: number, l: ds.P1): PDD1;
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
    interface PDD4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PDD4$$new(p0: number, p1: number, l: ds.P4): PDD4;
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
    interface PDD8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PDD8$$new(p0: number, p1: number, l: ds.P8): PDD8;
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
    interface PDDD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PDDD$$new(p0: number, p1: number, l: ds.PD): PDDD;
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
    interface PDDK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PDDK$$new(p0: number, p1: number, l: ds.PK): PDDK;
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
    interface PDDS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PDDS$$new(p0: number, p1: number, l: ds.PS): PDDS;
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
    interface PDS1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PDS1$$new(p0: number, p1: string, l: ds.P1): PDS1;
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
    interface PDS4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PDS4$$new(p0: number, p1: string, l: ds.P4): PDS4;
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
    interface PDS8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PDS8$$new(p0: number, p1: string, l: ds.P8): PDS8;
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
    interface PDSD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PDSD$$new(p0: number, p1: string, l: ds.PD): PDSD;
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
    interface PDSK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PDSK$$new(p0: number, p1: string, l: ds.PK): PDSK;
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
    interface PDSS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PDSS$$new(p0: number, p1: string, l: ds.PS): PDSS;
    /**
     * ```
     *
     * message PD1 {
     *   required uint64 p0 = 1;
     *   required ds.P1 l = 2;
     * }
     * ```
     */
    interface PD1 {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.P1;
    }
    function PD1$$new(p0: number, l: ds.P1): PD1;
    /**
     * ```
     *
     * message PD4 {
     *   required uint64 p0 = 1;
     *   required ds.P4 l = 2;
     * }
     * ```
     */
    interface PD4 {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.P4;
    }
    function PD4$$new(p0: number, l: ds.P4): PD4;
    /**
     * ```
     *
     * message PD8 {
     *   required uint64 p0 = 1;
     *   required ds.P8 l = 2;
     * }
     * ```
     */
    interface PD8 {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.P8;
    }
    function PD8$$new(p0: number, l: ds.P8): PD8;
    /**
     * ```
     *
     * message PDD {
     *   required uint64 p0 = 1;
     *   required ds.PD l = 2;
     * }
     * ```
     */
    interface PDD {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.PD;
    }
    function PDD$$new(p0: number, l: ds.PD): PDD;
    /**
     * ```
     *
     * message PDK {
     *   required uint64 p0 = 1;
     *   required ds.PK l = 2;
     * }
     * ```
     */
    interface PDK {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.PK;
    }
    function PDK$$new(p0: number, l: ds.PK): PDK;
    /**
     * ```
     *
     * message PDS {
     *   required uint64 p0 = 1;
     *   required ds.PS l = 2;
     * }
     * ```
     */
    interface PDS {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.PS;
    }
    function PDS$$new(p0: number, l: ds.PS): PDS;
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
    interface PDK1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PDK1$$new(p0: number, p1: string, l: ds.P1): PDK1;
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
    interface PDK4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PDK4$$new(p0: number, p1: string, l: ds.P4): PDK4;
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
    interface PDK8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PDK8$$new(p0: number, p1: string, l: ds.P8): PDK8;
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
    interface PDKD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PDKD$$new(p0: number, p1: string, l: ds.PD): PDKD;
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
    interface PDKK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PDKK$$new(p0: number, p1: string, l: ds.PK): PDKK;
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
    interface PDKS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PDKS$$new(p0: number, p1: string, l: ds.PS): PDKS;
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
    interface PD11 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PD11$$new(p0: number, p1: number, l: ds.P1): PD11;
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
    interface PD14 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PD14$$new(p0: number, p1: number, l: ds.P4): PD14;
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
    interface PD18 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PD18$$new(p0: number, p1: number, l: ds.P8): PD18;
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
    interface PD1D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PD1D$$new(p0: number, p1: number, l: ds.PD): PD1D;
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
    interface PD1K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PD1K$$new(p0: number, p1: number, l: ds.PK): PD1K;
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
    interface PD1S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PD1S$$new(p0: number, p1: number, l: ds.PS): PD1S;
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
    interface PD81 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PD81$$new(p0: number, p1: number, l: ds.P1): PD81;
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
    interface PD84 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PD84$$new(p0: number, p1: number, l: ds.P4): PD84;
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
    interface PD88 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PD88$$new(p0: number, p1: number, l: ds.P8): PD88;
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
    interface PD8D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PD8D$$new(p0: number, p1: number, l: ds.PD): PD8D;
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
    interface PD8K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PD8K$$new(p0: number, p1: number, l: ds.PK): PD8K;
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
    interface PD8S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PD8S$$new(p0: number, p1: number, l: ds.PS): PD8S;
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
    interface PD41 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PD41$$new(p0: number, p1: number, l: ds.P1): PD41;
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
    interface PD44 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PD44$$new(p0: number, p1: number, l: ds.P4): PD44;
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
    interface PD48 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PD48$$new(p0: number, p1: number, l: ds.P8): PD48;
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
    interface PD4D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PD4D$$new(p0: number, p1: number, l: ds.PD): PD4D;
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
    interface PD4K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PD4K$$new(p0: number, p1: number, l: ds.PK): PD4K;
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
    interface PD4S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PD4S$$new(p0: number, p1: number, l: ds.PS): PD4S;
}
