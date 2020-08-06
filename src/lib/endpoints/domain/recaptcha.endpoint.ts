import {IHarpokratApi} from '../../..';
import {Endpoint} from './endpoint';
import {IRecaptchaResource} from '../../models/domain/resources';

export interface IRecaptchaEndpoint {

    read(): Promise<IRecaptchaResource>;
}

export class RecaptchaEndpoint extends Endpoint implements IRecaptchaEndpoint {

    constructor(
        api: IHarpokratApi,
        path: string = 'recaptcha',
    ) {
        super(api, path);
    }

    read(): Promise<IRecaptchaResource> {
        return this.request<IRecaptchaResource>(this.path, {
            method: 'GET',
            hasAuth: false,
        })
    }

}
