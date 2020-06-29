import {IFilters} from './filter';

export interface IPageable {

    page: number;

    size: number;

    sort?: string;

    sortDescending?: boolean;

    filters?: IFilters;
}
