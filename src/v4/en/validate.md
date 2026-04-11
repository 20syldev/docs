# Validate

The `/validate` endpoint validates various data formats.

<Endpoint method="get" path="/validate" baseUrl="https://api.sylvain.sh" />

## Parameters

| Parameter | Required | Description                              |
| --------- | -------- | ---------------------------------------- |
| `type`    | Yes      | Validation type: `luhn`, `iban`, `email` |
| `value`   | Yes      | Value to validate                        |

## Validation Types

| Type    | Description                          |
| ------- | ------------------------------------ |
| `luhn`  | Luhn algorithm (credit card numbers) |
| `iban`  | International Bank Account Number    |
| `email` | Email address format                 |

## Response (`luhn`)

```json
{
    "valid": true,
    "value": "4532015112830366"
}
```

## Response (`iban`)

```json
{
    "valid": true,
    "value": "FR7630006000011234567890189",
    "country": "FR"
}
```

## Response (`email`)

```json
{
    "valid": true,
    "value": "user@example.com"
}
```

## Response Fields

| Field     | Type      | Description                |
| --------- | --------- | -------------------------- |
| `valid`   | `boolean` | Whether the value is valid |
| `value`   | `string`  | The validated value        |
| `country` | `string`  | Country code (IBAN only)   |

## Code Examples

<Examples method="get" path="/validate" :params="{ type: 'email', value: 'user@example.com' }" />

## Try It

<Try method="get" path="/validate" :params="[{ name: 'type', required: true, options: ['luhn', 'iban', 'email'] }, { name: 'value', required: true }]" />

## Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                                             | Description                                |
| --------------------------------------------------------- | ------------------------------------------ |
| `Please provide a valid type (?type={luhn\|iban\|email})` | The `type` parameter is missing or invalid |
| `A value is required`                                     | The `value` parameter is missing           |
