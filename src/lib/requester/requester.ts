export interface IHeaders {

    [key: string]: string;
}

export interface ISearchParams {

    [key: string]: string;
}

export interface IRequestOptions {

    method?: string;

    body?: any;

    headers?: IHeaders;

    searchParams?: ISearchParams;

    hasAuth?: boolean;
}

export interface IRequester {

    <T>(url: string, options?: IRequestOptions): Promise<T>;
}
