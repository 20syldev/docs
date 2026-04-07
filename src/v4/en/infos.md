# API Information

The `/infos` endpoint provides general information about the [API](https://api.sylvain.sh). This endpoint does not require any options.

<Endpoint method="get" path="/infos" baseUrl="https://api.sylvain.sh" />

## Parameters

This endpoint does not require any parameters.

## Response

```json
{
    "endpoints": 20,
    "last_version": "v4",
    "documentation": "https://docs.sylvain.sh",
    "github": "https://github.com/20syldev/api",
    "creation": "November 25th 2024"
}
```

## Response Fields

| Field           | Type     | Description                         |
| --------------- | -------- | ----------------------------------- |
| `endpoints`     | `number` | Total number of available endpoints |
| `last_version`  | `string` | Current API version                 |
| `documentation` | `string` | Documentation URL                   |
| `github`        | `string` | GitHub repository URL               |
| `creation`      | `string` | API creation date                   |

## Code Examples

<Examples method="get" path="/infos" />

## Try It

<Try method="get" path="/infos" :params="[]" />
