# Géolocalisation

L'endpoint `/geo` calcule la distance et le cap entre deux coordonnées GPS en utilisant la formule de Haversine.

<Endpoint method="get" path="/geo" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre | Requis | Description                      |
| --------- | ------ | -------------------------------- |
| `lat1`    | Oui    | Latitude du point A (-90/+90)    |
| `lon1`    | Oui    | Longitude du point A (-180/+180) |
| `lat2`    | Oui    | Latitude du point B (-90/+90)    |
| `lon2`    | Oui    | Longitude du point B (-180/+180) |

## Champs de réponse

| Champ                    | Type     | Description                                    |
| ------------------------ | -------- | ---------------------------------------------- |
| `distance.km`            | `number` | Distance en kilomètres                         |
| `distance.miles`         | `number` | Distance en miles                              |
| `distance.nauticalMiles` | `number` | Distance en milles nautiques                   |
| `bearing.degrees`        | `number` | Cap en degrés (0–360)                          |
| `bearing.cardinal`       | `string` | Direction cardinale (N, NNE, NE, ENE, E, etc.) |
| `from.lat`               | `number` | Latitude analysée du point A                   |
| `from.lon`               | `number` | Longitude analysée du point A                  |
| `to.lat`                 | `number` | Latitude analysée du point B                   |
| `to.lon`                 | `number` | Longitude analysée du point B                  |

## Exemples de code

<Examples method="get" path="/geo" :params="{ lat1: '48.8566', lon1: '2.3522', lat2: '43.2965', lon2: '5.3698' }" />

## Essayer

<Try method="get" path="/geo" :params="[{ name: 'lat1', required: true }, { name: 'lon1', required: true }, { name: 'lat2', required: true }, { name: 'lon2', required: true }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                    | Description                               |
| ----------------------------------- | ----------------------------------------- |
| `lat1 must be a number`             | Une coordonnée n'est pas un nombre valide |
| `lat1 must be between -90 and 90`   | La latitude est hors limites              |
| `lon1 must be between -180 and 180` | La longitude est hors limites             |
