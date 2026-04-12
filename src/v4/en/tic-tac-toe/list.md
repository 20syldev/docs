# Tic-Tac-Toe List

The `/tic-tac-toe/list` endpoint lists all public games currently in progress.

<Endpoint method="post" path="/tic-tac-toe/list" baseUrl="https://api.sylvain.sh" />

## Parameters

This endpoint does not require any parameters.

## Code Examples

<Examples method="post" path="/tic-tac-toe/list" />

## Response Fields

| Field                  | Type       | Description                             |
| ---------------------- | ---------- | --------------------------------------- |
| `message`              | `string`   | Status message                          |
| `count`                | `number`   | Total number of public games            |
| `games`                | `object[]` | Array of public game objects            |
| `games[].id`           | `string`   | Game identifier                         |
| `games[].players`      | `string[]` | Array of player usernames               |
| `games[].playersCount` | `number`   | Number of players in the game           |
| `games[].moves`        | `array`    | Array of moves made in the game         |
| `games[].turn`         | `string`   | Username of the player whose turn it is |
| `games[].status`       | `string`   | Game status (`waiting`, `ready`)        |
| `games[].creation`     | `string`   | Game creation timestamp                 |

## Game Statuses

| Status    | Description                               |
| --------- | ----------------------------------------- |
| `waiting` | Game has one player, waiting for opponent |
| `ready`   | Game has two players and is active        |

## Try It

<Try method="post" path="/tic-tac-toe/list" :params="[]" />

## Error Handling

This endpoint does not require parameters and will not return parameter-related errors.

## Related Endpoints

- [/v4/tic-tac-toe](../tic-tac-toe) - Main game endpoint for making moves
- [/v4/tic-tac-toe/fetch](./fetch) - Fetch specific game details
