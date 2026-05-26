# Symmetric

The `/symmetric` endpoint encrypts and decrypts text using AES symmetric encryption.

<Endpoint method="post" path="/symmetric" baseUrl="https://api.sylvain.sh" />

## Parameters

The request body must be JSON:

| Parameter   | Required | Description                                                                |
| ----------- | -------- | -------------------------------------------------------------------------- |
| `action`    | Yes      | Action to perform: `encrypt` or `decrypt`                                  |
| `text`      | Yes      | Text to encrypt, or base64 blob to decrypt                                 |
| `key`       | Yes      | Encryption key (minimum 8 characters)                                      |
| `algorithm` | No       | Cipher algorithm: `aes-256-gcm` (default), `aes-256-cbc`, or `aes-128-gcm` |

## Key Derivation

The raw key is never used directly. It is derived using `scryptSync` with a random 16-byte salt, producing a secure fixed-length key regardless of input length.

## Blob Format

Encrypted output is returned as a base64 string with the following binary layout:

```
[16 bytes salt][12/16 bytes IV][16 bytes tag (GCM only)][ciphertext]
```

- **Salt** (16 bytes): used to derive the key
- **IV** (12 bytes for GCM, 16 bytes for CBC): initialization vector
- **Tag** (16 bytes, GCM only): authentication tag for integrity verification
- **Ciphertext**: the encrypted content

Pass this blob as `text` to decrypt.

## Code Examples

<Examples method="post" path="/symmetric" :body="{ action: 'encrypt', text: 'hello', key: 'mysecretkey' }" />

## Response Fields

| Field       | Type     | Description                                   |
| ----------- | -------- | --------------------------------------------- |
| `action`    | `string` | Action performed (`encrypt` or `decrypt`)     |
| `algorithm` | `string` | Cipher algorithm used                         |
| `result`    | `string` | Encrypted base64 blob, or decrypted plaintext |

## Try It

<Try name="Symmetric" />

## Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                                                     | Description                              |
| ----------------------------------------------------------------- | ---------------------------------------- |
| `Action is required`                                              | The `action` parameter is missing        |
| `Action must be one of: encrypt, decrypt`                         | The `action` value is not valid          |
| `Text is required`                                                | The `text` parameter is missing or empty |
| `Text exceeds maximum allowed length`                             | The `text` exceeds the maximum length    |
| `Key is required`                                                 | The `key` parameter is missing           |
| `Key must be at least 8 characters`                               | The `key` is shorter than 8 characters   |
| `Algorithm must be one of: aes-256-gcm, aes-256-cbc, aes-128-gcm` | The `algorithm` value is not supported   |
