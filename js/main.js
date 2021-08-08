const nav = document.querySelector('nav');
const toggle = document.querySelectorAll('nav .toggle');

toggle.forEach(element => {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  })
});

const links = document.querySelectorAll('nav ul li a');

links.forEach(element => {
  element.addEventListener('click', () => {
    nav.classList.remove('show');
  })  
});