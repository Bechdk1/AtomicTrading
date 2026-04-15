// Text elements (h1-h6, p, span)
export const txtElm = (
  tagName, // "h1", "p", "span"
  textContent = "",
) => {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  return element;
};

// Source elements (img, video, iframe, osv)
export const srcElm = (
  tagName,
  src = "",
  alt = "",
  title = "",
  attributes = {}, // autoplay, controls, loop, mv.
) => {
  const element = document.createElement(tagName);
  element.src = src;
  if (alt) element.alt = alt;
  if (title) element.title = title;

  // Attributes hvis nødvendigt
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
};

// Navigation/Link element (a)
export const navElm = (
  tagName = "a", // kun a her fordi det er eneste link element
  href = "",
  textContent = "",
) => {
  const element = document.createElement(tagName);
  element.href = href;
  element.textContent = textContent;
  return element;
};

// Container elements (header, figure, section, div, footer, main, etc)
export const containerElm = (tagName = "", id = "", className = "") => {
  const element = document.createElement(tagName);
  if (id) element.id = id;
  if (className) element.className = className;
  return element;
};

// List elements (li, ul, etc.)
export const listElm = (
  tagName = "", // ul, li
  textContent = "",
) => {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  return element;
};

// ==== FORM ELEMENTS ====

// Kun text-input box
export const inputElm = (
  type = "text",
  placeholder = "",
  id = "",
  attributes = {},
) => {
  const input = document.createElement("input");
  input.type = type;
  input.placeholder = placeholder;
  input.id = id;
  input.name = id;
  input.className = "inputBox";

  // Funktion til at tilføje attributes som eksempelvis password requirement
  Object.keys(attributes).forEach((key) => {
    input.setAttribute(key, attributes[key]);
  });
  return input;
};

// Label element
export const labelElm = (text, htmlFor = "") => {
  const label = document.createElement("label");
  label.textContent = text;
  label.htmlFor = htmlFor;
  label.className = "labelBox";
  return label;
};

// Ren Submit Btn
export const submitBtn = (text, type = "submit") => {
  const button = document.createElement("button");
  button.textContent = text;
  button.type = type;
  return button;
};

// Alternative buttons som pålægges function
export const altBtn = (
  text,
  type = "button",
  id = "",
  className = "",
  eventType,
  btnFunction,
) => {
  const button = document.createElement("button");
  button.textContent = text;
  button.type = type;
  if (id) button.id = id;
  if (className) button.className = className;
  if (eventType && btnFunction) {
    button.addEventListener(eventType, btnFunction);
  }
  return button;
};
