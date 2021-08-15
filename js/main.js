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


function scrollNavbar () {
  const header = document.querySelector('#navbar');
  const navHeight = header.offsetHeight;

  if(window.scrollY >= navHeight){
    header.classList.add('scroll');
  }else{
    header.classList.remove('scroll');
  }
}

function backToTop () {
  const backToTopShow = document.querySelector('.icon-arrow-up');

  if(window.scrollY > 600){
    backToTopShow.classList.add('show');
  } else {
    backToTopShow.classList.remove('show');
  }
}

window.addEventListener('scroll', () => {
  scrollNavbar();
  backToTop();
})


// swiper //

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
});

// scrollReveal

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
});

scrollReveal.reveal(
  `#home .image, #home .text,
   #about .image, #about .text,
   #services .text, #services .single-card,
   #testimonials, #contact,
   footer a
  `
  , {interval: 100});