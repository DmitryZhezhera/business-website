
$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 500,
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false
    });
    $('.slider_lw').slick({
        dots: false,
        infinite: true,
        speed: 300,
        autoplay: false,
        autoplaySpeed: 500,
        slidesToShow:4,
        adaptiveHeight: true,
        arrows: true
    });
});
