# Chat en ligne

L'endpoint `/chat` fournit un système de messagerie en temps réel avec support pour les canaux publics et privés.

## GET /v4/chat

<Endpoint method="get" path="/chat" baseUrl="https://api.sylvain.sh" />

Récupère tous les messages envoyés durant la dernière heure. Cet endpoint ne nécessite aucune option.

### Réponse

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
    },
    {
      "username": "Utilisateur8",
      "message": "Très bien, et toi ?",
      "timestamp": "2025-01-21T08:32:07.215Z"
    }
]
```

### Champs de réponse

| Champ | Type | Description |
| ----- | ---- | ----------- |
| `username` | `string` | Nom d'utilisateur de l'expéditeur |
| `message` | `string` | Contenu du message |
| `timestamp` | `string` | Horodatage du message (ISO 8601) |

### Exemples de code

<Examples method="get" path="/chat" />

---

## POST /v4/chat

<Endpoint method="post" path="/chat" baseUrl="https://api.sylvain.sh" />

Permet d'envoyer un message au chat global ou à un chat privé.

### Paramètres

| Paramètre  | Requis | Description                                                                                              |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `username` | Oui    | Le nom d'utilisateur de l'utilisateur qui envoie le message                                              |
| `message`  | Oui    | Le message à envoyer                                                                                     |
| `session`  | Oui    | L'identifiant de session de l'utilisateur                                                                |
| `token`    | Non    | La clé utilisée pour se connecter à un chat privé. Si non fournie, le message sera envoyé au chat global |

### Exemples de code

<Examples method="post" path="/chat" :body="{ username: 'Utilisateur3', message: 'Comment ça va ?', session: 'abc123', token: '41a43360-9874-4c7a-9ca8-eec29e765a0e' }" />

### Réponse

```json
{
  "message": "Message sent successfully"
}
```

### Champs de réponse

| Champ | Type | Description |
| ----- | ---- | ----------- |
| `message` | `string` | Message de confirmation |

### Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                    | Description                                     |
| --------------------------------------------------- | ----------------------------------------------- |
| `Please provide a username (?username={username})`  | Le paramètre `username` est manquant            |
| `Please provide a message (&message={message})`     | Le paramètre `message` est manquant             |
| `Please provide a valid session ID (&session={ID})` | Le paramètre `session` est manquant ou invalide |

## Essayer

<Try method="get" path="/chat" :params="[]" />

## Endpoints associés

- [/v4/chat/private](./chat/private) - Créer et gérer des canaux de chat privés