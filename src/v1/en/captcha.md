# Captcha Generation

The `/captcha` endpoint generates an image from a text provided as a parameter. This endpoint can be useful for testing a user with the generated captcha by storing the text in memory.

<HEndpoint method="get" path="/v1/captcha" baseUrl="https://api.sylvain.pro" />

## Parameters

| Parameter | Required | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| `text`    | Yes      | The captcha text to generate. Must contain at least one character |

## Request Example

```
GET /v1/captcha?text=test1234?ABCD
```

## Response

The endpoint returns a PNG image of the generated captcha.

## cURL

```bash
curl -X GET "https://api.sylvain.pro/v1/captcha?text=test1234?ABCD" --output captcha.png
```

::: tip Example
[See an example of the generated captcha](https://api.sylvain.pro/v1/captcha?text=test1234?ABCD)
:::

## Error Handling

If the value of `text` is empty, an error will be returned.