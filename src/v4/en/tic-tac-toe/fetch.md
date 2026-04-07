# Tic-Tac-Toe Fetch

The `/tic-tac-toe/fetch` endpoint retrieves information about a current Tic-Tac-Toe game.

<Endpoint method="post" path="/tic-tac-toe/fetch" baseUrl="https://api.sylvain.sh" />

## Parameters

| Parameter  | Required | Description                                 |
| ---------- | -------- | ------------------------------------------- |
| `username` | Yes      | The username of the player                  |
| `game`     | No       | The game identifier to fetch                |
| `private`  | No       | Set to `true` to fetch only private games   |

## Code Examples

<Examples method="post" path="/tic-tac-toe/fetch" :body="{ username: 'User1', game: 'VWXYZ' }" />

## Response

```json
{
  "game": "VWXYZ",
  "players": ["User1", "User2"],
  "board": [
        ["X", "", "O"],
        ["", "X", ""],
        ["O", "", ""]
    ],
  "current_turn": "User2",
  "status": "in_progress",
  "private": false,
  "created_at": "2025-01-21T10:30:00.000Z"
}
```

## Response Fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `game` | `string` | Game identifier |
| `players` | `string[]` | Array of player usernames |
| `board` | `string[][]` | 3x3 array representing the game board |
| `current_turn` | `string` | Username of the player whose turn it is |
| `status` | `string` | Game status (`waiting`, `in_progress`, `finished`) |
| `private` | `boolean` | Whether the game is private |
| `created_at` | `string` | Game creation timestamp |

## Try It

<Try method="post" path="/tic-tac-toe/fetch" :params="[{ name: 'username', required: true }, { name: 'game', required: false }, { name: 'private', required: false }]" />

## Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                                      | Description                         |
| -------------------------------------------------- | ----------------------------------- |
| `Please provide a username (?username={username})` | The `username` parameter is missing |

## Related Endpoints

- [/v4/tic-tac-toe](../tic-tac-toe) - Main game endpoint for making moves
- [/v4/tic-tac-toe/list](./list) - List all public games