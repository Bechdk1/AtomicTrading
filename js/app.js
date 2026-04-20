import { headerController } from './controllers/headerController.js';
import { navController } from './controllers/navController.js';
import { footerController } from './controllers/footerController.js';
import { initRouter } from './router/router.js';

const initApp = () => {
  headerController();
  navController();
  footerController();
  initRouter();
};

initApp();
