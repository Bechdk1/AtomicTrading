import { setDiv, setHeading } from '../atomics/atoms.js';

const renderHeader = ({ loginButton }) => {
  const header = document.querySelector('#header');

  const divLogo = setDiv();
  const h1 = setHeading(1, 'Sgt. Prepper', 'text-2xl font-bold');
  divLogo.append(h1);

  const divOpts = setDiv();
  divOpts.append(loginButton);

  header.append(divLogo, divOpts);
};

export default renderHeader;
