# Récupération du morpion

L'endpoint `/tic-tac-toe/fetch` permet de récupérer les informations d'une partie de morpion en cours. Vous pouvez utiliser l'identifiant de la partie en cours pour l'afficher ou créer une nouvelle partie si aucun ID n'est fourni.

<Endpoint method="post" path="/tic-tac-toe/fetch" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre  | Requis | Description                                                                                               |
| ---------- | ------ | --------------------------------------------------------------------------------------------------------- |
| `username` | Oui    | Le nom d'utilisateur effectuant la requête                                                                |
| `game`     | Non    | L'identifiant de la partie à afficher. S'il n'est pas fourni, un nouvel identifiant de partie sera généré |
| `private`  | Non    | Définir à `true` pour créer une partie privée (défaut : `false`)                                          |

## Exemples de code

<Examples method="post" path="/tic-tac-toe/fetch" :body="{ username: 'Utilisateur1', game: 'VWXYZ' }" />

## Réponse

```json
{
  "id": "VWXYZ",
  "moves": [
        {
          "username": "Utilisateur1",
          "move": "2-2",
          "session": "abc123"
        },
        {
          "username": "Utilisateur2",
          "move": "1-3",
          "session": "def456"
        }
    ],
  "players": ["Utilisateur1", "Utilisateur2"],
  "turn": "Utilisateur1",
  "status": "ready",
  "private": false
}
```

## Champs de réponse

| Champ | Type | Description |
| ----- | ---- | ----------- |
| `id` | `string` | Identifiant de la partie |
| `moves` | `object[]` | Tableau des coups joués |
| `players` | `string[]` | Tableau des noms d'utilisateur des joueurs |
| `turn` | `string\|null` | Nom d'utilisateur du joueur dont c'est le tour |
| `status` | `string` | Statut de la partie (`waiting`, `ready`, `finished`) |
| `private` | `boolean` | Si la partie est privée |

## Valeurs de statut de partie

| Statut    | Description                                     |
| --------- | ----------------------------------------------- |
| `waiting` | La partie a moins de 2 joueurs                  |
| `ready`   | La partie a 2 joueurs et est prête à être jouée |

## Réponse de partie terminée

```json
{
  "id": "VWXYZ",
  "moves": [...],
  "players": ["Utilisateur1", "Utilisateur2"],
  "turn": null,
  "status": "finished",
  "private": false,
  "winner": "Utilisateur1",
  "loser": "Utilisateur2",
  "tie": false
}
```

## Essayer

<Try method="post" path="/tic-tac-toe/fetch" :params="[{ name: 'username', required: true }, { name: 'game', required: false }, { name: 'private', required: false, options: ['true', 'false'] }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                   | Description                          |
| -------------------------------------------------- | ------------------------------------ |
| `Please provide a username (?username={username})` | Le paramètre `username` est manquant |

Lorsqu'une nouvelle partie est créée, l'utilisateur est automatiquement ajouté à la liste des joueurs. Les parties privées ne sont pas visibles dans la liste publique des parties mais peuvent toujours être rejointes si vous connaissez l'ID de la partie.

## Endpoints associés

- [/v4/tic-tac-toe](../tic-tac-toe) - Endpoint principal du jeu pour effectuer des coups
- [/v4/tic-tac-toe/list](./list) - Lister toutes les parties publiques