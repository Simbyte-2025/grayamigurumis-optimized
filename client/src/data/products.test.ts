import { describe, it, expect } from "vitest";
import { products, type Product } from "./products";

describe("products data integrity", () => {
  it("exports a non-empty array", () => {
    expect(products).toBeInstanceOf(Array);
    expect(products.length).toBeGreaterThan(0);
  });

  it("all products have required fields", () => {
    for (const product of products) {
      expect(product.id, `product.id missing in "${product.name}"`).toBeTruthy();
      expect(product.slug, `product.slug missing in "${product.name}"`).toBeTruthy();
      expect(product.name, `product.name missing`).toBeTruthy();
      expect(product.priceCLP, `product.priceCLP missing in "${product.name}"`).toBeGreaterThan(0);
      expect(product.heightCm, `product.heightCm missing in "${product.name}"`).toBeGreaterThan(0);
      expect(product.category, `product.category missing in "${product.name}"`).toBeTruthy();
      expect(product.images, `product.images missing in "${product.name}"`).toBeInstanceOf(Array);
      expect(product.images.length, `"${product.name}" has no images`).toBeGreaterThan(0);
    }
  });

  it("all product IDs are unique", () => {
    const ids = products.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("all image paths follow /assets/products/ convention", () => {
    for (const product of products) {
      for (const image of product.images) {
        expect(
          image.src,
          `"${product.name}" image path should start with /assets/products/`
        ).toMatch(/^\/assets\/products\/.+\.webp$/);
      }
    }
  });

  it("all prices are positive CLP numbers", () => {
    for (const product of products) {
      expect(
        product.priceCLP,
        `"${product.name}" priceCLP ${product.priceCLP} should be > 0`
      ).toBeGreaterThan(0);
    }
  });

  it("all Flow.cl links are not generic placeholder checkout URLs", () => {
    const PLACEHOLDER = "https://www.flow.cl/checkout";
    const placeholders = products.filter((p) => p.flowLink === PLACEHOLDER);
    expect(
      placeholders.map((p) => p.name),
      `These products still use the placeholder Flow.cl link — update with real product URLs`
    ).toHaveLength(0);
  });

  it("all categories belong to the valid set", () => {
    const VALID_CATEGORIES = new Set(["Cine & TV", "Animatitos", "Anime & Videojuegos"]);
    for (const product of products) {
      expect(
        VALID_CATEGORIES.has(product.category),
        `"${product.name}" has invalid category "${product.category}"`
      ).toBe(true);
    }
  });
});
