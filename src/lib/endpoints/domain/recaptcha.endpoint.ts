import {IHarpokratApi} from '../../..';
import {Endpoint} from './endpoint';
import {IRecaptchaResource} from '../../models/domain/resources';

export interface IRecaptchaEndpoint {

    read(): Promise<IRecaptchaResource>;
}

export class RecaptchaEndpoint extends Endpoint implements IRecaptchaEndpoint {

    constructor(
        api: IHarpokratApi,
    ) {
        super(api);
    }

    read(): Promise<IRecaptchaResource> {
        return this.request<IRecaptchaResource>('recaptcha', {
            method: 'GET',
            hasAuth: false,
        })
    }

}
