import { ds } from '../../';
export declare namespace ps {
    /**
     * ```
     *
     * message PSK1 {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PSK1 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PSK1$$new(p0: string, p1: string, l: ds.P1): PSK1;
    /**
     * ```
     *
     * message PSK4 {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PSK4 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PSK4$$new(p0: string, p1: string, l: ds.P4): PSK4;
    /**
     * ```
     *
     * message PSK8 {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PSK8 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PSK8$$new(p0: string, p1: string, l: ds.P8): PSK8;
    /**
     * ```
     *
     * message PSKD {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PSKD {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PSKD$$new(p0: string, p1: string, l: ds.PD): PSKD;
    /**
     * ```
     *
     * message PSKK {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PSKK {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PSKK$$new(p0: string, p1: string, l: ds.PK): PSKK;
    /**
     * ```
     *
     * message PSKS {
     *   required string p0 = 1;
     *   required bytes p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PSKS {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PSKS$$new(p0: string, p1: string, l: ds.PS): PSKS;
    /**
     * ```
     *
     * message PS111 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P1 l = 4;
     * }
     * ```
     */
    interface PS111 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P1;
    }
    function PS111$$new(p0: string, p1: number, p2: number, l: ds.P1): PS111;
    /**
     * ```
     *
     * message PS114 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P4 l = 4;
     * }
     * ```
     */
    interface PS114 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P4;
    }
    function PS114$$new(p0: string, p1: number, p2: number, l: ds.P4): PS114;
    /**
     * ```
     *
     * message PS118 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.P8 l = 4;
     * }
     * ```
     */
    interface PS118 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.P8;
    }
    function PS118$$new(p0: string, p1: number, p2: number, l: ds.P8): PS118;
    /**
     * ```
     *
     * message PS11D {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PD l = 4;
     * }
     * ```
     */
    interface PS11D {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PD;
    }
    function PS11D$$new(p0: string, p1: number, p2: number, l: ds.PD): PS11D;
    /**
     * ```
     *
     * message PS11K {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PK l = 4;
     * }
     * ```
     */
    interface PS11K {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PK;
    }
    function PS11K$$new(p0: string, p1: number, p2: number, l: ds.PK): PS11K;
    /**
     * ```
     *
     * message PS11S {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required int8 p2 = 3;
     *   required ds.PS l = 4;
     * }
     * ```
     */
    interface PS11S {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** p2 = 3, required */
        ['3']: number;
        /** l = 4, required */
        ['4']: ds.PS;
    }
    function PS11S$$new(p0: string, p1: number, p2: number, l: ds.PS): PS11S;
    /**
     * ```
     *
     * message PSD1 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PSD1 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PSD1$$new(p0: string, p1: number, l: ds.P1): PSD1;
    /**
     * ```
     *
     * message PSD4 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PSD4 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PSD4$$new(p0: string, p1: number, l: ds.P4): PSD4;
    /**
     * ```
     *
     * message PSD8 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PSD8 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PSD8$$new(p0: string, p1: number, l: ds.P8): PSD8;
    /**
     * ```
     *
     * message PSDD {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PSDD {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PSDD$$new(p0: string, p1: number, l: ds.PD): PSDD;
    /**
     * ```
     *
     * message PSDK {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PSDK {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PSDK$$new(p0: string, p1: number, l: ds.PK): PSDK;
    /**
     * ```
     *
     * message PSDS {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PSDS {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PSDS$$new(p0: string, p1: number, l: ds.PS): PSDS;
    /**
     * ```
     *
     * message PS41 {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PS41 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PS41$$new(p0: string, p1: number, l: ds.P1): PS41;
    /**
     * ```
     *
     * message PS44 {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PS44 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PS44$$new(p0: string, p1: number, l: ds.P4): PS44;
    /**
     * ```
     *
     * message PS48 {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PS48 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PS48$$new(p0: string, p1: number, l: ds.P8): PS48;
    /**
     * ```
     *
     * message PS4D {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PS4D {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PS4D$$new(p0: string, p1: number, l: ds.PD): PS4D;
    /**
     * ```
     *
     * message PS4K {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PS4K {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PS4K$$new(p0: string, p1: number, l: ds.PK): PS4K;
    /**
     * ```
     *
     * message PS4S {
     *   required string p0 = 1;
     *   required uint32 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PS4S {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PS4S$$new(p0: string, p1: number, l: ds.PS): PS4S;
    /**
     * ```
     *
     * message PSS1 {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PSS1 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PSS1$$new(p0: string, p1: string, l: ds.P1): PSS1;
    /**
     * ```
     *
     * message PSS4 {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PSS4 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PSS4$$new(p0: string, p1: string, l: ds.P4): PSS4;
    /**
     * ```
     *
     * message PSS8 {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PSS8 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PSS8$$new(p0: string, p1: string, l: ds.P8): PSS8;
    /**
     * ```
     *
     * message PSSD {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PSSD {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PSSD$$new(p0: string, p1: string, l: ds.PD): PSSD;
    /**
     * ```
     *
     * message PSSK {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PSSK {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PSSK$$new(p0: string, p1: string, l: ds.PK): PSSK;
    /**
     * ```
     *
     * message PSSS {
     *   required string p0 = 1;
     *   required string p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PSSS {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: string;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PSSS$$new(p0: string, p1: string, l: ds.PS): PSSS;
    /**
     * ```
     *
     * message PS11 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PS11 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PS11$$new(p0: string, p1: number, l: ds.P1): PS11;
    /**
     * ```
     *
     * message PS14 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PS14 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PS14$$new(p0: string, p1: number, l: ds.P4): PS14;
    /**
     * ```
     *
     * message PS18 {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PS18 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PS18$$new(p0: string, p1: number, l: ds.P8): PS18;
    /**
     * ```
     *
     * message PS1D {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PS1D {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PS1D$$new(p0: string, p1: number, l: ds.PD): PS1D;
    /**
     * ```
     *
     * message PS1K {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PS1K {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PS1K$$new(p0: string, p1: number, l: ds.PK): PS1K;
    /**
     * ```
     *
     * message PS1S {
     *   required string p0 = 1;
     *   required int8 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PS1S {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PS1S$$new(p0: string, p1: number, l: ds.PS): PS1S;
    /**
     * ```
     *
     * message PS81 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P1 l = 3;
     * }
     * ```
     */
    interface PS81 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P1;
    }
    function PS81$$new(p0: string, p1: number, l: ds.P1): PS81;
    /**
     * ```
     *
     * message PS84 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P4 l = 3;
     * }
     * ```
     */
    interface PS84 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P4;
    }
    function PS84$$new(p0: string, p1: number, l: ds.P4): PS84;
    /**
     * ```
     *
     * message PS88 {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.P8 l = 3;
     * }
     * ```
     */
    interface PS88 {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.P8;
    }
    function PS88$$new(p0: string, p1: number, l: ds.P8): PS88;
    /**
     * ```
     *
     * message PS8D {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PD l = 3;
     * }
     * ```
     */
    interface PS8D {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PD;
    }
    function PS8D$$new(p0: string, p1: number, l: ds.PD): PS8D;
    /**
     * ```
     *
     * message PS8K {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PK l = 3;
     * }
     * ```
     */
    interface PS8K {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PK;
    }
    function PS8K$$new(p0: string, p1: number, l: ds.PK): PS8K;
    /**
     * ```
     *
     * message PS8S {
     *   required string p0 = 1;
     *   required uint64 p1 = 2;
     *   required ds.PS l = 3;
     * }
     * ```
     */
    interface PS8S {
        /** p0 = 1, required */
        ['1']: string;
        /** p1 = 2, required */
        ['2']: number;
        /** l = 3, required */
        ['3']: ds.PS;
    }
    function PS8S$$new(p0: string, p1: number, l: ds.PS): PS8S;
    /**
     * ```
     *
     * message PS1 {
     *   required string p0 = 1;
     *   required ds.P1 l = 2;
     * }
     * ```
     */
    interface PS1 {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.P1;
    }
    function PS1$$new(p0: string, l: ds.P1): PS1;
    /**
     * ```
     *
     * message PS4 {
     *   required string p0 = 1;
     *   required ds.P4 l = 2;
     * }
     * ```
     */
    interface PS4 {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.P4;
    }
    function PS4$$new(p0: string, l: ds.P4): PS4;
    /**
     * ```
     *
     * message PS8 {
     *   required string p0 = 1;
     *   required ds.P8 l = 2;
     * }
     * ```
     */
    interface PS8 {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.P8;
    }
    function PS8$$new(p0: string, l: ds.P8): PS8;
    /**
     * ```
     *
     * message PSD {
     *   required string p0 = 1;
     *   required ds.PD l = 2;
     * }
     * ```
     */
    interface PSD {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.PD;
    }
    function PSD$$new(p0: string, l: ds.PD): PSD;
    /**
     * ```
     *
     * message PSK {
     *   required string p0 = 1;
     *   required ds.PK l = 2;
     * }
     * ```
     */
    interface PSK {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.PK;
    }
    function PSK$$new(p0: string, l: ds.PK): PSK;
    /**
     * ```
     *
     * message PSS {
     *   required string p0 = 1;
     *   required ds.PS l = 2;
     * }
     * ```
     */
    interface PSS {
        /** p0 = 1, required */
        ['1']: string;
        /** l = 2, required */
        ['2']: ds.PS;
    }
    function PSS$$new(p0: string, l: ds.PS): PSS;
}
