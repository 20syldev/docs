---
layout: home

hero:
  name: "Hyperion API"
  text: "Documentation"
  tagline: A comprehensive collection of utility endpoints for developers
  actions:
    - theme: brand
      text: Get Started
      link: /v3/en/
    - theme: alt
      text: View on GitHub
      link: https://github.com/20syldev/docs

features:
  - icon:
      src: /icons/algorithm.svg
    title: Algorithms
    details: Mathematical algorithms including factorial, fibonacci, prime numbers, GCD, and more.
    link: /v3/en/algorithms
  - icon:
      src: /icons/chat.svg
    title: Chat System
    details: Real-time messaging API with support for public and private channels.
    link: /v3/en/chat
  - icon:
      src: /icons/game.svg
    title: Tic-Tac-Toe
    details: Online multiplayer Tic-Tac-Toe game with game state management.
    link: /v3/en/tic-tac-toe
  - icon:
      src: /icons/tools.svg
    title: Utilities
    details: QR codes, color conversion, domain info, captcha generation, and more.
    link: /v3/en/qrcode
---

<script setup>
import { VPHomeFeatures } from 'vitepress/theme'
</script>

## Quick Start

<div class="version-cards">
  <a href="/v3/en" class="version-card current">
    <span class="badge version-badge">Current</span>
    <span class="version-number">v3</span>
    <span class="version-desc">All features</span>
  </a>
  <a href="/v2/en" class="version-card">
    <span class="badge version-badge stable">Stable</span>
    <span class="version-number">v2</span>
    <span class="version-desc">Previous version</span>
  </a>
  <a href="/v1/en" class="version-card">
    <span class="badge version-badge legacy">Legacy</span>
    <span class="version-number">v1</span>
    <span class="version-desc">Original version</span>
  </a>
</div>

## Base URL

All API requests should be made to:

```
https://api.sylvain.pro
```

## Example Request

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