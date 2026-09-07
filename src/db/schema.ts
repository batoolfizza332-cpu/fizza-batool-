// Initial Drizzle PostgreSQL schema for HARVO ORGANIC.
//
// SCHEMA DESIGN ONLY (BACKEND STEP 3) — mirrors the current frontend data
// models in src/types and src/data. No live database connection, no
// migrations, and no commercial fields (price, currency, inventory, orders,
// customers, carts, discounts, payments) or auth/user tables are included —
// those are out of scope for this step.

import {
  pgTable,
  uuid,
  text,
  boolean,
  timestamp,
  jsonb,
  uniqueIndex,
  index,
  primaryKey,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const categories = pgTable(
  'categories',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    shortDescription: text('short_description').notNull(),
    description: text('description'),
    imageSrc: text('image_src'),
    imageAlt: text('image_alt'),
    featured: boolean('featured').notNull().default(false),
    seoTitle: text('seo_title'),
    seoDescription: text('seo_description'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex('categories_slug_idx').on(table.slug),
    index('categories_featured_idx').on(table.featured),
  ],
);

export const ingredients = pgTable(
  'ingredients',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    shortDescription: text('short_description').notNull(),
    description: text('description'),
    imageSrc: text('image_src'),
    imageAlt: text('image_alt'),
    featured: boolean('featured').notNull().default(false),
    seoTitle: text('seo_title'),
    seoDescription: text('seo_description'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex('ingredients_slug_idx').on(table.slug),
    index('ingredients_featured_idx').on(table.featured),
  ],
);

export const products = pgTable(
  'products',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    slug: text('slug').notNull(),
    name: text('name').notNull(),
    categoryId: uuid('category_id').notNull().references(() => categories.id, { onDelete: 'restrict' }),
    shortDescription: text('short_description').notNull(),
    description: text('description').notNull(),
    featuredImageSrc: text('featured_image_src').notNull(),
    featuredImageAlt: text('featured_image_alt').notNull(),
    gallery: jsonb('gallery').$type<{ src: string; alt: string }[]>(),
    size: text('size'),
    benefits: text('benefits').array(),
    ingredientsText: text('ingredients_text').array(),
    usage: text('usage'),
    featured: boolean('featured').notNull().default(false),
    badge: text('badge'),
    sku: text('sku'),
    seoTitle: text('seo_title'),
    seoDescription: text('seo_description'),
    keywords: text('keywords').array(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex('products_slug_idx').on(table.slug),
    uniqueIndex('products_sku_idx').on(table.sku),
    index('products_category_id_idx').on(table.categoryId),
    index('products_featured_idx').on(table.featured),
  ],
);

export const articles = pgTable(
  'articles',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    slug: text('slug').notNull(),
    title: text('title').notNull(),
    excerpt: text('excerpt').notNull(),
    content: text('content').notNull(),
    category: text('category'),
    featuredImageSrc: text('featured_image_src'),
    featuredImageAlt: text('featured_image_alt'),
    publishedAt: timestamp('published_at', { withTimezone: true }).notNull(),
    featured: boolean('featured').notNull().default(false),
    seoTitle: text('seo_title'),
    seoDescription: text('seo_description'),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    uniqueIndex('articles_slug_idx').on(table.slug),
    index('articles_featured_idx').on(table.featured),
    index('articles_published_at_idx').on(table.publishedAt),
  ],
);

export const productIngredients = pgTable(
  'product_ingredients',
  {
    productId: uuid('product_id').notNull().references(() => products.id, { onDelete: 'cascade' }),
    ingredientId: uuid('ingredient_id').notNull().references(() => ingredients.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    primaryKey({ columns: [table.productId, table.ingredientId] }),
    index('product_ingredients_ingredient_id_idx').on(table.ingredientId),
  ],
);

export const productRelatedProducts = pgTable(
  'product_related_products',
  {
    productId: uuid('product_id').notNull().references(() => products.id, { onDelete: 'cascade' }),
    relatedProductId: uuid('related_product_id').notNull().references(() => products.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    primaryKey({ columns: [table.productId, table.relatedProductId] }),
    index('product_related_products_related_product_id_idx').on(table.relatedProductId),
  ],
);

export const categoriesRelations = relations(categories, ({ many }) => ({ products: many(products) }));
export const ingredientsRelations = relations(ingredients, ({ many }) => ({ productIngredients: many(productIngredients) }));
export const productsRelations = relations(products, ({ one, many }) => ({
  category: one(categories, { fields: [products.categoryId], references: [categories.id] }),
  productIngredients: many(productIngredients),
  relatedTo: many(productRelatedProducts, { relationName: 'productToRelated' }),
}));
export const articlesRelations = relations(articles, () => ({}));
export const productIngredientsRelations = relations(productIngredients, ({ one }) => ({
  product: one(products, { fields: [productIngredients.productId], references: [products.id] }),
  ingredient: one(ingredients, { fields: [productIngredients.ingredientId], references: [ingredients.id] }),
}));
export const productRelatedProductsRelations = relations(productRelatedProducts, ({ one }) => ({
  product: one(products, { fields: [productRelatedProducts.productId], references: [products.id], relationName: 'productToRelated' }),
  relatedProduct: one(products, { fields: [productRelatedProducts.relatedProductId], references: [products.id] }),
}));
