# Changelog

## Guide de migration

### Utiliser `/latest` (recommandé)

Utilisez `api.sylvain.sh/latest` pour toujours pointer vers la dernière version :

```
https://api.sylvain.sh/latest/infos
https://api.sylvain.sh/latest/token
```

### Migration manuelle

Remplacez `/v3/` par `/v4/` dans vos requêtes :

```
# Avant
https://api.sylvain.sh/v3/infos

# Après
https://api.sylvain.sh/v4/infos
```

### Compatibilité des endpoints

Tous les endpoints sont entièrement compatibles. Adaptez votre code pour gérer les champs de réponse enrichis (username, personal, domain).

## Versions précédentes

- [Documentation v3](/v3/fr/) - Version stable précédente
- [Documentation v2](/v2/fr/) - Ancienne version
