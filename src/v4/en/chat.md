# Online Chat

The `/chat` endpoint provides a real-time messaging system with support for public and private channels.

## GET /v4/chat

<Endpoint method="get" path="/chat" baseUrl="https://api.sylvain.sh" />

Retrieves all messages sent during the last hour. This endpoint does not require any options.

### Response

```json
[
    {
        "username": "User1",
        "message": "Hi!",
        "timestamp": "2025-01-21T08:27:11.068Z"
    },
    {
        "username": "User3",
        "message": "How are you?",
        "timestamp": "2025-01-21T08:28:43.070Z"
    },
    {
        "username": "User8",
        "message": "Yeah great, and you?",
        "timestamp": "2025-01-21T08:32:07.215Z"
    }
]
```

### Response Fields

| Field       | Type     | Description                       |
| ----------- | -------- | --------------------------------- |
| `username`  | `string` | Username of the message sender    |
| `message`   | `string` | Content of the message            |
| `timestamp` | `string` | ISO 8601 timestamp of the message |

### Code Examples

<Examples method="get" path="/chat" />

---

## POST /v4/chat

<Endpoint method="post" path="/chat" baseUrl="https://api.sylvain.sh" />

Allows sending a message to the global chat or a private chat.

### Parameters

| Parameter  | Required | Description                                                                                             |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `username` | Yes      | The username of the user who sends the message                                                          |
| `message`  | Yes      | The message to send                                                                                     |
| `session`  | Yes      | The session ID of the user                                                                              |
| `token`    | No       | The key used to connect to a private chat. If not provided, the message will be sent to the global chat |

### Code Examples

<Examples method="post" path="/chat" :body="{ username: 'User3', message: 'How are you?', session: 'abc123', token: '41a43360-9874-4c7a-9ca8-eec29e765a0e' }" />

### Response

```json
{
    "message": "Message sent successfully"
}
```

### Response Fields

| Field     | Type     | Description          |
| --------- | -------- | -------------------- |
| `message` | `string` | Confirmation message |

## Try It

<Try method="get" path="/chat" :params="[]" />

### Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                                       | Description                                   |
| --------------------------------------------------- | --------------------------------------------- |
| `Please provide a username (?username={username})`  | The `username` parameter is missing           |
| `Please provide a message (&message={message})`     | The `message` parameter is missing            |
| `Please provide a valid session ID (&session={ID})` | The `session` parameter is missing or invalid |

## Related Endpoints

- [/v4/chat/private](./chat/private) - Create and manage private chat channels
