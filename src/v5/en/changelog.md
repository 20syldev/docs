# Changelog

## Migration Guide

### Use `/latest` (recommended)

Use `api.sylvain.sh/latest` to always point to the latest version:

```
https://api.sylvain.sh/latest/infos
https://api.sylvain.sh/latest/evaluate
```

Nested paths and query strings are preserved through the redirect:

```
https://api.sylvain.sh/latest/chat/private?session=abc
# redirects to /v5/chat/private?session=abc
```

### Manual Migration

Replace all occurrences of `/v4/` with `/v5/` in your API requests:

```
# Before
https://api.sylvain.sh/v4/infos

# After
https://api.sylvain.sh/v5/infos
```

### Endpoint Compatibility

All v4 endpoints are fully compatible in v5. New endpoints are listed in the [5.0.0 changelog](/v5/en/changelog/5.0.0).

## Previous Versions

- [v4 Changelog](/v4/en/changelog) - View all v4 releases
- [v3 Documentation](/v3/en/) - Legacy version
