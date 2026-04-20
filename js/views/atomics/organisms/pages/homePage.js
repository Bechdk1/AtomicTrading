import { setMainWrapper } from '../../molecules.js';

const renderHomePage = () => {
  const root = document.querySelector('#root');
  const view = setMainWrapper('Velkommen til forsiden', 'Her finder du prep produkter');
  root.append(view);
};

export default renderHomePage;
