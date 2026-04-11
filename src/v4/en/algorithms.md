# Algorithms

The `/algorithms` endpoint provides several algorithms to use as parameters. You can input one or two values depending on the algorithm.

<Endpoint method="get" path="/algorithms" baseUrl="https://api.sylvain.sh" />

## Parameters

| Parameter | Required | Description                                                               |
| --------- | -------- | ------------------------------------------------------------------------- |
| `method`  | Yes      | The algorithm to use (see available methods below)                        |
| `value`   | Yes      | The value to use in the algorithm. Must contain at least one character    |
| `value2`  | No       | The second value to use if necessary. Must contain at least one character |

## Available Methods

| Method         | Description                                            | Requires `value2` |
| -------------- | ------------------------------------------------------ | ----------------- |
| `anagram`      | Checks if two strings are anagrams                     | Yes               |
| `bubblesort`   | Sorts an array of numbers, separated by commas         | No                |
| `factorial`    | Calculates the factorial of a number between 0 and 170 | No                |
| `gcd`          | Computes the greatest common divisor of two numbers    | Yes               |
| `isprime`      | Checks if a number is prime                            | No                |
| `fibonacci`    | Calculates a Fibonacci sequence up to a given number   | No                |
| `palindrome`   | Checks if a string is a palindrome                     | No                |
| `primelist`    | Returns a list of prime numbers up to a given number   | No                |
| `primefactors` | Returns the list of prime factors of a number          | No                |
| `reverse`      | Reverses a string                                      | No                |
| `roman`        | Converts between Roman numerals and numbers (1–3999)   | No                |

## Response

```json
{
    "answer": 17
}
```

## Response Fields

| Field    | Type             | Description          |
| -------- | ---------------- | -------------------- |
| `answer` | `number\|string` | The algorithm result |

## Code Examples

<Examples method="get" path="/algorithms" :params="{ method: 'gcd', value: '17', value2: '493' }" />

## Try It

<Try method="get" path="/algorithms" :params="[{ name: 'method', required: true, options: ['anagram', 'bubblesort', 'factorial', 'gcd', 'isprime', 'fibonacci', 'palindrome', 'primelist', 'primefactors', 'reverse', 'roman'] }, { name: 'value', required: true }, { name: 'value2', required: false }]" />

## Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                                            | Description                                  |
| -------------------------------------------------------- | -------------------------------------------- |
| `Please provide a valid algorithm (?method={algorithm})` | The `method` parameter is missing or invalid |
