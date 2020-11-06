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
		path: string = 'json-web-tokens',
	) {
		super(api, path)
	}

	async create(): Promise<ITokenResource> {
		if (this.api.auth == null) {
			throw new HarpokratError('Auth is required to create a JWT');
		}
		const {email, password} = this.api.auth;
		const module = await this.api.hcl.getModule();
		const basicAuth = module.GetBasicAuthString(email, password);
		return this.request<ITokenResource>(this.path, {
			method: 'POST',
			hasAuth: false,
			headers: {
				'Authorization': basicAuth,
			}
		});
	}

}
