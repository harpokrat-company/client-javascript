import {IResource} from './resource';
import {ILinks} from './links';
import {IMeta} from './meta';
import {IError} from './error';
import {IJsonApi} from './jsonapi';

export type IPrimaryData<T> = IResource<T> | IResource<T>[];

export interface IResponse<T extends IPrimaryData<any> = IPrimaryData<any>> {

  data?: T;

  errors?: IError[];

  meta?: IMeta;

  jsonapi?: IJsonApi;

  links?: ILinks;

  included?: IResource[];
}
