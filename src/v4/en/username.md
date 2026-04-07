# Username Generation

The `/username` endpoint generates random usernames. This endpoint is useful for creating placeholder usernames or suggesting names to users.

<Endpoint method="get" path="/username" baseUrl="https://api.sylvain.sh" />

## Parameters

This endpoint does not require any parameters.

## Response

```json
{
  "username": "PilotHorse",
  "number": 4,
  "adjective": "Patient",
  "animal": "Koala",
  "job": "Journalist"
}
```

## Response Fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `username` | `string` | A randomly generated username |
| `number` | `number` | A random number used in generation |
| `adjective` | `string` | The adjective component of the username |
| `animal` | `string` | The animal component of the username |
| `job` | `string` | A randomly associated job |

## Code Examples

<Examples method="get" path="/username" />

## Use Cases

- **User registration**: Suggest usernames during sign-up
- **Gaming**: Generate player names
- **Testing**: Create test user data
- **Placeholder content**: Fill in sample data

## Try It

<Try method="get" path="/username" :params="[]" />