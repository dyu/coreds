export function checkStatus(res) {
    var status = res.status;
    if (status < 200 || status > 299)
        throw status;
    return res.text();
}
export function handler(raw) {
    var first = raw.charAt(0), len = raw.length, end = raw.charAt(len - 1) === '\n' ? len - 2 : len, data;
    if (first === '+') {
        data = JSON.parse(raw.substring(1, end));
        if (data[0])
            throw data;
        return data.length === 2 ? data[1] : data;
    }
    if (first !== '-')
        throw new Error('Malformed response.');
    if (raw.charAt(1) !== '[')
        throw new Error(raw.substring(1, end));
    throw JSON.parse(raw.substring(1, end));
}
export function $get(location, opts) {
    return fetch(location, opts).then(checkStatus).then(handler);
}
export function $post(location, data) {
    return fetch(location, { method: 'POST', body: data }).then(checkStatus).then(handler);
}
var config_default = {
    get$$: get$$,
    post$$: post$$
};
window['rpc_config_d'] = config_default;
var config = window['rpc_config'] || config_default;
var prefix = window['rpc_host'] || '';
function get$$(location, opts) {
    return $get(!prefix ? location : prefix + location, opts);
}
function post$$(location, data) {
    return $post(!prefix ? location : prefix + location, data);
}
export function post(location, data) {
    return config.post$$(location, data);
}
export function get(location, opts) {
    return config.get$$(location, opts);
}
//# sourceMappingURL=index.js.map