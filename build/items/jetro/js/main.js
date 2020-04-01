$(function () {

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        asNavFor: '.slider__nav',
    });

    $('.slider__nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        focusOnSelect: true,
        variableWidth: true,
        arrows: false
    });


    $('.header__menu-btn').on('click', function () {
        $('.header__menu ul').slideToggle();
    });

});

