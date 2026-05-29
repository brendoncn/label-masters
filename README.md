# Label Masters

Static marketing site (React + Vite + TypeScript). This guide covers local setup, updating product photos, editing contact copy, and deploying a production build.

## Installation

**Requirements:** Node.js 18+ and npm.

```bash
git clone <repository-url>
cd Label-Masters
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

Other scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development with hot reload |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Serve the production build locally |
| `npx tsc --noEmit` | Type-check without emitting files |
| `npm run lint` | ESLint |
| `npm test` | Vitest (unit tests) |

## Updating product photos

Product galleries on product detail pages load images automatically from disk. Card thumbnails on the products list use separate files under `src/assets/`.

### Gallery images (product detail page)

1. Find the product folder under **`src/assets/Images/<folder>/`**. Folder names must match `SLUG_TO_FOLDER_MAP` in `src/data/products.ts`:

   | Product slug | Folder name |
   | --- | --- |
   | `hangtags` | `Hangtags` |
   | `printed-label` | `printedLabel` |
   | `woven-label` | `Woven Label` |
   | `patches` | `Patches` |
   | `stickers` | `Sticker` |
   | `bubble-mailer` | `Bubble Mailer` |
   | `dust-bags` | `Dust Bags` |
   | `garment-bag` | `Garment Bag` |
   | `polybag` | `Polybag` |
   | `polymailer` | `Polymailer` |
   | `tote-bags` | `Tote Bags` |
   | `paper-shopping-bag` | `Paper Shopping Bag` |
   | `gift-box` | `Gift Box` |
   | `shipper-box` | `Shipper Box` |
   | `hangers` | `Hangers` |
   | `tissue-paper` | `Tissue Paper` |
   | `umbrella` | `Umbrella` |

2. **Replace** an existing file (keep the same filename), or **add** new images. Supported formats: `.png`, `.jpg`, `.jpeg`, `.svg`.

3. Files are shown in **natural sort order** by filename (e.g. `Hangtags (1).jpg`, `Hangtags (2).jpg`). Use consistent numbering when adding photos.

4. If a folder is empty or missing, the site falls back to the thumbnail defined in `src/data/products.ts` (`categoryProductImages`).

No code changes are needed when you only swap or add files in an existing folder. After saving images, refresh the dev server or rebuild for production.

### List / card thumbnails (`/products`)

Thumbnails on the product grid come from **`src/assets/product-*.jpg`** (and similar), imported in `src/data/products.ts` as `categoryProductImages`. To change a card image:

1. Replace the matching file under `src/assets/` (e.g. `product-hangtags.jpg`), or
2. Add a new image, import it in `src/data/products.ts`, and assign it in the `categoryProductImages` array for the right category and index.

Product **names and descriptions** are not in the image folders; they live in `src/i18n/translations.ts` under `categoryDetails.items[*].products[*]` (see below).

Recommended sizes (from `src/doc/dev.md`): banner ~1905×400 px; product shots ~1085×814 px.

## Contact and site copy (`src/i18n/translations.ts`)

All user-visible text is centralized in **`src/i18n/translations.ts`**. Each string has three locales: `tc` (Traditional Chinese), `sc` (Simplified Chinese), and `en` (English).

### Contact page labels and address

Edit the **`contact`** block for form labels, headings, business hours, and placeholders:

```ts
contact: {
  headerTitle: { tc: "…", sc: "…", en: "…" },
  headerDesc: { … },
  hoursValue: { tc: "週一至週五 9:00 - 18:00", … },
  // …
}
```

The **street address** on the Contact page and in the footer uses **`footer.address`** (same file). Update all three languages there:

```ts
footer: {
  address: {
    tc: "…",
    sc: "…",
    en: "…",
  },
  // …
}
```

### Phone and email (hardcoded today)

Phone and email are **not** in `translations.ts` yet. They are set in:

- `src/pages/Contact.tsx` — `CONTACT_EMAIL` and `"(852) 2743 2218"`
- `src/components/Footer.tsx` — same phone and `info@labelmasters.com`

Change those values in both files (or move them into `translations.ts` / a small `src/config/contact.ts` if you want one place to maintain them).

### Other content

| Section | Use for |
| --- | --- |
| `nav`, `footer` | Navigation, footer blurb, copyright |
| `index` | Home hero, stats, “Why us”, CTAs |
| `products` | Products hub headings and category blurbs |
| `categoryDetails` | Per-category and per-product names, descriptions, features, FAQ |
| `about` | About page |
| `contact` | Contact page UI strings |

After editing translations, run `npm run dev` and switch languages in the UI to verify `tc` / `sc` / `en`.

## Deployment

Before deploying, confirm the project builds cleanly:

```bash
npx tsc --noEmit
npm run build
```

`npm run build` writes static files to **`dist/`**. Deploy that folder to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, nginx, etc.).

- **SPA routing:** configure the host to serve `index.html` for unknown paths (fallback), so deep links like `/products/hangtags` work on refresh.
- **Preview locally:** `npm run preview` serves `dist/` after a build.

Typical CI steps: `npm ci` → `npx tsc --noEmit` → `npm run build` → upload or publish `dist/`.
