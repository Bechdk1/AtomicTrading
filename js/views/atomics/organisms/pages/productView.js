import { setArticle, setDiv, setImage, setParagraph } from '../../atoms.js';
import { setMainWrapper } from '../../molecules.js';

const renderProductPage = (product) => {
  const { name, imageUrl, description, price, stockClass, stockText, formElement } = product;

  const root = document.querySelector('#root');
  const view = setMainWrapper(name);

  const article = setArticle('flex justify-between gap-4 p-4 border rounded-lg mb-4 shadow-md');

  const img = setImage(`http://localhost:4000${imageUrl}`, name, 'w-[300px] flex-shrink-0 rounded');
  article.append(img);

  const div = setDiv('min-w-0');

  const pDesc = setParagraph(description, 'mb-2', true);
  div.append(pDesc);

  const pStock = setParagraph(stockText, stockClass);
  div.append(pStock);

  const pPrice = setParagraph(`Pris: ${price}`, 'font-bold text-xl');
  div.append(pPrice);

  if (formElement) {
    const pAdd2Cart = setParagraph('', 'pt-4');
    pAdd2Cart.append(formElement);
    div.append(pAdd2Cart);
  }

  article.append(div);
  view.append(article);
  root.append(view);
};

export default renderProductPage;
