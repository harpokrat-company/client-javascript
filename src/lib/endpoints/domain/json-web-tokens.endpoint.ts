import {ITokenResource} from '../../models/domain/resources';
import {IHarpokratApi} from '../../api';
import {HarpokratError} from '../../errors/harpokrat-error';
import {IEndpoint} from '../endpoint';
import {Endpoint} from './endpoint';

export interface IJsonWebTokensEndpoint extends IEndpoint {

    create(): Promise<ITokenResource>;
}

export class JsonWebTokensEndpoint extends Endpoint implements IJsonWebTokensEndpoint {

    constructor(
        api: IHarpokratApi,
    ) {
        super(api)
    }

    async create(): Promise<ITokenResource> {
        if (this.api.auth == null) {
            throw new HarpokratError('Auth is required to create a JWT');
        }
        const {email, password} = this.api.auth;
        const basicAuth = await this.api.hclw.getBasicAuth(email, password);
        return this.request<ITokenResource>('json-web-tokens', {
            method: 'POST',
            hasAuth: false,
            headers: {
                'Authorization': basicAuth,
            }
        });
    }

}
