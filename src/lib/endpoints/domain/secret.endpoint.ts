import {IResourceEndpoint} from '../resource-endpoint';
import {IHarpokratApi} from '../../api';
import {ResourceEndpoint} from './resource.endpoint';
import {ISecret} from '../../..';

export interface ISecretEndpoint extends IResourceEndpoint<ISecret> {

}

export class SecretEndpoint extends ResourceEndpoint<ISecret> {

    constructor($api: IHarpokratApi) {
        super($api, 'secrets');
    }
}
