import { getProduct, getProductList } from '../models/productModel.js';
import { isLoggedIn } from '../utils/auth.js';
import { price2Dkk } from '../utils/formatters.js';
import { setAdd2Cart } from '../views/atomics/molecules.js';
import renderProductsPage from '../views/atomics/organisms/pages/productsView.js';
import renderProductPage from '../views/atomics/organisms/pages/productView.js';

// Henter og viser liste af produkter ud fra kategori
export const renderProductList = async (category) => {
  const data = await getProductList(category || 'vand-og-vandrensning');

  const formattedProducts = data.map((item) => ({
    ...item,
    price: price2Dkk(item.price),
    stockText: item.stock ? 'På lager' : 'Forventes på lager indenfor 1 - 2 uger',
    stockClass: item.stock ? 'text-green-600' : 'text-red-600',
  }));

  renderProductsPage(formattedProducts, category);
};

// Henter og viser detaljer for et enkelt produkt
export const renderProductDetails = async (slug) => {
  const data = await getProduct(slug);

  const formElement = buildProductForm(data.id, await isLoggedIn());

  const formattedData = {
    ...data,
    price: price2Dkk(data.price),
    stockText: data.stock ? 'På lager' : 'Forventes på lager indenfor 1 - 2 uger',
    stockClass: data.stock ? 'text-green-600' : 'text-red-600',
    formElement,
  };

  renderProductPage(formattedData);
};

// Bygger "Læg i kurv"-formular — kræver login
const buildProductForm = (productId, loggedIn) => {
  if (loggedIn) {
    return setAdd2Cart(productId);
  }
  console.log('Du er ikke logget ind');
};
