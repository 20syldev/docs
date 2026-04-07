# Génération de QR Code

L'endpoint `/qrcode` génère un QR Code à partir d'une URL fournie en paramètre. Cet endpoint est pratique pour générer rapidement une image au format PNG.

<Endpoint method="get" path="/qrcode" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre | Requis | Description                                                       |
| --------- | ------ | ----------------------------------------------------------------- |
| `url`     | Oui    | L'URL à encoder dans le QR Code. Doit contenir l'adresse complète |

## Réponse

```json
{
  "qr": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOaSURBVO3BQY5jBxYDwcwH3f/KnF7MgqsPCFKV7..."
}
```

## Champs de réponse

| Champ | Type | Description |
| ----- | ---- | ----------- |
| `qr` | `string` | Image PNG du QR Code encodée en Base64 |

## Exemples de code

<Examples method="get" path="/qrcode" :params="{ url: 'https://docs.sylvain.sh' }" />

## Utilisation de la réponse

La réponse contient une image PNG encodée en base64. Vous pouvez l'utiliser directement en HTML :

```html
<img src="data:image/png;base64,iVBORw0KGgo..." alt="QR Code" />
```

Ou la décoder et l'enregistrer en tant que fichier dans votre application.

## Essayer

<Try method="get" path="/qrcode" :params="[{ name: 'url', required: true }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                          | Description                                 |
| ----------------------------------------- | ------------------------------------------- |
| `Please provide a valid url (?url={URL})` | Le paramètre `url` est manquant ou invalide |