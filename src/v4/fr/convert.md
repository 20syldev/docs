# Conversion de température

L'endpoint `/convert` permet de convertir plusieurs unités de température entre elles. Vous devez fournir une valeur à convertir, une unité source et l'unité vers laquelle vous souhaitez convertir.

<Endpoint method="get" path="/convert" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre | Requis | Description                                         |
| --------- | ------ | --------------------------------------------------- |
| `value`   | Oui    | La valeur à convertir (plage : -273.15 à 1 000 000) |
| `from`    | Oui    | L'unité source (`celsius`, `fahrenheit`, `kelvin`)  |
| `to`      | Oui    | L'unité cible (`celsius`, `fahrenheit`, `kelvin`)   |

## Unités disponibles

| Unité        | Description       |
| ------------ | ----------------- |
| `celsius`    | Degrés Celsius    |
| `fahrenheit` | Degrés Fahrenheit |
| `kelvin`     | Kelvin            |

## Champs de réponse

| Champ    | Type     | Description                     |
| -------- | -------- | ------------------------------- |
| `from`   | `string` | Unité de température source     |
| `to`     | `string` | Unité de température cible      |
| `value`  | `number` | Valeur originale à convertir    |
| `result` | `number` | Valeur de température convertie |

## Exemples de code

<Examples method="get" path="/convert" :params="{ value: '30', from: 'celsius', to: 'kelvin' }" />

## Essayer

<Try method="get" path="/convert" :params="[{ name: 'value', required: true }, { name: 'from', required: true, options: ['celsius', 'fahrenheit', 'kelvin'] }, { name: 'to', required: true, options: ['celsius', 'fahrenheit', 'kelvin'] }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                    | Description                                   |
| --------------------------------------------------- | --------------------------------------------- |
| `Please provide a valid value (?value={value})`     | Le paramètre `value` est manquant ou invalide |
| `Please provide a valid source unit (&from={unit})` | Le paramètre `from` est manquant ou invalide  |
| `Please provide a valid target unit (&to={unit})`   | Le paramètre `to` est manquant ou invalide    |
