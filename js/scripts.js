// Example script for toggling a mobile menu
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
}

document.querySelector('.menu-toggle').addEventListener('click', toggleMenu);