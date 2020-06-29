import {ILinks} from './links';
import {IMeta} from './meta';
import {IResourceIdentifier} from './resource-identifier';

export type IResourceLinkage = null | IResourceIdentifier | IResourceIdentifier[];

export interface IRelationship {

    links?: ILinks;

    data?: IResourceLinkage;

    meta?: IMeta;
}
