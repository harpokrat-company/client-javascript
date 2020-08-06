import {IResourceEndpoint} from '../resource-endpoint';
import {IHarpokratApi} from '../../api';
import {ResourceEndpoint} from './resource.endpoint';
import {ISecureAction} from '../../..';

export interface ISecureActionEndpoint extends IResourceEndpoint<ISecureAction> {

}

export class SecureActionEndpoint extends ResourceEndpoint<ISecureAction> {

    constructor(api: IHarpokratApi) {
        super(api, 'secure-actions');
    }
}
