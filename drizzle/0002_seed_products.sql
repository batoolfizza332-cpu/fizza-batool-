-- Seed migration for existing categories, products, and ingredients
-- Source of truth: src/data/products.ts (uploaded 4952f80c-products_1.ts)
-- FOR REVIEW ONLY -- DO NOT APPLY YET
--
-- All previously-missing NOT NULL fields have been resolved per instruction:
--   categories.short_description = category name exactly ("Dehydrated Foods")
--   ingredients.slug = kebab-case of the existing ingredient name
--   ingredients.short_description = the existing ingredient name exactly
-- No new claims, descriptions, or content were added.

--> statement-breakpoint
-- Category (only one category referenced by all 5 products: "Dehydrated Foods")
INSERT INTO "categories" ("slug", "name", "short_description", "featured")
VALUES (
  'dehydrated-foods',
  'Dehydrated Foods',
  'Dehydrated Foods',
  false
);

--> statement-breakpoint
-- Products (verbatim from src/data/products.ts)
INSERT INTO "products" (
  "slug", "name", "category_id", "short_description", "description",
  "featured_image_src", "featured_image_alt", "featured"
)
VALUES
(
  'banana-chips',
  'HARVO ORGANIC Banana Chips',
  (SELECT "id" FROM "categories" WHERE "slug" = 'dehydrated-foods'),
  'Dehydrated banana slices from HARVO ORGANIC.',
  'Dehydrated banana slices from HARVO ORGANIC.',
  '/images/products/banana-chips.png',
  'HARVO ORGANIC Banana Chips pouch',
  true
),
(
  'onion-flakes',
  'HARVO ORGANIC Onion Flakes',
  (SELECT "id" FROM "categories" WHERE "slug" = 'dehydrated-foods'),
  'Dehydrated onion flakes from HARVO ORGANIC.',
  'Dehydrated onion flakes from HARVO ORGANIC.',
  '/images/products/onion-flakes.png',
  'HARVO ORGANIC Onion Flakes pouch',
  true
),
(
  'ginger-powder',
  'HARVO ORGANIC Ginger Powder',
  (SELECT "id" FROM "categories" WHERE "slug" = 'dehydrated-foods'),
  'Dehydrated ginger powder from HARVO ORGANIC.',
  'Dehydrated ginger powder from HARVO ORGANIC.',
  '/images/products/ginger-powder.png',
  'HARVO ORGANIC Ginger Powder pouch',
  true
),
(
  'garlic-powder',
  'HARVO ORGANIC Garlic Powder',
  (SELECT "id" FROM "categories" WHERE "slug" = 'dehydrated-foods'),
  'Dehydrated garlic powder from HARVO ORGANIC.',
  'Dehydrated garlic powder from HARVO ORGANIC.',
  '/images/products/garlic-powder.png',
  'HARVO ORGANIC Garlic Powder pouch',
  true
),
(
  'tomato-flakes',
  'HARVO ORGANIC Tomato Flakes',
  (SELECT "id" FROM "categories" WHERE "slug" = 'dehydrated-foods'),
  'Dehydrated tomato flakes from HARVO ORGANIC.',
  'Dehydrated tomato flakes from HARVO ORGANIC.',
  '/images/products/tomato-flakes.png',
  'HARVO ORGANIC Tomato Flakes pouch',
  false
);

--> statement-breakpoint
-- Ingredients (one ingredient string per product in the source file)
-- slug = kebab-case of the ingredient name; short_description = the ingredient
-- name exactly, as instructed (no new claims added).
INSERT INTO "ingredients" ("slug", "name", "short_description", "featured")
VALUES
('dehydrated-banana-slices', 'Dehydrated banana slices', 'Dehydrated banana slices', false),
('dehydrated-onion-flakes', 'Dehydrated onion flakes', 'Dehydrated onion flakes', false),
('dehydrated-ginger-powder', 'Dehydrated ginger powder', 'Dehydrated ginger powder', false),
('dehydrated-garlic-powder', 'Dehydrated garlic powder', 'Dehydrated garlic powder', false),
('dehydrated-tomato-flakes', 'Dehydrated tomato flakes', 'Dehydrated tomato flakes', false);

--> statement-breakpoint
-- Link products to their ingredient (product_ingredients junction table)
INSERT INTO "product_ingredients" ("product_id", "ingredient_id")
VALUES
(
  (SELECT "id" FROM "products" WHERE "slug" = 'banana-chips'),
  (SELECT "id" FROM "ingredients" WHERE "slug" = 'dehydrated-banana-slices')
),
(
  (SELECT "id" FROM "products" WHERE "slug" = 'onion-flakes'),
  (SELECT "id" FROM "ingredients" WHERE "slug" = 'dehydrated-onion-flakes')
),
(
  (SELECT "id" FROM "products" WHERE "slug" = 'ginger-powder'),
  (SELECT "id" FROM "ingredients" WHERE "slug" = 'dehydrated-ginger-powder')
),
(
  (SELECT "id" FROM "products" WHERE "slug" = 'garlic-powder'),
  (SELECT "id" FROM "ingredients" WHERE "slug" = 'dehydrated-garlic-powder')
),
(
  (SELECT "id" FROM "products" WHERE "slug" = 'tomato-flakes'),
  (SELECT "id" FROM "ingredients" WHERE "slug" = 'dehydrated-tomato-flakes')
);
