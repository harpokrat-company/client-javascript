import {IRequester, IRequestOptions} from './requester';

export const fetchRequester: IRequester = async <T>(url: string, {
    body = undefined,
    headers = {},
    method = 'GET',
    searchParams = {},
}: IRequestOptions = {}) => {
    const parsed = new URL(url);
    for (const key of Object.keys(searchParams)) {
        parsed.searchParams.set(key, searchParams[key]);
    }
    const response = await fetch(parsed.href, {
        mode: 'cors',
        method,
        headers,
        body: body && JSON.stringify(body),
    });
    return await response.json();
};
