# Génération de QR Code

L'endpoint `/qrcode` génère un QR Code à partir d'une URL fournie en paramètre. Cet endpoint est pratique pour générer rapidement une image au format PNG.

<Endpoint method="get" path="/qrcode" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre     | Requis | Description                                                                      |
| ------------- | ------ | -------------------------------------------------------------------------------- |
| `url`         | Oui    | L'URL à encoder dans le QR Code. Doit contenir l'adresse complète                |
| `format`      | Non    | Format de réponse : `png` (défaut, image directe) ou `base64` (data URL en JSON) |
| `size`        | Non    | Taille de l'image en pixels (50-2000, défaut 200)                                |
| `margin`      | Non    | Zone de silence en modules (0-10, défaut 4)                                      |
| `correction`  | Non    | Niveau de correction d'erreur : `L`, `M`, `Q` ou `H` (défaut `M`)                |
| `dark`        | Non    | Couleur des modules en hexadécimal (ex. `000000`)                                |
| `light`       | Non    | Couleur de fond en hexadécimal (ex. `ffffff`)                                    |
| `icon`        | Non    | URL HTTPS d'une image à superposer au centre du QR Code                          |
| `iconSize`    | Non    | Taille de l'icône en pixels (défaut 20% de `size`, max 40% de `size`)            |
| `iconPadding` | Non    | Padding blanc autour de l'icône en pixels (défaut 5, 0-50)                       |
| `iconRadius`  | Non    | Arrondi des coins du fond de l'icône en pixels (défaut 0, max = cercle parfait)  |

::: info À savoir
Lorsqu'un `icon` est fourni, le niveau de correction est automatiquement forcé à `H` pour garantir la lisibilité.
L'URL de l'icône doit utiliser HTTPS, avec un timeout de 5s et une limite de 2 Mo.
:::

::: tip Garder l'icône petite
Un `iconSize` élevé combiné à un `iconPadding` généreux recouvre davantage de modules du QR Code, le rendant difficile à scanner. Gardez la zone icône + padding bien en dessous de 40% de la `size` totale pour un résultat fiable.
:::

## Réponse

Par défaut (`format=png`), l'endpoint retourne une **image PNG directe** (`Content-Type: image/png`), utilisable dans une balise `<img>` :

```html
<img src="https://api.sylvain.sh/v4/qrcode?url=https://docs.sylvain.sh" alt="QR Code" />
```

Avec `format=base64`, la réponse est un objet JSON :

| Champ    | Type     | Description                               |
| -------- | -------- | ----------------------------------------- |
| `result` | `string` | URI data base64 de l'image PNG du QR Code |

## Exemples de code

<Examples method="get" path="/qrcode" :params="{ url: 'https://docs.sylvain.sh', size: '300', margin: '2', dark: '1a1a2e', light: 'eaeaea' }" />

## Essayer

<Try name="QR Code" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                         | Description                                        |
| ---------------------------------------- | -------------------------------------------------- |
| `Please provide a valid URL`             | Le paramètre `url` est manquant ou invalide        |
| `format must be one of: png, base64`     | Valeur de `format` invalide                        |
| `size must be a number`                  | Le paramètre `size` n'est pas un nombre            |
| `size must be between 50 and 2000`       | La `size` est hors limites                         |
| `margin must be a number`                | Le paramètre `margin` n'est pas un nombre          |
| `margin must be between 0 and 10`        | La `margin` est hors limites                       |
| `correction must be one of: L, M, Q, H`  | Niveau de correction invalide                      |
| `Invalid color (use hex like ff6600)`    | Une couleur `dark` ou `light` est mal formatée     |
| `Icon URL must use HTTPS`                | L'URL de l'`icon` n'utilise pas HTTPS              |
| `Failed to fetch icon: HTTP {status}`    | L'URL de l'icône a retourné une erreur             |
| `Icon URL must point to an image`        | Le content-type de l'icône n'est pas une image     |
| `Icon must be under 2MB`                 | L'icône dépasse la limite de 2 Mo                  |
| `iconSize must be a number`              | Le paramètre `iconSize` n'est pas un nombre        |
| `iconSize must be between 10 and {max}`  | La `iconSize` est hors limites (max = 40% de size) |
| `iconPadding must be a number`           | Le paramètre `iconPadding` n'est pas un nombre     |
| `iconPadding must be between 0 and 50`   | La `iconPadding` est hors limites                  |
| `iconRadius must be a number`            | Le paramètre `iconRadius` n'est pas un nombre      |
| `iconRadius must be between 0 and {max}` | Le `iconRadius` est hors limites                   |
