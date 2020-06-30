//index.js
$(function () {

    var swiperBanner = new Swiper('.banner__swiper', {
        direction: 'vertical',
        effect: 'fade',
        speed: 1000,
        autoplay: {
            delay: 5000,
        },
        pagination: {
            el: '.banner__pag',
            clickable: true,
        },
    });

    var swiperRevs = new Swiper('.revs__swiper', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.revs__next',
            prevEl: '.revs__prev',
        },
        pagination: {
            el: '.revs__pag',
            clickable: true,
        },
    });

    $('.feed__accept').on('click', function (e) {
        let input = $(this).find('.accept__input');
        if (input.prop('checked')){
            $('.feed__submit').removeClass('disabled');
        } else {
            $('.feed__submit').addClass('disabled');
        }

    });

    $('.mmenu-open').on('click', function (e) {
        e.preventDefault();
        $('.mmenu').addClass('active');
    });
    $('.mmenu__close').on('click', function (e) {
        e.preventDefault();
        $('.mmenu').removeClass('active');
    });




});