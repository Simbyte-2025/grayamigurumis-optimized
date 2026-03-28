import { describe, it, expect } from "vitest";
import { products, type Product } from "./products";

describe("products data integrity", () => {
  it("exports a non-empty array", () => {
    expect(products).toBeInstanceOf(Array);
    expect(products.length).toBeGreaterThan(0);
  });

  it("all products have required fields", () => {
    for (const product of products) {
      expect(product.id, `product.id missing in "${product.name}"`).toBeDefined();
      expect(product.name, `product.name missing`).toBeTruthy();
      expect(product.image, `product.image missing in "${product.name}"`).toBeTruthy();
      expect(product.price, `product.price missing in "${product.name}"`).toBeTruthy();
      expect(product.flowLink, `product.flowLink missing in "${product.name}"`).toBeTruthy();
      expect(product.category, `product.category missing in "${product.name}"`).toBeTruthy();
    }
  });

  it("all product IDs are unique", () => {
    const ids = products.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("all image paths follow /assets/products/ convention", () => {
    for (const product of products) {
      expect(
        product.image,
        `"${product.name}" image path should start with /assets/products/`
      ).toMatch(/^\/assets\/products\/.+\.webp$/);
    }
  });

  it("all price strings are in Chilean peso format ($XX.XXX)", () => {
    for (const product of products) {
      expect(
        product.price,
        `"${product.name}" price "${product.price}" is not in format $XX.XXX`
      ).toMatch(/^\$\d{1,3}\.\d{3}$/);
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
