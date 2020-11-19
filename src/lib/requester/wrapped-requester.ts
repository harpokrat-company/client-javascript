import {IRequester, IRequestOptions} from './requester';
import {IHarpokratApi} from '../api';

export const makeWrappedRequester = (requester: IRequester, baseUrl: string, api: IHarpokratApi): IRequester => {
	return (path: string, options: IRequestOptions = {}) => {
		if (options.hasAuth !== false && api.accessToken) {
			const headers = options.headers || {};
			if (!headers['Authorization']) {
				headers['Authorization'] = `Bearer ${api.accessToken}`;
			}
			options.headers = headers;
		}
		const url = new URL(path, baseUrl);
		return requester(url.href, options);
	};
};
