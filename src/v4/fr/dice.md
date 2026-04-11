# Dés

L'endpoint `/dice` lance des dés en notation RPG (NdX ou NdX+M).

<Endpoint method="get" path="/dice" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre | Requis | Description                                   |
| --------- | ------ | --------------------------------------------- |
| `roll`    | Oui    | Notation de dés (ex : `2d6+3`, `1d20`, `4d8`) |

**Limites :** 1–100 dés, 2–1000 faces par dé.

> Le `+` dans l'URL peut être encodé en espace (`2d6 3`) — les deux sont acceptés.

## Réponse

```json
{
    "roll": "2d6+3",
    "count": 2,
    "sides": 6,
    "modifier": 3,
    "results": [4, 2],
    "total": 9
}
```

## Champs de réponse

| Champ      | Type       | Description                          |
| ---------- | ---------- | ------------------------------------ |
| `roll`     | `string`   | La notation de dés analysée          |
| `count`    | `number`   | Nombre de dés lancés                 |
| `sides`    | `number`   | Nombre de faces par dé               |
| `modifier` | `number`   | Modificateur ajouté (0 si aucun)     |
| `results`  | `number[]` | Résultats individuels de chaque dé   |
| `total`    | `number`   | Somme de tous les dés + modificateur |

## Exemples de code

<Examples method="get" path="/dice" :params="{ roll: '2d6+3' }" />

## Essayer

<Try method="get" path="/dice" :params="[{ name: 'roll', required: true }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                        | Description                                  |
| ------------------------------------------------------- | -------------------------------------------- |
| `Please provide a valid dice roll (?roll={NdX\|NdX+M})` | Le paramètre `roll` est manquant ou invalide |
