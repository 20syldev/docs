# Génération de tokens

L'endpoint `/token` permet de générer des chaînes sécurisées appelées _tokens_. Cet endpoint est particulièrement utile pour créer des identifiants aléatoires pour diverses applications.

<Endpoint method="post" path="/token" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre | Requis | Description                                                       |
| --------- | ------ | ----------------------------------------------------------------- |
| `len`     | Non    | Longueur du token (12-4096). Par défaut : 24                      |
| `type`    | Non    | Type de token (voir les options ci-dessous). Par défaut : `alphanum` |

## Types de tokens

| Type       | Description                   | Exemple                                |
| ---------- | ----------------------------- | -------------------------------------- |
| `alpha`    | Lettres uniquement (a-z, A-Z) | `AbCdEfGhIjKl`                         |
| `alphanum` | Lettres et chiffres           | `6tMdlDV90x4S`                         |
| `base64`   | Encodage Base64               | `dGVzdDEyMzQ=`                         |
| `hex`      | Chiffres hexadécimaux         | `a1b2c3d4e5f6`                         |
| `num`      | Nombres uniquement            | `123456789012`                         |
| `punct`    | Caractères de ponctuation     | `!@#$%^&*()_+`                         |
| `urlsafe`  | Caractères sûrs pour les URLs | `abc-123_XYZ`                          |
| `uuid`     | Format UUID                   | `550e8400-e29b-41d4-a716-446655440000` |

## Exemples de code

<Examples method="post" path="/token" :body="{ len: '24', type: 'alphanum' }" />

## Réponse

```json
{
  "token": "6tMdlDV90x4Sm52dRS7MuGyn"
}
```

## Champs de réponse

| Champ | Type | Description |
| ----- | ---- | ----------- |
| `token` | `string` | Le token sécurisé généré |

## Cas d'utilisation

- **Identifiants de session** : Générer des IDs de session uniques
- **Clés API** : Créer des clés API sécurisées
- **Tokens de réinitialisation de mot de passe** : Générer des tokens à usage unique
- **Noms de fichiers** : Créer des identifiants de fichiers uniques
- **IDs de base de données** : Générer des identifiants d'enregistrements uniques

## Essayer

<Try method="post" path="/token" :params="[{ name: 'len', required: false }, { name: 'type', required: false, options: ['alpha', 'alphanum', 'base64', 'hex', 'num', 'punct', 'urlsafe', 'uuid'] }]" />

## Gestion des erreurs

Si les paramètres sont invalides, l'API retournera une erreur :

| Message d'erreur                 | Description                                   |
| -------------------------------- | --------------------------------------------- |
| `Invalid number.`                | Le paramètre `len` n'est pas un nombre valide |
| `Length cannot exceed 4096.`     | Le paramètre `len` est supérieur à 4096       |
| `Length cannot be less than 12.` | Le paramètre `len` est inférieur à 12         |