# Texte

L'endpoint `/text` fournit des utilitaires de manipulation et de génération de texte.

<Endpoint method="get" path="/text" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre | Requis | Description                                          |
| --------- | ------ | ---------------------------------------------------- |
| `method`  | Oui    | Méthode de texte (voir les méthodes ci-dessous)      |
| `value`   | Non    | Texte source (requis pour `stats`, `slug`, `number`) |
| `type`    | Non    | Type de Lorem : `words`, `sentences`, `paragraphs`   |
| `count`   | Non    | Nombre d'éléments pour `lorem` (défaut : 5)          |
| `lang`    | Non    | Langue pour `number` : `en` ou `fr`                  |

## Méthodes disponibles

| Méthode  | Description            | Paramètres requis |
| -------- | ---------------------- | ----------------- |
| `stats`  | Statistiques du texte  | `value`           |
| `slug`   | Convertir en slug URL  | `value`           |
| `lorem`  | Générer du Lorem Ipsum | `type`, `count`   |
| `number` | Nombre en lettres      | `value`, `lang`   |

## Réponse (`stats`)

```json
{
    "method": "stats",
    "result": {
        "characters": 11,
        "charactersNoSpaces": 10,
        "words": 2,
        "sentences": 1,
        "paragraphs": 1,
        "readingTime": "1s",
        "mostFrequentChar": "l"
    }
}
```

## Réponse (`slug`)

```json
{
    "method": "slug",
    "result": "hello-world"
}
```

## Réponse (`number`)

```json
{
    "method": "number",
    "result": "quarante-deux"
}
```

## Champs de réponse

| Champ    | Type             | Description                  |
| -------- | ---------------- | ---------------------------- |
| `method` | `string`         | La méthode de texte utilisée |
| `result` | `string\|object` | Le résultat traité           |

## Exemples de code

<Examples method="get" path="/text" :params="{ method: 'slug', value: 'Hello World' }" />

## Essayer

<Try method="get" path="/text" :params="[{ name: 'method', required: true, options: ['stats', 'slug', 'lorem', 'number'] }, { name: 'value', required: false }, { name: 'type', required: false, options: ['words', 'sentences', 'paragraphs'] }, { name: 'count', required: false }, { name: 'lang', required: false, options: ['en', 'fr'] }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                                       | Description                                    |
| ---------------------------------------------------------------------- | ---------------------------------------------- |
| `Please provide a valid method (?method={slug\|stats\|lorem\|number})` | Le paramètre `method` est manquant ou invalide |
| `A value is required`                                                  | Le paramètre `value` est manquant quand requis |
