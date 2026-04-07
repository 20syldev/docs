# Distance de Levenshtein

L'endpoint `/levenshtein` permet de calculer la distance de Levenshtein entre deux chaînes de caractères. Cette distance représente le nombre minimum d'opérations nécessaires pour transformer une chaîne en une autre.

<Endpoint method="get" path="/levenshtein" baseUrl="https://api.sylvain.sh" />

## Paramètres

| Paramètre | Requis | Description        |
| --------- | ------ | ------------------ |
| `str1`    | Oui    | La première chaîne |
| `str2`    | Oui    | La deuxième chaîne |

## Réponse

```json
{
  "str1": "example",
  "str2": "samples",
  "distance": 3
}
```

## Champs de réponse

| Champ | Type | Description |
| ----- | ---- | ----------- |
| `str1` | `string` | La première chaîne d'entrée |
| `str2` | `string` | La deuxième chaîne d'entrée |
| `distance` | `number` | La distance de Levenshtein entre les deux chaînes |

## Exemples de code

<Examples method="get" path="/levenshtein" :params="{ str1: 'example', str2: 'samples' }" />

## Essayer

<Try method="get" path="/levenshtein" :params="[{ name: 'str1', required: true }, { name: 'str2', required: true }]" />

## Gestion des erreurs

Si les paramètres sont manquants ou invalides, l'API retournera une erreur :

| Message d'erreur                                  | Description                      |
| ------------------------------------------------- | -------------------------------- |
| `Please provide a first string (?str1={string})`  | Le paramètre `str1` est manquant |
| `Please provide a second string (&str2={string})` | Le paramètre `str2` est manquant |

## À propos de la distance de Levenshtein

La distance de Levenshtein est une mesure de la similarité entre deux chaînes. Elle compte le nombre minimum d'éditions de caractères uniques (insertions, suppressions ou substitutions) nécessaires pour transformer une chaîne en une autre. Cela est utile pour :

- Vérification orthographique
- Analyse de séquences ADN
- Correspondance de chaînes approximative
- Détection de plagiat