# Versioning Guide

How to add a new API version to the documentation.

## Steps to add a new version (e.g. v5)

### 1. Copy the content folder

```bash
cp -r src/v4 src/v5
```

No find-replace needed — all Vue components (`<Endpoint>`, `<Try>`, `<Examples>`, `<Playground>`) auto-detect the version from the URL path via `useVersion.ts`.

### 2. Create the sidebar

Copy `src/.vitepress/sidebar/v4.ts` to `v5.ts` and replace `/v4/` with `/v5/` in sidebar links only:

```bash
sed 's|/v4/|/v5/|g' src/.vitepress/sidebar/v4.ts > src/.vitepress/sidebar/v5.ts
```

Update the export name from `v4` to `v5` at the top of the file.

### 3. Update the config

In `src/.vitepress/config.mts`:
- Add `import { v5 } from './sidebar/v5';`
- Add `...v5` to the sidebar object (before `...v4`)

### 4. Update `redirect.ts`

In `src/.vitepress/theme/utils/redirect.ts`:
- Change `LATEST_VERSION` from `'v4'` to `'v5'`
- Add `'v5'` to `KNOWN_VERSIONS` (the version regex is generated automatically)

### 5. Update `Version.vue`

In `src/.vitepress/theme/components/Version.vue`, add `v5` to the `pages` record (same pages as v4). The dropdown items list is now generated dynamically from `KNOWN_VERSIONS`, so nothing else to do here.

### 6. Update the homepage

In `src/index.md` and `src/fr.md`:
- Update hero action links from `/v4/` to `/v5/`
- Update feature links from `/v4/` to `/v5/`
- Update version cards (v5 = Current, v4 = Stable, v3 = Legacy)
- Update the example request/response

### 7. Update `Terminal.vue`

Replace `/v4/` with `/v5/` in the API request URLs.

### 8. Bump `package.json`

Change the version to `5.0.0`.

### 9. Update v5 `index.md` "Other Versions"

Update the "Other Versions" links at the bottom of `src/v5/en/index.md` and `src/v5/fr/index.md`.

---

## What happens automatically

- **Banner**: Already present in all version index.md files. When `LATEST_VERSION` changes, banners on older versions update automatically (v4 gets "Migration Available", v3/v2/v1 get "Legacy Version").
- **Vue components**: `<Endpoint>`, `<Try>`, `<Examples>`, `<Playground>` all use `useVersion()` to auto-prepend the correct version prefix to paths.
- **Version switcher**: Picks up the new version from `Version.vue`.
- **Redirects**: `/latest/en/` automatically points to the latest version.

## Architecture

```
composables/
  useVersion.ts        → Composable: extracts version/lang from URL, builds versioned paths
  useCodeSnippets.ts   → Generates curl/js/python/php snippets for an endpoint call

utils/
  redirect.ts          → LATEST_VERSION, KNOWN_VERSIONS, API_BASE_URL, smart redirects
  i18n.ts              → Language translations and helpers
  icons.ts             → SVG icons (copy/check)

data/
  endpoints.ts         → Endpoint metadata (version-agnostic paths)

components/
  Banner.vue           → Auto migration/legacy banner
  Version.vue          → Version switcher dropdown
  Playground.vue       → Full API playground (uses useVersion + endpoints)
  Try.vue              → Inline API tester (uses useVersion)
  Examples.vue         → Multi-language code examples (uses useVersion)
  Terminal.vue         → Animated terminal on homepage
```

Components receive paths like `/algorithms` (not `/v4/algorithms`) and prepend the version at runtime via `useVersion().versionedPath()`.
