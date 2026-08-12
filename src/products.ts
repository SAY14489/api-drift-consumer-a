import fetch from 'node-fetch';

// Direct SDK-style call - should be CONFIRMED
export async function getProduct(id: string) {
  const response = await fetch(`https://api.mock-commerce.test/2026-01/products/${id}`);
  return response.json();
}

// Hardcoded URL with version - should be CONFIRMED
export async function listProducts() {
  const url = 'https://api.mock-commerce.test/2026-01/products?limit=10';
  const response = await fetch(url);
  return response.json();
}

// URL built by string interpolation - should be AMBIGUOUS
export async function getProductDynamic(productId: string) {
  const baseUrl = 'https://api.mock-commerce.test';
  const version = '2026-01';
  const endpoint = '/products/' + productId; // Concatenation, not template
  const fullUrl = baseUrl + '/' + version + endpoint;
  const response = await fetch(fullUrl);
  return response.json();
}

// Call behind a wrapper - should be CONFIRMED if indexer follows calls
function apiCall(path: string) {
  return fetch(`https://api.mock-commerce.test/2026-01${path}`);
}

export async function fetchProductWrapped(id: string) {
  const response = await apiCall(`/products/${id}`);
  return response.json();
}

// Aliased import and template literal - should be CONFIRMED
import { default as nodeFetch } from 'node-fetch';

export async function getProductAliased(id: string) {
  const version = '2026-01';
  return nodeFetch(`https://api.mock-commerce.test/${version}/products/${id}`);
}
