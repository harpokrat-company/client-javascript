import {IResourceEndpoint} from '../resource-endpoint';
import {IHarpokratApi} from '../../api';
import {ResourceEndpoint} from './resource.endpoint';
import {IGroup, ISecret, IUser} from '../../..';

export interface ISecretEndpoint extends IResourceEndpoint<ISecret> {

    ownerOf(id: string): IResourceEndpoint<IUser | IGroup | ISecret>;

}

export class SecretEndpoint extends ResourceEndpoint<ISecret> implements ISecretEndpoint {

    constructor(api: IHarpokratApi, path: string = 'secrets') {
        super(api, path);
    }

    ownerOf(id: string): IResourceEndpoint<IUser | IGroup | ISecret> {
        return new ResourceEndpoint<IUser | IGroup | ISecret>(this.api, this.resolvePath(id, 'relationships', 'owner'));
    }
}
