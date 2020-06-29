import {IPageable} from '../..';
import {IEndpointRequestOption} from './domain/endpoint';
import {IResource} from '../..';

export interface IResourceEndpoint<T> {

    create(resource: IResource<T>, options?: IEndpointRequestOption): Promise<IResource<T>>;

    read(id: string): Promise<IResource<T>>;

    readMany(pageable?: IPageable): Promise<IResource<T>[]>;

    update(id: string, resource: IResource<Partial<T>>, options?: IEndpointRequestOption): Promise<IResource<T>>;

    delete(id: string, options?: IEndpointRequestOption): Promise<void>;
}
