# Dice

The `/dice` endpoint rolls dice using RPG notation (NdX or NdX+M).

<Endpoint method="get" path="/dice" baseUrl="https://api.sylvain.sh" />

## Parameters

| Parameter | Required | Description                                 |
| --------- | -------- | ------------------------------------------- |
| `roll`    | Yes      | Dice notation (e.g. `2d6+3`, `1d20`, `4d8`) |

**Limits:** 1–100 dice, 2–1000 sides per die.

> The `+` in the URL can be encoded as a space (`2d6 3`) — both are accepted.

## Response

```json
{
    "roll": "2d6+3",
    "count": 2,
    "sides": 6,
    "modifier": 3,
    "results": [4, 2],
    "total": 9
}
```

## Response Fields

| Field      | Type       | Description                        |
| ---------- | ---------- | ---------------------------------- |
| `roll`     | `string`   | The parsed dice notation           |
| `count`    | `number`   | Number of dice rolled              |
| `sides`    | `number`   | Number of sides per die            |
| `modifier` | `number`   | Added modifier (0 if none)         |
| `results`  | `number[]` | Individual die results             |
| `total`    | `number`   | Sum of all dice results + modifier |

## Code Examples

<Examples method="get" path="/dice" :params="{ roll: '2d6+3' }" />

## Try It

<Try method="get" path="/dice" :params="[{ name: 'roll', required: true }]" />

## Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                                           | Description                                |
| ------------------------------------------------------- | ------------------------------------------ |
| `Please provide a valid dice roll (?roll={NdX\|NdX+M})` | The `roll` parameter is missing or invalid |
