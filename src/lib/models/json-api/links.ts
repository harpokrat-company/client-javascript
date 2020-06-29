import {ILink} from './link';

type ILinksEntry = string | ILink;

export interface ILinks {

    [key: string]: ILinksEntry;
}
