import {IResourceEndpoint} from '../resource-endpoint';
import {IVault} from '../../models/domain/attributes/vault';
import {ResourceEndpoint} from './resource.endpoint';
import {IHarpokratApi} from '../../api';

export interface IVaultEndpoint extends IResourceEndpoint<IVault> {

}

export class VaultEndpoint extends ResourceEndpoint<IVault> implements IVaultEndpoint {

    constructor(api: IHarpokratApi) {
        super(api, 'vaults');
    }
}
