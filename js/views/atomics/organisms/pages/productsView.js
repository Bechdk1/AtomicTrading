import { setDiv, setHeading, setImage, setLink, setParagraph } from '../../atoms.js';
import { setMainWrapper } from '../../molecules.js';

const renderProductsPage = (products, category) => {
  const root = document.querySelector('#root');
  const view = setMainWrapper('Produkter');

  products.map((item) => {
    const { name, teaser, imageUrl, slug, stockClass, stockText, price } = item;

    const productCard = setDiv('p-4 border rounded-lg mb-4 shadow-md');
    const link = setLink(`/index.html#/products/${category}/${slug}`, '', 'flex items-center gap-4 min-w-0');

    // Første kolonne: Billede
    const imageCol = setDiv('shrink-0 w-[120px]');
    const img = setImage(`http://localhost:4000${imageUrl}`, name, 'w-[80px] h-auto rounded');
    img.loading = 'lazy';
    imageCol.append(img);

    // Midterkolonne: Info
    const infoCol = setDiv('flex-1 min-w-0');
    const heading = setHeading(3, name, 'font-bold truncate');
    const teaserElm = setParagraph(teaser);
    const stock = setParagraph(stockText, `text-sm ${stockClass}`);
    infoCol.append(heading, teaserElm, stock);

    // Højre kolonne: Pris
    const priceCol = setDiv('shrink-0 w-[96px] text-right');
    const priceElm = setParagraph(price, 'mb-2 font-bold');
    priceCol.append(priceElm);

    link.append(imageCol, infoCol, priceCol);
    productCard.append(link);
    view.append(productCard);
  });

  root.append(view);
};

export default renderProductsPage;
