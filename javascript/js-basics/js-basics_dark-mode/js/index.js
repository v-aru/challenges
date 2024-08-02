console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkElement = document.querySelector('[data-js="dark-mode-button"]');
const lightElement = document.querySelector('[data-js="light-mode-button"]');
const toggleElement= document.querySelector('[data-js="toggle-button"]');

darkElement.addEventListener('click', () => {
    bodyElement.classList.add('dark');
    bodyElement.classList.remove('light');
});

lightElement.addEventListener('click', () => {
    bodyElement.classList.remove('dark');
    bodyElement.classList.add('light');
});

toggleElement.addEventListener('click', () => {
    bodyElement.classList.toggle('dark');
});