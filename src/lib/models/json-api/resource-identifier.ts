import {IMeta} from './meta';

export interface IResourceIdentifier {

  type: string;

  id: string;

  meta?: IMeta;
}

