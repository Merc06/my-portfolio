$(document).ready(function () {
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
});