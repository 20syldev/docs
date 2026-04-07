# Color Generation

The `/color` endpoint generates a random color in multiple formats. This endpoint does not require any options.

<Endpoint method="get" path="/color" baseUrl="https://api.sylvain.sh" />

## Parameters

This endpoint does not require any parameters.

## Response

```json
{
  "hex": "#517fff",
  "rgb": "rgb(81, 127, 255)",
  "hsl": "hsl(224, 100%, 66%)",
  "hsv": "hsv(224, 68.2%, 100%)",
  "hwb": "hwb(224, 32%, 0%)",
  "cmyk": "cmyk(68.24%, 50.2%, 0%, 0%)"
}
```

## Response Fields

| Field | Type | Description |
| ----- | ---- | ----------- |
| `hex` | `string` | Hexadecimal color code |
| `rgb` | `string` | RGB color format |
| `hsl` | `string` | HSL color format (Hue, Saturation, Lightness) |
| `hsv` | `string` | HSV color format (Hue, Saturation, Value) |
| `hwb` | `string` | HWB color format (Hue, Whiteness, Blackness) |
| `cmyk` | `string` | CMYK color format (Cyan, Magenta, Yellow, Key/Black) |

## Code Examples

<Examples method="get" path="/color" />

## Try It

<Try method="get" path="/color" :params="[]" />