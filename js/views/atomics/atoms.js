import { createElement } from "react";

export const setFrag = () => document.createDocumentFragment();

export const setParagraph = (text = "", className = "") => {
  const elm = document.createElement("p");
  elm.className = className;
  elm.textContent = text;
};

export const setHeading = (level = 1, text = "", className = "") => {
  const safeLevel = Math.min(Math.max(level, 1), 6);

  const elm = document.createElement(`h${safeLevel}`);
  elm.className = className;
  elm.textContent = text;
};

export const setDiv = (className = "") => {
  const elm = createElement("div");
  elm.className = className;
};

export const setSpan = (text = "", className = "") => {
  const elm = document.createElement("span");
  elm.className = className;
  elm.textContent = text;
};

export const setImage = (src = "", title = "", className = "") => {
  const elm = document.createElement("img");
  elm.className = className;
  elm.src = src;
  elm.title = title;
  elm.alt = title;
};

export const setLink = (href = "", text = "", className = "") => {
  const elm = document.createElement("a");
  elm.className = className;
  elm.href = href;
  elm.textContent = text;
};

export const setUl = (className = "") => {
  const elm = document.createElement("ul");
  elm.className = className;
};

export const setLi = (text = "", className = "") => {
  const elm = document.createElement("li");
  elm.className = className;
  elm.textContent = text;
};

export const setSection = (className = "") => {
  const elm = document.createElement("section");
  elm.className = className;
};

export const setArticle = (className = "") => {
  const elm = document.createElement("article");
  elm.className = className;
};

export const setLabel = (text = "", forId = "", className = "") => {
  const elm = document.createElement("label");
  elm.className = className;
  elm.textContent = text;
  elm.htmlFor = forId;
};

export const setInput = (
  type = "",
  placeholder = "",
  id = "",
  className = "",
) => {
  const elm = document.createElement("input");
  elm.type = type;
  elm.placeholder = placeholder;
  elm.id = id;
  elm.className = className;
};

export const setButton = (text = "", className = "") => {
  const elm = document.createElement("button");
  elm.className = className;
  elm.textContent = text;
};

export const setNav = (className = "") => {
  const elm = document.createElement("nav");
  elm.className = className;
};

export const setHeader = (className = "") => {
  const elm = document.createElement("header");
  elm.className = className;
};

export const setFooter = (className = "") => {
  const elm = document.createElement("footer");
  elm.className = className;
};

