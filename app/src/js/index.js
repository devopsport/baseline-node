import '../css/styles.css';

export function getRandomColor() {
  const array = new Uint8Array(3);
  window.crypto.getRandomValues(array);
  return `#${array[0].toString(16).padStart(2, '0')}${array[1].toString(16).padStart(2, '0')}${array[2].toString(16).padStart(2, '0')}`;
}

export function applyRandomTextColor() {
  const randomColor = getRandomColor();
  const textElements = document.querySelectorAll('p, th, td, button');
  textElements.forEach(element => {
    element.style.color = randomColor;
  });
}

window.onload = function() {
  applyRandomTextColor();
};
