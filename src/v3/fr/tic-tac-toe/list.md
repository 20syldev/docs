# Liste des morpions

L'endpoint `/tic-tac-toe/list` permet de récupérer toutes les parties de morpion publiques actuellement en cours. Cet endpoint ne retourne pas les parties privées ni les parties terminées.

<Endpoint method="post" path="/tic-tac-toe/list" />

## Paramètres

Cet endpoint ne nécessite aucun paramètre. Il retourne toutes les parties publiques actuellement actives.

## Exemple de requête

```bash
curl -X POST "https://api.sylvain.sh/v3/tic-tac-toe/list"
```

## Réponse

```json
{
  "message": "Public games available",
  "count": 2,
  "games": [
        {
          "id": "ABCDE",
          "players": ["Utilisateur1", "Utilisateur2"],
          "playersCount": 2,
          "moves": 3,
          "turn": "Utilisateur1",
          "status": "ready",
          "creation": 1696204800000
        },
        {
          "id": "FGHIJ",
          "players": ["Utilisateur3"],
          "playersCount": 1,
          "moves": 1,
          "turn": "Utilisateur3",
          "status": "waiting",
          "creation": 1696204700000
        }
    ]
}
```

## Champs de réponse

| Champ                  | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| `message`              | Message de confirmation                                    |
| `count`                | Nombre de parties publiques disponibles                    |
| `games`                | Tableau d'objets de partie avec les propriétés suivantes : |
| `games[].id`           | Identifiant unique de la partie                            |
| `games[].players`      | Tableau des noms d'utilisateur des joueurs dans la partie  |
| `games[].playersCount` | Nombre de joueurs actuellement dans la partie (0-2)        |
| `games[].moves`        | Nombre de coups joués dans la partie                       |
| `games[].turn`         | Nom d'utilisateur du joueur dont c'est le tour             |
| `games[].status`       | Statut actuel de la partie (`waiting` ou `ready`)          |
| `games[].creation`     | Horodatage de création de la partie                        |

## Valeurs de statut de partie

| Statut    | Description                                                                 |
| --------- | --------------------------------------------------------------------------- |
| `waiting` | La partie a moins de 2 joueurs et attend que d'autres joueurs la rejoignent |
| `ready`   | La partie a 2 joueurs et est prête à être jouée                             |

## Réponse de liste vide

```json
{
  "message": "Public games available",
  "count": 0,
  "games": []
}
```

## Notes

La liste inclut uniquement les parties publiques actuellement en cours (pas terminées). Les parties sont triées par heure de création avec les plus récentes en premier. Les parties privées ne sont jamais incluses dans cette liste pour des raisons de confidentialité. Vous pouvez rejoindre n'importe quelle partie listée en utilisant son ID avec l'endpoint [/tic-tac-toe](../tic-tac-toe).

## Endpoints associés

- [/v3/tic-tac-toe](../tic-tac-toe) - Endpoint principal du jeu pour effectuer des coups
- [/v3/tic-tac-toe/fetch](./fetch) - Récupérer les détails d'une partie spécifique