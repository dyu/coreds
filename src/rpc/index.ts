declare function fetch(path: string, opts?: any): any;

export interface HasToken {
    token: string
}

export type GetHandler = <T>(location: string, opts?: any) => PromiseLike<T>
export type PostHandler = <T>(location: string, data: string) => PromiseLike<T>

export function checkStatus<T>(res: any): T {
    let status = res.status
    if (status < 200 || status > 299)
        throw status
    
    return res.text()
}

export function handler<T>(raw: string): T {
    let first = raw.charAt(0),
        len = raw.length,
        end = raw.charAt(len - 1) === '\n' ? len - 2 : len,
        data
    
    if (first === '+') {
        data = JSON.parse(raw.substring(1, end))
        if (data[0])
            throw data
        
        return data.length === 2 ? data[1] : data
    }

    if (first !== '-')
        throw new Error('Malformed response.')
    
    if (raw.charAt(1) !== '[')
        throw new Error(raw.substring(1, end))
    
    throw JSON.parse(raw.substring(1, end))
}

export function $get<T>(location: string, opts?: any): PromiseLike<T> {
    return fetch(location, opts).then(checkStatus).then(handler)
}

export function $post<T>(location: string, data: string): PromiseLike<T> {
    return fetch(location, { method: 'POST', body: data }).then(checkStatus).then(handler)
}

export interface Config {
    get$$: GetHandler,
    post$$: PostHandler
}

const config_default = {
    get$$,
    post$$
} as Config

window['rpc_config_d'] = config_default

const config: Config = window['rpc_config'] || config_default
const prefix: string = window['rpc_host'] || ''

function get$$<T>(location: string, opts?: any): PromiseLike<T> {
    return $get(!prefix ? location : prefix + location, opts)
}

function post$$<T>(location: string, data: string): PromiseLike<T> {
    return $post(!prefix ? location : prefix + location, data)
}

export function post<T>(location: string, data: string): PromiseLike<T> {
    return config.post$$(location, data)
}

export function get<T>(location: string, opts?: any): PromiseLike<T> {
    return config.get$$(location, opts)
}
