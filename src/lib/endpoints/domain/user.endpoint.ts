import {IResourceEndpoint} from '../resource-endpoint';
import {IHarpokratApi} from '../../api';
import {ResourceEndpoint} from './resource.endpoint';
import {IOrganization, ISecret, IUser, IVault} from '../../..';
import {ILog} from "../../models/domain/attributes/log";

export interface IUserEndpoint extends IResourceEndpoint<IUser> {

	resource(id: string, resourceName: 'ownedOrganizations'): IResourceEndpoint<IOrganization>;

	resource(id: string, resourceName: 'organizations'): IResourceEndpoint<IOrganization>;

	resource(id: string, resourceName: 'secrets'): IResourceEndpoint<ISecret>;

	resource(id: string, resourceName: 'vaults'): IResourceEndpoint<IVault>;

	resource(id: string, resourceName: 'logs'): IResourceEndpoint<ILog>;
}

export class UserEndpoint extends ResourceEndpoint<IUser> implements IUserEndpoint {

	constructor(api: IHarpokratApi, path: string = 'users') {
		super(api, path);
	}
}
