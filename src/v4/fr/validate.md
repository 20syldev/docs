# Validation

L'endpoint `/validate` valide différents formats de données.

<Endpoint method="get" path="/validate" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre | Requis | Description                                  |
| --------- | ------ | -------------------------------------------- |
| `type`    | Oui    | Type de validation : `luhn`, `iban`, `email` |
| `value`   | Oui    | Valeur à valider                             |

## Types de validation

| Type    | Description                             |
| ------- | --------------------------------------- |
| `luhn`  | Algorithme de Luhn (numéros de carte)   |
| `iban`  | Numéro de compte bancaire international |
| `email` | Format d'adresse email                  |

## Réponse (`luhn`)

```json
{
    "valid": true,
    "value": "4532015112830366"
}
```

## Réponse (`iban`)

```json
{
    "valid": true,
    "value": "FR7630006000011234567890189",
    "country": "FR"
}
```

## Réponse (`email`)

```json
{
    "valid": true,
    "value": "user@example.com"
}
```

## Champs de réponse

| Champ     | Type      | Description                 |
| --------- | --------- | --------------------------- |
| `valid`   | `boolean` | Si la valeur est valide     |
| `value`   | `string`  | La valeur validée           |
| `country` | `string`  | Code pays (IBAN uniquement) |

## Exemples de code

<Examples method="get" path="/validate" :params="{ type: 'email', value: 'user@example.com' }" />

## Essayer

<Try method="get" path="/validate" :params="[{ name: 'type', required: true, options: ['luhn', 'iban', 'email'] }, { name: 'value', required: true }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                          | Description                                  |
| --------------------------------------------------------- | -------------------------------------------- |
| `Please provide a valid type (?type={luhn\|iban\|email})` | Le paramètre `type` est manquant ou invalide |
| `A value is required`                                     | Le paramètre `value` est manquant            |
