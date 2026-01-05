# Informations sur l'API

L'endpoint `/infos` permet d'afficher les informations générales à propos de l'[API](https://api.sylvain.pro). Cet endpoint ne nécessite aucune option.

<HEndpoint method="get" path="/v1/infos" baseUrl="https://api.sylvain.pro" />

## Exemple de requête

```
GET /v1/infos
```

## Réponse

```json
{
  "endpoints": 11,
  "last_version": "v1",
  "documentation": "https://docs.sylvain.pro",
  "github": "https://github.com/20syldev/api",
  "creation": "November 25th 2024"
}
```

## cURL

```bash
curl -X GET "https://api.sylvain.pro/v1/infos"
```