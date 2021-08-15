const nav = document.querySelector('nav');
const toggle = document.querySelectorAll('nav .toggle');
const links = document.querySelectorAll('nav ul li a');



// menu - toggle

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

// scrollNavbar

const header = document.querySelector('#navbar');
const navHeight = header.offsetHeight;

function scrollNavbar () {

  if(window.scrollY >= navHeight){
    header.classList.add('scroll');
  }else{
    header.classList.remove('scroll');
  }
}

// backToTopShow

const backToTopShow = document.querySelector('.icon-arrow-up');

function backToTop () {
  if(window.scrollY > 600){
    backToTopShow.classList.add('show');
  } else {
    backToTopShow.classList.remove('show');
  }
}

// swiper //

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
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



// active checkpoint menu

const sections = document.querySelectorAll('main section[id]');

function activeMenuAtCurrentHeight(){
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;

  for (const section of sections){
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    const checkpointStart = checkpoint >= sectionTop;
    const checkpointEnd = checkpoint <=sectionTop + sectionHeight;

    if(checkpointStart && checkpointEnd){
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
    } else{
      document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active');
    }
  }
}






// EventListeners

  window.addEventListener('scroll', () => {
    scrollNavbar();
    backToTop();
    activeMenuAtCurrentHeight();
  })