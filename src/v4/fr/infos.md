# Informations sur l'API

L'endpoint `/infos` fournit des informations générales sur l'[API](https://api.sylvain.sh). Cet endpoint ne nécessite aucune option.

<Endpoint method="get" path="/infos" baseUrl="https://api.sylvain.sh" />

## Paramètres

Cet endpoint ne nécessite aucun paramètre.

## Réponse

```json
{
  "endpoints": 20,
  "last_version": "v4",
  "documentation": "https://docs.sylvain.sh",
  "github": "https://github.com/20syldev/api",
  "creation": "November 25th 2024"
}
```

## Champs de réponse

| Champ | Type | Description |
| ----- | ---- | ----------- |
| `endpoints` | `number` | Nombre total d'endpoints disponibles |
| `last_version` | `string` | Version actuelle de l'API |
| `documentation` | `string` | URL de la documentation |
| `github` | `string` | URL du dépôt GitHub |
| `creation` | `string` | Date de création de l'API |

## Exemples de code

<Examples method="get" path="/infos" />

## Essayer

<Try method="get" path="/infos" :params="[]" />