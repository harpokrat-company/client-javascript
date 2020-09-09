import {IResourceEndpoint} from '../resource-endpoint';
import {IVault} from '../../models/domain/attributes/vault';
import {ResourceEndpoint} from './resource.endpoint';
import {IHarpokratApi} from '../../api';
import {ISecret, IUser} from '../../..';

export interface IVaultEndpoint extends IResourceEndpoint<IVault> {

    resource(id: string, resourceName: 'secrets'): IResourceEndpoint<ISecret>;

    resource(id: string, resourceName: 'owner'): IResourceEndpoint<IUser>;

}

export class VaultEndpoint extends ResourceEndpoint<IVault> implements IVaultEndpoint {

    constructor(api: IHarpokratApi, path: string = 'vaults') {
        super(api, path);
    }
}
