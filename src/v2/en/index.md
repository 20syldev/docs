# Getting Started

Welcome to the **Hyperion API v2** documentation. This is the previous stable version of the API.

::: info Migration Available
A newer version is available! Consider migrating to [v3](/v3/en/) for the latest features including Hyperplanning support, Levenshtein distance, and improved chat functionality.
:::

## Base URL

All API requests should be made to:

```
https://api.sylvain.pro/v2
```

## Quick Example

```bash
curl -X GET "https://api.sylvain.pro/v2/infos"
```

```json
{
  "endpoints": 17,
  "last_version": "v2",
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

- [v3 Documentation](/v3/en/) - Latest version (recommended)
- [v1 Documentation](/v1/en/) - Legacy version