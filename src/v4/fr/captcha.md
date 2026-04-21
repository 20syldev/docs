# Génération de Captcha

L'endpoint `/captcha` génère une image CAPTCHA. Vous pouvez fournir votre propre texte ou laisser l'API en générer un aléatoirement.

<Endpoint method="get" path="/captcha" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre | Requis | Description                                                    |
| --------- | ------ | -------------------------------------------------------------- |
| `text`    | Non    | Le texte du captcha. Si omis, une chaîne aléatoire est générée |
| `length`  | Non    | Longueur du texte auto-généré (défaut 6)                       |
| `width`   | Non    | Largeur de l'image en pixels (défaut 300)                      |
| `height`  | Non    | Hauteur de l'image en pixels (défaut 150)                      |
| `noise`   | Non    | Nombre de lignes de bruit (défaut 5)                           |
| `bg`      | Non    | Couleur de fond en hexadécimal (ex. `ffffff`)                  |
| `color`   | Non    | Couleur du texte en hexadécimal (ex. `000000`)                 |

## Réponse

L'endpoint retourne une image PNG du captcha généré.

::: info À savoir
La réponse inclut un header `X-Captcha-Text` contenant la réponse du captcha, utile pour la vérification côté serveur.
Lorsqu'aucun `text` n'est fourni, la chaîne auto-générée évite les caractères ambigus (ex. `0`/`O`, `1`/`l`).
:::

## Exemples de code

<Examples method="get" path="/captcha" :params="{ length: '8', width: '400', noise: 'high', bg: 'f0f0f0' }" />

::: tip Exemple
[Voir un exemple avec texte auto-généré](https://api.sylvain.sh/v4/captcha?length=8&noise=high)
:::

## Essayer

<Try name="Captcha" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                          | Description                                  |
| ----------------------------------------- | -------------------------------------------- |
| `length must be a number`                 | Le paramètre `length` n'est pas un nombre    |
| `length must be between 1 and 20`         | La `length` est hors limites                 |
| `width must be a number`                  | Le paramètre `width` n'est pas un nombre     |
| `width must be between 100 and 800`       | La `width` est hors limites                  |
| `height must be a number`                 | Le paramètre `height` n'est pas un nombre    |
| `height must be between 50 and 400`       | La `height` est hors limites                 |
| `noise must be one of: low, medium, high` | Valeur de `noise` invalide                   |
| `Invalid color (use hex like ff6600)`     | Un paramètre `bg` ou `color` est mal formaté |
