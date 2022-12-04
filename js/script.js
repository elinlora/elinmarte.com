const header = document.getElementById('header');
const burger = document.querySelector('.header__hamburger');
const nav = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

window.onload = () => {
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      header.classList.add('is-scrolling');
    } else {
      header.classList.remove('is-scrolling');
    }
  });

  burger.addEventListener('click', () => {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
  });

  links.forEach(n => n.addEventListener('click', () => {
    burger.classList.remove('is-active');
    nav.classList.remove('is-active');
  }));
}