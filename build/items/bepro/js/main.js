$(function () {
    $('.slick__slider').slick({
        prevArrow: "<i class=ion-md-arrow-round-back></i>",
        nextArrow: "<i class=ion-md-arrow-round-forward></i>"
    });

    $('.slick__slider-events').slick({
        prevArrow: '.arrow-left',
        nextArrow: '.arrow-right'
    });

    $('.news__slider-items').slick({
        prevArrow: ".news__arrow-left",
        nextArrow: ".news__arrow-right"
    });

    $('.brends__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: ".brends__slider-left",
        nextArrow: ".brends__slider-right"
    });

    $('.products__product').slice(0, 10).css('display', 'flex');
    $('#more').on('click', function (e) {
        e.preventDefault();
        $('.products__product:hidden').slice(0, 10).slideDown().css('display', 'flex');
        $('#more').css('display', 'none');
    });
});