# Génération de noms d'utilisateur

L'endpoint `/username` génère un nom d'utilisateur aléatoire composé d'un adjectif, d'un animal et d'un métier. Un nombre aléatoire est également inclus. Cet endpoint ne nécessite aucune option.

<Endpoint method="get" path="/username" baseUrl="https://api.sylvain.sh" />

## Paramètres

Cet endpoint ne nécessite aucun paramètre.

## Réponse

```json
{
    "username": "PilotHorse",
    "number": 4,
    "adjective": "Patient",
    "animal": "Koala",
    "job": "Journalist"
}
```

## Champs de réponse

| Champ       | Type     | Description              |
| ----------- | -------- | ------------------------ |
| `username`  | `string` | Nom d'utilisateur généré |
| `number`    | `number` | Nombre aléatoire         |
| `adjective` | `string` | Adjectif                 |
| `animal`    | `string` | Animal                   |
| `job`       | `string` | Métier                   |

## Exemples de code

<Examples method="get" path="/username" />

## Cas d'utilisation

- **Inscription utilisateur** : Suggérer des noms d'utilisateur lors de l'inscription
- **Jeux** : Générer des noms de joueurs
- **Tests** : Créer des données d'utilisateurs de test
- **Contenu de remplacement** : Remplir des données d'exemple

## Essayer

<Try method="get" path="/username" :params="[]" />

## Note

Le nom d'utilisateur est composé d'éléments choisis parmi un adjectif, un animal et un nombre aléatoire.
