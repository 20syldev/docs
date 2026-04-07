# Génération de Captcha

L'endpoint `/captcha` génère une image à partir d'un texte fourni en paramètre. Cet endpoint peut être utile pour tester un utilisateur avec le captcha généré en stockant le texte en mémoire.

<Endpoint method="get" path="/captcha" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre | Requis | Description                                                        |
| --------- | ------ | ------------------------------------------------------------------ |
| `text`    | Oui    | Le texte du captcha à générer. Doit contenir au moins un caractère |

## Réponse

L'endpoint retourne une image PNG du captcha généré.

## Exemples de code

<Examples method="get" path="/captcha" :params="{ text: 'test1234?ABCD' }" />

::: tip Exemple
[Voir un exemple du captcha généré](https://api.sylvain.sh/v4/captcha?text=test1234?ABCD)
:::

## Essayer

<Try method="get" path="/captcha" :params="[{ name: 'text', required: true }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                 | Description                                  |
| ------------------------------------------------ | -------------------------------------------- |
| `Please provide a valid argument (?text={text})` | Le paramètre `text` est manquant ou invalide |