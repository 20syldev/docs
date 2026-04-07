# Captcha Generation

The `/captcha` endpoint generates an image from a text provided as a parameter. This endpoint can be useful for testing a user with the generated captcha by storing the text in memory.

<Endpoint method="get" path="/captcha" baseUrl="https://api.sylvain.sh" />

## Parameters

| Parameter | Required | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| `text`    | Yes      | The captcha text to generate. Must contain at least one character |

## Response

The endpoint returns a PNG image of the generated captcha.

## Code Examples

<Examples method="get" path="/captcha" :params="{ text: 'test1234?ABCD' }" />

::: tip Example
[See an example of the generated captcha](https://api.sylvain.sh/v4/captcha?text=test1234?ABCD)
:::

## Try It

<Try method="get" path="/captcha" :params="[{ name: 'text', required: true }]" />

## Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                                    | Description                                |
| ------------------------------------------------ | ------------------------------------------ |
| `Please provide a valid argument (?text={text})` | The `text` parameter is missing or invalid |
