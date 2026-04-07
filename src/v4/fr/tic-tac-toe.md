# Morpion en ligne

L'endpoint `/tic-tac-toe` permet de jouer et de stocker une partie de morpion en ligne. Les parties sont stockées pendant 1 heure et supportent les modes public et privé.

<Endpoint method="post" path="/tic-tac-toe" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre  | Requis | Description                                                                                    |
| ---------- | ------ | ---------------------------------------------------------------------------------------------- |
| `username` | Oui    | Le nom d'utilisateur effectuant le mouvement                                                   |
| `move`     | Oui    | Le coup joué au format `ligne-colonne` (ex. : `1-1`, `2-2`, `3-3`)                             |
| `session`  | Oui    | L'identifiant de session de l'utilisateur                                                      |
| `game`     | Oui    | L'identifiant de la partie permettant la connexion. Si la partie n'existe pas, elle sera créée |

## Format des coups

Le plateau est une grille 3x3 avec des positions numérotées comme suit :

```
1-1 | 1-2 | 1-3
----|-----|----
2-1 | 2-2 | 2-3
----|-----|----
3-1 | 3-2 | 3-3
```

## Exemples de code

<Examples method="post" path="/tic-tac-toe" :body="{ username: 'Utilisateur1', move: '2-2', session: 'abc123', game: 'VWXYZ' }" />

## Réponse

### Coup réussi

```json
{
  "message": "Move sent successfully"
}
```

### Victoire

```json
{
  "message": "Move sent successfully. Utilisateur1 wins. Utilisateur2 loses.",
  "winner": "Utilisateur1",
  "loser": "Utilisateur2",
  "tie": false
}
```

### Égalité

```json
{
  "message": "Game over. It's a tie!",
  "winner": null,
  "loser": null,
  "tie": true
}
```

## Champs de réponse

| Champ | Type | Description |
| ----- | ---- | ----------- |
| `message` | `string` | Message de statut du coup |
| `winner` | `string\|null` | Nom d'utilisateur du gagnant (si la partie est terminée) |
| `loser` | `string\|null` | Nom d'utilisateur du perdant (si la partie est terminée) |
| `tie` | `boolean` | Si la partie s'est terminée par une égalité |

## Réponses d'erreur

| Erreur                                                             | Description                            |
| ------------------------------------------------------------------ | -------------------------------------- |
| `Global rate limit exceeded.`                                      | Limite globale de l'API atteinte       |
| `You have exceeded the limit of X requests per hour.`              | Limite horaire IP/token atteinte       |
| `Rate limit exceeded. Try again in X seconds.`                     | Limite courte durée par utilisateur    |
| `Invalid move. Please provide a valid move (e.g., 1-1, 2-2, 3-3).` | Format de coup invalide                |
| `Game is full, you can only watch.`                                | La partie a déjà deux joueurs          |
| `Please wait for the other player to make a move.`                 | Ce n'est pas votre tour                |
| `Move already made. Please choose a different move.`               | Case déjà occupée                      |
| `Session ID mismatch`                                              | La session ne correspond pas au joueur |

## Essayer

<Try method="post" path="/tic-tac-toe" :params="[{ name: 'username', required: true }, { name: 'move', required: true }, { name: 'session', required: true }, { name: 'game', required: true }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                    | Description                                     |
| --------------------------------------------------- | ----------------------------------------------- |
| `Please provide a username (?username={username})`  | Le paramètre `username` est manquant            |
| `Please provide a valid move (&move={move})`        | Le paramètre `move` est manquant ou invalide    |
| `Please provide a valid session ID (&session={ID})` | Le paramètre `session` est manquant ou invalide |
| `Please provide a valid game ID (&game={ID})`       | Le paramètre `game` est manquant ou invalide    |

Lorsqu'une partie est terminée, la requête retournera les noms du gagnant et du perdant, ainsi que s'il y a égalité.

## Endpoints associés

- [/v4/tic-tac-toe/fetch](./tic-tac-toe/fetch) - Récupérer les informations de la partie en cours
- [/v4/tic-tac-toe/list](./tic-tac-toe/list) - Lister toutes les parties publiques en cours