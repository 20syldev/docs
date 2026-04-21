# Pricing

The Hyperion API is free and allows a maximum of **2,000 requests per hour**.

If you wish to exceed this limit, you must use an authentication token. The authentication token is unique, assigned to your email, and allows you to exceed this limit.

## Plans

<div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-5">
  <div class="pricing-card transition-all duration-200 text-center p-4 rounded-[10px]">
    <span class="bg-[var(--vp-c-brand-soft)] text-[color:var(--vp-c-brand-1)] inline-block tracking-[0.5px] rounded-[20px] px-3 text-[0.6rem] font-semibold">FREE</span>
    <div class="pricing-price my-3 text-2xl font-bold text-[color:var(--vp-c-text-1)]">Free</div>
    <ul class="pricing-features list-none text-left my-[0.6rem] p-0">
      <li><strong>2,000</strong> requests/hour</li>
      <li><strong>48,000</strong> requests/day</li>
      <li><strong>336,000</strong> requests/week</li>
      <li><strong>~1.4M</strong> requests/month</li>
    </ul>
    <a href="https://api.sylvain.sh" class="pricing-button block font-medium text-[0.8rem] rounded-md py-[0.45rem] px-3" target="_blank">Get Started</a>
  </div>

  <div class="pricing-card transition-all duration-200 text-center p-4 rounded-[10px]">
    <span class="bg-[var(--vp-c-brand-soft)] text-[color:var(--vp-c-brand-1)] inline-block tracking-[0.5px] rounded-[20px] px-3 text-[0.6rem] font-semibold">ADVANCED</span>
    <div class="pricing-price my-3 text-2xl font-bold text-[color:var(--vp-c-text-1)]">€0.99<span>/month</span></div>
    <ul class="pricing-features list-none text-left my-[0.6rem] p-0">
      <li><strong>3,500</strong> requests/hour</li>
      <li><strong>84,000</strong> requests/day</li>
      <li><strong>588,000</strong> requests/week</li>
      <li><strong>~2.5M</strong> requests/month</li>
    </ul>
    <a href="https://paypal.me/20syldev/0.99EUR" class="pricing-button block font-medium text-[0.8rem] rounded-md py-[0.45rem] px-3" target="_blank">Purchase</a>
  </div>

  <div class="pricing-card recommended transition-all duration-200 text-center p-4 rounded-[10px]">
    <span class="badge card-badge">Recommended</span>
    <span class="bg-[var(--vp-c-brand-soft)] text-[color:var(--vp-c-brand-1)] inline-block tracking-[0.5px] rounded-[20px] px-3 text-[0.6rem] font-semibold">PRO</span>
    <div class="pricing-price my-3 text-2xl font-bold text-[color:var(--vp-c-text-1)]">€9.99<span>/month</span></div>
    <ul class="pricing-features list-none text-left my-[0.6rem] p-0">
      <li><strong>6,000</strong> requests/hour</li>
      <li><strong>144,000</strong> requests/day</li>
      <li><strong>1,008,000</strong> requests/week</li>
      <li><strong>~4.2M</strong> requests/month</li>
    </ul>
    <a href="https://paypal.me/20syldev/9.99EUR" class="pricing-button block font-medium text-[0.8rem] rounded-md py-[0.45rem] px-3" target="_blank">Purchase</a>
  </div>

  <div class="pricing-card transition-all duration-200 text-center p-4 rounded-[10px]">
    <span class="bg-[var(--vp-c-brand-soft)] text-[color:var(--vp-c-brand-1)] inline-block tracking-[0.5px] rounded-[20px] px-3 text-[0.6rem] font-semibold">BUSINESS</span>
    <div class="pricing-price my-3 text-2xl font-bold text-[color:var(--vp-c-text-1)]">€19.99<span>/month</span></div>
    <ul class="pricing-features list-none text-left my-[0.6rem] p-0">
      <li><strong>10,000</strong> requests/hour</li>
      <li><strong>240,000</strong> requests/day</li>
      <li><strong>1,680,000</strong> requests/week</li>
      <li><strong>~7M</strong> requests/month</li>
    </ul>
    <a href="https://paypal.me/20syldev/19.99EUR" class="pricing-button block font-medium text-[0.8rem] rounded-md py-[0.45rem] px-3" target="_blank">Purchase</a>
  </div>
</div>

## Custom Plans

If you need more than 10,000 requests per hour or a custom pricing plan, send an email to [contact@sylvain.sh](mailto:contact@sylvain.sh).

## Authentication

To use your API key, include it in the `Authorization` header:

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" https://api.sylvain.sh/v3/infos
```

### Error Response

If the provided token is incorrect or expired, you will receive a 401 error:

```json
{
    "message": "Unauthorized",
    "error": "Invalid token.",
    "status": "401"
}
```

::: warning Note
If no token is provided, the request is treated as unauthenticated and uses the [FREE](#plans) tier limits.
:::
