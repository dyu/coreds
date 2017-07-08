import mc_ from './mc';
export declare namespace ds {
    export import MultiCAS = mc_;
    /**
     * ```
     *
     * message ParamId {
     *   required uint32 id = 1;
     * }
     * ```
     */
    interface ParamId {
        /** id = 1, required */
        ['1']: number;
    }
    namespace ParamId {
        const enum $ {
            /** required: 1 */
            id = "1",
        }
        const enum $0 {
            id = 1,
        }
        function $new(id: number): ParamId;
        const $d: {
            $rfbs: number;
            $rfdf: string[];
            $fdf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            $new: (id: number) => ParamId;
        };
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
    interface ParamKey {
        /** key = 1, required */
        ['1']: string;
        /** parent_key = 2, optional */
        ['2']?: string;
    }
    namespace ParamKey {
        const enum $ {
            /** required: 1 */
            key = "1",
            /** optional: 2 */
            parentKey = "2",
        }
        const enum $0 {
            key = 1,
            parentKey = 2,
        }
        function $new(key: string, parentKey?: string): ParamKey;
        const $d: {
            $rfbs: number;
            $fdikf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '2': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            $new: (key: string, parentKey?: string | undefined) => ParamKey;
        };
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
    interface ParamUpdate {
        /** key = 1, required */
        ['1']: string;
        /** mc = 2, required */
        ['2']: MultiCAS;
        /** id = 3, optional */
        ['3']?: number;
    }
    namespace ParamUpdate {
        const enum $ {
            /** required: 1 */
            key = "1",
            /** required: 2 */
            mc = "2",
            /** optional: 3 */
            id = "3",
        }
        const enum $0 {
            key = 1,
            mc = 2,
            id = 3,
        }
        function $new(key: string, mc: MultiCAS, id?: number): ParamUpdate;
        const $d: {
            $rfbs: number;
            $fdf: string[];
            $fmf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '2': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
                d_fn: () => {};
            };
            '3': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            $new: (key: string, mc: MultiCAS, id?: number | undefined) => ParamUpdate;
        };
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
    interface ParamRangeKey {
        /** desc = 1, required */
        ['1']: boolean;
        /** limit = 2, optional */
        ['2']?: number;
        /** start_key = 3, optional */
        ['3']?: string;
        /** parent_key = 4, optional */
        ['4']?: string;
    }
    namespace ParamRangeKey {
        const enum $ {
            /** required: 1 */
            desc = "1",
            /** optional: 2 */
            limit = "2",
            /** optional: 3 */
            startKey = "3",
            /** optional: 4 */
            parentKey = "4",
        }
        const enum $0 {
            desc = 1,
            limit = 2,
            startKey = 3,
            parentKey = 4,
        }
        function $new(desc: boolean, limit?: number, startKey?: string, parentKey?: string): ParamRangeKey;
        const $d: {
            $rfbs: number;
            $rfdf: string[];
            $fdf: string[];
            $fdikf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '2': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '3': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '4': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            $new: (desc: boolean, limit?: number | undefined, startKey?: string | undefined, parentKey?: string | undefined) => ParamRangeKey;
        };
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
    interface ACResult {
        /** name = 1, required */
        ['1']: string;
        /** value = 2, required */
        ['2']: string;
        /** id = 3, optional */
        ['3']?: number;
    }
    namespace ACResult {
        /**
         * ```
         *
         * message PList {
         *   repeated ACResult p = 1;
         * }
         * ```
         */
        interface PList {
            /** p = 1, repeated */
            ['1']?: ACResult[];
        }
        const enum $ {
            /** required: 1 */
            name = "1",
            /** required: 2 */
            value = "2",
            /** optional: 3 */
            id = "3",
        }
        const enum $0 {
            name = 1,
            value = 2,
            id = 3,
        }
        function $new(name: string, value: string, id?: number): ACResult;
        const $d: {
            $rfbs: number;
            $rfdf: string[];
            $fdf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '2': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '3': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            $new: (name: string, value: string, id?: number | undefined) => ACResult;
        };
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
    interface P1 {
        /** value = 1, required */
        ['1']: number;
        /** end = 2, optional */
        ['2']?: number;
        /** pgstart = 3, optional */
        ['3']?: number;
        /** prk = 4, required */
        ['4']: ParamRangeKey;
    }
    namespace P1 {
        const enum $ {
            /** required: 1 */
            value = "1",
            /** optional: 2 */
            end = "2",
            /** optional: 3 */
            pgstart = "3",
            /** required: 4 */
            prk = "4",
        }
        const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $new(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P1;
        const $d: {
            $rfbs: number;
            $rfdf: string[];
            $fdf: string[];
            $fmf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '2': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '3': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '4': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
                d_fn: () => {
                    $rfbs: number;
                    $rfdf: string[];
                    $fdf: string[];
                    $fdikf: string[];
                    '1': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '2': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '3': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '4': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    $new: (desc: boolean, limit?: number | undefined, startKey?: string | undefined, parentKey?: string | undefined) => ParamRangeKey;
                };
            };
            $new: (value: number, prk: ParamRangeKey, end?: number | undefined, pgstart?: number | undefined) => P1;
        };
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
    interface P4 {
        /** value = 1, required */
        ['1']: number;
        /** end = 2, optional */
        ['2']?: number;
        /** pgstart = 3, optional */
        ['3']?: number;
        /** prk = 4, required */
        ['4']: ParamRangeKey;
    }
    namespace P4 {
        const enum $ {
            /** required: 1 */
            value = "1",
            /** optional: 2 */
            end = "2",
            /** optional: 3 */
            pgstart = "3",
            /** required: 4 */
            prk = "4",
        }
        const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $new(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P4;
        const $d: {
            $rfbs: number;
            $rfdf: string[];
            $fdf: string[];
            $fmf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '2': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '3': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '4': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
                d_fn: () => {
                    $rfbs: number;
                    $rfdf: string[];
                    $fdf: string[];
                    $fdikf: string[];
                    '1': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '2': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '3': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '4': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    $new: (desc: boolean, limit?: number | undefined, startKey?: string | undefined, parentKey?: string | undefined) => ParamRangeKey;
                };
            };
            $new: (value: number, prk: ParamRangeKey, end?: number | undefined, pgstart?: number | undefined) => P4;
        };
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
    interface P8 {
        /** value = 1, required */
        ['1']: number;
        /** end = 2, optional */
        ['2']?: number;
        /** pgstart = 3, optional */
        ['3']?: number;
        /** prk = 4, required */
        ['4']: ParamRangeKey;
    }
    namespace P8 {
        const enum $ {
            /** required: 1 */
            value = "1",
            /** optional: 2 */
            end = "2",
            /** optional: 3 */
            pgstart = "3",
            /** required: 4 */
            prk = "4",
        }
        const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $new(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): P8;
        const $d: {
            $rfbs: number;
            $rfdf: string[];
            $fdf: string[];
            $fmf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '2': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '3': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '4': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
                d_fn: () => {
                    $rfbs: number;
                    $rfdf: string[];
                    $fdf: string[];
                    $fdikf: string[];
                    '1': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '2': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '3': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '4': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    $new: (desc: boolean, limit?: number | undefined, startKey?: string | undefined, parentKey?: string | undefined) => ParamRangeKey;
                };
            };
            $new: (value: number, prk: ParamRangeKey, end?: number | undefined, pgstart?: number | undefined) => P8;
        };
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
    interface PD {
        /** value = 1, required */
        ['1']: number;
        /** end = 2, optional */
        ['2']?: number;
        /** pgstart = 3, optional */
        ['3']?: number;
        /** prk = 4, required */
        ['4']: ParamRangeKey;
    }
    namespace PD {
        const enum $ {
            /** required: 1 */
            value = "1",
            /** optional: 2 */
            end = "2",
            /** optional: 3 */
            pgstart = "3",
            /** required: 4 */
            prk = "4",
        }
        const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $new(value: number, prk: ParamRangeKey, end?: number, pgstart?: number): PD;
        const $d: {
            $rfbs: number;
            $rfdf: string[];
            $fdf: string[];
            $fmf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '2': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '3': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '4': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
                d_fn: () => {
                    $rfbs: number;
                    $rfdf: string[];
                    $fdf: string[];
                    $fdikf: string[];
                    '1': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '2': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '3': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '4': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    $new: (desc: boolean, limit?: number | undefined, startKey?: string | undefined, parentKey?: string | undefined) => ParamRangeKey;
                };
            };
            $new: (value: number, prk: ParamRangeKey, end?: number | undefined, pgstart?: number | undefined) => PD;
        };
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
    interface PB {
        /** value = 1, required */
        ['1']: string;
        /** end = 2, optional */
        ['2']?: string;
        /** pgstart = 3, optional */
        ['3']?: string;
        /** prk = 4, required */
        ['4']: ParamRangeKey;
    }
    namespace PB {
        const enum $ {
            /** required: 1 */
            value = "1",
            /** optional: 2 */
            end = "2",
            /** optional: 3 */
            pgstart = "3",
            /** required: 4 */
            prk = "4",
        }
        const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $new(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PB;
        const $d: {
            $rfbs: number;
            $fmf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '2': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '3': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '4': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
                d_fn: () => {
                    $rfbs: number;
                    $rfdf: string[];
                    $fdf: string[];
                    $fdikf: string[];
                    '1': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '2': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '3': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '4': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    $new: (desc: boolean, limit?: number | undefined, startKey?: string | undefined, parentKey?: string | undefined) => ParamRangeKey;
                };
            };
            $new: (value: string, prk: ParamRangeKey, end?: string | undefined, pgstart?: string | undefined) => PB;
        };
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
    interface PK {
        /** value = 1, required */
        ['1']: string;
        /** end = 2, optional */
        ['2']?: string;
        /** pgstart = 3, optional */
        ['3']?: string;
        /** prk = 4, required */
        ['4']: ParamRangeKey;
    }
    namespace PK {
        const enum $ {
            /** required: 1 */
            value = "1",
            /** optional: 2 */
            end = "2",
            /** optional: 3 */
            pgstart = "3",
            /** required: 4 */
            prk = "4",
        }
        const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $new(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PK;
        const $d: {
            $rfbs: number;
            $fmf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '2': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '3': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '4': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
                d_fn: () => {
                    $rfbs: number;
                    $rfdf: string[];
                    $fdf: string[];
                    $fdikf: string[];
                    '1': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '2': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '3': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '4': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    $new: (desc: boolean, limit?: number | undefined, startKey?: string | undefined, parentKey?: string | undefined) => ParamRangeKey;
                };
            };
            $new: (value: string, prk: ParamRangeKey, end?: string | undefined, pgstart?: string | undefined) => PK;
        };
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
    interface PS {
        /** value = 1, required */
        ['1']: string;
        /** end = 2, optional */
        ['2']?: string;
        /** pgstart = 3, optional */
        ['3']?: string;
        /** prk = 4, required */
        ['4']: ParamRangeKey;
    }
    namespace PS {
        const enum $ {
            /** required: 1 */
            value = "1",
            /** optional: 2 */
            end = "2",
            /** optional: 3 */
            pgstart = "3",
            /** required: 4 */
            prk = "4",
        }
        const enum $0 {
            value = 1,
            end = 2,
            pgstart = 3,
            prk = 4,
        }
        function $new(value: string, prk: ParamRangeKey, end?: string, pgstart?: string): PS;
        const $d: {
            $rfbs: number;
            $rfdf: string[];
            $fdf: string[];
            $fmf: string[];
            '1': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '2': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '3': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
            };
            '4': {
                _: number;
                t: number;
                m: number;
                a: number;
                $n: string;
                d_fn: () => {
                    $rfbs: number;
                    $rfdf: string[];
                    $fdf: string[];
                    $fdikf: string[];
                    '1': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '2': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '3': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    '4': {
                        _: number;
                        t: number;
                        m: number;
                        a: number;
                        $n: string;
                    };
                    $new: (desc: boolean, limit?: number | undefined, startKey?: string | undefined, parentKey?: string | undefined) => ParamRangeKey;
                };
            };
            $new: (value: string, prk: ParamRangeKey, end?: string | undefined, pgstart?: string | undefined) => PS;
        };
    }
}
