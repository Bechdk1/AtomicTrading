import { setHeading, setDiv } from "../../atoms.js";

export const productsView = (products) => {
  const body = document.querySelector("#body");
  const div = setDiv();
  const h1 = setHeading(1, "Produkter");
  div.append(h1);
  body.append(body);

  products.map((product) => {
    const { name, imageURL, teaser, price, stock, slug } = product;

    const card = cardDiv();
    card.innerText = name;

    const link = Link(`/`);

    body.append(card);
  });
};
