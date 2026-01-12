# QR Code Generation

The `/qrcode` endpoint generates a QR Code from a URL provided as a parameter. This endpoint is useful for quickly generating an image in PNG format.

<Endpoint method="get" path="/v2/qrcode" baseUrl="https://api.sylvain.pro" />

## Parameters

| Parameter | Required | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| `url`     | Yes      | The URL of the QR Code to generate. Must contain the full address |

## Request Example

```
GET /v2/qrcode?url=https://docs.sylvain.pro
```

## Response

```json
{
  "qr": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOaSURBVO3BQY5jBxYDwcwH3f/KnF7MgqsPCFKV7..."
}
```

## cURL

```bash
curl -X GET "https://api.sylvain.pro/v2/qrcode?url=https://docs.sylvain.pro"
```

## Error Handling

If the value of `url` is empty, an error will be returned.