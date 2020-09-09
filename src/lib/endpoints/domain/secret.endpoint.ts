import {IResourceEndpoint} from '../resource-endpoint';
import {IHarpokratApi} from '../../api';
import {ResourceEndpoint} from './resource.endpoint';
import {IGroup, ISecret, IUser} from '../../..';

export interface ISecretEndpoint extends IResourceEndpoint<ISecret> {

    resource(id: string, resourceName: 'owner'): IResourceEndpoint<IUser | IGroup | ISecret>;

}

export class SecretEndpoint extends ResourceEndpoint<ISecret> implements ISecretEndpoint {

    constructor(api: IHarpokratApi, path: string = 'secrets') {
        super(api, path);
    }
}
