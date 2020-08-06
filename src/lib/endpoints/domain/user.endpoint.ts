import {IResourceEndpoint} from '../resource-endpoint';
import {IHarpokratApi} from '../../api';
import {ResourceEndpoint} from './resource.endpoint';
import {IOrganizationEndpoint, ISecretEndpoint, IUser, IVaultEndpoint} from '../../..';
import {OrganizationEndpoint} from './organization.endpoint';
import {SecretEndpoint} from './secret.endpoint';
import {VaultEndpoint} from './vault.endpoint';

export interface IUserEndpoint extends IResourceEndpoint<IUser> {

    ownedOrganizationsOf(id: string): IOrganizationEndpoint;

    organizationsOf(id: string): IOrganizationEndpoint

    secretsOf(id: string): ISecretEndpoint;

    vaultsOf(id: string): IVaultEndpoint;
}

export class UserEndpoint extends ResourceEndpoint<IUser> implements IUserEndpoint {

    constructor(api: IHarpokratApi, path: string = 'users') {
        super(api, path);
    }

    organizationsOf(id: string): IOrganizationEndpoint {
        return new OrganizationEndpoint(this.api, this.resolvePath(id, 'relationships', 'organization'));
    }

    ownedOrganizationsOf(id: string): IOrganizationEndpoint {
        return new OrganizationEndpoint(this.api, this.resolvePath(id, 'relationships', 'ownedOrganization'));
    }

    secretsOf(id: string): ISecretEndpoint {
        return new SecretEndpoint(this.api, this.resolvePath(id, 'relationships', 'secrets'));
    }

    vaultsOf(id: string): IVaultEndpoint {
        return new VaultEndpoint(this.api, this.resolvePath(id, 'relationships', 'vaults'));
    }

}
