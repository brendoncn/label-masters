// Static product image map. Names/descriptions are in i18n translations
// under categoryDetails[i].products[j].
import bubbleMailer from "@/assets/product-bubble-mailer.jpg";
import dustBags from "@/assets/product-dust-bags.jpg";
import garmentBag from "@/assets/product-garment-bag.jpg";
import giftBox from "@/assets/product-gift-box.jpg";
import hangers from "@/assets/product-hangers.jpg";
import hangtags from "@/assets/product-hangtags.jpg";
import printedLabel from "@/assets/product-printed-label.jpg";
import wovenLabel from "@/assets/product-woven-label.jpg";
import patches from "@/assets/product-patches.jpg";
import polybag from "@/assets/product-polybag.jpg";
import polymailer from "@/assets/product-polymailer.jpg";
import shipperBox from "@/assets/product-shipper-box.jpg";
import paperShoppingBag from "@/assets/product-paper-shopping-bag.jpg";
import toteBags from "@/assets/product-tote-bags.jpg";
import sticker from "@/assets/product-sticker.jpg";
import tissuePaper from "@/assets/product-tissue-paper.jpg";
import umbrella from "@/assets/product-umbrella.jpg";

export const CATEGORY_SLUGS = ["tags-labels", "bags", "boxes", "hangers", "accessories"] as const;
export type CategorySlug = (typeof CATEGORY_SLUGS)[number];

// Images for each category's product cards, in display order.
// The matching translated name/desc lives at categoryDetails[i].products[j].
export const categoryProductImages: Record<CategorySlug, string[]> = {
  "tags-labels": [hangtags, printedLabel, wovenLabel, patches, sticker],
  bags: [bubbleMailer, dustBags, garmentBag, polybag, polymailer, toteBags, paperShoppingBag],
  boxes: [giftBox, shipperBox],
  hangers: [hangers],
  accessories: [tissuePaper, umbrella],
};

// Cover image shown on the category card on /products and as the detail hero.
export const categoryCoverImages: Record<CategorySlug, string> = {
  "tags-labels": hangtags,
  bags: paperShoppingBag,
  boxes: giftBox,
  hangers: hangers,
  accessories: umbrella,
};

// Per-product slug map. Each individual product (Hangtags, Printed Label, etc.)
// gets its own URL like /products/hangtags. The route resolves to the parent
// category page with that product's gallery auto-expanded.
export type ProductSlug =
  | "hangtags"
  | "printed-label"
  | "woven-label"
  | "patches"
  | "stickers"
  | "bubble-mailer"
  | "dust-bags"
  | "garment-bag"
  | "polybag"
  | "polymailer"
  | "tote-bags"
  | "paper-shopping-bag"
  | "gift-box"
  | "shipper-box"
  | "hangers"
  | "tissue-paper"
  | "umbrella";

// slug convert folder mapping
export const SLUG_TO_FOLDER_MAP: Record<string, string> = {
  "hangtags": "Hangtags",
  "printed-label": "printedLabel",
  "woven-label": "Woven Label",
  "patches": "Patches",
  "stickers": "Sticker",
  "bubble-mailer": "Bubble Mailer",
  "dust-bags": "Dust Bags",
  "garment-bag": "Garment Bag",
  "polybag": "Polybag",
  "polymailer": "Polymailer",
  "tote-bags": "Tote Bags",
  "paper-shopping-bag": "Paper Shopping Bag",
  "gift-box": "Gift Box",
  "shipper-box": "Shipper Box",
  "hangers": "Hangers",
  "tissue-paper": "Tissue Paper",
  "umbrella": "Umbrella",
};

// Maps product slug → its parent category slug and the product index inside that category.
// Order MUST match the products array under categoryDetails.items[i].products in translations.ts.
export const PRODUCT_SLUG_MAP: Record<ProductSlug, { category: CategorySlug; index: number }> = {
  hangtags: { category: "tags-labels", index: 0 },
  "printed-label": { category: "tags-labels", index: 1 },
  "woven-label": { category: "tags-labels", index: 2 },
  patches: { category: "tags-labels", index: 3 },
  stickers: { category: "tags-labels", index: 4 },
  "bubble-mailer": { category: "bags", index: 0 },
  "dust-bags": { category: "bags", index: 1 },
  "garment-bag": { category: "bags", index: 2 },
  polybag: { category: "bags", index: 3 },
  polymailer: { category: "bags", index: 4 },
  "tote-bags": { category: "bags", index: 5 },
  "paper-shopping-bag": { category: "bags", index: 6 },
  "gift-box": { category: "boxes", index: 0 },
  "shipper-box": { category: "boxes", index: 1 },
  hangers: { category: "hangers", index: 0 },
  "tissue-paper": { category: "accessories", index: 0 },
  umbrella: { category: "accessories", index: 1 },
};

export const PRODUCT_SLUGS = Object.keys(PRODUCT_SLUG_MAP) as ProductSlug[];

/** Resolve URL slug for a product card by its category and index in that category. */
export function getProductSlugForCategoryIndex(
  category: CategorySlug,
  index: number,
): ProductSlug | undefined {
  for (const [slug, meta] of Object.entries(PRODUCT_SLUG_MAP) as [
    ProductSlug,
    { category: CategorySlug; index: number },
  ][]) {
    if (meta.category === category && meta.index === index) return slug;
  }
  return undefined;
}
