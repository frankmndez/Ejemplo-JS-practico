
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobileButton = document.querySelector('.menu');
const menuMobile = document.querySelector('.mobile-menu');

// Email submenu for desktop
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

// Menu for mobile

menuMobileButton.addEventListener('click', toogleMenuMobile);

function toogleMenuMobile(){
    menuMobile.classList.toggle('inactive');
}
