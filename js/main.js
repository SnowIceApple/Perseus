$(document).ready(function(){

    $('#header').on('mouseenter focusin', function(){
        $(this).addClass('active');
    });

    $('#header').on('mouseleave focusout', function(){
        $(this).removeClass('active');
    });

    $('.lang_select button').on('click', function(){
        $('.lang_select').toggleClass('active');
    });

    var pagiArray = ['Efficiency', 'Security', 'Performance'];

    const swiper1 = new Swiper('.main_swiper', {

        direction: 'horizontal',
        effect: 'fade',
        loop: true,
        speed: 1200,

        pagination: {
            el: '.main-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<a href="#" class="' + className + '">' + (pagiArray[index]) + '</a>';
            },
        },

    });
});