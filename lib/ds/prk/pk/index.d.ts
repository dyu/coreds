import { ds } from '../../';
export declare namespace pk {
    /**
     * ```
     *
     * message PK111 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface PK111 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P1;
    }
    function PK111$$new(p0: string, p1: number, p2: number, l: ds.P1): PK111;
    /**
     * ```
     *
     * message PK114 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface PK114 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P4;
    }
    function PK114$$new(p0: string, p1: number, p2: number, l: ds.P4): PK114;
    /**
     * ```
     *
     * message PK118 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface PK118 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P8;
    }
    function PK118$$new(p0: string, p1: number, p2: number, l: ds.P8): PK118;
    /**
     * ```
     *
     * message PK11D {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface PK11D {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PD;
    }
    function PK11D$$new(p0: string, p1: number, p2: number, l: ds.PD): PK11D;
    /**
     * ```
     *
     * message PK11K {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface PK11K {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PK;
    }
    function PK11K$$new(p0: string, p1: number, p2: number, l: ds.PK): PK11K;
    /**
     * ```
     *
     * message PK11S {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface PK11S {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PS;
    }
    function PK11S$$new(p0: string, p1: number, p2: number, l: ds.PS): PK11S;
    /**
     * ```
     *
     * message PK81 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PK81 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PK81$$new(p0: string, p1: number, l: ds.P1): PK81;
    /**
     * ```
     *
     * message PK84 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PK84 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PK84$$new(p0: string, p1: number, l: ds.P4): PK84;
    /**
     * ```
     *
     * message PK88 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PK88 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PK88$$new(p0: string, p1: number, l: ds.P8): PK88;
    /**
     * ```
     *
     * message PK8D {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PK8D {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PK8D$$new(p0: string, p1: number, l: ds.PD): PK8D;
    /**
     * ```
     *
     * message PK8K {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PK8K {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PK8K$$new(p0: string, p1: number, l: ds.PK): PK8K;
    /**
     * ```
     *
     * message PK8S {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PK8S {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PK8S$$new(p0: string, p1: number, l: ds.PS): PK8S;
    /**
     * ```
     *
     * message PK1111 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P1 l = 5;
     * }
     * ```
     */
    interface PK1111 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P1;
    }
    function PK1111$$new(p0: string, p1: number, p2: number, p3: number, l: ds.P1): PK1111;
    /**
     * ```
     *
     * message PK1114 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P4 l = 5;
     * }
     * ```
     */
    interface PK1114 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P4;
    }
    function PK1114$$new(p0: string, p1: number, p2: number, p3: number, l: ds.P4): PK1114;
    /**
     * ```
     *
     * message PK1118 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.P8 l = 5;
     * }
     * ```
     */
    interface PK1118 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.P8;
    }
    function PK1118$$new(p0: string, p1: number, p2: number, p3: number, l: ds.P8): PK1118;
    /**
     * ```
     *
     * message PK111D {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PD l = 5;
     * }
     * ```
     */
    interface PK111D {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PD;
    }
    function PK111D$$new(p0: string, p1: number, p2: number, p3: number, l: ds.PD): PK111D;
    /**
     * ```
     *
     * message PK111K {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PK l = 5;
     * }
     * ```
     */
    interface PK111K {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PK;
    }
    function PK111K$$new(p0: string, p1: number, p2: number, p3: number, l: ds.PK): PK111K;
    /**
     * ```
     *
     * message PK111S {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required int8 p3 = 4;
     *   required ds.PS l = 5;
     * }
     * ```
     */
    interface PK111S {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** p3 = 4, required */
        ['4']: number;
        /** l = 5, required */
        ['5']: ds.PS;
    }
    function PK111S$$new(p0: string, p1: number, p2: number, p3: number, l: ds.PS): PK111S;
    /**
     * ```
     *
     * message PK11 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PK11 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PK11$$new(p0: string, p1: number, l: ds.P1): PK11;
    /**
     * ```
     *
     * message PK14 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PK14 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PK14$$new(p0: string, p1: number, l: ds.P4): PK14;
    /**
     * ```
     *
     * message PK18 {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PK18 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PK18$$new(p0: string, p1: number, l: ds.P8): PK18;
    /**
     * ```
     *
     * message PK1D {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PK1D {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PK1D$$new(p0: string, p1: number, l: ds.PD): PK1D;
    /**
     * ```
     *
     * message PK1K {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PK1K {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PK1K$$new(p0: string, p1: number, l: ds.PK): PK1K;
    /**
     * ```
     *
     * message PK1S {
     *   required bytes p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PK1S {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PK1S$$new(p0: string, p1: number, l: ds.PS): PK1S;
    /**
     * ```
     *
     * message PKK1 {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PKK1 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PKK1$$new(p0: string, p1: string, l: ds.P1): PKK1;
    /**
     * ```
     *
     * message PKK4 {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PKK4 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PKK4$$new(p0: string, p1: string, l: ds.P4): PKK4;
    /**
     * ```
     *
     * message PKK8 {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PKK8 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PKK8$$new(p0: string, p1: string, l: ds.P8): PKK8;
    /**
     * ```
     *
     * message PKKD {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PKKD {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PKKD$$new(p0: string, p1: string, l: ds.PD): PKKD;
    /**
     * ```
     *
     * message PKKK {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PKKK {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PKKK$$new(p0: string, p1: string, l: ds.PK): PKKK;
    /**
     * ```
     *
     * message PKKS {
     *   required bytes p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PKKS {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PKKS$$new(p0: string, p1: string, l: ds.PS): PKKS;
    /**
     * ```
     *
     * message PK1 {
     *   required bytes p0 = 1;
     *   required ds.P1 l = 2;
     * }
     * ```
     */
    interface PK1 {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.P1;
    }
    function PK1$$new(p0: string, l: ds.P1): PK1;
    /**
     * ```
     *
     * message PK4 {
     *   required bytes p0 = 1;
     *   required ds.P4 l = 2;
     * }
     * ```
     */
    interface PK4 {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.P4;
    }
    function PK4$$new(p0: string, l: ds.P4): PK4;
    /**
     * ```
     *
     * message PK8 {
     *   required bytes p0 = 1;
     *   required ds.P8 l = 2;
     * }
     * ```
     */
    interface PK8 {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.P8;
    }
    function PK8$$new(p0: string, l: ds.P8): PK8;
    /**
     * ```
     *
     * message PKD {
     *   required bytes p0 = 1;
     *   required ds.PD l = 2;
     * }
     * ```
     */
    interface PKD {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.PD;
    }
    function PKD$$new(p0: string, l: ds.PD): PKD;
    /**
     * ```
     *
     * message PKK {
     *   required bytes p0 = 1;
     *   required ds.PK l = 2;
     * }
     * ```
     */
    interface PKK {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.PK;
    }
    function PKK$$new(p0: string, l: ds.PK): PKK;
    /**
     * ```
     *
     * message PKS {
     *   required bytes p0 = 1;
     *   required ds.PS l = 2;
     * }
     * ```
     */
    interface PKS {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.PS;
    }
    function PKS$$new(p0: string, l: ds.PS): PKS;
    /**
     * ```
     *
     * message PKD1 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PKD1 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PKD1$$new(p0: string, p1: number, l: ds.P1): PKD1;
    /**
     * ```
     *
     * message PKD4 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PKD4 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PKD4$$new(p0: string, p1: number, l: ds.P4): PKD4;
    /**
     * ```
     *
     * message PKD8 {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PKD8 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PKD8$$new(p0: string, p1: number, l: ds.P8): PKD8;
    /**
     * ```
     *
     * message PKDD {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PKDD {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PKDD$$new(p0: string, p1: number, l: ds.PD): PKDD;
    /**
     * ```
     *
     * message PKDK {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PKDK {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PKDK$$new(p0: string, p1: number, l: ds.PK): PKDK;
    /**
     * ```
     *
     * message PKDS {
     *   required bytes p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PKDS {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PKDS$$new(p0: string, p1: number, l: ds.PS): PKDS;
    /**
     * ```
     *
     * message PK41 {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PK41 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PK41$$new(p0: string, p1: number, l: ds.P1): PK41;
    /**
     * ```
     *
     * message PK44 {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PK44 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PK44$$new(p0: string, p1: number, l: ds.P4): PK44;
    /**
     * ```
     *
     * message PK48 {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PK48 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PK48$$new(p0: string, p1: number, l: ds.P8): PK48;
    /**
     * ```
     *
     * message PK4D {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PK4D {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PK4D$$new(p0: string, p1: number, l: ds.PD): PK4D;
    /**
     * ```
     *
     * message PK4K {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PK4K {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PK4K$$new(p0: string, p1: number, l: ds.PK): PK4K;
    /**
     * ```
     *
     * message PK4S {
     *   required bytes p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PK4S {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PK4S$$new(p0: string, p1: number, l: ds.PS): PK4S;
    /**
     * ```
     *
     * message PKS1 {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PKS1 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PKS1$$new(p0: string, p1: string, l: ds.P1): PKS1;
    /**
     * ```
     *
     * message PKS4 {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PKS4 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PKS4$$new(p0: string, p1: string, l: ds.P4): PKS4;
    /**
     * ```
     *
     * message PKS8 {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PKS8 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PKS8$$new(p0: string, p1: string, l: ds.P8): PKS8;
    /**
     * ```
     *
     * message PKSD {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PKSD {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PKSD$$new(p0: string, p1: string, l: ds.PD): PKSD;
    /**
     * ```
     *
     * message PKSK {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PKSK {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PKSK$$new(p0: string, p1: string, l: ds.PK): PKSK;
    /**
     * ```
     *
     * message PKSS {
     *   required bytes p0 = 1;
     *   required string p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PKSS {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PKSS$$new(p0: string, p1: string, l: ds.PS): PKSS;
}
