export type IPointer = number;


export interface IKeyPair {

	GetPublic(): IPublicKey;

	GetPrivate(): IPrivateKey;
}

export interface IRsaKey {
}

export interface IUser {

	GetEmail(): string;

	GetPassword(): string;

	GetFirstName(): string;

	GetLastName(): string;

	SetEmail(email: string): void;

	SetPassword(password: string): void;

	SetFirstName(firstName: string): void;

	SetLastName(lastName: string): void;
}

export interface ISecret {

	Serialize(key: string): string;

	SerializeAsymmetric(keyPair: IRsaKey): string;

	CorrectDecryption(): boolean;

	InitializeSymmetricCipher(): void;

	InitializeAsymmetricCipher(): void;

	InitializePlainCipher(): void;

	GetSecretTypeName(): string;
}

export interface IKey extends ISecret {

	GetOwner(): string;

	SetOwner(key: string): void;
}

export interface IPrivateKey extends IKey {

	GetSecretTypeName(): 'private-key';

	ExtractKey(): IRsaKey;
}

export interface IPublicKey extends IKey {

	GetSecretTypeName(): 'public-key';

	ExtractKey(): IRsaKey;
}

export interface ISymmetricKey extends IKey {

	GetSecretTypeName(): 'symmetric-key';

	GetKey(): string;

	SetKey(key: string): void;
}

export interface IPassword extends ISecret {

	GetSecretTypeName(): 'password';

	GetName(): string;

	GetLogin(): string;

	GetPassword(): string;

	GetDomain(): string;

	SetName(name: string): void;

	SetLogin(login: string): void;

	SetPassword(password: string): void;

	SetDomain(domain: string): void;
}

export interface IHclModule {

	GenerateRSAKeyPair(size: number): IKeyPair;

	GetDerivedKey(key: string): string;

	GetBasicAuthString(user: string, password: string): string;

	GetExceptionMessage(pointer: IPointer): string;

	CastSecretToPassword(secret: ISecret): IPassword;

	CastSecretToPrivateKey(secret: ISecret): IPrivateKey;

	CastSecretToPublicKey(secret: ISecret): IPublicKey;

	CastSecretToSymmetricKey(secret: ISecret): ISymmetricKey;

	User: new () => IUser;

	Secret: {
		Deserialize(key: string, content: string): ISecret,
		DeserializeAsymmetric(key: IRsaKey, content: string): ISecret,
	};

	SymmetricKey: new () => ISymmetricKey;

	Password: new () => IPassword;
}
