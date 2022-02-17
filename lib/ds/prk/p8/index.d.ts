import { ds } from '../../';
export declare namespace p8 {
    /**
     * ```
     *
     * message P8D1 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P8D1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P8D1$$new(p0: number, p1: number, l: ds.P1): P8D1;
    /**
     * ```
     *
     * message P8D4 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P8D4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P8D4$$new(p0: number, p1: number, l: ds.P4): P8D4;
    /**
     * ```
     *
     * message P8D8 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P8D8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P8D8$$new(p0: number, p1: number, l: ds.P8): P8D8;
    /**
     * ```
     *
     * message P8DD {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P8DD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P8DD$$new(p0: number, p1: number, l: ds.PD): P8DD;
    /**
     * ```
     *
     * message P8DK {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P8DK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P8DK$$new(p0: number, p1: number, l: ds.PK): P8DK;
    /**
     * ```
     *
     * message P8DS {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P8DS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P8DS$$new(p0: number, p1: number, l: ds.PS): P8DS;
    /**
     * ```
     *
     * message P81 {
     *   required uint64 p0 = 1;
     *   required ds.P1 l = 2;
     * }
     * ```
     */
    interface P81 {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.P1;
    }
    function P81$$new(p0: number, l: ds.P1): P81;
    /**
     * ```
     *
     * message P84 {
     *   required uint64 p0 = 1;
     *   required ds.P4 l = 2;
     * }
     * ```
     */
    interface P84 {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.P4;
    }
    function P84$$new(p0: number, l: ds.P4): P84;
    /**
     * ```
     *
     * message P88 {
     *   required uint64 p0 = 1;
     *   required ds.P8 l = 2;
     * }
     * ```
     */
    interface P88 {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.P8;
    }
    function P88$$new(p0: number, l: ds.P8): P88;
    /**
     * ```
     *
     * message P8D {
     *   required uint64 p0 = 1;
     *   required ds.PD l = 2;
     * }
     * ```
     */
    interface P8D {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.PD;
    }
    function P8D$$new(p0: number, l: ds.PD): P8D;
    /**
     * ```
     *
     * message P8K {
     *   required uint64 p0 = 1;
     *   required ds.PK l = 2;
     * }
     * ```
     */
    interface P8K {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.PK;
    }
    function P8K$$new(p0: number, l: ds.PK): P8K;
    /**
     * ```
     *
     * message P8S {
     *   required uint64 p0 = 1;
     *   required ds.PS l = 2;
     * }
     * ```
     */
    interface P8S {
        /** p0 = 1, required */
        ['1']: number;
        /** l = 2, required */
        ['2']: ds.PS;
    }
    function P8S$$new(p0: number, l: ds.PS): P8S;
    /**
     * ```
     *
     * message P881 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P881 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P881$$new(p0: number, p1: number, l: ds.P1): P881;
    /**
     * ```
     *
     * message P884 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P884 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P884$$new(p0: number, p1: number, l: ds.P4): P884;
    /**
     * ```
     *
     * message P888 {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P888 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P888$$new(p0: number, p1: number, l: ds.P8): P888;
    /**
     * ```
     *
     * message P88D {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P88D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P88D$$new(p0: number, p1: number, l: ds.PD): P88D;
    /**
     * ```
     *
     * message P88K {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P88K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P88K$$new(p0: number, p1: number, l: ds.PK): P88K;
    /**
     * ```
     *
     * message P88S {
     *   required uint64 p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P88S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P88S$$new(p0: number, p1: number, l: ds.PS): P88S;
    /**
     * ```
     *
     * message P8K1 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P8K1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P8K1$$new(p0: number, p1: string, l: ds.P1): P8K1;
    /**
     * ```
     *
     * message P8K4 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P8K4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P8K4$$new(p0: number, p1: string, l: ds.P4): P8K4;
    /**
     * ```
     *
     * message P8K8 {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P8K8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P8K8$$new(p0: number, p1: string, l: ds.P8): P8K8;
    /**
     * ```
     *
     * message P8KD {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P8KD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P8KD$$new(p0: number, p1: string, l: ds.PD): P8KD;
    /**
     * ```
     *
     * message P8KK {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P8KK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P8KK$$new(p0: number, p1: string, l: ds.PK): P8KK;
    /**
     * ```
     *
     * message P8KS {
     *   required uint64 p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P8KS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P8KS$$new(p0: number, p1: string, l: ds.PS): P8KS;
    /**
     * ```
     *
     * message P841 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P841 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P841$$new(p0: number, p1: number, l: ds.P1): P841;
    /**
     * ```
     *
     * message P844 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P844 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P844$$new(p0: number, p1: number, l: ds.P4): P844;
    /**
     * ```
     *
     * message P848 {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P848 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P848$$new(p0: number, p1: number, l: ds.P8): P848;
    /**
     * ```
     *
     * message P84D {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P84D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P84D$$new(p0: number, p1: number, l: ds.PD): P84D;
    /**
     * ```
     *
     * message P84K {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P84K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P84K$$new(p0: number, p1: number, l: ds.PK): P84K;
    /**
     * ```
     *
     * message P84S {
     *   required uint64 p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P84S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P84S$$new(p0: number, p1: number, l: ds.PS): P84S;
    /**
     * ```
     *
     * message P811 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P811 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P811$$new(p0: number, p1: number, l: ds.P1): P811;
    /**
     * ```
     *
     * message P814 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P814 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P814$$new(p0: number, p1: number, l: ds.P4): P814;
    /**
     * ```
     *
     * message P818 {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P818 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P818$$new(p0: number, p1: number, l: ds.P8): P818;
    /**
     * ```
     *
     * message P81D {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P81D {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P81D$$new(p0: number, p1: number, l: ds.PD): P81D;
    /**
     * ```
     *
     * message P81K {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P81K {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P81K$$new(p0: number, p1: number, l: ds.PK): P81K;
    /**
     * ```
     *
     * message P81S {
     *   required uint64 p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P81S {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P81S$$new(p0: number, p1: number, l: ds.PS): P81S;
    /**
     * ```
     *
     * message P8S1 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface P8S1 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function P8S1$$new(p0: number, p1: string, l: ds.P1): P8S1;
    /**
     * ```
     *
     * message P8S4 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface P8S4 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function P8S4$$new(p0: number, p1: string, l: ds.P4): P8S4;
    /**
     * ```
     *
     * message P8S8 {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface P8S8 {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function P8S8$$new(p0: number, p1: string, l: ds.P8): P8S8;
    /**
     * ```
     *
     * message P8SD {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface P8SD {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function P8SD$$new(p0: number, p1: string, l: ds.PD): P8SD;
    /**
     * ```
     *
     * message P8SK {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface P8SK {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function P8SK$$new(p0: number, p1: string, l: ds.PK): P8SK;
    /**
     * ```
     *
     * message P8SS {
     *   required uint64 p0 = 1;
     *   required string p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface P8SS {
        /** p0 = 1, required */
        ['1']: number;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function P8SS$$new(p0: number, p1: string, l: ds.PS): P8SS;
}
