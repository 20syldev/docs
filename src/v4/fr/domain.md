# Génération de nom de domaine

L'endpoint `/domain` génère diverses données aléatoires sur un domaine pour créer un profil complet. Cet endpoint ne nécessite aucune option.

<Endpoint method="get" path="/domain" baseUrl="https://api.sylvain.sh" />

## Paramètres

Cet endpoint ne nécessite aucun paramètre.

## Réponse

```json
{
  "domain": "sylvain.sh",
  "full_domain": "api.sylvain.sh",
  "ip_address": ["216.24.57.4", "216.24.57.252"],
  "ssl_certified": true,
  "hosting_provider": "Render",
  "dns_servers": ["dns1.registrar-servers.com", "dns2.registrar-servers.com"],
  "dns_provider": "Namecheap",
  "traffic": "1000 visits/day",
  "seo_score": 70,
  "page_rank": 2,
  "country": "France",
  "website_type": "Portfolio",
  "random_name": "sylvain",
  "random_subdomain": "api",
  "random_tld": "pro",
  "backlinks_count": 14,
  "creation_date": "2024-03-17T20:49:00.000Z",
  "expiration_date": "2026-03-17T20:49:00.000Z"
}
```

## Champs de réponse

| Champ | Type | Description |
| ----- | ---- | ----------- |
| `domain` | `string` | Nom de domaine principal |
| `full_domain` | `string` | Domaine complet avec sous-domaine |
| `ip_address` | `string[]` | Tableau d'adresses IP |
| `ssl_certified` | `boolean` | Statut du certificat SSL |
| `hosting_provider` | `string` | Nom du fournisseur d'hébergement |
| `dns_servers` | `string[]` | Tableau des serveurs DNS |
| `dns_provider` | `string` | Nom du fournisseur DNS |
| `traffic` | `string` | Trafic quotidien estimé |
| `seo_score` | `number` | Score SEO (0-100) |
| `page_rank` | `number` | Valeur du PageRank |
| `country` | `string` | Pays d'origine |
| `website_type` | `string` | Type de site web |
| `random_name` | `string` | Nom de domaine généré |
| `random_subdomain` | `string` | Sous-domaine généré |
| `random_tld` | `string` | Extension de domaine générée |
| `backlinks_count` | `number` | Nombre de backlinks |
| `creation_date` | `string` | Date de création du domaine |
| `expiration_date` | `string` | Date d'expiration du domaine |

## Exemples de code

<Examples method="get" path="/domain" />

## Essayer

<Try method="get" path="/domain" :params="[]" />