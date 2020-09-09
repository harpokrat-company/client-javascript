import {IResourceEndpoint} from '../resource-endpoint';
import {IGroup} from '../../models/domain/attributes/group';
import {ResourceEndpoint} from './resource.endpoint';
import {IHarpokratApi} from '../../api';
import {IOrganization, ISecret, IUser, IVault} from "../../..";

export interface IGroupEndpoint extends IResourceEndpoint<IGroup> {

    resource(id: string, resourceName: 'children'): IResourceEndpoint<IGroup>;

    resource(id: string, resourceName: 'members'): IResourceEndpoint<IUser>;

    resource(id: string, resourceName: 'organization'): IResourceEndpoint<IOrganization>;

    resource(id: string, resourceName: 'parent'): IResourceEndpoint<IGroup>;

    resource(id: string, resourceName: 'secrets'): IResourceEndpoint<ISecret>;

    resource(id: string, resourceName: 'vaults'): IResourceEndpoint<IVault>;
}

export class GroupEndpoint extends ResourceEndpoint<IGroup> implements IGroupEndpoint {

    constructor(api: IHarpokratApi, path: string = 'groups') {
        super(api, path);
    }
}
