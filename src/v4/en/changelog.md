# Changelog v4

## API Changes

### TypeScript Rewrite

The entire API has been rewritten from JavaScript to **TypeScript**, with proper type definitions, Express middleware stack, and centralized error handling.

### Enriched Responses

- **Username** now returns `number`, `adjective`, `animal`, and `job` fields alongside `username`
- **Personal** response restructured with `vehicle` (array), `social_profiles` (object), `emergency_contacts` (array of objects), `subscriptions` and `pets` (arrays)
- **Domain** now returns `ip_address` and `dns_servers` as arrays (multiple values)

### Convert Endpoint

Temperature conversion only: **Celsius**, **Fahrenheit**, and **Kelvin**.

### Time Endpoint

- Type parameter now accepts `live` (current time) or `random` (random time between dates)
- 17 format options available: iso, utc, timestamp, locale, date, time, year, month, day, hour, minute, second, ms, dayOfWeek, dayOfYear, weekNumber, timezone
- 5 timezone options: UTC, Europe/Paris, America/New_York, Asia/Tokyo, Australia/Sydney

### Token Endpoint

- Default type is now `alphanum` (previously `alpha`)
- Length range: 12-4096, default 24

## New Documentation Features

### Interactive "Try It" Blocks

Every endpoint page now includes an interactive tester. Fill in the parameters and send requests directly from the documentation.

### API Playground

A dedicated [Playground](/v4/en/playground) page to test any endpoint with full control over parameters. Includes request history.

### Multi-Language Code Snippets

Code examples are now available in 4 languages: **cURL**, **JavaScript**, **Python**, and **PHP**. Your language preference is saved across pages.

### Response Schema Documentation

All endpoints now include a detailed response fields table documenting each field's type and purpose.

## Migration Guide

### Base URL Change

Replace all occurrences of `/v3/` with `/v4/` in your API requests:

```
# Before
https://api.sylvain.sh/v3/infos

# After
https://api.sylvain.sh/v4/infos
```

### Endpoint Compatibility

All 20 endpoints are fully compatible. Adapt your code to handle the enriched response fields (username, personal, domain).

## Previous Versions

- [v3 Documentation](/v3/en/) - Previous stable version
- [v2 Documentation](/v2/en/) - Legacy version
