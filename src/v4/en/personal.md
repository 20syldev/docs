# Personal Information Generation

The `/personal` endpoint generates random information about a person. Name, email, location, phone number, profession and much more are generated. This endpoint does not require any options.

<Endpoint method="get" path="/personal" baseUrl="https://api.sylvain.sh" />

## Parameters

This endpoint does not require any parameters.

## Response

```json
{
    "name": "Alexis Barbos",
    "email": "alexis@example.com",
    "localisation": "DE",
    "phone": "+49 163 555 1584",
    "job": "Scientist",
    "hobbies": "Gaming",
    "language": "German",
    "card": "2027 9525 5616 8266",
    "cvc": 506,
    "expiration": "04/28",
    "address": "8495 2nd Ave, Sydney",
    "birthday": "2003-03-30T13:47:46.090Z",
    "civil_status": "Single",
    "children": 0,
    "vehicle": ["Car", "Motorcycle"],
    "social_profiles": {
        "twitter": "@alexis_barbos",
        "facebook": "facebook.com/alexis_barbos",
        "linkedin": "linkedin.com/in/alexis_barbos",
        "instagram": "instagram.com/alexis_barbos"
    },
    "year_income": "34571 USD/year",
    "month_income": "2880.92 USD/month",
    "education": "High School",
    "work_experience": "17 years",
    "health_status": "Healthy",
    "emergency_contacts": [
        {
            "name": "John Doe",
            "relationship": "Spouse",
            "phone": "+49 964-833-4138"
        }
    ],
    "subscriptions": ["Spotify", "Amazon Prime"],
    "pets": ["None"]
}
```

## Response Fields

| Field                | Type       | Description                  |
| -------------------- | ---------- | ---------------------------- |
| `name`               | `string`   | Full name                    |
| `email`              | `string`   | Email address                |
| `localisation`       | `string`   | Country code                 |
| `phone`              | `string`   | Phone number                 |
| `job`                | `string`   | Profession                   |
| `hobbies`            | `string`   | Hobbies/interests            |
| `language`           | `string`   | Spoken language              |
| `card`               | `string`   | Credit card number           |
| `cvc`                | `number`   | Card security code           |
| `expiration`         | `string`   | Card expiration date         |
| `address`            | `string`   | Street address               |
| `birthday`           | `string`   | Date of birth                |
| `civil_status`       | `string`   | Marital status               |
| `children`           | `number`   | Number of children           |
| `vehicle`            | `string[]` | Array of vehicles owned      |
| `social_profiles`    | `object`   | Social media profiles object |
| `year_income`        | `string`   | Annual income                |
| `month_income`       | `string`   | Monthly income               |
| `education`          | `string`   | Education level              |
| `work_experience`    | `string`   | Years of work experience     |
| `health_status`      | `string`   | Health status                |
| `emergency_contacts` | `object[]` | Array of emergency contacts  |
| `subscriptions`      | `string[]` | Array of subscriptions       |
| `pets`               | `string[]` | Array of pets                |

## Code Examples

<Examples method="get" path="/personal" />

## Try It

<Try method="get" path="/personal" :params="[]" />

::: warning Note
All generated data is fictional and randomly created. Credit card numbers are not valid for transactions.
:::
