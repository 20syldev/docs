# Pour Commencer

Bienvenue dans la documentation de l'**API Hyperion v2**. Ceci est la version stable précédente de l'API.

::: info Migration Disponible
Une nouvelle version est disponible ! Pensez à migrer vers [v3](/v3/fr/) pour les dernières fonctionnalités incluant le support Hyperplanning, la distance de Levenshtein et des fonctionnalités de chat améliorées.
:::

## URL de Base

Toutes les requêtes API doivent être effectuées vers :

```
https://api.sylvain.pro/v2
```

## Exemple Rapide

```bash
curl -X GET "https://api.sylvain.pro/v2/infos"
```

```json
{
  "endpoints": 17,
  "last_version": "v2",
  "documentation": "https://docs.sylvain.pro",
  "github": "https://github.com/20syldev/api",
  "creation": "November 25th 2024"
}
```

## Limitation de Débit

Certains points d'accès ont une [limitation de débit](/v3/fr/pricing) pour prévenir les abus. Si vous dépassez la limite, vous recevrez une réponse d'erreur :

```json
{
  "error": "Rate limit exceeded. Try again in X seconds."
}
```

## Gestion des Erreurs

Tous les points d'accès retournent des réponses d'erreur cohérentes :

```json
{
  "error": "Description de l'erreur"
}
```

## Autres Versions

- [Documentation v3](/v3/fr/) - Dernière version (recommandée)
- [Documentation v1](/v1/fr/) - Version historique