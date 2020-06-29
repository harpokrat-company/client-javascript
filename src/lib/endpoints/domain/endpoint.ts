import {IEndpoint} from '../endpoint';
import {IHarpokratApi} from '../../api';
import {IMeta, IPrimaryData, IRequestOptions, IResponse} from '../../..';

export interface IEndpointRequestOption {
    meta?: IMeta;
}

export class Endpoint implements IEndpoint {

    get api(): IHarpokratApi {
        return this.$api;
    }

    constructor(
        private readonly $api: IHarpokratApi,
    ) {
    }

    async request<T extends IPrimaryData<any>>(url: string, requestOptions: IRequestOptions, options: IEndpointRequestOption = {}): Promise<T> {
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
