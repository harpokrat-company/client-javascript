Harpokrat Javascript Client Library
===

### Getting Started

- Create an instance of the API Client

```typescript
import {HarpokratApi} from '@harpokrat/client';

const client = new HarpokratApi({
    auth: {
        email: 'test@gmail.com', // User email
        password: 'test' // User password in plaintext
    }, // (optional) auth details
    apiUrl: 'https://api.harpokrat.com/v1/', // (optional) URL of the API (make sure to include the trailing "/")
    requester: undefined, // (optional) custom requester implementation (default is fetch),
} /* (optional) constructor options */);
```

- Logging in

```typescript
// Requires client.auth to be set either from constructor or by modifying it after creating the client
const token = await client.jsonWebTokens.create();
client.accessToken = token;
```

- Examples
```typescript
import {ISecretResource} from '@harpokrat/client';

const resource: ISecretResource = {
    attributes: {
        content: 'test', // Should be encoded using the HCLW Library beforehand
    },
};

// Create a new secret
const secret = await client.secrets.create(resource /* Resource to persist */);

// Read all secrets
await client.secrets.readMany({
    page: 1, // Page to read
    size: 20, // Page size
    sort: 'content', // (optional) Property to sort by
    sortDescending: true, // (optional) Sort in ASC or DESC order
    filters: {'content': 'test'}, // Filters to apply
} /* (optional) Pagination options */)

// Read one secret
await client.secrets.read(secret.id /* ID of the resource to read */);

// Update one secret (supports patching)
await client.secrets.update(
    secret.id /* ID of the resource to update */,
    resource /* Resource to update the existing one with */,
);

// Delete one secret
await client.secrets.delete(secret.id /* ID of the resource to delete */);
```

- Similar methods exist for each endpoint (secrets, secureActions and users), jsonWebTokens only supports create with no body (as demonstrated).
