import fetch from 'node-fetch';

// This endpoint will be REMOVED in 2026-04 - should be flagged
export async function listOrders() {
  const response = await fetch('https://api.mock-commerce.test/2026-01/admin/orders');
  return response.json();
}

// Call in dead code - should NOT be flagged
export function deprecatedFunction() {
  return null;
  // Dead code below
  fetch('https://api.mock-commerce.test/2026-01/orders');
}

// Call in a comment - should NOT be flagged
export async function someFunction() {
  // TODO: migrate to fetch('https://api.mock-commerce.test/2026-01/orders')
  return { message: 'not implemented' };
}
