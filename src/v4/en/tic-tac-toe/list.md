# Tic-Tac-Toe List

The `/tic-tac-toe/list` endpoint lists all public games currently in progress.

<Endpoint method="post" path="/tic-tac-toe/list" baseUrl="https://api.sylvain.sh" />

## Parameters

This endpoint does not require any parameters.

## Code Examples

<Examples method="post" path="/tic-tac-toe/list" />

## Response

```json
{
  "games": [
        {
          "game": "VWXYZ",
          "players": ["User1", "User2"],
          "status": "in_progress",
          "created_at": "2025-01-21T10:30:00.000Z"
        },
        {
          "game": "ABCDE",
          "players": ["User3"],
          "status": "waiting",
          "created_at": "2025-01-21T10:35:00.000Z"
        }
    ],
  "total": 2
}
```

## Response Fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `games` | `object[]` | Array of public game objects |
| `games[].game` | `string` | Game identifier |
| `games[].players` | `string[]` | Array of player usernames |
| `games[].status` | `string` | Game status (`waiting`, `in_progress`) |
| `games[].created_at` | `string` | Game creation timestamp |
| `total` | `number` | Total number of public games |

## Game Statuses

| Status        | Description                               |
| ------------- | ----------------------------------------- |
| `waiting`     | Game has one player, waiting for opponent |
| `in_progress` | Game has two players and is active        |

## Try It

<Try method="post" path="/tic-tac-toe/list" :params="[]" />

## Error Handling

This endpoint does not require parameters and will not return parameter-related errors.

## Related Endpoints

- [/v4/tic-tac-toe](../tic-tac-toe) - Main game endpoint for making moves
- [/v4/tic-tac-toe/fetch](./fetch) - Fetch specific game details