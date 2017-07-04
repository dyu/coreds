// ========================================================================
// Copyright 2017 David Yu
// ------------------------------------------------------------------------
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// ========================================================================
// @author dyu
// @created 2017/06/29

import { extractMsg, incrementKey, decrementKey } from '../util'

/*export namespace ds {
    export interface ParamRangeKey {
        ['1']: boolean;
        ['2']?: number;
        ['3']?: string;
        ['4']?: string;
    }
    export namespace ParamRangeKey {
        export const enum F$ {
            desc = '1',
            limit = '2',
            startKey = '3',
            parentKey = '4'
        }
        export const enum F0 {
            desc = 1,
            limit = 2,
            startKey = 3,
            parentKey = 4
        }
        export function $create(desc: boolean, limit?: number, startKey?: string, parentKey?: string): ParamRangeKey {
            return {
                '1': desc,
                '2': limit,
                '3': startKey,
                '4': parentKey
            }
        }
    }
}*/

export interface ParamRangeKey {
    ['1']: boolean;
    ['2']?: number;
    ['3']?: string;
    ['4']?: string;
}

function createParamRangeKey(desc: boolean, limit?: number, startKey?: string, parentKey?: string): ParamRangeKey {
    return {
        '1': desc,
        '2': limit,
        '3': startKey,
        '4': parentKey
    }
}

//const createParamRangeKey = ds.ParamRangeKey.$create

export interface Pager {
    loading: boolean
    errmsg: string
    size: number
    page: number
    page_count: number
}

export type Entity = {
    /** desc (required) */
    ['1']: string
    ['2']: number
}

export interface Item<T> {
    orig: T
    copy?: T
    [key: string]: any
}

/*export interface Selectable {
    index: number
    reset: () => void
}*/

export interface VM {
    set: (obj: any) => void
    get: (key?: string) => any
}

export type ValueChanged<T> = (message: T) => void;

export type CreateFn<T> = (message: T) => Item<T>;

export type MergeFn<T> = (message: T, pair: Item<T>) => void;

//export type FetchFn = (req: ParamRangeKey) => void

const enum FetchType {
    NONE,
    NEWER,
    OLDER,
    UPDATE
}

const enum Bar {
    "FOO",
    "BAR"
}

export class Store<T extends Entity> {
    pageSize: number;
    multiplier: number;

    desc: boolean;
    list: Item<T>[];
    //_selected: Selectable;

    private _fetchType = FetchType.NONE
    _fetchTs = 0;
    page = 0;
    fetch_key = 'fetch'

    constructor(public vm: VM, public createFn: CreateFn<T>, public mergeFn: MergeFn<T>,
        pageSize: number, multiplier?: number, desc?: boolean, list?: Item<T>[]) {
        this.pageSize = pageSize
        this.createFn = createFn
        this.mergeFn = mergeFn
        //this.fetchFn = fetchFn
        this.multiplier = multiplier || 1
        this.desc = desc || true
        this.list = list || []
    }

    latest(): T | null {
        let len = this.list.length
        return len === 0 ? null : (this.desc ? this.list[0].orig : this.list[len - 1].orig)
    }

    prepend(message: T) {
        this.list.unshift(this.createFn(message))
    }

    prependAll(l: T[], reversed?: boolean) {
        if (l.length === 1) {
            this.list.unshift(this.createFn(l[0]))
        } else if (reversed) {
            for (let i = l.length; i-- > 0;) this.list.unshift(this.createFn(l[i]))
        } else {
            for (let i = 0, len = l.length; i < len; i++) this.list.unshift(this.createFn(l[i]))
        }
    }

    append(message: T) {
        this.list.push(this.createFn(message));
    }

    appendAll(l: T[], reversed?: boolean) {
        if (l.length === 1) {
            this.list.push(this.createFn(l[0]))
        } else if (reversed) {
            for (let i = l.length; i-- > 0;) this.list.push(this.createFn(l[i]))
        } else {
            for (let i = 0, len = l.length; i < len; i++) this.list.push(this.createFn(l[i]))
        }
    }

    cbFetchFailed(e: any) {
        this.vm.set({
            loading: false,
            errmsg: extractMsg(e)
        })
    }

    cbFetchSuccess(data: any) {
        let ft = this._fetchType
        if (ft === FetchType.NONE)
            return;
        this._fetchType = FetchType.NONE
        let array: T[]|undefined = Array.isArray(data) ? data : (data && data['1'])
        switch (ft) {
            case FetchType.NEWER:
                if (!array || !array.length) {
                    this.vm.set({ loading: false })
                    return
                }

                if (this.list.length && this.desc)
                    this.prependAll(array, true);
                else
                    this.appendAll(array);
                break;
            case FetchType.OLDER:
                if (!array || !array.length) {
                    this.vm.set({ loading: false })
                    return
                }

                if (this.desc)
                    this.appendAll(array);
                else
                    this.prependAll(array, true);
                break;
            case FetchType.UPDATE:
                this._update(array);
                break;
        }
        
        let pageSize = this.pageSize,
            size = this.list.length,
            page = size <= pageSize ? 0 : this.page
        
        this.vm.set({ loading: false, size, page, page_count: Math.floor((size - 1) / pageSize) })
    }

    _update(updateList: T[]|undefined): boolean {
        var size = this.list.length;

        if (!updateList || !updateList.length) {
            if (size <= this.pageSize) {
                this.list = [] // or this.list.length = 0
                return true;
            }

            let populatePages = this.page * this.pageSize;
            this.list.splice(populatePages, size - populatePages);
            return true;
        }

        var updateLen = updateList.length,
            populateLen = this.pageSize,
            populatePages = this.page * populateLen,
            i = 0,
            removed = 0,
            idx = populatePages;

        let pair: Item<T>;
        let update: T
        for (; ;) {
            update = updateList[i];
            pair = this.list[idx];
            if (update['1'] === pair.orig['1']) {
                i++;

                this.mergeFn(update, pair);

                if (++idx === size)
                    break;

                if (i !== updateLen)
                    continue;

                if (updateLen === populateLen)
                    break;

                this.list.splice(idx, 1);
                removed++;
                size--;

                break;
            }

            this.list.splice(idx, 1);
            removed++;
            size--;

            if (idx === size)
                break;
        }

        for (var j = i; j < updateLen; j++) this.list.push(this.createFn(updateList[j]))

        return removed !== 0;
    }

    fetchNewer(debounce?: boolean): boolean {
        if (this.vm.get('loading')) return false

        // debounce
        var now = Date.now()
        if (debounce && (now - this._fetchTs) < 500) {
            return false;
        }

        let empty = !this.list.length;
        if (empty && !this.desc) {
            this.desc = true
        }

        var req = createParamRangeKey(empty,
            empty ? this.pageSize * this.multiplier + 1 : (this.desc ? this.pageSize : this.pageSize * this.multiplier),
            empty ? undefined : (this.desc ? this.list[0].orig['1'] : this.list[this.list.length - 1].orig['1']));

        this._fetchTs = now;
        this._fetchType = FetchType.NEWER;
        this.vm[this.fetch_key](req)
        //this.fetchFn(req);

        this.vm.set({
            loading: true,
            errmsg: '',
            desc: this.desc
        })
        return true;
    }

    fetchOlder(debounce?: boolean): boolean {
        if (!this.list.length || this.vm.get('loading'))
            return false;

        // debounce
        var now = Date.now()
        if (debounce && (now - this._fetchTs) < 500) {
            return false;
        }

        var req = createParamRangeKey(true,
            this.desc ? this.pageSize * this.multiplier : this.pageSize,
            this.desc ? this.list[this.list.length - 1].orig['1'] : this.list[0].orig['1']);

        this._fetchTs = now;
        this._fetchType = FetchType.OLDER;
        //this.fetchFn(req);
        this.vm[this.fetch_key](req)

        this.vm.set({
            loading: true,
            errmsg: ''
        })
        return true;
    }

    fetchUpdate(debounce?: boolean): boolean {
        if (!this.list.length)
            return this.fetchNewer(debounce);

        if (this.vm.get('loading'))
            return false;

        // debounce
        var now = Date.now()
        if (debounce && (now - this._fetchTs) < 500) {
            return false;
        }

        // the first item in the visible list
        var pair = this.list[this.page * this.pageSize];

        var req = createParamRangeKey(this.desc,
            Math.min(this.pageSize, this.list.length),
            this.desc ? incrementKey(pair.orig['1']) : decrementKey(pair.orig['1']),
        );

        this._fetchTs = now;
        this._fetchType = FetchType.UPDATE;
        //this.fetchFn(req);
        this.vm[this.fetch_key](req)

        this.vm.set({
            loading: true,
            errmsg: ''
        })
        return true;
    }

    isVisible(idx: number): boolean {
        let pageStart = this.page * this.pageSize;
        return pageStart === idx || (idx > pageStart && idx < (pageStart + this.pageSize));
    }

    /*select(item: Selectable) {
        let idx;
        if (this._selected && (idx = this._selected.index) !== item.index && this.isVisible(idx)) {
            this._selected.reset();
        }
        this._selected = item;
    }*/

    toggleDesc<T>(cb?: ValueChanged<T | undefined>, arg?: T): boolean {
        if (this.vm.get('loading'))
            return this.desc;

        let val = !this.desc;
        this.desc = val;

        if (this.list.length > 1)
            this.list = this.list.reverse()

        cb && cb(arg)

        this.vm.set({ desc: val })
        return val;
    }

    prevOrLoad() {
        let vm = this.vm,
            state = vm.get(),
            page = state.page
        
        if (page) vm.set({ page: (this.page = page - 1) })
        else if (state.desc) this.fetchNewer()
        else this.fetchOlder()
    }

    nextOrLoad() {
        let vm = this.vm,
            state = vm.get(),
            page = state.page
        
        if (page < state.page_count) vm.set({ page: (this.page = page + 1) })
        else if (!state.desc) this.fetchNewer()
        else this.fetchOlder()
    }

    goto(page: number) {
        this.vm.set({ page: (this.page = page) })
    }
    
    // helpers
    page_info(): string {
        let size = this.list.length,
            start
        if (!size) return ''
        else if (size === (start = (this.page *  this.pageSize) + 1)) return `${start} of ${size}`
        else return `${start} - ${Math.min(start + this.pageSize - 1, size)} of ${size}`
    }

    page_items(): Item<T>[] {
        let size = this.list.length,
            pageSize,
            start
        if (size === 0 || size <= (pageSize = this.pageSize)) return this.list
        else return this.list.slice((start = this.page * pageSize), start + Math.min(size - start, pageSize))
    }
}
