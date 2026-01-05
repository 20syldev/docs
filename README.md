<div align="center">
  <a href="https://docs.sylvain.pro"><img src="/src/public/logo.png" alt="Logo" width="25%" height="auto"/></a>

  # Documentation de l'API
  [![Version](https://custom-icon-badges.demolab.com/badge/Version%20:-v3.0.0-6479ee?logo=docs.sylvain.pro&labelColor=23272A)](https://github.com/20syldev/docs/releases/latest)
</div>

---

## À propos de la Documentation
Voici la documentation de mon API personnelle, disponible sur le domaine [docs.sylvain.pro](https://docs.sylvain.pro).

## Développement

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

### Composants Vue

| Composant      | Description                                                                         |
| -------------- | ----------------------------------------------------------------------------------- |
| `Endpoint.vue` | Affiche un endpoint API avec sa méthode HTTP et son chemin cliquable                |
| `Lang.vue`     | Menu déroulant pour changer de langue (EN/FR)                                       |
| `Layout.vue`   | Layout principal, gère la traduction de l'UI, les raccourcis clavier et la page 404 |
| `Method.vue`   | Badge coloré pour les méthodes HTTP (GET, POST, PUT, DELETE, PATCH)                 |
| `Request.vue`  | Bloc stylisé pour afficher des exemples de requêtes avec en-tête optionnel          |
| `Terminal.vue` | Démo interactive sur la page d'accueil : simule des appels API en temps réel        |
| `Version.vue`  | Menu déroulant pour naviguer entre les versions de l'API (v1, v2, v3)               |

### Modules CSS

| Module           | Description                                                                           |
| ---------------- | ------------------------------------------------------------------------------------- |
| `main.css`       | Fichier principal qui importe tous les styles                                         |
| `api.css`        | Badges API (méthodes HTTP), endpoints, blocs de requête et liste de paramètres        |
| `components.css` | Cartes de version avec badges, effets hover et états (current, stable, legacy)        |
| `global.css`     | Typographie, scrollbar, page 404 et styles de base                                    |
| `navbar.css`     | Styles de la sidebar, badge de version, ordonnancement de la nav, bouton de recherche |
| `overrides.css`  | Surcharges VitePress (hero, code, blocs personnalisés, tableaux, dark mode)           |
| `pricing.css`    | Grille et cartes de la page tarifs avec badges et boutons                             |
| `responsive.css` | Media queries pour desktop, mobile et impression                                      |
| `terminal.css`   | Styles du terminal animé (header, body, curseur clignotant, réponses)                 |
| `theme.css`      | Variables de couleurs (brand, badges HTTP) et thème sombre                            |

## Déploiement

Le site est généré en HTML statique et peut être déployé sur n'importe quel hébergement statique :

```bash
npm run build
```

Le résultat sera dans `src/.vitepress/dist/`

## Fonctionnalités

- Documentation multi-versions (v1, v2, v3)
- Internationalisation (Anglais, Français)
- Mode sombre
- Recherche locale
- Design responsive
- Composants personnalisés pour la documentation API