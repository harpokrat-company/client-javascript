import {IResourceEndpoint} from '../resource-endpoint';
import {IGroup} from '../../models/domain/attributes/group';
import {ResourceEndpoint} from './resource.endpoint';
import {IHarpokratApi} from '../../api';
import {IUserEndpoint, UserEndpoint} from './user.endpoint';
import {IOrganizationEndpoint, OrganizationEndpoint} from './organization.endpoint';
import {ISecretEndpoint, SecretEndpoint} from './secret.endpoint';
import {IVaultEndpoint, VaultEndpoint} from './vault.endpoint';

export interface IGroupEndpoint extends IResourceEndpoint<IGroup> {

    childrenOf(id: string): IGroupEndpoint;

    membersOf(id: string): IUserEndpoint;

    organizationOf(id: string): IOrganizationEndpoint;

    parentOf(id: string): IGroupEndpoint;

    secretsOf(id: string): ISecretEndpoint;

    vaultsOf(id: string): IVaultEndpoint;
}

export class GroupEndpoint extends ResourceEndpoint<IGroup> implements IGroupEndpoint {

    constructor(api: IHarpokratApi, path: string = 'groups') {
        super(api, path);
    }

    childrenOf(id: string): IGroupEndpoint {
        return new GroupEndpoint(this.api, this.resolvePath(id, 'relationships', 'children'));
    }

    membersOf(id: string): IUserEndpoint {
        return new UserEndpoint(this.api, this.resolvePath(id, 'relationships', 'members'));
    }

    organizationOf(id: string): IOrganizationEndpoint {
        return new OrganizationEndpoint(this.api, this.resolvePath(id, 'relationships', 'organization'));
    }

    parentOf(id: string): IGroupEndpoint {
        return new GroupEndpoint(this.api, this.resolvePath(id, 'relationships', 'parent'));
    }

    secretsOf(id: string): ISecretEndpoint {
        return new SecretEndpoint(this.api, this.resolvePath(id, 'relationships', 'secrets'));
    }

    vaultsOf(id: string): IVaultEndpoint {
        return new VaultEndpoint(this.api, this.resolvePath(id, 'relationships', 'vaults'));
    }


}
