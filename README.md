# Chota Notes — thoughts of a webdev

A minimalist Eleventy **v3.1.2** (ESM) blog starter using the **Chota** CSS microframework.

## Quick start

```bash
npm install
npm run serve
# open http://localhost:8080 (or Eleventy’s printed URL)
```

## Pages included

- `/` Home
- `/about/` About
- `/contact/` Contact (static example form)
- `/documentation/` Documentation
- `/tables/` Tables demo
- `/blog/` Blog index with pagination (5 posts/page)

## Features

- ESM project (`eleventy.config.js`)
- Pagination via Eleventy’s `pagination` front matter
- Dark mode toggle (stores in `localStorage`), using Chota’s CSS variable override
- Cards and buttons via Chota components
- Tables demo using `.striped`

## Styling

Chota is included via CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/chota@latest">
```

See <https://jenil.github.io/chota/> for full docs.
