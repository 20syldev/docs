# Tic-Tac-Toe Jouer

L'endpoint `/tic-tac-toe/:game` permet de jouer un coup dans une partie existante via une méthode REST.

<Endpoint method="patch" path="/tic-tac-toe/:game" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre  | Requis | Description                                  |
| ---------- | ------ | -------------------------------------------- |
| `game`     | Oui    | L'identifiant de la partie (paramètre d'URL) |
| `username` | Oui    | Le nom d'utilisateur effectuant le coup      |
| `move`     | Oui    | Le coup joué (ex. : `1-1`, `2-2`, `3-3`)     |
| `session`  | Oui    | L'identifiant de session de l'utilisateur    |

::: info À savoir
Le paramètre `game` fait partie du chemin de l'URL. Les autres paramètres sont envoyés dans un body JSON avec `Content-Type: application/json`.
:::

## Champs de réponse

| Champ     | Type           | Description                                              |
| --------- | -------------- | -------------------------------------------------------- |
| `message` | `string`       | Message de statut du coup                                |
| `winner`  | `string\|null` | Nom d'utilisateur du gagnant (si la partie est terminée) |
| `loser`   | `string\|null` | Nom d'utilisateur du perdant (si la partie est terminée) |
| `tie`     | `boolean`      | Si la partie s'est terminée par une égalité              |

## Exemples de code

<Examples method="patch" path="/tic-tac-toe/VWXYZ" :body="{ username: 'alice', move: '1-1', session: 'abc123' }" />

## Essayer

<Try method="patch" path="/tic-tac-toe/VWXYZ" :params="[{ name: 'username', required: true }, { name: 'move', required: true }, { name: 'session', required: true }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                                   | Description                            |
| ------------------------------------------------------------------ | -------------------------------------- |
| `Invalid move. Please provide a valid move (e.g., 1-1, 2-2, 3-3).` | Format de coup invalide                |
| `Game is full, you can only watch.`                                | La partie a déjà deux joueurs          |
| `Please wait for the other player to make a move.`                 | Ce n'est pas votre tour                |
| `Move already made. Please choose a different move.`               | Case déjà occupée                      |
| `Session ID mismatch`                                              | La session ne correspond pas au joueur |

## Endpoints associés

- <Method type="post" sm /> [/v4/tic-tac-toe](../tic-tac-toe) - Endpoint principal du jeu pour effectuer des coups
- <Method type="delete" sm /> [/v4/tic-tac-toe/:game](./forfeit) - Abandonner une partie
- <Method type="post" sm /> [/v4/tic-tac-toe/fetch](./fetch) - Récupérer les informations de la partie
- <Method type="post" sm /> [/v4/tic-tac-toe/list](./list) - Lister toutes les parties publiques
