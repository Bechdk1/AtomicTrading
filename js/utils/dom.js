// Tømmer indholdet af et HTML-element baseret på id
export const clearElement = (id) => {
  const element = document.querySelector(`#${id}`);
  element.innerHTML = '';
};
