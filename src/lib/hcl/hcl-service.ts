import {IHclModule, ISecret} from "./hcl-module";
import hcl from './hcl';

export interface IHclService {

	readonly module: IHclModule;

	getModule(): Promise<IHclModule>;

	init(): void;

	cast<T extends ISecret = ISecret>(secret: ISecret): T;
}

const CAST_MAP: { [key: string]: (m: IHclModule) => (secret: ISecret) => any } = {
	'private-key': (m) => m.CastSecretToPassword,
	'public-key': (m) => m.CastSecretToPublicKey,
	'symmetric-key': (m) => m.CastSecretToSymmetricKey,
	'password': (m) => m.CastSecretToPassword,
}

export class HclService implements IHclService {

	private modulePromise: Promise<IHclModule>;

	module: IHclModule;

	constructor(
		private readonly wasmUrl: string,
	) {
	}

	async getModule(): Promise<IHclModule> {
		return this.module || this.modulePromise;
	}

	init(): void {
		if (this.modulePromise != null) {
			throw new Error('HCL Module already initialized')
		}
		this.modulePromise = new Promise<IHclModule>((r) => {
			const module = hcl({
				noInitialRun: true,
				locateFile: url => {
					if (url.endsWith(".wasm")) {
						return this.wasmUrl;
					}
					return url;
				},
				onRuntimeInitialized: () => {
					this.module = module;
					r(this.module);
				}
			});
		})
	}

	cast<T>(secret: ISecret): T {
		const type = secret.GetSecretTypeName();
		const caster = CAST_MAP[type];
		if (caster == null) {
			throw new Error('Invalid Secret Type ' + type);
		}
		return caster(this.module)(secret);
	}

}