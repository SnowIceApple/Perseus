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

    $('.header_contact_btn a').on('click', function(e){
        e.preventDefault();
        $('.contact_area').toggleClass('active');
    })

    $('.modal_open_btn').on('click', function(e){
        $('.modal_background').toggleClass('active');
    }); 

    $('.modal_background').on('click', function(e){
        if($(this).has(e.target).length === 0){
            $(this).removeClass('active');
            $('.contact_area').removeClass('active');
        }
    });


$('.contact_input_box input').each(function(){

    $(this).on('propertychange change keyup paste input', function(){
        var LastName = $('#LastName').val().length;
        var FirstName = $('#FirstName').val().length;
        var Company = $('#Company').val().length;
        var Email = $('#Email').val().length;

        if(LastName > 0 && FirstName > 0 && Company > 0 && Email > 0){
            $('.contact_input_box').addClass('confirmed');
        }
        else{
            $('.contact_input_box').removeClass('confirmed');
        }
    });
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