# Changelog v4

## Changements API

### Réécriture TypeScript

L'API a été entièrement réécrite de JavaScript vers **TypeScript**, avec des définitions de types, un stack middleware Express, et une gestion centralisée des erreurs.

### Réponses enrichies

- **Username** retourne maintenant `number`, `adjective`, `animal` et `job` en plus de `username`
- **Personal** restructuré avec `vehicle` (array), `social_profiles` (objet), `emergency_contacts` (array d'objets), `subscriptions` et `pets` (arrays)
- **Domain** retourne maintenant `ip_address` et `dns_servers` sous forme de tableaux (valeurs multiples)

### Endpoint Convert

Conversion de température uniquement : **Celsius**, **Fahrenheit** et **Kelvin**.

### Endpoint Time

- Le paramètre type accepte `live` (heure actuelle) ou `random` (heure aléatoire entre deux dates)
- 17 options de format : iso, utc, timestamp, locale, date, time, year, month, day, hour, minute, second, ms, dayOfWeek, dayOfYear, weekNumber, timezone
- 5 options de fuseau horaire : UTC, Europe/Paris, America/New_York, Asia/Tokyo, Australia/Sydney

### Endpoint Token

- Le type par défaut est maintenant `alphanum` (auparavant `alpha`)
- Plage de longueur : 12-4096, défaut 24

## Nouvelles fonctionnalités de la documentation

### Blocs interactifs "Essayer"

Chaque page d'endpoint inclut désormais un testeur interactif. Remplissez les paramètres et envoyez des requêtes directement depuis la documentation.

### Playground API

Une page [Playground](/v4/fr/playground) dédiée pour tester n'importe quel endpoint. Inclut un historique des requêtes.

### Exemples de code multi-langages

Les exemples de code sont disponibles en 4 langages : **cURL**, **JavaScript**, **Python** et **PHP**. Votre préférence est sauvegardée entre les pages.

### Documentation des schémas de réponse

Tous les endpoints incluent un tableau détaillé des champs de réponse avec types et descriptions.

## Guide de migration

### Utiliser `/latest` (recommandé)

Utilisez `api.sylvain.sh/latest` pour toujours pointer vers la dernière version de l'API, sans avoir à modifier vos URLs à chaque mise à jour :

```
https://api.sylvain.sh/latest/infos
https://api.sylvain.sh/latest/token
```

### Récupérer la version courante

L'endpoint `/infos` retourne le champ `last_version`, ce qui permet de connaître programmatiquement la version actuelle de l'API :

```
GET https://api.sylvain.sh/infos → { "last_version": "v4", ... }
```

### Migration manuelle

Si vous préférez cibler une version spécifique, remplacez `/v3/` par `/v4/` dans vos requêtes :

```
# Avant
https://api.sylvain.sh/v3/infos

# Après
https://api.sylvain.sh/v4/infos
```

### Compatibilité des endpoints

Les 20 endpoints sont entièrement compatibles. Adaptez votre code pour gérer les champs de réponse enrichis (username, personal, domain).

## Versions précédentes

- [Documentation v3](/v3/fr/) - Version stable précédente
- [Documentation v2](/v2/fr/) - Ancienne version
