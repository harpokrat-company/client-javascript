import {IResourceEndpoint} from '../resource-endpoint';
import {IOrganization} from '../../models/domain/attributes/organization';
import {ResourceEndpoint} from './resource.endpoint';
import {IHarpokratApi} from '../../api';
import {IGroup, IUser} from "../../..";

export interface IOrganizationEndpoint extends IResourceEndpoint<IOrganization> {

    resource(id: string, resourceName: 'groups'): IResourceEndpoint<IGroup>;

    resource(id: string, resourceName: 'owner'): IResourceEndpoint<IUser>;

    resource(id: string, resourceName: 'members'): IResourceEndpoint<IUser>;
}

export class OrganizationEndpoint extends ResourceEndpoint<IOrganization> implements IOrganizationEndpoint {

    constructor(api: IHarpokratApi, path: string = 'organizations') {
        super(api, path);
    }
}
