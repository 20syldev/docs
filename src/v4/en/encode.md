# Encode

The `/encode` endpoint encodes or decodes text in various formats.

<Endpoint method="get" path="/encode" baseUrl="https://api.sylvain.sh" />

## Parameters

| Parameter | Required | Description                                   |
| --------- | -------- | --------------------------------------------- |
| `method`  | Yes      | Encoding method (see available methods below) |
| `text`    | Yes      | Text to encode or decode                      |
| `shift`   | No       | Shift value for Caesar cipher (default: 13)   |

## Available Methods

| Method         | Description                      |
| -------------- | -------------------------------- |
| `base64encode` | Encode to Base64                 |
| `base64decode` | Decode from Base64               |
| `urlencode`    | URL encode                       |
| `urldecode`    | URL decode                       |
| `morse`        | Text → Morse code                |
| `unmorse`      | Morse code → Text                |
| `rot13`        | ROT-13 cipher                    |
| `caesar`       | Caesar cipher (requires `shift`) |
| `binary`       | Text → 8-bit binary              |
| `unbinary`     | Binary → Text                    |

## Response

```json
{
    "method": "base64encode",
    "result": "aGVsbG8="
}
```

## Response Fields

| Field    | Type     | Description                   |
| -------- | -------- | ----------------------------- |
| `method` | `string` | The encoding method used      |
| `result` | `string` | The encoded or decoded output |

## Code Examples

<Examples method="get" path="/encode" :params="{ method: 'base64encode', text: 'hello' }" />

## Try It

<Try method="get" path="/encode" :params="[{ name: 'method', required: true, options: ['base64encode', 'base64decode', 'urlencode', 'urldecode', 'morse', 'unmorse', 'rot13', 'caesar', 'binary', 'unbinary'] }, { name: 'text', required: true }, { name: 'shift', required: false }]" />

## Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                                                                    | Description                                  |
| -------------------------------------------------------------------------------- | -------------------------------------------- |
| `A value is required`                                                            | The `text` parameter is missing              |
| `Please provide a valid method (?method={base64encode\|base64decode\|morse\|…})` | The `method` parameter is missing or invalid |
