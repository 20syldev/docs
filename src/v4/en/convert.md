# Temperature Conversion

The `/convert` endpoint allows you to convert multiple temperature units between each other. You need to provide a value to convert, a source unit, and the unit you want to convert to.

<Endpoint method="get" path="/convert" baseUrl="https://api.sylvain.sh" />

## Parameters

| Parameter | Required | Description                                         |
| --------- | -------- | --------------------------------------------------- |
| `value`   | Yes      | The value to convert (range: -273.15 to 1,000,000)  |
| `from`    | Yes      | The source unit (`celsius`, `fahrenheit`, `kelvin`) |
| `to`      | Yes      | The target unit (`celsius`, `fahrenheit`, `kelvin`) |

## Available Units

| Unit         | Description        |
| ------------ | ------------------ |
| `celsius`    | Celsius degrees    |
| `fahrenheit` | Fahrenheit degrees |
| `kelvin`     | Kelvin             |

## Response Fields

| Field    | Type     | Description               |
| -------- | -------- | ------------------------- |
| `from`   | `string` | Source temperature unit   |
| `to`     | `string` | Target temperature unit   |
| `value`  | `number` | Original value to convert |
| `result` | `number` | Converted value           |

## Code Examples

<Examples method="get" path="/convert" :params="{ value: '100', from: 'celsius', to: 'fahrenheit' }" />

## Try It

<Try method="get" path="/convert" :params="[{ name: 'value', required: true }, { name: 'from', required: true, options: ['celsius', 'fahrenheit', 'kelvin'] }, { name: 'to', required: true, options: ['celsius', 'fahrenheit', 'kelvin'] }]" />

## Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                                       | Description                                       |
| --------------------------------------------------- | ------------------------------------------------- |
| `Please provide a valid value (?value={value})`     | The `value` parameter is missing or invalid       |
| `Please provide a valid source unit (&from={unit})` | The `from` parameter is missing or invalid        |
| `Please provide a valid target unit (&to={unit})`   | The `to` parameter is missing or invalid          |
| `Value below absolute zero`                         | The value is below the absolute zero for the unit |
| `Value above maximum`                               | The value exceeds 1,000,000                       |
| `Source and target units must be different`         | The `from` and `to` parameters are the same       |
