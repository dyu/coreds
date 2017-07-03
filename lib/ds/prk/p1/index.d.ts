import { ds } from '../../';
export declare namespace p1 {
    /**
     * ```
     *
     * message P181 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P181 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P181$$new(p0: number, p1: number, l: ds.P1): P181;
    /**
     * ```
     *
     * message P184 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P184 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P184$$new(p0: number, p1: number, l: ds.P4): P184;
    /**
     * ```
     *
     * message P188 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P188 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P188$$new(p0: number, p1: number, l: ds.P8): P188;
    /**
     * ```
     *
     * message P18D {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P18D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P18D$$new(p0: number, p1: number, l: ds.PD): P18D;
    /**
     * ```
     *
     * message P18K {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P18K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P18K$$new(p0: number, p1: number, l: ds.PK): P18K;
    /**
     * ```
     *
     * message P18S {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P18S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P18S$$new(p0: number, p1: number, l: ds.PS): P18S;
    /**
     * ```
     *
     * message P111411 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P1 l = 6;
     * }
     * ```
     */
    interface P111411 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P1;
    }
    function P111411$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P1): P111411;
    /**
     * ```
     *
     * message P111414 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P4 l = 6;
     * }
     * ```
     */
    interface P111414 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P4;
    }
    function P111414$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P4): P111414;
    /**
     * ```
     *
     * message P111418 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P8 l = 6;
     * }
     * ```
     */
    interface P111418 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P8;
    }
    function P111418$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P8): P111418;
    /**
     * ```
     *
     * message P11141D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PD l = 6;
     * }
     * ```
     */
    interface P11141D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PD;
    }
    function P11141D$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PD): P11141D;
    /**
     * ```
     *
     * message P11141K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PK l = 6;
     * }
     * ```
     */
    interface P11141K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PK;
    }
    function P11141K$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PK): P11141K;
    /**
     * ```
     *
     * message P11141S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PS l = 6;
     * }
     * ```
     */
    interface P11141S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PS;
    }
    function P11141S$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PS): P11141S;
    /**
     * ```
     *
     * message P1D111 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P1D111 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P1;
    }
    function P1D111$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P1): P1D111;
    /**
     * ```
     *
     * message P1D114 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P1D114 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P4;
    }
    function P1D114$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P4): P1D114;
    /**
     * ```
     *
     * message P1D118 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P1D118 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P8;
    }
    function P1D118$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P8): P1D118;
    /**
     * ```
     *
     * message P1D11D {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P1D11D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PD;
    }
    function P1D11D$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PD): P1D11D;
    /**
     * ```
     *
     * message P1D11K {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P1D11K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PK;
    }
    function P1D11K$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PK): P1D11K;
    /**
     * ```
     *
     * message P1D11S {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P1D11S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PS;
    }
    function P1D11S$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PS): P1D11S;
    /**
     * ```
     *
     * message P141 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P141 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P141$$new(p0: number, p1: number, l: ds.P1): P141;
    /**
     * ```
     *
     * message P144 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P144 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P144$$new(p0: number, p1: number, l: ds.P4): P144;
    /**
     * ```
     *
     * message P148 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P148 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P148$$new(p0: number, p1: number, l: ds.P8): P148;
    /**
     * ```
     *
     * message P14D {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P14D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P14D$$new(p0: number, p1: number, l: ds.PD): P14D;
    /**
     * ```
     *
     * message P14K {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P14K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P14K$$new(p0: number, p1: number, l: ds.PK): P14K;
    /**
     * ```
     *
     * message P14S {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P14S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P14S$$new(p0: number, p1: number, l: ds.PS): P14S;
    /**
     * ```
     *
     * message P1S1 {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P1S1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P1S1$$new(p0: number, p1: string, l: ds.P1): P1S1;
    /**
     * ```
     *
     * message P1S4 {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P1S4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P1S4$$new(p0: number, p1: string, l: ds.P4): P1S4;
    /**
     * ```
     *
     * message P1S8 {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P1S8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P1S8$$new(p0: number, p1: string, l: ds.P8): P1S8;
    /**
     * ```
     *
     * message P1SD {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P1SD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P1SD$$new(p0: number, p1: string, l: ds.PD): P1SD;
    /**
     * ```
     *
     * message P1SK {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P1SK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P1SK$$new(p0: number, p1: string, l: ds.PK): P1SK;
    /**
     * ```
     *
     * message P1SS {
     *   required int8 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P1SS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P1SS$$new(p0: number, p1: string, l: ds.PS): P1SS;
    /**
     * ```
     *
     * message P1K1 {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P1K1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P1K1$$new(p0: number, p1: string, l: ds.P1): P1K1;
    /**
     * ```
     *
     * message P1K4 {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P1K4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P1K4$$new(p0: number, p1: string, l: ds.P4): P1K4;
    /**
     * ```
     *
     * message P1K8 {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P1K8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P1K8$$new(p0: number, p1: string, l: ds.P8): P1K8;
    /**
     * ```
     *
     * message P1KD {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P1KD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P1KD$$new(p0: number, p1: string, l: ds.PD): P1KD;
    /**
     * ```
     *
     * message P1KK {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P1KK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P1KK$$new(p0: number, p1: string, l: ds.PK): P1KK;
    /**
     * ```
     *
     * message P1KS {
     *   required int8 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P1KS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P1KS$$new(p0: number, p1: string, l: ds.PS): P1KS;
    /**
     * ```
     *
     * message P1D1 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P1D1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P1D1$$new(p0: number, p1: number, l: ds.P1): P1D1;
    /**
     * ```
     *
     * message P1D4 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P1D4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P1D4$$new(p0: number, p1: number, l: ds.P4): P1D4;
    /**
     * ```
     *
     * message P1D8 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P1D8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P1D8$$new(p0: number, p1: number, l: ds.P8): P1D8;
    /**
     * ```
     *
     * message P1DD {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P1DD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P1DD$$new(p0: number, p1: number, l: ds.PD): P1DD;
    /**
     * ```
     *
     * message P1DK {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P1DK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P1DK$$new(p0: number, p1: number, l: ds.PK): P1DK;
    /**
     * ```
     *
     * message P1DS {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P1DS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P1DS$$new(p0: number, p1: number, l: ds.PS): P1DS;
    /**
     * ```
     *
     * message P1D11 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P1D11 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P1;
    }
    function P1D11$$new(p0: number, p1: number, p2: number, l: ds.P1): P1D11;
    /**
     * ```
     *
     * message P1D14 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P1D14 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P4;
    }
    function P1D14$$new(p0: number, p1: number, p2: number, l: ds.P4): P1D14;
    /**
     * ```
     *
     * message P1D18 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P1D18 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P8;
    }
    function P1D18$$new(p0: number, p1: number, p2: number, l: ds.P8): P1D18;
    /**
     * ```
     *
     * message P1D1D {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P1D1D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PD;
    }
    function P1D1D$$new(p0: number, p1: number, p2: number, l: ds.PD): P1D1D;
    /**
     * ```
     *
     * message P1D1K {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P1D1K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PK;
    }
    function P1D1K$$new(p0: number, p1: number, p2: number, l: ds.PK): P1D1K;
    /**
     * ```
     *
     * message P1D1S {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P1D1S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PS;
    }
    function P1D1S$$new(p0: number, p1: number, p2: number, l: ds.PS): P1D1S;
    /**
     * ```
     *
     * message P11111 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P11111 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P1;
    }
    function P11111$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P1): P11111;
    /**
     * ```
     *
     * message P11114 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P11114 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P4;
    }
    function P11114$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P4): P11114;
    /**
     * ```
     *
     * message P11118 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P11118 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P8;
    }
    function P11118$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P8): P11118;
    /**
     * ```
     *
     * message P1111D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P1111D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PD;
    }
    function P1111D$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PD): P1111D;
    /**
     * ```
     *
     * message P1111K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P1111K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PK;
    }
    function P1111K$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PK): P1111K;
    /**
     * ```
     *
     * message P1111S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P1111S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PS;
    }
    function P1111S$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PS): P1111S;
    /**
     * ```
     *
     * message P111 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P111 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P111$$new(p0: number, p1: number, l: ds.P1): P111;
    /**
     * ```
     *
     * message P114 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P114 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P114$$new(p0: number, p1: number, l: ds.P4): P114;
    /**
     * ```
     *
     * message P118 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P118 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P118$$new(p0: number, p1: number, l: ds.P8): P118;
    /**
     * ```
     *
     * message P11D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P11D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P11D$$new(p0: number, p1: number, l: ds.PD): P11D;
    /**
     * ```
     *
     * message P11K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P11K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P11K$$new(p0: number, p1: number, l: ds.PK): P11K;
    /**
     * ```
     *
     * message P11S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P11S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P11S$$new(p0: number, p1: number, l: ds.PS): P11S;
    /**
     * ```
     *
     * message P111K1 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P111K1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** l = 5, required */
        ['5']: ds.P1;
    }
    function P111K1$$new(p0: number, p1: number, p2: number, p3: string, l: ds.P1): P111K1;
    /**
     * ```
     *
     * message P111K4 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P111K4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** l = 5, required */
        ['5']: ds.P4;
    }
    function P111K4$$new(p0: number, p1: number, p2: number, p3: string, l: ds.P4): P111K4;
    /**
     * ```
     *
     * message P111K8 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P111K8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** l = 5, required */
        ['5']: ds.P8;
    }
    function P111K8$$new(p0: number, p1: number, p2: number, p3: string, l: ds.P8): P111K8;
    /**
     * ```
     *
     * message P111KD {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P111KD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** l = 5, required */
        ['5']: ds.PD;
    }
    function P111KD$$new(p0: number, p1: number, p2: number, p3: string, l: ds.PD): P111KD;
    /**
     * ```
     *
     * message P111KK {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P111KK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** l = 5, required */
        ['5']: ds.PK;
    }
    function P111KK$$new(p0: number, p1: number, p2: number, p3: string, l: ds.PK): P111KK;
    /**
     * ```
     *
     * message P111KS {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P111KS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** l = 5, required */
        ['5']: ds.PS;
    }
    function P111KS$$new(p0: number, p1: number, p2: number, p3: string, l: ds.PS): P111KS;
    /**
     * ```
     *
     * message P1141 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P1141 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P1;
    }
    function P1141$$new(p0: number, p1: number, p2: number, l: ds.P1): P1141;
    /**
     * ```
     *
     * message P1144 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P1144 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P4;
    }
    function P1144$$new(p0: number, p1: number, p2: number, l: ds.P4): P1144;
    /**
     * ```
     *
     * message P1148 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P1148 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P8;
    }
    function P1148$$new(p0: number, p1: number, p2: number, l: ds.P8): P1148;
    /**
     * ```
     *
     * message P114D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P114D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PD;
    }
    function P114D$$new(p0: number, p1: number, p2: number, l: ds.PD): P114D;
    /**
     * ```
     *
     * message P114K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P114K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PK;
    }
    function P114K$$new(p0: number, p1: number, p2: number, l: ds.PK): P114K;
    /**
     * ```
     *
     * message P114S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P114S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PS;
    }
    function P114S$$new(p0: number, p1: number, p2: number, l: ds.PS): P114S;
    /**
     * ```
     *
     * message P11K1 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P11K1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.P1;
    }
    function P11K1$$new(p0: number, p1: number, p2: string, l: ds.P1): P11K1;
    /**
     * ```
     *
     * message P11K4 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P11K4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.P4;
    }
    function P11K4$$new(p0: number, p1: number, p2: string, l: ds.P4): P11K4;
    /**
     * ```
     *
     * message P11K8 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P11K8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.P8;
    }
    function P11K8$$new(p0: number, p1: number, p2: string, l: ds.P8): P11K8;
    /**
     * ```
     *
     * message P11KD {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P11KD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.PD;
    }
    function P11KD$$new(p0: number, p1: number, p2: string, l: ds.PD): P11KD;
    /**
     * ```
     *
     * message P11KK {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P11KK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.PK;
    }
    function P11KK$$new(p0: number, p1: number, p2: string, l: ds.PK): P11KK;
    /**
     * ```
     *
     * message P11KS {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P11KS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.PS;
    }
    function P11KS$$new(p0: number, p1: number, p2: string, l: ds.PS): P11KS;
    /**
     * ```
     *
     * message P1DK1 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P1DK1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.P1;
    }
    function P1DK1$$new(p0: number, p1: number, p2: string, l: ds.P1): P1DK1;
    /**
     * ```
     *
     * message P1DK4 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P1DK4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.P4;
    }
    function P1DK4$$new(p0: number, p1: number, p2: string, l: ds.P4): P1DK4;
    /**
     * ```
     *
     * message P1DK8 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P1DK8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.P8;
    }
    function P1DK8$$new(p0: number, p1: number, p2: string, l: ds.P8): P1DK8;
    /**
     * ```
     *
     * message P1DKD {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P1DKD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.PD;
    }
    function P1DKD$$new(p0: number, p1: number, p2: string, l: ds.PD): P1DKD;
    /**
     * ```
     *
     * message P1DKK {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P1DKK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.PK;
    }
    function P1DKK$$new(p0: number, p1: number, p2: string, l: ds.PK): P1DKK;
    /**
     * ```
     *
     * message P1DKS {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P1DKS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.PS;
    }
    function P1DKS$$new(p0: number, p1: number, p2: string, l: ds.PS): P1DKS;
    /**
     * ```
     *
     * message P14441 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P14441 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P1;
    }
    function P14441$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P1): P14441;
    /**
     * ```
     *
     * message P14444 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P14444 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P4;
    }
    function P14444$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P4): P14444;
    /**
     * ```
     *
     * message P14448 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P14448 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P8;
    }
    function P14448$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P8): P14448;
    /**
     * ```
     *
     * message P1444D {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P1444D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PD;
    }
    function P1444D$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PD): P1444D;
    /**
     * ```
     *
     * message P1444K {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P1444K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PK;
    }
    function P1444K$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PK): P1444K;
    /**
     * ```
     *
     * message P1444S {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P1444S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PS;
    }
    function P1444S$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PS): P1444S;
    /**
     * ```
     *
     * message P111111 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P1 l = 6;
     * }
     * ```
     */
    interface P111111 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P1;
    }
    function P111111$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P1): P111111;
    /**
     * ```
     *
     * message P111114 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P4 l = 6;
     * }
     * ```
     */
    interface P111114 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P4;
    }
    function P111114$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P4): P111114;
    /**
     * ```
     *
     * message P111118 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P8 l = 6;
     * }
     * ```
     */
    interface P111118 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P8;
    }
    function P111118$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P8): P111118;
    /**
     * ```
     *
     * message P11111D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PD l = 6;
     * }
     * ```
     */
    interface P11111D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PD;
    }
    function P11111D$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PD): P11111D;
    /**
     * ```
     *
     * message P11111K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PK l = 6;
     * }
     * ```
     */
    interface P11111K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PK;
    }
    function P11111K$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PK): P11111K;
    /**
     * ```
     *
     * message P11111S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PS l = 6;
     * }
     * ```
     */
    interface P11111S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PS;
    }
    function P11111S$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PS): P11111S;
    /**
     * ```
     *
     * message P1D1111 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P1 l = 6;
     * }
     * ```
     */
    interface P1D1111 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P1;
    }
    function P1D1111$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P1): P1D1111;
    /**
     * ```
     *
     * message P1D1114 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P4 l = 6;
     * }
     * ```
     */
    interface P1D1114 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P4;
    }
    function P1D1114$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P4): P1D1114;
    /**
     * ```
     *
     * message P1D1118 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P8 l = 6;
     * }
     * ```
     */
    interface P1D1118 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P8;
    }
    function P1D1118$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P8): P1D1118;
    /**
     * ```
     *
     * message P1D111D {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PD l = 6;
     * }
     * ```
     */
    interface P1D111D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PD;
    }
    function P1D111D$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PD): P1D111D;
    /**
     * ```
     *
     * message P1D111K {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PK l = 6;
     * }
     * ```
     */
    interface P1D111K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PK;
    }
    function P1D111K$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PK): P1D111K;
    /**
     * ```
     *
     * message P1D111S {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PS l = 6;
     * }
     * ```
     */
    interface P1D111S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PS;
    }
    function P1D111S$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PS): P1D111S;
    /**
     * ```
     *
     * message P111141 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.P1 l = 6;
     * }
     * ```
     */
    interface P111141 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P1;
    }
    function P111141$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P1): P111141;
    /**
     * ```
     *
     * message P111144 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.P4 l = 6;
     * }
     * ```
     */
    interface P111144 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P4;
    }
    function P111144$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P4): P111144;
    /**
     * ```
     *
     * message P111148 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.P8 l = 6;
     * }
     * ```
     */
    interface P111148 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P8;
    }
    function P111148$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.P8): P111148;
    /**
     * ```
     *
     * message P11114D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.PD l = 6;
     * }
     * ```
     */
    interface P11114D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PD;
    }
    function P11114D$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PD): P11114D;
    /**
     * ```
     *
     * message P11114K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.PK l = 6;
     * }
     * ```
     */
    interface P11114K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PK;
    }
    function P11114K$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PK): P11114K;
    /**
     * ```
     *
     * message P11114S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required uint32 p4 = 5;
     *   required ds.PS l = 6;
     * }
     * ```
     */
    interface P11114S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PS;
    }
    function P11114S$$new(p0: number, p1: number, p2: number, p3: number, p4: number, l: ds.PS): P11114S;
    /**
     * ```
     *
     * message P11 {
     *   required int8 p0 = 1;
     *   required ds.P1 l = 2;
     * }
     * ```
     */
    interface P11 {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.P1;
    }
    function P11$$new(p0: number, l: ds.P1): P11;
    /**
     * ```
     *
     * message P14 {
     *   required int8 p0 = 1;
     *   required ds.P4 l = 2;
     * }
     * ```
     */
    interface P14 {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.P4;
    }
    function P14$$new(p0: number, l: ds.P4): P14;
    /**
     * ```
     *
     * message P18 {
     *   required int8 p0 = 1;
     *   required ds.P8 l = 2;
     * }
     * ```
     */
    interface P18 {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.P8;
    }
    function P18$$new(p0: number, l: ds.P8): P18;
    /**
     * ```
     *
     * message P1D {
     *   required int8 p0 = 1;
     *   required ds.PD l = 2;
     * }
     * ```
     */
    interface P1D {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.PD;
    }
    function P1D$$new(p0: number, l: ds.PD): P1D;
    /**
     * ```
     *
     * message P1K {
     *   required int8 p0 = 1;
     *   required ds.PK l = 2;
     * }
     * ```
     */
    interface P1K {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.PK;
    }
    function P1K$$new(p0: number, l: ds.PK): P1K;
    /**
     * ```
     *
     * message P1S {
     *   required int8 p0 = 1;
     *   required ds.PS l = 2;
     * }
     * ```
     */
    interface P1S {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.PS;
    }
    function P1S$$new(p0: number, l: ds.PS): P1S;
    /**
     * ```
     *
     * message P111K11 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P1 l = 6;
     * }
     * ```
     */
    interface P111K11 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P1;
    }
    function P111K11$$new(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.P1): P111K11;
    /**
     * ```
     *
     * message P111K14 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P4 l = 6;
     * }
     * ```
     */
    interface P111K14 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P4;
    }
    function P111K14$$new(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.P4): P111K14;
    /**
     * ```
     *
     * message P111K18 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.P8 l = 6;
     * }
     * ```
     */
    interface P111K18 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.P8;
    }
    function P111K18$$new(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.P8): P111K18;
    /**
     * ```
     *
     * message P111K1D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PD l = 6;
     * }
     * ```
     */
    interface P111K1D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PD;
    }
    function P111K1D$$new(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.PD): P111K1D;
    /**
     * ```
     *
     * message P111K1K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PK l = 6;
     * }
     * ```
     */
    interface P111K1K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PK;
    }
    function P111K1K$$new(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.PK): P111K1K;
    /**
     * ```
     *
     * message P111K1S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required bytes p3 = 4;
     *   required int8 p4 = 5;
     *   required ds.PS l = 6;
     * }
     * ```
     */
    interface P111K1S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: string;
        /** p4 = 5, required */
        ['5']: number;
        /** l = 6, required */
        ['6']: ds.PS;
    }
    function P111K1S$$new(p0: number, p1: number, p2: number, p3: string, p4: number, l: ds.PS): P111K1S;
    /**
     * ```
     *
     * message P1441 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P1441 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P1;
    }
    function P1441$$new(p0: number, p1: number, p2: number, l: ds.P1): P1441;
    /**
     * ```
     *
     * message P1444 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P1444 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P4;
    }
    function P1444$$new(p0: number, p1: number, p2: number, l: ds.P4): P1444;
    /**
     * ```
     *
     * message P1448 {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P1448 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P8;
    }
    function P1448$$new(p0: number, p1: number, p2: number, l: ds.P8): P1448;
    /**
     * ```
     *
     * message P144D {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P144D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PD;
    }
    function P144D$$new(p0: number, p1: number, p2: number, l: ds.PD): P144D;
    /**
     * ```
     *
     * message P144K {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P144K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PK;
    }
    function P144K$$new(p0: number, p1: number, p2: number, l: ds.PK): P144K;
    /**
     * ```
     *
     * message P144S {
     *   required int8 p0 = 1;
     *   required uint32 p1 = 2;
     *   required uint32 p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P144S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PS;
    }
    function P144S$$new(p0: number, p1: number, p2: number, l: ds.PS): P144S;
    /**
     * ```
     *
     * message P1111 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P1111 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P1;
    }
    function P1111$$new(p0: number, p1: number, p2: number, l: ds.P1): P1111;
    /**
     * ```
     *
     * message P1114 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P1114 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P4;
    }
    function P1114$$new(p0: number, p1: number, p2: number, l: ds.P4): P1114;
    /**
     * ```
     *
     * message P1118 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P1118 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P8;
    }
    function P1118$$new(p0: number, p1: number, p2: number, l: ds.P8): P1118;
    /**
     * ```
     *
     * message P111D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P111D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PD;
    }
    function P111D$$new(p0: number, p1: number, p2: number, l: ds.PD): P111D;
    /**
     * ```
     *
     * message P111K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P111K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PK;
    }
    function P111K$$new(p0: number, p1: number, p2: number, l: ds.PK): P111K;
    /**
     * ```
     *
     * message P111S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P111S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PS;
    }
    function P111S$$new(p0: number, p1: number, p2: number, l: ds.PS): P111S;
    /**
     * ```
     *
     * message P11S1 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface P11S1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.P1;
    }
    function P11S1$$new(p0: number, p1: number, p2: string, l: ds.P1): P11S1;
    /**
     * ```
     *
     * message P11S4 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface P11S4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.P4;
    }
    function P11S4$$new(p0: number, p1: number, p2: string, l: ds.P4): P11S4;
    /**
     * ```
     *
     * message P11S8 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface P11S8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.P8;
    }
    function P11S8$$new(p0: number, p1: number, p2: string, l: ds.P8): P11S8;
    /**
     * ```
     *
     * message P11SD {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface P11SD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.PD;
    }
    function P11SD$$new(p0: number, p1: number, p2: string, l: ds.PD): P11SD;
    /**
     * ```
     *
     * message P11SK {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface P11SK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.PK;
    }
    function P11SK$$new(p0: number, p1: number, p2: string, l: ds.PK): P11SK;
    /**
     * ```
     *
     * message P11SS {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required string p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface P11SS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** l = 4, required */
        ['4']: ds.PS;
    }
    function P11SS$$new(p0: number, p1: number, p2: string, l: ds.PS): P11SS;
    /**
     * ```
     *
     * message P1DK11 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P1DK11 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P1;
    }
    function P1DK11$$new(p0: number, p1: number, p2: string, p3: number, l: ds.P1): P1DK11;
    /**
     * ```
     *
     * message P1DK14 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P1DK14 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P4;
    }
    function P1DK14$$new(p0: number, p1: number, p2: string, p3: number, l: ds.P4): P1DK14;
    /**
     * ```
     *
     * message P1DK18 {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P1DK18 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P8;
    }
    function P1DK18$$new(p0: number, p1: number, p2: string, p3: number, l: ds.P8): P1DK18;
    /**
     * ```
     *
     * message P1DK1D {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P1DK1D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PD;
    }
    function P1DK1D$$new(p0: number, p1: number, p2: string, p3: number, l: ds.PD): P1DK1D;
    /**
     * ```
     *
     * message P1DK1K {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P1DK1K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PK;
    }
    function P1DK1K$$new(p0: number, p1: number, p2: string, p3: number, l: ds.PK): P1DK1K;
    /**
     * ```
     *
     * message P1DK1S {
     *   required int8 p0 = 1;
     *   required uint64 p1 = 2;
     *   required bytes p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P1DK1S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: string;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PS;
    }
    function P1DK1S$$new(p0: number, p1: number, p2: string, p3: number, l: ds.PS): P1DK1S;
    /**
     * ```
     *
     * message P11141 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface P11141 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P1;
    }
    function P11141$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P1): P11141;
    /**
     * ```
     *
     * message P11144 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface P11144 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P4;
    }
    function P11144$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P4): P11144;
    /**
     * ```
     *
     * message P11148 {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface P11148 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P8;
    }
    function P11148$$new(p0: number, p1: number, p2: number, p3: number, l: ds.P8): P11148;
    /**
     * ```
     *
     * message P1114D {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface P1114D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PD;
    }
    function P1114D$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PD): P1114D;
    /**
     * ```
     *
     * message P1114K {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface P1114K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PK;
    }
    function P1114K$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PK): P1114K;
    /**
     * ```
     *
     * message P1114S {
     *   required int8 p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required uint32 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface P1114S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PS;
    }
    function P1114S$$new(p0: number, p1: number, p2: number, p3: number, l: ds.PS): P1114S;
}
