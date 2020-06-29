import {IResourceEndpoint} from '../resource-endpoint';
import {IHarpokratApi} from '../../api';
import {ResourceEndpoint} from './resource.endpoint';
import {IUser} from '../../..';

export interface IUserEndpoint extends IResourceEndpoint<IUser> {

}

export class UserEndpoint extends ResourceEndpoint<IUser> {

    constructor($api: IHarpokratApi) {
        super($api, 'users');
    }
}
