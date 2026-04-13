# Color Generation

The `/color` endpoint generates a random color in multiple formats. This endpoint does not require any options.

<Endpoint method="get" path="/color" baseUrl="https://api.sylvain.sh" />

## Parameters

This endpoint does not require any parameters. It returns a randomly generated color in HEX, RGB and HSL formats.

## Response Fields

| Field  | Type     | Description                                          |
| ------ | -------- | ---------------------------------------------------- |
| `hex`  | `string` | Hexadecimal color code                               |
| `rgb`  | `string` | RGB color format                                     |
| `hsl`  | `string` | HSL color format (Hue, Saturation, Lightness)        |
| `hsv`  | `string` | HSV color format (Hue, Saturation, Value)            |
| `hwb`  | `string` | HWB color format (Hue, Whiteness, Blackness)         |
| `cmyk` | `string` | CMYK color format (Cyan, Magenta, Yellow, Key/Black) |

## Code Examples

<Examples method="get" path="/color" />

## Try It

<Try method="get" path="/color" :params="[]" />
