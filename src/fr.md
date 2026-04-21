---
layout: home

hero:
    name: 'Documentation'
    text: 'API Hyperion'
    tagline: Une collection complète d'endpoints utilitaires pour les développeurs
    actions:
        - theme: brand
          text: Commencer
          link: /v4/fr/
        - theme: alt
          text: Voir sur GitHub
          link: https://github.com/20syldev/docs
---

## Démarrage rapide

<div class="grid grid-cols-1 vp:grid-cols-3 my-6 gap-4">
  <a href="/v4/fr" class="version-card group bg-[linear-gradient(135deg,#5c7cfa14_0%,#20c99714_100%)] border border-[color:var(--vp-c-brand-1)] flex flex-col items-center relative py-6 px-4 rounded-xl hover:shadow-[0_12px_24px_-8px_#5c7cfa26] hover:-translate-y-1">
    <span class="bg-[var(--vp-c-brand-1)] uppercase absolute text-white px-2 top-0 right-0 text-[9px] font-extrabold tracking-[1px] rounded-[0.4rem] rounded-tl-none rounded-br-none">Actuelle</span>
    <span class="text-[color:var(--vp-c-text-1)] transition-all duration-300 underline decoration-transparent underline-offset-4 mt-3 mb-2 font-bold text-[32px] group-hover:decoration-[color:var(--vp-c-brand-1)]">v4</span>
    <span class="text-[color:var(--vp-c-text-2)] text-center text-[13px]">Toutes les fonctionnalités</span>
  </a>
  <a href="/v3/fr" class="version-card group bg-[var(--vp-c-bg-soft)] border border-[color:var(--vp-c-divider)] flex flex-col items-center relative py-6 px-4 rounded-xl hover:border-[color:var(--method-patch)] hover:shadow-[0_12px_24px_-8px_#5c7cfa26] hover:-translate-y-1">
    <span class="bg-[var(--method-patch)] uppercase absolute text-white px-2 top-0 right-0 text-[9px] font-extrabold tracking-[1px] rounded-[0.4rem] rounded-tl-none rounded-br-none">Stable</span>
    <span class="text-[color:var(--vp-c-text-1)] transition-all duration-300 underline decoration-transparent underline-offset-4 mt-3 mb-2 font-bold text-[32px] group-hover:decoration-[color:var(--method-patch)]">v3</span>
    <span class="text-[color:var(--vp-c-text-2)] text-center text-[13px]">Version précédente</span>
  </a>
  <a href="/v2/fr" class="version-card group bg-[var(--vp-c-bg-soft)] border border-[color:var(--vp-c-divider)] flex flex-col items-center relative py-6 px-4 rounded-xl hover:border-[color:var(--vp-c-text-3)] hover:shadow-[0_12px_24px_-8px_#5c7cfa26] hover:-translate-y-1">
    <span class="bg-[var(--vp-c-text-3)] uppercase absolute text-white px-2 top-0 right-0 text-[9px] font-extrabold tracking-[1px] rounded-[0.4rem] rounded-tl-none rounded-br-none">Legacy</span>
    <span class="text-[color:var(--vp-c-text-1)] transition-all duration-300 underline decoration-transparent underline-offset-4 mt-3 mb-2 font-bold text-[32px] group-hover:decoration-[color:var(--vp-c-text-3)]">v2</span>
    <span class="text-[color:var(--vp-c-text-2)] text-center text-[13px]">Ancienne version</span>
  </a>
</div>

## URL de base

Toutes les requêtes API doivent être faites vers :

```
https://api.sylvain.sh
```

## Exemple

<Try method="get" path="/health" :params="[]" auto-send no-version />
