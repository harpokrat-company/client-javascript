import {IEndpoint} from '../endpoint';
import {IHarpokratApi} from '../../api';
import {IMeta, IPrimaryData, IRequestOptions, IResponse} from '../../..';

export interface IEndpointRequestOption {
    meta?: IMeta;
}

export abstract class Endpoint implements IEndpoint {

    get path(): string {
        return this.$path;
    }

    get api(): IHarpokratApi {
        return this.$api;
    }

    protected constructor(
        private readonly $api: IHarpokratApi,
        private readonly $path: string,
    ) {
    }

    protected resolvePath(...path: string[]) {
        return [this.path, path].join('/');
    }

    async request<T extends IPrimaryData<any>>(url: string, requestOptions: IRequestOptions = {}, options: IEndpointRequestOption = {}): Promise<T> {
        const body = requestOptions.body;
        if (body != null) {
            requestOptions.body = {
                data: body,
                meta: options.meta,
            } as IResponse;
        }
        const response = await this.$api.requester<IResponse<T>>(url, requestOptions);
        return response.data;
    }
}
