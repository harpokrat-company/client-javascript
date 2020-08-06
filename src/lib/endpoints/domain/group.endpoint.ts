import {IResourceEndpoint} from '../resource-endpoint';
import {IGroup} from '../../models/domain/attributes/group';
import {ResourceEndpoint} from './resource.endpoint';
import {IHarpokratApi} from '../../api';

export interface IGroupEndpoint extends IResourceEndpoint<IGroup> {

}

export class GroupEndpoint extends ResourceEndpoint<IGroup> implements IGroupEndpoint {

    constructor(api: IHarpokratApi) {
        super(api, 'groups');
    }
}
