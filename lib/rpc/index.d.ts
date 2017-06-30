export interface HasToken {
    token: string;
}
export declare type GetHandler = <T>(location: string, opts?: any) => PromiseLike<T>;
export declare type PostHandler = <T>(location: string, data: string) => PromiseLike<T>;
export declare function checkStatus<T>(res: any): T;
export declare function handler<T>(raw: string): T;
export declare function $get<T>(location: string, opts?: any): PromiseLike<T>;
export declare function $post<T>(location: string, data: string): PromiseLike<T>;
export interface Config {
    get$$: GetHandler;
    post$$: PostHandler;
}
export declare function post<T>(location: string, data: string): PromiseLike<T>;
export declare function get<T>(location: string, opts?: any): PromiseLike<T>;
