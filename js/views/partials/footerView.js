import { setParagraph } from '../atomics/atoms.js';

const renderFooter = () => {
  const footer = document.querySelector('#footer');
  const p = setParagraph('TechCollege');
  footer.append(p);
};

export default renderFooter;
