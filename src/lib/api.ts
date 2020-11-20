import {IRequester} from './requester/requester';
import {fetchRequester} from './requester/fetch-requester';
import {IJsonWebTokensEndpoint, JsonWebTokensEndpoint} from './endpoints/domain/json-web-tokens.endpoint';
import {makeWrappedRequester} from './requester/wrapped-requester';
import {ISecretEndpoint, SecretEndpoint} from './endpoints/domain/secret.endpoint';
import {ISecureActionEndpoint, SecureActionEndpoint} from './endpoints/domain/secure-action.endpoint';
import {IUserEndpoint, UserEndpoint} from './endpoints/domain/user.endpoint';
import {IRecaptchaEndpoint, RecaptchaEndpoint} from './endpoints/domain/recaptcha.endpoint';
import {GroupEndpoint, IGroupEndpoint} from './endpoints/domain/group.endpoint';
import {IVaultEndpoint, VaultEndpoint} from './endpoints/domain/vault.endpoint';
import {IOrganizationEndpoint, OrganizationEndpoint} from './endpoints/domain/organization.endpoint';
import {HclService, IHclService} from "./hcl/hcl-service";
import {ILogEndpoint, LogEndpoint} from "./endpoints/domain/log.endpoint";

export interface IHarpokratCredentials {

	readonly email: string;

	readonly password: string;
}

export interface IHarpokratApi {

	auth?: IHarpokratCredentials;

	accessToken?: string;

	readonly jsonWebTokens: IJsonWebTokensEndpoint;
	readonly groups: IGroupEndpoint;
	readonly logs: ILogEndpoint;
	readonly organizations: IOrganizationEndpoint;
	readonly recaptcha: IRecaptchaEndpoint;
	readonly secrets: ISecretEndpoint;
	readonly secureActions: ISecureActionEndpoint;
	readonly users: IUserEndpoint;
	readonly vaults: IVaultEndpoint;

	readonly requester: IRequester;

	readonly hcl: IHclService;
}

export interface IHarpokratApiOptions {

	auth?: IHarpokratCredentials;

	requester?: IRequester;

	apiUrl?: string;

	hclWasmUrl?: string;
}

export class HarpokratApi implements IHarpokratApi {

	// Endpoints
	readonly jsonWebTokens: IJsonWebTokensEndpoint;
	readonly groups: IGroupEndpoint;
	readonly logs: ILogEndpoint;
	readonly organizations: IOrganizationEndpoint;
	readonly recaptcha: IRecaptchaEndpoint;
	readonly secrets: ISecretEndpoint;
	readonly secureActions: ISecureActionEndpoint;
	readonly users: IUserEndpoint;
	readonly vaults: IVaultEndpoint;

	// Token
	accessToken?: string;

	// Requester
	requester: IRequester;

	// Auth
	auth?: IHarpokratCredentials;

	// Hcl
	readonly hcl: IHclService;

	private readonly $options: IHarpokratApiOptions;

	constructor(
		options: IHarpokratApiOptions = {},
	) {
		this.$options = options;
		this.auth = options.auth;
		this.requester = makeWrappedRequester(
			options.requester || fetchRequester,
			options.apiUrl || 'https://api.harpokrat.com/v1/',
			this,
		);
		this.hcl = new HclService(options.hclWasmUrl || 'https://static.harpokrat.com/hcl/hcl2.wasm');
		this.jsonWebTokens = new JsonWebTokensEndpoint(this);
		this.organizations = new OrganizationEndpoint(this);
		this.groups = new GroupEndpoint(this);
		this.logs = new LogEndpoint(this);
		this.recaptcha = new RecaptchaEndpoint(this);
		this.secrets = new SecretEndpoint(this);
		this.secureActions = new SecureActionEndpoint(this);
		this.users = new UserEndpoint(this);
		this.vaults = new VaultEndpoint(this);
	}
}
