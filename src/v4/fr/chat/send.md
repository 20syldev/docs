# Chat Envoyer

L'endpoint `/chat` permet d'envoyer un message au chat global ou à un chat privé.

<Endpoint method="post" path="/chat" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre  | Requis | Description                                                                                              |
| ---------- | ------ | -------------------------------------------------------------------------------------------------------- |
| `username` | Oui    | Le nom d'utilisateur de l'utilisateur qui envoie le message                                              |
| `message`  | Oui    | Le message à envoyer                                                                                     |
| `session`  | Oui    | L'identifiant de session de l'utilisateur                                                                |
| `token`    | Non    | La clé utilisée pour se connecter à un chat privé. Si non fournie, le message sera envoyé au chat global |

## Champs de réponse

| Champ     | Type     | Description             |
| --------- | -------- | ----------------------- |
| `message` | `string` | Message de confirmation |

## Exemples de code

<Examples method="post" path="/chat" :body="{ username: 'Utilisateur3', message: 'Comment ça va ?', session: 'abc123', token: '41a43360-9874-4c7a-9ca8-eec29e765a0e' }" />

## Essayer

<Try method="post" path="/chat" :params="[{ name: 'username', required: true }, { name: 'message', required: true }, { name: 'session', required: true }, { name: 'token', required: false }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                    | Description                                     |
| --------------------------------------------------- | ----------------------------------------------- |
| `Please provide a username (?username={username})`  | Le paramètre `username` est manquant            |
| `Please provide a message (&message={message})`     | Le paramètre `message` est manquant             |
| `Please provide a valid session ID (&session={ID})` | Le paramètre `session` est manquant ou invalide |
| `Rate limit exceeded`                               | Limite de requêtes atteinte                     |
| `Session ID mismatch`                               | La session ne correspond pas à l'utilisateur    |

## Endpoints associés

- [/v4/chat](./messages) - Récupérer les messages récents
- [/v4/chat/private](./private) - Créer et gérer des canaux de chat privés
- <Method type="delete" sm /> [/v4/chat/:token](./clear) - Effacer les messages d'un chat privé
