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

<div class="version-cards">
  <a href="/v4/fr" class="version-card current">
    <span class="badge version-badge">Actuelle</span>
    <span class="version-number">v4</span>
    <span class="version-desc">Toutes les fonctionnalités</span>
  </a>
  <a href="/v3/fr" class="version-card">
    <span class="badge version-badge stable">Stable</span>
    <span class="version-number">v3</span>
    <span class="version-desc">Version précédente</span>
  </a>
  <a href="/v2/fr" class="version-card">
    <span class="badge version-badge legacy">Legacy</span>
    <span class="version-number">v2</span>
    <span class="version-desc">Ancienne version</span>
  </a>
</div>

## URL de base

Toutes les requêtes API doivent être faites vers :

```
https://api.sylvain.sh
```

## Exemple

<Try method="get" path="/health" :params="[]" auto-send no-version />
