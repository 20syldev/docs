# Tarification

L'API Hyperion est gratuite et permet un maximum de **2 000 requêtes par heure**.

Si vous souhaitez dépasser cette limite, vous devez utiliser un token d'authentification. Le token d'authentification est unique, attribué à votre email, et vous permet de dépasser cette limite.

## Offres

<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
  <div class="pricing-card transition-all duration-200 text-center p-4 rounded-[10px]">
    <span class="bg-[var(--vp-c-brand-soft)] text-[color:var(--vp-c-brand-1)] inline-block tracking-[0.5px] rounded-[20px] px-3 text-[0.6rem] font-semibold">GRATUIT</span>
    <div class="pricing-price my-3 text-2xl font-bold text-[color:var(--vp-c-text-1)]">Gratuit</div>
    <ul class="pricing-features list-none text-left my-[0.6rem] p-0">
      <li><strong>2 000</strong> requêtes/heure</li>
      <li><strong>48 000</strong> requêtes/jour</li>
      <li><strong>336 000</strong> requêtes/semaine</li>
      <li><strong>~1.4M</strong> requêtes/mois</li>
    </ul>
    <a href="https://api.sylvain.sh" class="pricing-button block font-medium text-[0.8rem] rounded-md py-[0.45rem] px-3" target="_blank">Commencer</a>
  </div>

  <div class="pricing-card transition-all duration-200 text-center p-4 rounded-[10px]">
    <span class="bg-[var(--vp-c-brand-soft)] text-[color:var(--vp-c-brand-1)] inline-block tracking-[0.5px] rounded-[20px] px-3 text-[0.6rem] font-semibold">ADVANCED</span>
    <div class="pricing-price my-3 text-2xl font-bold text-[color:var(--vp-c-text-1)]">0.99€<span>/mois</span></div>
    <ul class="pricing-features list-none text-left my-[0.6rem] p-0">
      <li><strong>3 500</strong> requêtes/heure</li>
      <li><strong>84 000</strong> requêtes/jour</li>
      <li><strong>588 000</strong> requêtes/semaine</li>
      <li><strong>~2.5M</strong> requêtes/mois</li>
    </ul>
    <a href="https://paypal.me/20syldev/0.99EUR" class="pricing-button block font-medium text-[0.8rem] rounded-md py-[0.45rem] px-3" target="_blank">Acheter</a>
  </div>

  <div class="pricing-card recommended transition-all duration-200 text-center p-4 rounded-[10px]">
    <span class="badge card-badge">Recommandé</span>
    <span class="bg-[var(--vp-c-brand-soft)] text-[color:var(--vp-c-brand-1)] inline-block tracking-[0.5px] rounded-[20px] px-3 text-[0.6rem] font-semibold">PRO</span>
    <div class="pricing-price my-3 text-2xl font-bold text-[color:var(--vp-c-text-1)]">9.99€<span>/mois</span></div>
    <ul class="pricing-features list-none text-left my-[0.6rem] p-0">
      <li><strong>6 000</strong> requêtes/heure</li>
      <li><strong>144 000</strong> requêtes/jour</li>
      <li><strong>1 008 000</strong> requêtes/semaine</li>
      <li><strong>~4.2M</strong> requêtes/mois</li>
    </ul>
    <a href="https://paypal.me/20syldev/9.99EUR" class="pricing-button block font-medium text-[0.8rem] rounded-md py-[0.45rem] px-3" target="_blank">Acheter</a>
  </div>

  <div class="pricing-card transition-all duration-200 text-center p-4 rounded-[10px]">
    <span class="bg-[var(--vp-c-brand-soft)] text-[color:var(--vp-c-brand-1)] inline-block tracking-[0.5px] rounded-[20px] px-3 text-[0.6rem] font-semibold">BUSINESS</span>
    <div class="pricing-price my-3 text-2xl font-bold text-[color:var(--vp-c-text-1)]">19.99€<span>/mois</span></div>
    <ul class="pricing-features list-none text-left my-[0.6rem] p-0">
      <li><strong>10 000</strong> requêtes/heure</li>
      <li><strong>240 000</strong> requêtes/jour</li>
      <li><strong>1 680 000</strong> requêtes/semaine</li>
      <li><strong>~7M</strong> requêtes/mois</li>
    </ul>
    <a href="https://paypal.me/20syldev/19.99EUR" class="pricing-button block font-medium text-[0.8rem] rounded-md py-[0.45rem] px-3" target="_blank">Acheter</a>
  </div>
</div>

## Offres personnalisées

Si vous souhaitez un nombre de requêtes supérieur à 10 000 par heure ou un tarif personnalisé, envoyez un email à [contact@sylvain.sh](mailto:contact@sylvain.sh).

## Authentification

Pour utiliser votre clé API, incluez-la dans l'en-tête `Authorization` :

```bash
curl -H "Authorization: Bearer VOTRE_CLE_API" https://api.sylvain.sh/v3/infos
```

### Réponse d'erreur

Si le token fourni est incorrect ou expiré, vous obtiendrez une erreur 401 :

```json
{
    "message": "Unauthorized",
    "error": "Invalid token.",
    "status": "401"
}
```

::: warning Note
Si aucun token n'est fourni, la requête est traitée comme non authentifiée et utilise les limites de l'offre [GRATUIT](#offres).
:::
