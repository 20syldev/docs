# Statistics

The `/statistics` endpoint calculates descriptive statistics on a list of numbers.

<Endpoint method="get" path="/statistics" baseUrl="https://api.sylvain.sh" />

## Parameters

| Parameter | Required | Description                     |
| --------- | -------- | ------------------------------- |
| `values`  | Yes      | Comma-separated list of numbers |

## Response

```json
{
    "count": 5,
    "sum": 15,
    "min": 1,
    "max": 5,
    "range": 4,
    "mean": 3,
    "median": 3,
    "mode": [],
    "variance": 2,
    "stddev": 1.414214
}
```

## Response Fields

| Field      | Type       | Description                    |
| ---------- | ---------- | ------------------------------ |
| `count`    | `number`   | Number of values               |
| `sum`      | `number`   | Sum of all values              |
| `min`      | `number`   | Minimum value                  |
| `max`      | `number`   | Maximum value                  |
| `range`    | `number`   | Difference between max and min |
| `mean`     | `number`   | Arithmetic mean                |
| `median`   | `number`   | Median value                   |
| `mode`     | `number[]` | Most frequent value(s)         |
| `variance` | `number`   | Population variance            |
| `stddev`   | `number`   | Standard deviation             |

## Code Examples

<Examples method="get" path="/statistics" :params="{ values: '1,2,3,4,5' }" />

## Try It

<Try method="get" path="/statistics" :params="[{ name: 'values', required: true }]" />

## Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                                                  | Description                                  |
| -------------------------------------------------------------- | -------------------------------------------- |
| `Please provide a comma-separated list of numbers (?values=…)` | The `values` parameter is missing or invalid |
