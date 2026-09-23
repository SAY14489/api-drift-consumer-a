import fetch from 'node-fetch';

// Customer-related endpoints (non-existent in 2026-01, just for eval coverage)

const BASE = 'https://api.mock-commerce.test/2026-01';

// Get customer - CONFIRMED (but endpoint doesn't exist in 2026-01)
export async function getCustomer(id: string) {
  return fetch(`${BASE}/customers/${id}`);
}

// List customers - CONFIRMED
export async function listCustomers(limit = 20) {
  const response = await fetch(`${BASE}/customers?limit=${limit}`);
  return response.json();
}

// Customer by email - CONFIRMED
export async function findCustomerByEmail(email: string) {
  const url = `${BASE}/customers?email=${encodeURIComponent(email)}`;
  return fetch(url);
}

// Update customer - CONFIRMED
export async function updateCustomer(id: string, data: any) {
  return fetch(`${BASE}/customers/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
}
