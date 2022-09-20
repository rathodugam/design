
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.main_header').addClass('fixed');
    } else {
       $('.main_header').removeClass('fixed');
    }
});

var swiper = new Swiper(".category_main", {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".product_slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".product_slider2", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper(".product_slider3", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        480: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    },
});


var swiper = new Swiper(".review_slider", {
    slidesPerView: 2,
    autoplay: true,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
});

jQuery(function($) {
    // Add en remove class on menu item hover
    $('.big-nav > ul > li').mouseover(function(){
        $(this).addClass('show').siblings().removeClass('show');
    });

    // Get the minimum height the big-nav elemtn
    var min_height = 50;
    $('.big-nav > ul > li > ul').each(function(){
        var this_height = $(this).outerHeight();
        if (this_height > min_height) min_height = this_height;
    });
    $('.big-nav > ul, .nav .big-nav > ul > li > ul').css('min-height', min_height + 'px');

});



$(function(){
    $('.selectpicker').selectpicker();
});