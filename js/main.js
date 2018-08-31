// Scroll effects on NAVBAR

$(document).scroll(function () {
    // var $nav = $(".navbar-fixed-top");
    // $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    if ($(this).scrollTop() > 600) {
        $('.navbar-fixed-top').removeClass('scrolledUp');
        $('.navbar-fixed-top').addClass('scrolled');
        $('.menu').addClass('scrolled');
    } else {
        $('.navbar-fixed-top').removeClass('scrolled');
        $('.menu').removeClass('scrolled');
        $('.navbar-fixed-top').addClass('scrolledUp');
    }
});

// MENU BUTTON

// Select Dom Items
const menuBtn = document.querySelector('.menu');
const navigation = document.querySelector('.navigation');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const socialNav = document.querySelector('.social-nav');
const socialItems = document.querySelectorAll('.social-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        navigation.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        socialNav.classList.add('show');
        socialItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        navigation.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        socialNav.classList.remove('show');
        socialItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}


// SCROLL REVEAL

var photo = {
    distance: '50%',
    origin: 'left',
    delay: 300
};

var info = {
    distance: '50%',
    origin: 'Right',
    delay: 300
};

var slideDown = {
    distance: '50%',
    origin: 'top'
};

var slideUp = {
    distance: '50%',
    origin: 'bottom',
    viewFactor: 2,
    duration: 1000
};

var slideRight = {
    distance: '50%',
    origin: 'left',
    duration: 2000
};

var slideLeft = {
    distance: '50%',
    origin: 'Right',
    duration: 2000
};

ScrollReveal().reveal('.photo', photo);
ScrollReveal().reveal('.info', info);
ScrollReveal().reveal('.reveal-down', slideDown);
ScrollReveal().reveal('.reveal-up', slideUp);
ScrollReveal().reveal('.reveal-left', slideLeft);
ScrollReveal().reveal('.reveal-right', slideRight);