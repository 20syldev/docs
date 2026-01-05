# Informations sur l'API

L'endpoint `/infos` permet d'afficher les informations générales à propos de l'[API](https://api.sylvain.pro). Cet endpoint ne nécessite aucune option.

<HEndpoint method="get" path="/v2/infos" baseUrl="https://api.sylvain.pro" />

## Exemple de requête

```
GET /v2/infos
```

## Réponse

```json
{
  "endpoints": 17,
  "last_version": "v2",
  "documentation": "https://docs.sylvain.pro",
  "github": "https://github.com/20syldev/api",
  "creation": "November 25th 2024"
}
```

## cURL

```bash
curl -X GET "https://api.sylvain.pro/v2/infos"
```