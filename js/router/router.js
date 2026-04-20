import { homeController } from '../controllers/homeController.js';
import { loginController } from '../controllers/loginController.js';
import { renderProductDetails, renderProductList } from '../controllers/productsController.js';
import { clearElement } from '../utils/dom.js';

export const initRouter = () => {
  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', handleRoute);
};

const handleRoute = () => {
  clearElement('root');

  const hash = window.location.hash || '#/';
  const cleanHash = hash.replace(/^#\/?/, '');
  const segments = cleanHash.split('/').filter(Boolean);

  // Forside
  if (segments.length === 0) {
    homeController();
    return;
  }

  // Produktliste: #/products/:category
  // Produktdetalje: #/products/:category/:slug
  if (segments[0] === 'products') {
    if (segments.length === 2) {
      renderProductList(segments[1]);
    } else {
      renderProductDetails(segments[2]);
    }
    return;
  }

  // Login-side
  if (segments[0] === 'login') {
    loginController();
    return;
  }

  document.querySelector('#root').innerHTML = '<h1 class="text-2xl font-bold">Side ikke fundet</h1>';
};
