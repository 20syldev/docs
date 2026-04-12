# Changelog

## Migration Guide

### Use `/latest` (recommended)

Use `api.sylvain.sh/latest` to always point to the latest version:

```
https://api.sylvain.sh/latest/infos
https://api.sylvain.sh/latest/token
```

### Manual Migration

Replace all occurrences of `/v3/` with `/v4/` in your API requests:

```
# Before
https://api.sylvain.sh/v3/infos

# After
https://api.sylvain.sh/v4/infos
```

### Endpoint Compatibility

All endpoints are fully compatible. Adapt your code to handle the enriched response fields (username, personal, domain).

## Previous Versions

- [v3 Documentation](/v3/en/) - Previous stable version
- [v2 Documentation](/v2/en/) - Legacy version
