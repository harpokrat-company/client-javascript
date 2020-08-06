import {IResourceEndpoint} from '../resource-endpoint';
import {IOrganization} from '../../models/domain/attributes/organization';
import {ResourceEndpoint} from './resource.endpoint';
import {IHarpokratApi} from '../../api';
import {IUserEndpoint, UserEndpoint} from './user.endpoint';

export interface IOrganizationEndpoint extends IResourceEndpoint<IOrganization> {

    membersOf(id: string): IUserEndpoint;

    ownerOf(id: string): IUserEndpoint;
}

export class OrganizationEndpoint extends ResourceEndpoint<IOrganization> implements IOrganizationEndpoint {

    constructor(api: IHarpokratApi, path: string = 'organizations') {
        super(api, path);
    }

    membersOf(id: string): IUserEndpoint {
        return new UserEndpoint(this.api, this.resolvePath(id, 'relationships', 'members'));
    }

    ownerOf(id: string): IUserEndpoint {
        return new UserEndpoint(this.api, this.resolvePath(id, 'relationships', 'owner'));
    }
}
