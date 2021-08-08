const nav = document.querySelector('nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');
toggle.forEach(element => {
  element.addEventListener('click', () => {
    nav.classList.toggle('show');
  })
});

links.forEach(element => {
  element.addEventListener('click', () => {
    nav.classList.remove('show');
  })  
});

const header = document.querySelector('#navbar');
const navHeight = header.offsetHeight;

window.addEventListener('scroll', ( ) => {
  if(window.scrollY >= navHeight){
    header.classList.add('scroll');
  }else{
    header.classList.remove('scroll');
  }
})