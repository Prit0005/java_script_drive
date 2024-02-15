
const Hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

Hamburger.addEventListener('click', () => {
    Hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav').forEach(n => n.addEventListener('click', () => {
    Hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) { // Change 50 to the number of pixels scroll you want
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});