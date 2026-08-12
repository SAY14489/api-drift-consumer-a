// GraphQL queries using the mock API

// Uses deprecated field Product.name (deprecated in 2026-04, removed in 2026-07)
// Should be flagged as deprecating for 01→04, breaking for 04→07
export const PRODUCT_QUERY_OLD = `
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      name
      price
    }
  }
`;

// Deprecated field in a fragment - harder to detect
// Should still be CONFIRMED
export const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    name
    price
    inventoryCount
  }
`;

export const QUERY_WITH_FRAGMENT = `
  query GetProducts {
    products(first: 10) {
      edges {
        node {
          ...ProductFields
        }
      }
    }
  }
  ${PRODUCT_FRAGMENT}
`;

// Uses correct field - should NOT be flagged
export const PRODUCT_QUERY_NEW = `
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      displayName
      price {
        amount
        currencyCode
      }
    }
  }
`;

// Uses Order.customerEmail which gets removed in 2026-07
export const ORDER_QUERY = `
  query GetOrder($id: ID!) {
    order(id: $id) {
      id
      customerEmail
      total
    }
  }
`;
