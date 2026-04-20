export const setFrag = () => document.createDocumentFragment();

export const setParagraph = (text = "", className = "", isHTML = false) => {
  const elm = document.createElement("p");
  elm.className = className;
  if (isHTML) {
    elm.innerHTML = text;
  } else {
    elm.textContent = text;
  }
  return elm;
};

export const setHeading = (level = 1, text = "", className = "") => {
  const safeLevel = Math.min(Math.max(level, 1), 6);
  const elm = document.createElement(`h${safeLevel}`);
  elm.className = className;
  elm.textContent = text;
  return elm;
};

export const setDiv = (className = "") => {
  const elm = document.createElement("div");
  elm.className = className;
  return elm;
};

export const setSpan = (text = "", className = "") => {
  const elm = document.createElement("span");
  elm.className = className;
  elm.textContent = text;
  return elm;
};

export const setImage = (src = "", title = "", className = "") => {
  const elm = document.createElement("img");
  elm.className = className;
  elm.src = src;
  elm.title = title;
  elm.alt = title;
  return elm;
};

export const setLink = (href = "", text = "", className = "") => {
  const elm = document.createElement("a");
  elm.className = className;
  elm.href = href;
  elm.textContent = text;
  return elm;
};

export const setUl = (className = "") => {
  const elm = document.createElement("ul");
  elm.className = className;
  return elm;
};

export const setLi = (text = "", className = "") => {
  const elm = document.createElement("li");
  elm.className = className;
  elm.textContent = text;
  return elm;
};

export const setSection = (className = "") => {
  const elm = document.createElement("section");
  elm.className = className;
  return elm;
};

export const setArticle = (className = "") => {
  const elm = document.createElement("article");
  elm.className = className;
  return elm;
};

export const setLabel = (text = "", forId = "", className = "") => {
  const elm = document.createElement("label");
  elm.className = className;
  elm.textContent = text;
  elm.htmlFor = forId;
  return elm;
};

// name sættes som både id og name så label + form submit virker korrekt
export const setInput = (
  type = "",
  placeholder = "",
  name = "",
  className = "",
) => {
  const elm = document.createElement("input");
  elm.type = type;
  elm.placeholder = placeholder;
  elm.id = name;
  elm.name = name;
  elm.className =
    className || "border border-gray-300 rounded px-3 py-2 w-full";
  return elm;
};

export const setButton = (text = "", type = "button", className = "") => {
  const elm = document.createElement("button");
  elm.type = type;
  elm.className =
    className || "bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-600";
  elm.textContent = text;
  return elm;
};

export const setForm = (method = "GET", action = "") => {
  const elm = document.createElement("form");
  elm.method = method;
  elm.action = action;
  return elm;
};

export const setNav = (className = "") => {
  const elm = document.createElement("nav");
  elm.className = className;
  return elm;
};

export const setHeader = (className = "") => {
  const elm = document.createElement("header");
  elm.className = className;
  return elm;
};

export const setFooter = (className = "") => {
  const elm = document.createElement("footer");
  elm.className = className;
  return elm;
};
