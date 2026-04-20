import { request } from '../utils/http.js';

const url = 'http://localhost:4000/api/products';

// Henter liste af produkter ud fra kategori-slug
export const getProductList = async (category) => {
  try {
    const data = await request(`${url}/${category}`);
    return data;
  } catch (error) {
    throw new Error('Request error on product list', { cause: error });
  }
};

// Henter et enkelt produkt ud fra slug
export const getProduct = async (slug) => {
  try {
    const data = await request(`${url}/bySlug/${slug}`);
    return data;
  } catch (error) {
    throw new Error('Request error on product details', { cause: error });
  }
};
