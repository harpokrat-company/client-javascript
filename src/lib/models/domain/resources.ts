import {IResource} from '../json-api/resource';
import {ISecret} from './attributes/secret';
import {ISecureAction} from './attributes/secure-action';
import {IToken} from './attributes/token';
import {IUser} from './attributes/user';

export type ISecretResource = IResource<ISecret>;
export type ISecureActionResource = IResource<ISecureAction>;
export type ITokenResource = IResource<IToken>;
export type IUserResource = IResource<IUser>;
