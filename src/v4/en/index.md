# Getting Started

<Banner />

Welcome to the **Hyperion API v4** documentation. This API provides a comprehensive collection of utility endpoints for developers.

## Base URL

All API requests should be made to:

```
https://api.sylvain.sh/v4
```

## Quick Example

<Try method="get" path="/infos" :params="[]" auto-send />

## Rate Limiting

Some endpoints have rate limiting to prevent abuse. If you exceed the [rate limit](/v4/en/pricing), you'll receive an error response:

```json
{
    "message": "Too Many Requests",
    "error": "You have exceeded the limit of 2000 requests per hour.",
    "documentation": "https://docs.sylvain.sh",
    "status": "429"
}
```

Depending on the endpoint and limiter, the error message may also be:

- `Global rate limit exceeded.`
- `Rate limit exceeded. Try again in X seconds.`

## Error Handling

All endpoints return consistent error responses:

```json
{
    "message": "Bad Request",
    "error": "Description of the error",
    "documentation": "https://docs.sylvain.sh/v4/{endpoint}",
    "status": "400"
}
```

## Other Versions

- [v3 Documentation](/v3/en/) - Previous stable version
- [v2 Documentation](/v2/en/) - Legacy version
