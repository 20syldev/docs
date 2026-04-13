# Chat Send

The `/chat` endpoint allows sending a message to the global chat or a private chat.

<Endpoint method="post" path="/chat" baseUrl="https://api.sylvain.sh" />

## Parameters

| Parameter  | Required | Description                                                                                             |
| ---------- | -------- | ------------------------------------------------------------------------------------------------------- |
| `username` | Yes      | The username of the user who sends the message                                                          |
| `message`  | Yes      | The message to send                                                                                     |
| `session`  | Yes      | The session ID of the user                                                                              |
| `token`    | No       | The key used to connect to a private chat. If not provided, the message will be sent to the global chat |

## Response Fields

| Field     | Type     | Description          |
| --------- | -------- | -------------------- |
| `message` | `string` | Confirmation message |

## Code Examples

<Examples method="post" path="/chat" :body="{ username: 'User3', message: 'How are you?', session: 'abc123', token: '41a43360-9874-4c7a-9ca8-eec29e765a0e' }" />

## Try It

<Try method="post" path="/chat" :params="[{ name: 'username', required: true }, { name: 'message', required: true }, { name: 'session', required: true }, { name: 'token', required: false }]" />

## Error Handling

If parameters are missing or invalid, the API will return an error:

| Error Message                                       | Description                                   |
| --------------------------------------------------- | --------------------------------------------- |
| `Please provide a username (?username={username})`  | The `username` parameter is missing           |
| `Please provide a message (&message={message})`     | The `message` parameter is missing            |
| `Please provide a valid session ID (&session={ID})` | The `session` parameter is missing or invalid |
| `Rate limit exceeded`                               | Too many requests in a short period           |
| `Session ID mismatch`                               | Session does not match the user               |

## Related Endpoints

- [/v4/chat](./messages) - Retrieve all recent messages
- [/v4/chat/private](./private) - Create and manage private chat channels
- <Method type="delete" sm /> [/v4/chat/:token](./clear) - Clear all messages from a private chat
