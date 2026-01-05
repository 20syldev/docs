# Génération de couleurs

L'endpoint `/color` génère une couleur aléatoire dans plusieurs formats. Cet endpoint ne nécessite aucune option.

<HEndpoint method="get" path="/v1/color" baseUrl="https://api.sylvain.pro" />

## Exemple de requête

```
GET /v1/color
```

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

## cURL

```bash
curl -X GET "https://api.sylvain.pro/v1/color"
```