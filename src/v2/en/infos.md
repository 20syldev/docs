# API Information

The `/infos` endpoint provides general information about the [API](https://api.sylvain.pro). This endpoint does not require any options.

<Endpoint method="get" path="/v2/infos" baseUrl="https://api.sylvain.pro" />

## Request Example

```
GET /v2/infos
```

## Response

```json
{
  "endpoints": 17,
  "last_version": "v2",
  "documentation": "https://docs.sylvain.pro",
  "github": "https://github.com/20syldev/api",
  "creation": "November 25th 2024"
}
```

## cURL

```bash
curl -X GET "https://api.sylvain.pro/v2/infos"
```