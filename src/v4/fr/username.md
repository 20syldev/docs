# Génération de noms d'utilisateur

L'endpoint `/username` génère un nom d'utilisateur aléatoire composé d'un adjectif, d'un animal et d'un métier. Un nombre aléatoire est également inclus. Cet endpoint ne nécessite aucune option.

<Endpoint method="get" path="/username" baseUrl="https://api.sylvain.sh" />

::: tip Cas d'utilisation
Suggérer des noms d'utilisateur à l'inscription, générer des noms de joueurs, créer des données de test, ou remplir du contenu de remplacement pour les maquettes.
:::

## Paramètres

Cet endpoint ne nécessite aucun paramètre. Il retourne un nom d'utilisateur généré aléatoirement avec le format adjectif + animal.

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

## Essayer

<Try name="Username" />
