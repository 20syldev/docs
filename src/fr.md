---
layout: home

hero:
  name: "Documentation"
  text: "API Hyperion"
  tagline: Une collection complète d'endpoints utilitaires pour les développeurs
  actions:
    - theme: brand
      text: Commencer
      link: /v3/fr/
    - theme: alt
      text: Voir sur GitHub
      link: https://github.com/20syldev/docs

features:
  - icon:
      src: /icons/algorithm.svg
    title: Algorithmes
    details: Algorithmes mathématiques incluant factorielle, fibonacci, nombres premiers, PGCD, et plus.
    link: /v3/fr/algorithms
  - icon:
      src: /icons/chat.svg
    title: Système de Chat
    details: API de messagerie en temps réel avec support des canaux publics et privés.
    link: /v3/fr/chat
  - icon:
      src: /icons/game.svg
    title: Morpion
    details: Jeu de Morpion multijoueur en ligne avec gestion de l'état des parties.
    link: /v3/fr/tic-tac-toe
  - icon:
      src: /icons/tools.svg
    title: Utilitaires
    details: QR codes, conversion de couleurs, infos de domaine, génération de captcha, et plus.
    link: /v3/fr/qrcode
---

<script setup>
import { VPHomeFeatures } from 'vitepress/theme'
</script>

## Démarrage rapide

<div class="version-cards">
  <a href="/v3/fr" class="version-card current">
    <span class="badge version-badge">Actuelle</span>
    <span class="version-number">v3</span>
    <span class="version-desc">Toutes les fonctionnalités</span>
  </a>
  <a href="/v2/fr" class="version-card">
    <span class="badge version-badge stable">Stable</span>
    <span class="version-number">v2</span>
    <span class="version-desc">Version précédente</span>
  </a>
  <a href="/v1/fr" class="version-card">
    <span class="badge version-badge legacy">Legacy</span>
    <span class="version-number">v1</span>
    <span class="version-desc">Version originale</span>
  </a>
</div>

## URL de base

Toutes les requêtes API doivent être faites vers :

```
https://api.sylvain.pro
```

## Exemple de requête

```bash
curl -X GET "https://api.sylvain.pro/v3/infos"
```

```json
{
  "endpoints": 20,
  "last_version": "v3",
  "documentation": "https://docs.sylvain.pro",
  "github": "https://github.com/20syldev/api",
  "creation": "November 25th 2024"
}
```