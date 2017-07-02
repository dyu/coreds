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
import { extractMsg, incrementKey, decrementKey } from '../util';
function createParamRangeKey(desc, limit, startKey, parentKey) {
    return {
        '1': desc,
        '2': limit,
        '3': startKey,
        '4': parentKey
    };
}
var Store = (function () {
    function Store(vm, createFn, mergeFn, pageSize, multiplier, desc, list) {
        this.vm = vm;
        this.createFn = createFn;
        this.mergeFn = mergeFn;
        //_selected: Selectable;
        this._fetchType = 0 /* NONE */;
        this._fetchTs = 0;
        this.page = 0;
        this.fetch_key = 'fetch';
        this.pageSize = pageSize;
        this.createFn = createFn;
        this.mergeFn = mergeFn;
        //this.fetchFn = fetchFn
        this.multiplier = multiplier || 1;
        this.desc = desc || true;
        this.list = list || [];
    }
    Store.prototype.latest = function () {
        var len = this.list.length;
        return len === 0 ? null : (this.desc ? this.list[0].orig : this.list[len - 1].orig);
    };
    Store.prototype.prepend = function (message) {
        this.list.unshift(this.createFn(message));
    };
    Store.prototype.prependAll = function (l, reversed) {
        if (l.length === 1) {
            this.list.unshift(this.createFn(l[0]));
        }
        else if (reversed) {
            for (var i = l.length; i-- > 0;)
                this.list.unshift(this.createFn(l[i]));
        }
        else {
            for (var i = 0, len = l.length; i < len; i++)
                this.list.unshift(this.createFn(l[i]));
        }
    };
    Store.prototype.append = function (message) {
        this.list.push(this.createFn(message));
    };
    Store.prototype.appendAll = function (l, reversed) {
        if (l.length === 1) {
            this.list.push(this.createFn(l[0]));
            return;
        }
        else if (reversed) {
            for (var i = l.length; i-- > 0;)
                this.list.push(this.createFn(l[i]));
        }
        else {
            for (var i = 0, len = l.length; i < len; i++)
                this.list.push(this.createFn(l[i]));
        }
    };
    Store.prototype.cbFetchFailed = function (e) {
        this.vm.set({
            loading: false,
            errmsg: extractMsg(e)
        });
    };
    Store.prototype.cbFetchSuccess = function (data) {
        var ft = this._fetchType;
        if (ft === 0 /* NONE */)
            return;
        this._fetchType = 0 /* NONE */;
        var array = Array.isArray(data) ? data : (data && data['1']);
        switch (ft) {
            case 1 /* NEWER */:
                if (!array || !array.length) {
                    this.vm.set({ loading: false });
                    return;
                }
                if (this.list.length && this.desc)
                    this.prependAll(array, true);
                else
                    this.appendAll(array);
                break;
            case 2 /* OLDER */:
                if (!array || !array.length) {
                    this.vm.set({ loading: false });
                    return;
                }
                if (this.desc)
                    this.appendAll(array);
                else
                    this.prependAll(array, true);
                break;
            case 3 /* UPDATE */:
                this._update(array);
                break;
        }
        var pageSize = this.pageSize, size = this.list.length, page = size <= pageSize ? 0 : this.page;
        this.vm.set({ loading: false, size: size, page: page, page_count: Math.floor((size - 1) / pageSize) });
    };
    Store.prototype._update = function (updateList) {
        var size = this.list.length;
        if (!updateList || !updateList.length) {
            if (size <= this.pageSize) {
                this.list = []; // or this.list.length = 0
                return true;
            }
            var populatePages_1 = this.page * this.pageSize;
            this.list.splice(populatePages_1, size - populatePages_1);
            return true;
        }
        var updateLen = updateList.length, populateLen = this.pageSize, populatePages = this.page * populateLen, i = 0, removed = 0, idx = populatePages;
        var pair;
        var update;
        for (;;) {
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
        for (var j = i; j < updateLen; j++)
            this.list.push(this.createFn(updateList[j]));
        return removed !== 0;
    };
    Store.prototype.fetchNewer = function (debounce) {
        if (this.vm.get('loading'))
            return false;
        // debounce
        var now = Date.now();
        if (debounce && (now - this._fetchTs) < 500) {
            return false;
        }
        var empty = !this.list.length;
        if (empty && !this.desc) {
            this.desc = true;
        }
        var req = createParamRangeKey(empty, empty ? this.pageSize * this.multiplier + 1 : (this.desc ? this.pageSize : this.pageSize * this.multiplier), empty ? undefined : (this.desc ? this.list[0].orig['1'] : this.list[this.list.length - 1].orig['1']));
        this._fetchTs = now;
        this._fetchType = 1 /* NEWER */;
        this.vm[this.fetch_key](req);
        //this.fetchFn(req);
        this.vm.set({
            loading: true,
            errmsg: '',
            desc: this.desc
        });
        return true;
    };
    Store.prototype.fetchOlder = function (debounce) {
        if (!this.list.length || this.vm.get('loading'))
            return false;
        // debounce
        var now = Date.now();
        if (debounce && (now - this._fetchTs) < 500) {
            return false;
        }
        var req = createParamRangeKey(true, this.desc ? this.pageSize * this.multiplier : this.pageSize, this.desc ? this.list[this.list.length - 1].orig['1'] : this.list[0].orig['1']);
        this._fetchTs = now;
        this._fetchType = 2 /* OLDER */;
        //this.fetchFn(req);
        this.vm[this.fetch_key](req);
        this.vm.set({
            loading: true,
            errmsg: ''
        });
        return true;
    };
    Store.prototype.fetchUpdate = function (debounce) {
        if (!this.list.length)
            return this.fetchNewer(debounce);
        if (this.vm.get('loading'))
            return false;
        // debounce
        var now = Date.now();
        if (debounce && (now - this._fetchTs) < 500) {
            return false;
        }
        // the first item in the visible list
        var pair = this.list[this.page * this.pageSize];
        var req = createParamRangeKey(this.desc, Math.min(this.pageSize, this.list.length), this.desc ? incrementKey(pair.orig['1']) : decrementKey(pair.orig['1']));
        this._fetchTs = now;
        this._fetchType = 3 /* UPDATE */;
        //this.fetchFn(req);
        this.vm[this.fetch_key](req);
        this.vm.set({
            loading: true,
            errmsg: ''
        });
        return true;
    };
    Store.prototype.isVisible = function (idx) {
        var pageStart = this.page * this.pageSize;
        return pageStart === idx || (idx > pageStart && idx < (pageStart + this.pageSize));
    };
    /*select(item: Selectable) {
        let idx;
        if (this._selected && (idx = this._selected.index) !== item.index && this.isVisible(idx)) {
            this._selected.reset();
        }
        this._selected = item;
    }*/
    Store.prototype.toggleDesc = function (cb, arg) {
        if (this.vm.get('loading'))
            return this.desc;
        var val = !this.desc;
        this.desc = val;
        if (this.list.length > 1)
            this.list = this.list.reverse();
        cb && cb(arg);
        this.vm.set({ desc: val });
        return val;
    };
    Store.prototype.prevOrLoad = function () {
        var vm = this.vm, state = vm.get(), page = state.page;
        if (page)
            vm.set({ page: (this.page = page - 1) });
        else if (state.desc)
            this.fetchNewer();
        else
            this.fetchOlder();
    };
    Store.prototype.nextOrLoad = function () {
        var vm = this.vm, state = vm.get(), page = state.page;
        if (page < state.page_count)
            vm.set({ page: (this.page = page + 1) });
        else if (!state.desc)
            this.fetchNewer();
        else
            this.fetchOlder();
    };
    Store.prototype.goto = function (page) {
        this.vm.set({ page: (this.page = page) });
    };
    // helpers
    Store.prototype.page_info = function () {
        var size = this.list.length, start;
        if (!size)
            return '';
        else if (size === (start = (this.page * this.pageSize) + 1))
            return start + " of " + size;
        else
            return start + " - " + Math.min(start + this.pageSize - 1, size) + " of " + size;
    };
    Store.prototype.page_items = function () {
        var size = this.list.length, pageSize, start;
        if (size === 0 || size <= (pageSize = this.pageSize))
            return this.list;
        else
            return this.list.slice((start = this.page * pageSize), start + Math.min(size - start, pageSize));
    };
    return Store;
}());
export { Store };
//# sourceMappingURL=index.js.map