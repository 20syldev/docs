# Getting Started

Welcome to the **Hyperion API v1** documentation. This is the legacy version of the API.

::: warning Legacy Version
This is a legacy version of the API. Consider migrating to [v3](/v3/en/) for the latest features and improvements.
:::

## Base URL

All API requests should be made to:

```
https://api.sylvain.pro/v1
```

## Quick Example

```bash
curl -X GET "https://api.sylvain.pro/v1/infos"
```

```json
{
  "endpoints": 11,
  "last_version": "v1",
  "documentation": "https://docs.sylvain.pro",
  "github": "https://github.com/20syldev/api",
  "creation": "November 25th 2024"
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
- [v2 Documentation](/v2/en/) - Previous stable version