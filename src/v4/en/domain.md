# Domain Name Generation

The `/domain` endpoint generates various random data about a domain to create a complete profile. This endpoint does not require any options.

<Endpoint method="get" path="/domain" baseUrl="https://api.sylvain.sh" />

## Parameters

This endpoint does not require any parameters.

## Response

```json
{
    "domain": "platform.app",
    "full_domain": "docs.platform.app",
    "ip_address": ["20.187.77.76", "30.22.131.27", "114.15.55.183"],
    "ssl_certified": false,
    "hosting_provider": "Bluehost",
    "dns_servers": ["253.224.200.63", "132.136.29.172", "31.66.90.143", "94.144.42.100"],
    "dns_provider": "Cloudflare",
    "traffic": "7437 visits/day",
    "seo_score": 49,
    "page_rank": 2,
    "country": "India",
    "website_type": "Community",
    "random_name": "platform",
    "random_subdomain": "docs",
    "random_tld": "app",
    "backlinks_count": 253,
    "creation_date": "2026-01-11T04:00:52.592Z",
    "expiration_date": "2026-04-09T21:35:19.606Z"
}
```

## Response Fields

| Field              | Type       | Description                |
| ------------------ | ---------- | -------------------------- |
| `domain`           | `string`   | Main domain name           |
| `full_domain`      | `string`   | Full domain with subdomain |
| `ip_address`       | `string[]` | Array of IP addresses      |
| `ssl_certified`    | `boolean`  | SSL certificate status     |
| `hosting_provider` | `string`   | Hosting provider name      |
| `dns_servers`      | `string[]` | DNS servers array          |
| `dns_provider`     | `string`   | DNS provider name          |
| `traffic`          | `string`   | Estimated daily traffic    |
| `seo_score`        | `number`   | SEO score (0-100)          |
| `page_rank`        | `number`   | Page rank value            |
| `country`          | `string`   | Country of origin          |
| `website_type`     | `string`   | Type of website            |
| `random_name`      | `string`   | Generated domain name      |
| `random_subdomain` | `string`   | Generated subdomain        |
| `random_tld`       | `string`   | Generated top-level domain |
| `backlinks_count`  | `number`   | Number of backlinks        |
| `creation_date`    | `string`   | Domain creation date       |
| `expiration_date`  | `string`   | Domain expiration date     |

## Code Examples

<Examples method="get" path="/domain" />

## Try It

<Try method="get" path="/domain" :params="[]" />
