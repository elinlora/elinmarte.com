const header = document.getElementById('header');

window.onload = () => {
  window.addEventListener('scroll', (e) => {
    if (window.pageYOffset > 100) {
      header.classList.add('is-scrolling');
    } else {
      header.classList.remove('is-scrolling');
    }
  });
}