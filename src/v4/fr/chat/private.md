# Chat Privé

L'endpoint `/chat/private` récupère tous les messages envoyés durant la dernière heure, appartenant à un chat privé.

<Endpoint method="post" path="/chat/private" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre  | Requis | Description                                          |
| ---------- | ------ | ---------------------------------------------------- |
| `username` | Oui    | Le nom d'utilisateur qui a envoyé le message         |
| `token`    | Oui    | La clé permettant la connexion au chat privé désiré  |

## Exemples de code

<Examples method="post" path="/chat/private" :body="{ username: 'Utilisateur3', token: '41a43360-9874-4c7a-9ca8-eec29e765a0e' }" />

## Réponse

```json
[
  {
    "username": "Utilisateur1",
    "message": "Salut !",
    "timestamp": "2025-01-21T08:27:11.068Z"
  },
  {
    "username": "Utilisateur3",
    "message": "Comment ça va ?",
    "timestamp": "2025-01-21T08:28:43.070Z"
  }
]
```

## Champs de réponse

| Champ | Type | Description |
| ----- | ---- | ----------- |
| `username` | `string` | Nom d'utilisateur de l'expéditeur |
| `message` | `string` | Contenu du message |
| `timestamp` | `string` | Horodatage du message (ISO 8601) |

## Essayer

<Try method="post" path="/chat/private" :params="[{ name: 'username', required: true }, { name: 'token', required: true }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                   | Description                                   |
| -------------------------------------------------- | --------------------------------------------- |
| `Please provide a username (?username={username})` | Le paramètre `username` est manquant          |
| `Please provide a valid token (&token={key}).`     | Le paramètre `token` est manquant ou invalide |

## Endpoints associés

- [/v4/chat](../chat) - Endpoint principal du chat pour envoyer et recevoir des messages
