# API Information

The `/infos` endpoint provides general information about the [API](https://api.sylvain.pro). This endpoint does not require any options.

<HEndpoint method="get" path="/v3/infos" baseUrl="https://api.sylvain.pro" />

## Parameters

This endpoint does not require any parameters.

## Request Example

```
GET /v3/infos
```

## Response

```json
{
  "endpoints": 20,
  "last_version": "v3",
  "documentation": "https://docs.sylvain.pro",
  "github": "https://github.com/20syldev/api",
  "creation": "November 25th 2024"
}
```

## Response Fields

| Field           | Description                         |
| --------------- | ----------------------------------- |
| `endpoints`     | Total number of available endpoints |
| `last_version`  | Current API version                 |
| `documentation` | Documentation URL                   |
| `github`        | GitHub repository URL               |
| `creation`      | API creation date                   |

## cURL

```bash
curl -X GET "https://api.sylvain.pro/v3/infos"
```