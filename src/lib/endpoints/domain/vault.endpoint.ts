import {IResourceEndpoint} from '../resource-endpoint';
import {IVault} from '../../models/domain/attributes/vault';
import {ResourceEndpoint} from './resource.endpoint';
import {IHarpokratApi} from '../../api';
import {ISecretEndpoint, SecretEndpoint} from './secret.endpoint';
import {IGroup, IUser} from '../../..';

export interface IVaultEndpoint extends IResourceEndpoint<IVault> {

    secretsOf(id: string): ISecretEndpoint;

    ownerOf(id: string): IResourceEndpoint<IUser | IGroup>;

}

export class VaultEndpoint extends ResourceEndpoint<IVault> implements IVaultEndpoint {

    constructor(api: IHarpokratApi, path: string = 'vaults') {
        super(api, path);
    }

    secretsOf(id: string): ISecretEndpoint {
        return new SecretEndpoint(this.api, this.resolvePath(id, 'relationships', 'secrets'));
    }

    ownerOf(id: string): IResourceEndpoint<IUser | IGroup> {
        return new ResourceEndpoint<IUser | IGroup>(this.api, this.resolvePath(id, 'relationships', 'secrets'));
    }
}
