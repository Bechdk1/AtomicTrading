import { setUl, setLi, setLink } from '../atomics/atoms.js';

const renderNav = (data) => {
  const nav = document.querySelector('#nav');
  const ul = setUl('flex');

  data.map((item) => {
    const li = setLi('', 'mr-6');
    const a = setLink(`/index.html#/products/${item.slug}`);
    a.innerText = item.title;
    li.append(a);
    ul.append(li);
  });

  nav.append(ul);
};

export default renderNav;
