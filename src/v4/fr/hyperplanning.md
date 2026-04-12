# Hyperplanning

L'endpoint `/hyperplanning` permet d'afficher les informations d'un emploi du temps Hyperplanning au format JSON à partir d'un fichier ICS (calendrier).

<Endpoint method="post" path="/hyperplanning" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre | Requis | Description                                                                         |
| --------- | ------ | ----------------------------------------------------------------------------------- |
| `url`     | Oui    | L'URL du fichier ICS à utiliser et afficher. Doit être encodée en URL avant l'envoi |
| `detail`  | Non    | Niveau de détail pour les événements (`full` ou `list`)                             |

## Options de détail

| Option | Description                                                             |
| ------ | ----------------------------------------------------------------------- |
| `full` | Affiche un résumé complet avec matière, enseignant, classes, date, etc. |
| `list` | Affiche toutes les données sous forme de liste                          |

## Exemples de code

<Examples method="post" path="/hyperplanning" :body="{ url: 'https%3A%2F%2Fexample.com%2Ffile.ics', detail: 'full' }" />

## Champs de réponse

Les champs retournés dépendent de l'option `detail` choisie.

### Mode `full`

| Champ     | Type       | Description                              |
| --------- | ---------- | ---------------------------------------- |
| `summary` | `string[]` | Tableau des éléments du résumé           |
| `subject` | `string`   | Nom de la matière                        |
| `teacher` | `string`   | Nom de l'enseignant                      |
| `classes` | `string[]` | Tableau des noms de classes              |
| `start`   | `string`   | Heure de début de l'événement (ISO 8601) |
| `end`     | `string`   | Heure de fin de l'événement (ISO 8601)   |

### Mode `list`

Retourne un tableau de toutes les données brutes de chaque événement.

### Mode par défaut (sans `detail`)

Retourne un tableau d'objets résumé avec les champs `summary`, `start` et `end`.

## Essayer

<Try method="post" path="/hyperplanning" :params="[{ name: 'url', required: true }, { name: 'detail', required: false, options: ['full', 'list'] }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                   | Description                                 |
| -------------------------------------------------- | ------------------------------------------- |
| `Please provide a valid ICS file URL (?url={URL})` | Le paramètre `url` est manquant ou invalide |
