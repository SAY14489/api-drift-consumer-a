import { describe, it } from 'vitest';
import fetch from 'node-fetch';

// Call site in a test file - should be CONFIRMED
describe('Products API', () => {
  it('should fetch a product', async () => {
    const response = await fetch('https://api.mock-commerce.test/2026-01/products/123');
    const data = await response.json();
    console.log(data);
  });
});

// Call to an endpoint that will remain unchanged - should NOT be flagged
describe('Products API - unchanged', () => {
  it('should fetch product by ID', async () => {
    const response = await fetch('https://api.mock-commerce.test/2026-01/products/456');
    const data = await response.json();
    console.log(data);
  });
});
