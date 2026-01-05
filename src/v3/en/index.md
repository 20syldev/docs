# Getting Started

Welcome to the **Hyperion API v3** documentation. This API provides a comprehensive collection of utility endpoints for developers.

## Base URL

All API requests should be made to:

```
https://api.sylvain.pro/v3
```

## Quick Example

```bash
curl -X GET "https://api.sylvain.pro/v3/infos"
```

```json
{
  "endpoints": 20,
  "last_version": "v3",
  "documentation": "https://docs.sylvain.pro",
  "github": "https://github.com/20syldev/api",
  "creation": "November 25th 2024"
}
```

## Rate Limiting

Some endpoints have rate limiting to prevent abuse. If you exceed the [rate limit](/v3/en/pricing), you'll receive an error response:

```json
{
  "error": "Rate limit exceeded. Try again in X seconds."
}
```

## Error Handling

All endpoints return consistent error responses:

```json
{
  "error": "Description of the error"
}
```

## Other Versions

- [v2 Documentation](/v2/en/) - Previous stable version
- [v1 Documentation](/v1/en/) - Legacy version