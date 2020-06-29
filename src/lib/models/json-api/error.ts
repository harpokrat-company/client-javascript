import {ILinks} from './links';
import {IMeta} from './meta';

export interface IError {

    id?: any;

    links?: ILinks;

    status?: string;

    code?: string;

    title?: string;

    detail?: string;

    source?: { pointer?: string, parameter?: string };

    meta?: IMeta;
}
