# Changelog

## Guide de migration

### Utiliser `/latest` (recommandé)

Utilisez `api.sylvain.sh/latest` pour toujours pointer vers la dernière version :

```
https://api.sylvain.sh/latest/infos
https://api.sylvain.sh/latest/evaluate
```

### Migration manuelle

Remplacez `/v4/` par `/v5/` dans vos requêtes :

```
# Avant
https://api.sylvain.sh/v4/infos

# Après
https://api.sylvain.sh/v5/infos
```

### Compatibilité des endpoints

Tous les endpoints v4 sont entièrement compatibles en v5. Les nouveaux endpoints sont listés dans le [changelog 5.0.0](/v5/fr/changelog/5.0.0).

## Versions précédentes

- [Changelog v4](/v4/fr/changelog) - Voir toutes les versions v4
- [Documentation v3](/v3/fr/) - Ancienne version
