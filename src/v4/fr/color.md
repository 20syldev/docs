# Génération de couleur

L'endpoint `/color` génère une couleur aléatoire en plusieurs formats. Cet endpoint ne nécessite aucune option.

<Endpoint method="get" path="/color" baseUrl="https://api.sylvain.sh" />

## Paramètres

Cet endpoint ne nécessite aucun paramètre.

## Réponse

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

## Champs de réponse

| Champ  | Type     | Description                                         |
| ------ | -------- | --------------------------------------------------- |
| `hex`  | `string` | Code couleur hexadécimal                            |
| `rgb`  | `string` | Format couleur RGB                                  |
| `hsl`  | `string` | Format couleur HSL (Teinte, Saturation, Luminosité) |
| `hsv`  | `string` | Format couleur HSV (Teinte, Saturation, Valeur)     |
| `hwb`  | `string` | Format couleur HWB (Teinte, Blancheur, Noirceur)    |
| `cmyk` | `string` | Format couleur CMYK (Cyan, Magenta, Jaune, Noir)    |

## Exemples de code

<Examples method="get" path="/color" />

## Essayer

<Try method="get" path="/color" :params="[]" />
