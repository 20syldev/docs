# QR Code Generation

The `/qrcode` endpoint generates a QR Code from a URL provided as a parameter. This endpoint is useful for quickly generating an image in PNG format.

<Endpoint method="get" path="/qrcode" baseUrl="https://api.sylvain.sh" />

## Parameters

| Parameter | Required | Description                                                     |
| --------- | -------- | --------------------------------------------------------------- |
| `url`     | Yes      | The URL to encode in the QR Code. Must contain the full address |

## Response Fields

| Field    | Type     | Description                        |
| -------- | -------- | ---------------------------------- |
| `result` | `string` | Base64 PNG data URI of the QR Code |

## Code Examples

<Examples method="get" path="/qrcode" :params="{ url: 'https://docs.sylvain.sh' }" />

## Using the Response

The response contains a base64-encoded PNG image. You can use it directly in HTML:

```html
<img src="data:image/png;base64,iVBORw0KGgo..." alt="QR Code" />
```

Or decode it and save as a file in your application.

## Try It

<Try method="get" path="/qrcode" :params="[{ name: 'url', required: true }]" />

## Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                             | Description                               |
| ----------------------------------------- | ----------------------------------------- |
| `Please provide a valid url (?url={URL})` | The `url` parameter is missing or invalid |
