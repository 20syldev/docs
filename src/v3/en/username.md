# Username Generation

The `/username` endpoint generates random usernames. This endpoint is useful for creating placeholder usernames or suggesting names to users.

<Endpoint method="get" path="/v3/username" baseUrl="https://api.sylvain.pro" />

## Parameters

This endpoint does not require any parameters.

## Request Example

```
GET /v3/username
```

## Response

```json
{
  "username": "CoolDragon42"
}
```

## Response Fields

| Field      | Description                   |
| ---------- | ----------------------------- |
| `username` | A randomly generated username |

## cURL

```bash
curl -X GET "https://api.sylvain.pro/v3/username"
```

## Use Cases

- **User registration**: Suggest usernames during sign-up
- **Gaming**: Generate player names
- **Testing**: Create test user data
- **Placeholder content**: Fill in sample data