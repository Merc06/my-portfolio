// Scroll effects on NAVBAR

$(document).scroll(function () {
    // var $nav = $(".navbar-fixed-top");
    // $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    if ($(this).scrollTop() > 290) {
        $('.navbar-fixed-top').removeClass('scrolledUp');
        $('.navbar-fixed-top').addClass('scrolled');
    } else {
        $('.navbar-fixed-top').removeClass('scrolled');
        $('.navbar-fixed-top').addClass('scrolledUp');
    }
});

// Menu Button

// Select Dom Items
const menuBtn = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set Menu State
        showMenu = false;
    }
}

