import {IResourceEndpoint} from '../resource-endpoint';
import {IOrganization} from '../../models/domain/attributes/organization';
import {ResourceEndpoint} from './resource.endpoint';
import {IHarpokratApi} from '../../api';

export interface IOrganizationEndpoint extends IResourceEndpoint<IOrganization> {

}

export class OrganizationEndpoint extends ResourceEndpoint<IOrganization> implements IOrganizationEndpoint {

    constructor(api: IHarpokratApi) {
        super(api, 'organizations');
    }
}
