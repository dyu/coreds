import { bit_clear_and_set, bit_unset, incrementKey, decrementKey, defp, extractMsg } from '../util';
import { mergeFrom } from '../diff';
import * as prk from '../prk';
//export const STATE = "state"
//export const LSTATE = "lstate" // list state
export var DESCRIPTOR = "$d";
export var INDEX = "$index";
export var PREV_KEY = "$prev_key";
export var PREV_PAGE = "$prev_page";
export var PREV_ISTATE = "$prev_istate";
// TODO usage
/*function extractMessage(err: any): string {
    var str = JSON.parse(err)['1']
    return Array.isArray(str) ? str.join('\n') : str
}*/
export function shallowCopyTo(target, src) {
    for (var _i = 0, _a = Object.keys(src); _i < _a.length; _i++) {
        var i = _a[_i];
        target[i] = src[i];
    }
    return target;
}
/*export function nullifyAll(obj: any) {
    for (var i of Object.keys(obj)) {
        if (obj[i] !== null) obj[i] = null
    }
}*/
export function resolveNextPageIndex(page, idx, pager) {
    return page !== pager.page_count ? idx : Math.min(idx, (pager.size % pager.array.length) - 1);
}
export function nullifyVprops(so, descriptor) {
    if (!descriptor.$fdf)
        return so;
    for (var _i = 0, _a = descriptor.$fdf; _i < _a.length; _i++) {
        var k = _a[_i];
        if (so[k] !== null)
            so[k] = null;
    }
}
function addVpropsTo(so, descriptor) {
    if (descriptor.$fdf) {
        for (var _i = 0, _a = descriptor.$fdf; _i < _a.length; _i++) {
            var k = _a[_i];
            so[k] = null;
        }
    }
    if (descriptor.$fdikf) {
        for (var _b = 0, _c = descriptor.$fdikf; _b < _c.length; _b++) {
            var k = _c[_b];
            so[k] = null;
        }
    }
    return so;
}
function createObservable(options, index, pager, descriptor, so) {
    var p = options.createObservable(so, index);
    p['_'] = so;
    Object.defineProperties(p, {
        $d: { value: descriptor, enumerable: false, configurable: true },
        $index: { value: index, enumerable: false, configurable: true },
        $pager: { value: pager, enumerable: false, configurable: true }
    });
    return p;
}
var PojoStore = (function () {
    function PojoStore(fetchedArray, options) {
        this.options = options;
        this.mainArray = fetchedArray;
        this.array = fetchedArray;
        this.multiplier = options.multiplier || 1;
        this.multiplier_conditional = !!options.multiplier_conditional;
        this.k = options.keyProperty || '1';
        var observedArray = [], descriptor = options.descriptor, size = fetchedArray.length, pageSize = options.pageSize, page = 0, remaining = pageSize > size ? pageSize - size : 0, pager;
        this.fnMergeFrom = options.merge_fn || mergeFrom;
        this.pager = pager = {
            size: size,
            state: options.desc ? 16 /* DESC */ : 0,
            msg: '',
            array: observedArray,
            index_selected: -1,
            index_hidden: pageSize,
            q_index: 0,
            prev_key: null,
            prev_page: page,
            prev_istate: 0,
            page: page,
            page_count: size / pageSize,
            page_vcount: 0,
            page_from: 1,
            page_to: pageSize - remaining
            //pojo: null
        };
        //defp(pager, 'pojo', null)
        defp(pager, 'm', { d: null });
        var so = addVpropsTo({
            state: 0,
            msg: '',
            dfbs: 0,
            vfbs: 0,
            rfbs: 0,
            lstate: 0
        }, descriptor);
        observedArray.push(createObservable(options, 0, pager, descriptor, so));
        for (var i = 1; i < pageSize; i++) {
            // shallow copy the shared object
            // TODO Object.assign({}, so)
            observedArray.push(createObservable(options, i, pager, descriptor, shallowCopyTo({}, so)));
        }
        defp(pager, 'store', this);
    }
    PojoStore.prototype.getLastSeenObj = function () {
        return this.mainArray.length === 0 ? null : this.mainArray[0];
    };
    PojoStore.prototype.isEmpty = function () {
        return this.array.length === 0;
    };
    PojoStore.prototype.size = function () {
        return this.array.length;
    };
    PojoStore.prototype.isMainArray = function () {
        return this.mainArray === this.array;
    };
    PojoStore.prototype.isSameArray = function (array) {
        return this.mainArray === array;
    };
    PojoStore.prototype.repaint = function () {
        return this.$populate(3 /* RETAIN */, 0, this.isMainArray(), -1, this.pager.page);
    };
    PojoStore.prototype.populate = function (type, flags, idxSelected) {
        return this.$populate(type, flags, this.isMainArray(), idxSelected, this.pager.page);
    };
    PojoStore.prototype.$populate = function (type, flags, main, idxSelected, page) {
        var pager = this.pager, toPopulate = pager.array, array = main ? this.mainArray : this.array, desc = !!(pager.state & 16 /* DESC */), foundPrev = false, pageSize = toPopulate.length, size = array.length, options = this.options, descriptor = options.descriptor, fnMergeFrom = this.fnMergeFrom, k = this.k;
        if (size === 0) {
            if (!desc) {
                pager.state |= 16 /* DESC */;
                desc = true;
            }
            if (page)
                pager.page = page = 0;
        }
        else if (page !== 0 && (page * pageSize) >= size) {
            pager.page = page = 0;
        }
        var pages = (page * pageSize) + pageSize, remaining = pages > size ? pages - size : 0, populatePages = page * pageSize, len = Math.min(pageSize, size - populatePages), start = desc ? populatePages : -populatePages;
        var target, target_, message, selected = null, prevKey = type >= 3 /* RETAIN */ ? pager.prev_key : null, i = 0;
        for (var state = 0; i < len; i++) {
            target = toPopulate[i];
            target_ = target['_'];
            message = array[start + (desc ? i : size - i - 1)];
            if (idxSelected === i) {
                state = 2 /* SELECTED */;
                selected = target;
            }
            else if (!(state = 2 /* SELECTED */ & target_.lstate)) {
                if (prevKey != null && prevKey === message[k]) {
                    state = 2 /* SELECTED */;
                    selected = target;
                    idxSelected = i;
                    prevKey = null;
                    foundPrev = true;
                }
            }
            else if (type < 3 /* RETAIN */ || selected || prevKey !== message[k]) {
                state = 0;
                target_.state = 0;
                target_.msg = '';
            }
            else {
                selected = target;
                idxSelected = i;
                prevKey = null;
            }
            fnMergeFrom(message, descriptor, target);
            if (options.onPopulate)
                options.onPopulate(message, main, target, i);
            target_.lstate = 1 /* INCLUDED */ | state;
        }
        pager.index_selected = idxSelected;
        pager.index_hidden = i;
        var visibleCount = pageSize;
        while (i < pageSize) {
            toPopulate[i++]['_'].lstate = 0 /* NONE */;
            visibleCount--;
        }
        pager.page_vcount = visibleCount;
        pager.page_count = Math.floor((size - 1) / pageSize);
        pager.page_from = (page * pageSize) + 1;
        pager.page_to = (page * pageSize) + (pageSize - remaining);
        if (!selected)
            return 0;
        if (type !== 3 /* RETAIN */)
            return this.$select(selected, flags, idxSelected, page, false);
        if (selected !== pager.pojo)
            pager.pojo = selected;
        if (foundPrev)
            selected['_'].state = pager[PREV_ISTATE];
        return 0;
    };
    PojoStore.prototype.select = function (current, flags, idx) {
        var pager = this.pager, index = idx !== undefined ? idx : current['$index'];
        pager.index_selected = index;
        return this.$select(current, flags, index, pager.page, true);
    };
    PojoStore.prototype.$select = function (current, flags, idx, page, selectWithoutPopulate) {
        var pager = this.pager, prevKey = pager.prev_key, options = this.options, k = this.k, current_ = current['_'];
        if (prevKey) {
            var previous = pager.pojo, previous_ = previous['_'], state = previous_.state;
            if ((state & 8 /* LOADING */))
                return 3 /* PREVENT_BOTH */;
            var sameSlot = current === previous, same = sameSlot && (!selectWithoutPopulate || current[k] === prevKey), refresh = !same || 2 /* REFRESH */ === (flags & 2 /* REFRESH */);
            if (!refresh) {
                // do nothing
            }
            else if ((state & 16 /* UPDATE */)) {
                if (previous_.vfbs) {
                    previous_.vfbs = 0;
                    previous_.msg = '';
                    nullifyVprops(current_, options.descriptor);
                }
                else if (previous_.msg) {
                    previous_.msg = '';
                }
                // state intentionally not modified
            }
            else if ((state & 7 /* MASK_STATUS */)) {
                previous_.msg = '';
                // state intentionally not modified
            }
            if (same) {
                if (selectWithoutPopulate && (flags & 8 /* FORCE */))
                    current_.lstate = 1 /* INCLUDED */ | 2 /* SELECTED */;
                return options.onSelect(current, flags);
            }
            if (!sameSlot) {
                if (selectWithoutPopulate)
                    previous_.lstate = bit_unset(previous_.lstate, 2 /* SELECTED */);
                previous_.state = 0;
            }
        }
        var ret = options.onSelect(current, flags);
        pager.pojo = current;
        pager.prev_key = current[k];
        pager.prev_page = page;
        pager.prev_istate = current_.state;
        if (selectWithoutPopulate)
            current_.lstate = 1 /* INCLUDED */ | 2 /* SELECTED */;
        return ret;
    };
    PojoStore.prototype.populateAndSelect = function (storeIdx, flags) {
        var pager = this.pager, array = pager.array, pageSize = array.length, currentPage = pager.page, state = pager.state;
        if (!(state & 16 /* DESC */))
            storeIdx = this.size() - storeIdx - 1;
        var page = storeIdx / pageSize, selectIdx = page === 0 ? storeIdx : (storeIdx % pageSize);
        if (currentPage !== page)
            pager.page = page;
        this.$populate(2 /* SELECT */, flags, this.isMainArray(), selectIdx, pager.page);
    };
    PojoStore.prototype.notifyAndSelect = function (storeIdx, flags) {
        this.pager.size = this.size();
        this.populateAndSelect(storeIdx, flags);
    };
    PojoStore.prototype.notify = function (type, flags) {
        if (type === void 0) { type = 3 /* RETAIN */; }
        if (flags === void 0) { flags = 0 /* NONE */; }
        this.pager.size = this.size();
        this.$populate(type, flags, this.isMainArray(), -1, this.pager.page);
    };
    /**
     * Add the entity and select it afterwards.
     */
    PojoStore.prototype.addAndSelect = function (entity, latest, flags) {
        var main = this.isMainArray(), array = this.array, options = this.options;
        var idx;
        if (latest) {
            idx = 0;
            array.unshift(entity);
        }
        else {
            idx = array.length;
            array.push(entity);
        }
        if (options.onAdd)
            options.onAdd(entity, main, latest);
        this.notifyAndSelect(idx, flags);
    };
    PojoStore.prototype.get = function (index) {
        return this.array[index];
    };
    PojoStore.prototype.getStoreIndex = function (selected) {
        return this.$getStoreIndex(selected[INDEX]);
    };
    PojoStore.prototype.$getStoreIndex = function (index) {
        var pager = this.pager, toPopulate = pager.array, desc = !!(pager.state & 16 /* DESC */), populatePages = pager.page * toPopulate.length;
        return desc ? populatePages + index : this.size() - populatePages - index - 1;
    };
    PojoStore.prototype.getSelectedOriginal = function () {
        var selected = this.pager.pojo;
        return !selected ? null : this.get(this.getStoreIndex(selected[INDEX]));
    };
    PojoStore.prototype.getOriginal = function (selected) {
        return this.get(this.$getStoreIndex(selected[INDEX]));
    };
    PojoStore.prototype.remove = function (index) {
        var options = this.options, entity = this.array.splice(index, 1)[0];
        if (options.onRemove)
            options.onRemove(entity, this.isMainArray());
        this.notify(3 /* RETAIN */, 0);
        return entity;
    };
    PojoStore.prototype.clear = function () {
        var options = this.options, removed = this.array.splice(0, this.array.length);
        if (options.onRemoveArray)
            options.onRemoveArray(removed, this.mainArray === this.array);
        this.notify(1 /* RESET */, 0);
    };
    PojoStore.prototype.add = function (entity, latest, mainOnly) {
        var options = this.options, targetArray = mainOnly ? this.mainArray : this.array;
        if (latest)
            targetArray.unshift(entity);
        else
            targetArray.push(entity);
        if (options.onAdd)
            options.onAdd(entity, this.mainArray === targetArray, latest);
        if (!mainOnly || this.array === targetArray)
            this.notify(3 /* RETAIN */, 0);
    };
    PojoStore.prototype.addAll = function (array, latest, mainOnly) {
        if (!array || array.length === 0)
            return false;
        var options = this.options, targetArray = mainOnly ? this.mainArray : this.array, main = this.mainArray === targetArray;
        if (targetArray.length === 0)
            latest = !latest;
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var message = array_1[_i];
            if (latest)
                targetArray.unshift(message);
            else
                targetArray.push(message);
            if (options.onAdd)
                options.onAdd(message, main, latest);
        }
        if (!mainOnly || this.array === targetArray)
            this.notify(3 /* RETAIN */, 0);
        return true;
    };
    /**
     * Resets the internal arrays and does not notify nor call onRemoveArray
     */
    PojoStore.prototype.reinit = function (array) {
        this.mainArray = array;
        this.array = array;
        var onAdd = this.options.onAdd;
        if (onAdd) {
            for (var _i = 0, array_2 = array; _i < array_2.length; _i++) {
                var p = array_2[_i];
                onAdd(p, true, true);
            }
        }
        return this;
    };
    /**
     * Resets the internal arrays and calls the listener methods.
     */
    PojoStore.prototype.reset = function (array, notify) {
        if (notify === void 0) { notify = true; }
        var options = this.options, onAdd = options.onAdd, removed = this.mainArray;
        this.mainArray = array;
        this.array = array;
        if (options.onRemoveArray)
            options.onRemoveArray(removed, true);
        if (onAdd) {
            for (var _i = 0, array_3 = array; _i < array_3.length; _i++) {
                var message = array_3[_i];
                onAdd(message, true, true);
            }
        }
        if (notify)
            this.notify(1 /* RESET */, 0);
    };
    /**
     * Simply sets the array.  No notifications/etc
     */
    PojoStore.prototype.setArray = function (array) {
        this.array = array;
    };
    /**
     * Sets the array and notifies.
     */
    PojoStore.prototype.replace = function (array, type, flags) {
        if (type === void 0) { type = 1 /* RESET */; }
        if (flags === void 0) { flags = 0 /* NONE */; }
        this.array = array;
        this.notify(type, flags);
    };
    /**
     * Returns true if an item was removed.
     */
    PojoStore.prototype.update = function (updateArray) {
        var options = this.options, descriptor = options.descriptor, 
        //fnMergeFrom = this.fnMergeFrom,
        main = this.isMainArray(), pager = this.pager, toPopulate = pager.array, desc = !!(pager.state & 16 /* DESC */), page = pager.page, size = this.size();
        var removedArray;
        if (!updateArray || updateArray.length === 0) {
            if (size <= toPopulate.length) {
                if (options.onRemoveArray)
                    options.onRemoveArray(this.array, main);
                this.mainArray = this.array = [];
                this.notify(1 /* RESET */, 0);
                return true;
            }
            var populatePages_1 = page * toPopulate.length;
            if (desc)
                removedArray = this.array.splice(populatePages_1, size - populatePages_1);
            else
                removedArray = this.array.splice(0, size - populatePages_1);
            if (options.onRemoveArray)
                options.onRemoveArray(removedArray, main);
            this.notify(1 /* RESET */, 0);
            return true;
        }
        var updateLen = updateArray.length, populateLen = toPopulate.length, populatePages = page * populateLen, k = this.k, i = 0, removed = 0, idx = desc ? populatePages + i : size - populatePages - i - 1;
        var update, message;
        for (;;) {
            update = updateArray[i];
            message = this.array[idx];
            if (update[k] === message[k]) {
                i++;
                if (!options.onUpdate || options.onUpdate(message, main, update))
                    mergeFrom(update, descriptor, message);
                if (desc) {
                    idx = populatePages + i;
                    if (idx === size)
                        break;
                }
                else {
                    idx = size - populatePages - i - 1;
                    if (idx === -1)
                        break;
                }
                if (i !== updateLen)
                    continue;
                if (updateLen === populateLen)
                    break;
                removedArray = this.array.splice(idx, 1);
                removed++;
                size--;
                if (options.onRemove)
                    options.onRemove(removedArray[0], main);
                break;
            }
            removedArray = this.array.splice(idx, 1);
            removed++;
            size--;
            if (options.onRemove)
                options.onRemove(removedArray[0], main);
            if (!desc) {
                idx = size - populatePages - i - 1;
                if (idx === -1)
                    break;
            }
            else if (idx === size) {
                break;
            }
        }
        var onAdd = options.onAdd, array = this.array, ret = removed !== 0;
        while (i < updateLen) {
            message = updateArray[i++];
            if (desc)
                array.push(message);
            else
                array.unshift(message);
            if (onAdd)
                onAdd(message, main, !desc);
        }
        if (ret)
            pager.size = this.size();
        this.$populate(4 /* RESELECT */, 4 /* CLICKED_UPDATE */ | 2 /* REFRESH */, this.isMainArray(), -1, pager.page);
        return ret;
    };
    PojoStore.prototype.getStartObj = function () {
        var pager = this.pager, masked = 224 /* MASK_RPC */ & pager.state;
        switch (masked) {
            case 32 /* LOAD_NEWER */:
                return this.array.length === 0 ? null : this.get(0);
            case 64 /* LOAD_OLDER */:
                return this.array.length === 0 ? null : this.get(this.size() - 1);
            case 128 /* RELOAD */:
                return pager.array.length === 0 ? null : pager.array[0];
            default:
                return null;
        }
    };
    PojoStore.prototype.newRangeKeyForReload = function () {
        return this.$newRangeKeyForReload(!!(this.pager.state & 16 /* DESC */));
    };
    PojoStore.prototype.$newRangeKeyForReload = function (desc) {
        var pager = this.pager, options = this.options, toPopulate = pager.array, size = this.size(), page = pager.page, pageSize = toPopulate.length, pages = (page * pageSize) + pageSize, remaining = pages > size ? pages - size : 0, visibleItemCount = pageSize - remaining, first = toPopulate[0], 
        // keyProperty initially applies to the non-observable pojo
        key = first[this.k], kh = options.kh;
        this.startObj = first;
        // TODO set functions as object field
        var startKey;
        if (kh) {
            startKey = desc ? kh.inc(key) : kh.dec(key);
        }
        else {
            startKey = desc ? incrementKey(key) : decrementKey(key);
        }
        return prk.$new(desc, visibleItemCount, startKey);
    };
    PojoStore.prototype.newRangeKeyForLoadNewer = function () {
        var pager = this.pager, toPopulate = pager.array;
        if (this.isEmpty())
            return prk.$new(true, (toPopulate.length * this.multiplier) + 1);
        var first = this.get(0), limit = !this.multiplier_conditional || 0 === (16 /* DESC */ & pager.state) ? toPopulate.length * this.multiplier : toPopulate.length;
        this.startObj = first;
        return prk.$new(false, limit, first[this.k]);
    };
    PojoStore.prototype.newRangeKeyForLoadOlder = function () {
        var pager = this.pager, toPopulate = pager.array, last = this.get(this.size() - 1), limit = !this.multiplier_conditional || 0 !== (16 /* DESC */ & pager.state) ? toPopulate.length * this.multiplier : toPopulate.length;
        this.startObj = last;
        return prk.$new(true, limit, last[this.k]);
    };
    PojoStore.prototype.requestNewer = function () {
        var pager = this.pager, pageFn = this.options.page;
        if (pageFn) {
            pageFn(!this.options.desc, pager);
            return;
        }
        if (pager.msg)
            pager.msg = '';
        pager.state = bit_clear_and_set(pager.state, 7 /* MASK_STATUS */, 8 /* LOADING */ | 32 /* LOAD_NEWER */);
        this.options.fetch(this.newRangeKeyForLoadNewer(), pager);
    };
    PojoStore.prototype.requestOlder = function () {
        var pager = this.pager, pageFn = this.options.page;
        if (pageFn) {
            pageFn(!!this.options.desc, pager);
            return;
        }
        if (pager.msg)
            pager.msg = '';
        pager.state = bit_clear_and_set(pager.state, 7 /* MASK_STATUS */, 8 /* LOADING */ | 64 /* LOAD_OLDER */);
        this.options.fetch(this.newRangeKeyForLoadOlder(), pager);
    };
    PojoStore.prototype.reload = function () {
        if (this.options.page)
            return;
        var pager = this.pager;
        if (pager.msg)
            pager.msg = '';
        pager.state = bit_clear_and_set(pager.state, 7 /* MASK_STATUS */, 8 /* LOADING */ | 128 /* RELOAD */);
        this.options.fetch(this.newRangeKeyForReload(), pager);
    };
    PojoStore.prototype.$reload = function (desc) {
        var pager = this.pager, clear = 7 /* MASK_STATUS */, set = 8 /* LOADING */ | 128 /* RELOAD */;
        if (desc)
            set |= 16 /* DESC */;
        else
            clear |= 16 /* DESC */;
        if (pager.msg)
            pager.msg = '';
        pager.state = bit_clear_and_set(pager.state, clear, set);
        this.options.fetch(this.$newRangeKeyForReload(desc), pager);
    };
    PojoStore.prototype.addNewer = function (array) {
        this.addAll(array, true, false);
    };
    PojoStore.prototype.addOlder = function (array) {
        this.addAll(array, false, false);
    };
    PojoStore.prototype.pagePrevOrLoad = function (flags) {
        var pager = this.pager, pageFn = this.options.page;
        if (pageFn) {
            pageFn(false, pager);
            return 3 /* PREVENT_BOTH */;
        }
        if (pager.page) {
            // goto previous
            //e.preventDefault()
            pager.page--;
            if (flags & 16) {
                this.populate(2 /* SELECT */, 0, pager.index_selected);
            }
            else {
                this.repaint();
            }
            return 3 /* PREVENT_BOTH */;
        }
        if (pager.state & 264 /* MASK_RPC_DISABLE */)
            return 2 /* PREVENT_PROPAGATION */;
        if (pager.state & 16 /* DESC */) {
            this.requestNewer();
        }
        else if (pager.index_hidden) {
            this.requestOlder();
        }
        else {
            return 2 /* PREVENT_PROPAGATION */;
        }
        return 3 /* PREVENT_BOTH */;
    };
    PojoStore.prototype.pageNextOrLoad = function (flags) {
        var pager = this.pager, pageFn = this.options.page;
        if (pageFn) {
            pageFn(true, pager);
            return 3 /* PREVENT_BOTH */;
        }
        var page = pager.page;
        if (page < pager.page_count) {
            // goto next
            //e.preventDefault()
            page = ++pager.page;
            if (flags & 16)
                this.populate(2 /* SELECT */, 0, resolveNextPageIndex(page, pager.index_selected, pager));
            else
                this.repaint();
            return 3 /* PREVENT_BOTH */;
        }
        var state = pager.state;
        // page push
        if (state & 264 /* MASK_RPC_DISABLE */ || !pager.index_hidden)
            return 2 /* PREVENT_PROPAGATION */;
        if (state & 16 /* DESC */)
            this.requestOlder();
        else
            this.requestNewer();
        return 3 /* PREVENT_BOTH */;
    };
    // next tick
    /*$$requestNewer(pager: Pager) {
        nextTick(() => this.requestNewer())
    }

    $$requestOlder(pager: Pager) {
        nextTick(() => this.requestOlder())
    }

    $$reload(pager: Pager) {
        nextTick(() => this.reload())
    }
    
    $$notify() {
        nextTick(() => this.notify())
    }*/
    PojoStore.prototype.cbFetchSuccess = function (array) {
        var pager = this.pager, masked = 224 /* MASK_RPC */ & pager.state;
        pager.state = bit_unset(pager.state, 224 /* MASK_RPC */ | 8 /* LOADING */);
        switch (masked) {
            case 32 /* LOAD_NEWER */:
                this.addAll(array, true, false);
                break;
            case 64 /* LOAD_OLDER */:
                this.addAll(array, false, false);
                break;
            case 128 /* RELOAD */:
                this.update(array);
                break;
        }
    };
    PojoStore.prototype.cbFetchFailed = function (errmsg) {
        var pager = this.pager;
        pager.state = bit_clear_and_set(pager.state, 224 /* MASK_RPC */ | 8 /* LOADING */, 2 /* ERROR */);
        pager.msg = !errmsg ? 'Failed.' : extractMsg(errmsg);
    };
    return PojoStore;
}());
export { PojoStore };
function fetchSuccess(data) {
    this.cbFetchSuccess(data['1']);
    return true;
}
function fetchFailed(errmsg) {
    this.cbFetchFailed(errmsg);
}
export function bindFetchSuccess(pstore) {
    return fetchSuccess.bind(pstore);
}
export function bindFetchFailed(pstore) {
    return fetchFailed.bind(pstore);
}
//# sourceMappingURL=index.js.map