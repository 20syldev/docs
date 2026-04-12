# Personal Information Generation

The `/personal` endpoint generates random information about a person. Name, email, location, phone number, profession and much more are generated. This endpoint does not require any options.

<Endpoint method="get" path="/personal" baseUrl="https://api.sylvain.sh" />

## Parameters

This endpoint does not require any parameters.

## Response Fields

| Field                | Type       | Description                                                            |
| -------------------- | ---------- | ---------------------------------------------------------------------- |
| `name`               | `string`   | Full name                                                              |
| `email`              | `string`   | Email address                                                          |
| `localisation`       | `string`   | Country code                                                           |
| `phone`              | `string`   | Phone number                                                           |
| `job`                | `string`   | Profession                                                             |
| `hobbies`            | `string`   | Hobbies/interests                                                      |
| `language`           | `string`   | Spoken language                                                        |
| `card`               | `string`   | Credit card number                                                     |
| `cvc`                | `number`   | Card security code                                                     |
| `expiration`         | `string`   | Card expiration date                                                   |
| `address`            | `string`   | Street address                                                         |
| `birthday`           | `string`   | Date of birth                                                          |
| `civil_status`       | `string`   | Marital status                                                         |
| `children`           | `number`   | Number of children                                                     |
| `vehicle`            | `string[]` | Array of vehicles owned                                                |
| `social_profiles`    | `object`   | Social media profiles (`twitter`, `facebook`, `linkedin`, `instagram`) |
| `year_income`        | `string`   | Annual income                                                          |
| `month_income`       | `string`   | Monthly income                                                         |
| `education`          | `string`   | Education level                                                        |
| `work_experience`    | `string`   | Years of work experience                                               |
| `health_status`      | `string`   | Health status                                                          |
| `emergency_contacts` | `object[]` | Array of emergency contacts (`name`, `relationship`, `phone`)          |
| `subscriptions`      | `string[]` | Array of subscriptions                                                 |
| `pets`               | `string[]` | Array of pets                                                          |

## Code Examples

<Examples method="get" path="/personal" />

## Try It

<Try method="get" path="/personal" :params="[]" />

::: warning Note
All generated data is fictional and randomly created. Credit card numbers are not valid for transactions.
:::
