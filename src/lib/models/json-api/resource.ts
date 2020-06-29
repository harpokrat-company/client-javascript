import {ILinks} from './links';
import {IRelationships} from './relationships';
import {IResourceIdentifier} from './resource-identifier';

export interface IResource<T = any> extends IResourceIdentifier {

    attributes?: T;

    relationships?: IRelationships;

    links?: ILinks;
}
