# Génération d'informations personnelles

L'endpoint `/personal` génère des informations aléatoires sur une personne. Nom, email, localisation, numéro de téléphone, profession et bien plus sont générés. Cet endpoint ne nécessite aucune option.

<Endpoint method="get" path="/personal" baseUrl="https://api.sylvain.sh" />

## Paramètres

Cet endpoint ne nécessite aucun paramètre.

## Réponse

```json
{
    "name": "Jane Martin",
    "email": "jane@example.com",
    "localisation": "FR",
    "phone": "+33 06 78 90 12 34",
    "job": "Engineer",
    "hobbies": "Reading",
    "language": "French",
    "card": "3231 5443 9131 6887",
    "cvc": 673,
    "expiration": "09/24",
    "address": "4 rue des prés, Paris",
    "birthday": "1985-08-07T18:29:38.213Z",
    "civil_status": "Single",
    "children": 0,
    "vehicle": ["Motorcycle", "Bus", "Bike"],
    "social_profiles": {
        "twitter": "@jane_martin",
        "facebook": "facebook.com/jane_martin",
        "linkedin": "linkedin.com/in/jane_martin",
        "instagram": "instagram.com/jane_martin"
    },
    "year_income": "88014 USD/year",
    "month_income": "7334.50 USD/month",
    "education": "Bachelor's",
    "work_experience": "5 years",
    "health_status": "Healthy",
    "emergency_contacts": [
        {
            "name": "John Doe",
            "relationship": "Sibling",
            "phone": "+33 06 78 90 12 34"
        }
    ],
    "subscriptions": ["Netflix", "Spotify"],
    "pets": ["Fish", "Dog"]
}
```

## Champs de réponse

| Champ                | Type       | Description                          |
| -------------------- | ---------- | ------------------------------------ |
| `name`               | `string`   | Nom complet                          |
| `email`              | `string`   | Adresse email                        |
| `localisation`       | `string`   | Code pays                            |
| `phone`              | `string`   | Numéro de téléphone                  |
| `job`                | `string`   | Profession                           |
| `hobbies`            | `string`   | Loisirs/intérêts                     |
| `language`           | `string`   | Langue parlée                        |
| `card`               | `string`   | Numéro de carte de crédit            |
| `cvc`                | `number`   | Code de sécurité de la carte         |
| `expiration`         | `string`   | Date d'expiration de la carte        |
| `address`            | `string`   | Adresse postale                      |
| `birthday`           | `string`   | Date de naissance                    |
| `civil_status`       | `string`   | Situation matrimoniale               |
| `children`           | `number`   | Nombre d'enfants                     |
| `vehicle`            | `string[]` | Tableau des véhicules possédés       |
| `social_profiles`    | `object`   | Objet des profils de réseaux sociaux |
| `year_income`        | `string`   | Revenu annuel                        |
| `month_income`       | `string`   | Revenu mensuel                       |
| `education`          | `string`   | Niveau d'éducation                   |
| `work_experience`    | `string`   | Années d'expérience professionnelle  |
| `health_status`      | `string`   | État de santé                        |
| `emergency_contacts` | `object[]` | Tableau des contacts d'urgence       |
| `subscriptions`      | `string[]` | Tableau des abonnements              |
| `pets`               | `string[]` | Tableau des animaux de compagnie     |

## Exemples de code

<Examples method="get" path="/personal" />

## Essayer

<Try method="get" path="/personal" :params="[]" />

::: warning Note
Toutes les données générées sont fictives et créées de manière aléatoire. Les numéros de carte de crédit ne sont pas valides pour les transactions.
:::
