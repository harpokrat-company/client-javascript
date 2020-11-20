import {IResourceEndpoint} from '../resource-endpoint';
import {ResourceEndpoint} from './resource.endpoint';
import {IHarpokratApi} from '../../api';
import {ILog} from "../../models/domain/attributes/log";

export interface ILogEndpoint extends IResourceEndpoint<ILog> {
}

export class LogEndpoint extends ResourceEndpoint<ILog> implements ILogEndpoint {

	constructor(api: IHarpokratApi, path: string = 'logs') {
		super(api, path);
	}
}
