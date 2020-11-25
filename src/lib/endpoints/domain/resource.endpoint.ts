import {IResourceEndpoint} from '../resource-endpoint';
import {IHarpokratApi} from '../../api';
import {IPageable, IResource, ISearchParams} from '../../..';
import {Endpoint, IEndpointRequestOption} from './endpoint';

export class ResourceEndpoint<T> extends Endpoint implements IResourceEndpoint<T> {

	constructor(
		api: IHarpokratApi,
		path: string,
	) {
		super(api, path);
	}

	resource<U>(id: string, resourceName: string): IResourceEndpoint<U> {
		return new ResourceEndpoint<U>(this.api, this.resolvePath(id, resourceName));
	}

	relationship(id: string, relationshipName: string): IResourceEndpoint<void> {
		return new ResourceEndpoint<void>(this.api, this.resolvePath(id, 'relationships', relationshipName));
	}

	async create(resource: IResource<T>, options?: IEndpointRequestOption): Promise<IResource<T>> {
		return this.request<IResource<T>>(this.path, {
			method: 'POST',
			body: resource,
		}, options);
	}

	async delete(data: string | T[], options?: IEndpointRequestOption): Promise<void> {
		if (typeof data === 'string') {
			const path = this.resolvePath(data);
			await this.request(path, {
				method: 'DELETE',
			}, options);
		} else {
			await this.request(this.path, {
				method: 'DELETE',
				body: data,
			}, options);
		}
	}

	async read(id: string): Promise<IResource<T>> {
		const path = this.resolvePath(id);
		return this.request<IResource<T>>(path, {
			method: 'GET',
		});
	}

	async readMany(pageable: IPageable = {
		page: 1,
		size: 20
	}): Promise<IResource<T>[]> {
		const {page, size, filters = {}, sort, sortDescending} = pageable;
		const searchParams: ISearchParams = {
			'page[number]': page.toFixed(0),
			'page[size]': size.toFixed(0),
		};
		for (const key of Object.keys(filters)) {
			searchParams[`filter[${key}]`] = filters[key];
		}
		if (sort) {
			searchParams['sort'] = sortDescending ? `-${sort}` : sort;
		}
		return this.request<IResource<T>[]>(this.path, {
			method: 'GET',
			searchParams,
		});
	}

	async update(id: string, resource: IResource<Partial<T>>, options?: IEndpointRequestOption): Promise<IResource<T>> {
		const path = this.resolvePath(id);
		return this.request<IResource<T>>(path, {
			method: 'PATCH',
			body: resource,
		}, options);
	}

}
