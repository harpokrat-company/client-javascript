import {IResource} from '../json-api/resource';
import {IRecaptcha} from './attributes/recaptcha';
import {ISecret} from './attributes/secret';
import {ISecureAction} from './attributes/secure-action';
import {IToken} from './attributes/token';
import {IUser} from './attributes/user';
import {IGroup} from './attributes/group';
import {IVault} from './attributes/vault';
import {IOrganization} from './attributes/organization';
import {ILog} from "./attributes/log";

export type IGroupResource = IResource<IGroup>;
export type ILogResource = IResource<ILog>;
export type IOrganizationResource = IResource<IOrganization>;
export type IRecaptchaResource = IResource<IRecaptcha>;
export type ISecretResource = IResource<ISecret>;
export type ISecureActionResource = IResource<ISecureAction>;
export type ITokenResource = IResource<IToken>;
export type IUserResource = IResource<IUser>;
export type IVaultResource = IResource<IVault>;
