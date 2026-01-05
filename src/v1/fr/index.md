# Pour Commencer

Bienvenue dans la documentation de l'**API Hyperion v1**. Ceci est la version historique de l'API.

::: warning Version Historique
Ceci est une version historique de l'API. Pensez à migrer vers [v3](/v3/fr/) pour les dernières fonctionnalités et améliorations.
:::

## URL de Base

Toutes les requêtes API doivent être effectuées vers :

```
https://api.sylvain.pro/v1
```

## Exemple Rapide

```bash
curl -X GET "https://api.sylvain.pro/v1/infos"
```

```json
{
  "endpoints": 11,
  "last_version": "v1",
  "documentation": "https://docs.sylvain.pro",
  "github": "https://github.com/20syldev/api",
  "creation": "November 25th 2024"
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
- [Documentation v2](/v2/fr/) - Version stable précédente