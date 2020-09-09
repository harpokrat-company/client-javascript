import {IPageable, IResource} from '../..';
import {IEndpointRequestOption} from './domain/endpoint';

export interface IResourceEndpoint<T> {

    resource(id: string, resourceName: string): IResourceEndpoint<any>;

    relationship(id: string, relationshipName: string): IResourceEndpoint<void>;

    create(resource: IResource<T>, options?: IEndpointRequestOption): Promise<IResource<T>>;

    read(id: string): Promise<IResource<T>>;

    readMany(pageable?: IPageable): Promise<IResource<T>[]>;

    update(id: string, resource: IResource<Partial<T>>, options?: IEndpointRequestOption): Promise<IResource<T>>;

    delete(id: string, options?: IEndpointRequestOption): Promise<void>;
}
