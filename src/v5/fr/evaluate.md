# Evaluate

L'endpoint `/evaluate` évalue une expression mathématique de manière sécurisée et retourne son résultat. Il utilise un parseur Pratt — aucun `eval()` n'est jamais appelé.

<Endpoint method="get" path="/evaluate" baseUrl="https://api.sylvain.sh" />

::: info Comment ça marche ?
Les expressions sont tokenisées puis parsées récursivement via des binding powers (Pratt parsing). Le résultat est calculé directement depuis l'AST — pas d'`eval()`, pas de `Function()`. Deux constantes sont disponibles : `pi` (≈ 3.14159…) et `e` (≈ 2.71828…). La profondeur de récursion est limitée à 100 et la longueur de l'expression à 500 caractères.
:::

## Paramètres

| Paramètre   | Requis | Description                                              |
| ----------- | ------ | -------------------------------------------------------- |
| `expr`      | Oui    | L'expression mathématique à évaluer (max 500 caractères) |
| `precision` | Non    | Nombre de décimales dans le résultat (0–15)              |

## Opérateurs supportés

| Opérateur | Description                    |
| --------- | ------------------------------ |
| `+`       | Addition                       |
| `-`       | Soustraction / négation unaire |
| `*`       | Multiplication                 |
| `/`       | Division                       |
| `%`       | Modulo                         |
| `^`       | Exponentiation                 |

## Fonctions disponibles

`sin`, `cos`, `tan`, `asin`, `acos`, `atan`, `sqrt`, `abs`, `floor`, `ceil`, `round`, `log`, `log2`, `log10`

## Champs de réponse

| Champ    | Type     | Description            |
| -------- | -------- | ---------------------- |
| `expr`   | `string` | L'expression originale |
| `result` | `number` | Le résultat évalué     |

## Exemples de code

<Examples method="get" path="/evaluate" :params="{ expr: '2*(3+4)^2', precision: '2' }" />

## Essayer

<Try name="Evaluate" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                        | Description                                       |
| ------------------------------------------------------- | ------------------------------------------------- |
| `Please provide a math expression (?expr={expression})` | Le paramètre `expr` est manquant                  |
| `Expression is too long (max 500 characters)`           | L'expression dépasse 500 caractères               |
| `Maximum expression depth exceeded`                     | La profondeur d'imbrication dépasse 100 niveaux   |
| `Division by zero`                                      | L'expression tente une division par zéro          |
| `Unknown identifier: {name}`                            | Une constante ou fonction inconnue a été utilisée |
| `precision must be between 0 and 15`                    | La valeur de `precision` est hors limites         |
