const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
  if (!navList.classList.contains('active')) {
    navList.style.animation = 'none';
  }
});