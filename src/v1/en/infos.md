# API Information

The `/infos` endpoint provides general information about the [API](https://api.sylvain.pro). This endpoint does not require any options.

<Endpoint method="get" path="/v1/infos" baseUrl="https://api.sylvain.pro" />

## Request Example

```
GET /v1/infos
```

## Response

```json
{
  "endpoints": 11,
  "last_version": "v1",
  "documentation": "https://docs.sylvain.pro",
  "github": "https://github.com/20syldev/api",
  "creation": "November 25th 2024"
}
```

## cURL

```bash
curl -X GET "https://api.sylvain.pro/v1/infos"
```