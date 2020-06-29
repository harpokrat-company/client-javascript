import {IRequester} from './requester/requester';
import {fetchRequester} from './requester/fetch-requester';
import {IJsonWebTokensEndpoint, JsonWebTokensEndpoint} from './endpoints/domain/json-web-tokens.endpoint';
import {makeWrappedRequester} from './requester/wrapped-requester';
import {HclwService} from '@harpokrat/hcl';
import {ISecretEndpoint, SecretEndpoint} from './endpoints/domain/secret.endpoint';
import {ISecureActionEndpoint, SecureActionEndpoint} from './endpoints/domain/secure-action.endpoint';
import {IUserEndpoint, UserEndpoint} from './endpoints/domain/user.endpoint';

export interface IHarpokratCredentials {

    readonly email: string;

    readonly password: string;
}

export interface IHarpokratApi {

    auth?: IHarpokratCredentials;

    accessToken?: string;

    readonly jsonWebTokens: IJsonWebTokensEndpoint;
    readonly secrets: ISecretEndpoint;
    readonly secureActions: ISecureActionEndpoint;
    readonly users: IUserEndpoint;

    readonly requester: IRequester;

    readonly hclw: HclwService;
}

export interface IHarpokratApiOptions {

    auth?: IHarpokratCredentials;

    requester?: IRequester;

    apiUrl?: string;
}

export class HarpokratApi implements IHarpokratApi {

    // Endpoints
    readonly jsonWebTokens: IJsonWebTokensEndpoint;
    readonly secrets: ISecretEndpoint;
    readonly secureActions: ISecureActionEndpoint;
    readonly users: IUserEndpoint;

    // Token
    accessToken?: string;

    // Requester
    requester: IRequester;

    // Auth
    auth?: IHarpokratCredentials;

    // Hclw
    readonly hclw: HclwService;

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
        this.hclw = new HclwService();
        this.jsonWebTokens = new JsonWebTokensEndpoint(this);
        this.secrets = new SecretEndpoint(this);
        this.secureActions = new SecureActionEndpoint(this);
        this.users = new UserEndpoint(this);
    }
}
