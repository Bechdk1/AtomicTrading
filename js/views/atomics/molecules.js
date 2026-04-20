import {
  setSection,
  setHeading,
  setParagraph,
  setButton,
  setDiv,
  setLabel,
  setInput,
} from "./atoms.js";

// Opretter wrapper til sider (title + meta-beskrivelse + section container)
export const setMainWrapper = (title, description = "") => {
  document.title = title;

  let meta = document.querySelector('meta[name="description"]');
  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "description";
    document.head.appendChild(meta);
  }
  meta.content = description;

  const section = setSection("p-4");
  const h1 = setHeading(1, title, "font-bold text-2xl mb-4");
  section.append(h1);

  if (description) {
    const teaser = setParagraph(description);
    section.append(teaser);
  }

  return section;
};

// Opretter login/logout-knap baseret på login-status
export const setLoginButton = (buttonTxt, onClick, className = "") => {
  const button = setButton(buttonTxt, "button", className);
  button.addEventListener("click", onClick);
  return button;
};

// Opretter en formgruppe bestående af label + input
export const setFormGroup = (
  label,
  type,
  name,
  placeholder,
  value = "",
  className = "",
) => {
  const div = setDiv("mb-4");
  const labelElm = setLabel(label, name);
  const input = setInput(type, placeholder, name, className);
  input.value = value;
  div.append(labelElm, input);
  return div;
};

// Opretter "Læg i kurv"-formular med antal-input og submit-knap
export const setAdd2Cart = (productId, value = 0) => {
  const elm = setDiv();
  const input = setInput(
    "number",
    "",
    "quantity",
    "border border-gray-300 rounded px-3 py-2 w-24",
  );
  input.value = value;
  const button = setButton("Læg i kurv", "submit");
  button.dataset.productId = productId;
  elm.append(input, button);
  return elm;
};
