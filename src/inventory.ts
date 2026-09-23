import fetch from 'node-fetch';

// Additional product-related calls for eval metrics

const API_BASE = 'https://api.mock-commerce.test/2026-01';

// Product search - CONFIRMED
export async function searchProducts(query: string) {
  const response = await fetch(`${API_BASE}/products?search=${query}`);
  return response.json();
}

// Get product by SKU - CONFIRMED
export async function getProductBySku(sku: string) {
  return fetch(`${API_BASE}/products?sku=${sku}`);
}

// Update product inventory - CONFIRMED
export async function updateInventory(productId: string, count: number) {
  const url = `${API_BASE}/products/${productId}/inventory`;
  return fetch(url, {
    method: 'POST',
    body: JSON.stringify({ count }),
    headers: { 'Content-Type': 'application/json' },
  });
}

// Bulk product fetch - CONFIRMED
export async function bulkGetProducts(ids: string[]) {
  const idsParam = ids.join(',');
  const response = await fetch(`${API_BASE}/products?ids=${idsParam}`);
  return response.json();
}

// Product variants - CONFIRMED
export async function getProductVariants(productId: string) {
  const endpoint = `/products/${productId}/variants`;
  const fullUrl = API_BASE + endpoint;
  return fetch(fullUrl);
}

// Product with query params - CONFIRMED
export async function getProductWithDetails(id: string) {
  const baseUrl = API_BASE;
  const path = `/products/${id}?include=variants,inventory`;
  return fetch(baseUrl + path);
}
