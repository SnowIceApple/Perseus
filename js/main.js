$(document).ready(function(){

    $('#header').on('mouseenter focusin', function(){
        $(this).addClass('active');
    });

    $('#header').on('mouseleave focusout', function(){
        $(this).removeClass('active');
    });

    var lastScrollY = 0;
    var main = document.querySelector('#main').offsetTop;

    $(window).on('scroll', function(e){
        const scrollY = window.pageYOffset;
        const scrollUp = scrollY < lastScrollY;

        if(scrollY == 0){
            $('#header').removeClass('hide');
        }

        else if(scrollY >= main && scrollUp){
            $('#header').removeClass('hide');
        }

        if(scrollY < main && scrollUp){
            $('#header').removeClass('hide');
        }

        if(scrollY >= main && scrollUp == false && $('.mobileNav_area').hasClass('active') == false){
            $('#header').addClass('hide').removeClass('active');
            $('.lang_link').removeClass('active').stop().slideUp(200);
        }

        lastScrollY = scrollY;
    });

    $('.lang_select button').on('click', function(){
        $('.lang_link').toggleClass('active');
        if($('.lang_link').hasClass('active')){
            $('.lang_link').stop().slideDown(200);
        }
        else{
            $('.lang_link').stop().slideUp(200);
        }
    });

    $('.contact_modal_open a').on('click', function(e){
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

$('.contact_confirm button').on('click', function(e){
    e.preventDefault();

    var LastName = $('#LastName').val().length;
    var FirstName = $('#FirstName').val().length;
    var Company = $('#Company').val().length;
    var Email = $('#Email').val().length;

    if(LastName == 0){
        alert('Please enter your last name.');
        $('#LastName').focus();
    }
    if(LastName >= 1 && FirstName == 0){
        alert('Please enter your first name.');
        $('#FirstName').focus();
    }
    if(LastName >= 1 && FirstName >= 1 && Company == 0){
        alert('Please enter your Company.');
        $('#Company').focus();
    }
    if(LastName >= 1 && FirstName >= 1 && Company >=1 && Email == 0){
        alert('Please enter your Email address.');
        $('#Email').focus();
    }
});

    $('.mobileNav_open a').on('click', function(e){
        e.preventDefault();
        $('.mobileNav_area').toggleClass('active');
        $('body').toggleClass('mobNav_show');
    });

    $(window).on('resize', function(){
        if($(window).innerWidth() > 1280){
            $('body').removeClass('mobNav_show');
            $('.mobileNav_area').removeClass('active');
        }
    });

    $('.mobNav_floor1 > li:not(:last-child) > a').on('click', function(e){
        var f2ParentF1 = $(this).closest('li');
        e.preventDefault();
        f2ParentF1.toggleClass('active').siblings().removeClass('active');
        $(this).siblings('.mNav_flexCont').stop().slideDown(150);
        f2ParentF1.siblings().children('.mNav_flexCont').stop().slideUp(150);
        if(f2ParentF1.hasClass('active') == false){
            $(this).siblings('.mNav_flexCont').stop().slideUp(150);
        }
    });

    $('.mobileNav_contact_btn a').on('click', function(e){
        e.preventDefault();
        $('.mobileNav_area').removeClass('active');
        $('body').removeClass('mobNav_show');
    });

    function mainTxtToSplitTxt(){
        var mainTxt = document.querySelectorAll('.main_slide_content h2');
        var mainSplitTxt = new SplitType(mainTxt, { types: 'chars' });

        gsap.from(mainSplitTxt.chars, {
            delay: 0.5,
            opacity: 0,
            yPercent: 80,
            duration: 0.7,
            stagger: { amount: 0.4},
        });
    }

    var pagiArray = ['Efficiency', 'Security', 'Performance'];

    const swiper1 = new Swiper('.main_swiper', {

        direction: 'horizontal',
        effect: 'fade',
        crossFade : true,
        loop: true,
        speed: 1500,
        autoplay: {
            delay: 4000,
        },

        pagination: {
            el: '.main-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<a href="#" class="' + className + '">' + (pagiArray[index]) + '</a>';
            },
        },

    });

    swiper1.on('slideChange', function(){
        mainTxtToSplitTxt();
    });

    gsap.from('.partners_list ul li', {
        duration: 0.5, 
        y: 30, 
        opacity: 0, 
        stagger: {
            amount: 0.3,
        },
        scrollTrigger: {
            trigger: '.partners_list',
            start: 'center bottom',
        }
    });

    let tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: '#carSoftware',
            pin: '#carSoftware',
            scrub: true,
            start: 'top top',
            end: '150% top top',
            toggleActions: "play reverse none reverse",
            invalidateOnRefresh: true,
        }
    });

    tl1.to('.car_area', {
        yPercent: 45,
        duration: 10,
    });

    tl1.to('.carSoftware_tit', {
        delay: -9,
        yPercent: -70,
        opacity: 1,
        duration: 2,
    });

    tl1.from('.carSoftware_slideArea', {
        delay: -7,
        opacity: 0,
        duration: 3,
    });

    const swiper2 = new Swiper('.carSoftware_Slide', {
        direction: 'horizontal',
        speed: 500,
        loop: true,
        slidesPerView: 1,
        autoplay: {
            delay: 2000,
        },
        observer: true,
        observeParents: true,
        pagination: {
            el: '.carSoftware_pagination',
            clickable: true,
        },
        disableOnInteraction: false,
    });

    swiper2.on('slideChange', function(){
        $('.carSoftware_SlideTit ul li').eq(this.realIndex).addClass('active').siblings().removeClass('active');
    });

        const swiper3 = new Swiper('.solutions_slide', {

        direction: 'horizontal',
        slidesPerView: 1,
        speed: 500,
        spaceBetween: 30,

        pagination: {
            el: '.solutions-pagination',
            clickable: true,
        },

        breakpoints: {
            1280: {
                slidesPerView: 'auto',
            }
        }

    });

        const swiper4 = new Swiper('.history_slide', {

        direction: 'vertical',
        slidesPerView: 'auto',
        autoHeight: true,

        navigation: {
            nextEl: '.hs_slideBtn.next',
            prevEl: '.hs_slideBtn.prev',
        },

        a11y: {
            prevSlideMessage: '이전 슬라이드로 이동',
            nextSlideMessage: '다음 슬라이드로 이동',
        },

        breakpoints: {
            
            1280: {
                direction: 'horizontal',
            }
        },

    });

    var cardItems = document.querySelectorAll('.cardEffect');

    cardItems.forEach((cardItem, i) => {
        ScrollTrigger.create({
            trigger: cardItem,
            start: "top top",
            pin: true, 
            scrub: 0.5,
            pinSpacing: false,
            invalidateOnRefresh: true,
            onEnter: () => {
                gsap.to(cardItem, {
                    borderRadius: 0,
                    duration: 0.5,
                });
            },
            onLeaveBack: () => {
                gsap.to(cardItem, {
                    borderTopLeftRadius: '2.41vw',
                    borderTopRightRadius: '2.41vw',
                    duration: 0.5,
                });
            }

        });
    });


    var newsCursor = document.getElementById('news_cursor');
    var blogListA = document.querySelector('.blog_list');

    blogListA.addEventListener('mousemove', function(e){
        var x = e.clientX;
        var y = e.clientY;
        newsCursor.style.left = x + 'px';
        newsCursor.style.top = y + 'px';
    });

    blogListA.addEventListener('mouseenter', function(e){
        newsCursor.classList.add('active');
        newsCursor.classList.remove('leave');
    });

    blogListA.addEventListener('mouseleave', function(e){
        newsCursor.classList.remove('active');
        newsCursor.classList.add('leave');
    });

    $('.location_desc a').on('click', function(e){
        e.preventDefault();
        var idx = $(this).closest('li').index();
        $(this).closest('li').addClass('active').siblings().removeClass('active');
        $('.mobileLocation_list li').eq(idx).addClass('active');
        $('#locations').addClass('mapActive');
    });

    $('.mobileLocation_list li a').on('click', function(e){
        e.preventDefault();
        var idx = $(this).closest('li').index();
        $(this).closest('li').addClass('active').siblings().removeClass('active');
        $('.global_location li').eq(idx).addClass('active');
        $('#locations').addClass('mapActive');
    });

    $('#locations').on('mouseup', function(e){
        if($('.global_location li').has(e.target).length === 0 && !$('#locations .card_tit a.btn_type1').is(e.target) && !$('.location-pagination .swiper-pagination-bullet').is(e.target) && !$('.mobileLocation_list li a').is(e.target)){
            $('#locations').removeClass('mapActive');
            $('.global_location li').removeClass('active');
            $('.mobileLocation_list li').removeClass('active');
        }
    });

    $('.globalLocation_slide .swiper-slide').on('click', function(){
        $('#locations').removeClass('mapActive');
        $('.global_location li').removeClass('active');
    });

    const swiper5 = new Swiper('.globalLocation_slide', {

        direction: 'vertical',
        loop: true,
        spaceBetween: 30,
        autoHeight: true,
        slidesPerView: 'auto',
        speed: 300,
        observer: true,
        observeParents: true,
        disableOnInteraction: false,

        pagination: {
            el: '.location-pagination',
            clickable: true,
        },

        autoplay: {
            delay: 2500,
        }
    });
    
    $('.global_location li.kr .location_desc a').on('click', function(e){
        e.preventDefault();
        swiper5.slideToLoop(0);
    });

    $('.mobileLocation_list li.kr').on('click', function(e){
        e.preventDefault();
        swiper5.slideToLoop(0);
    });

    $('.global_location li.de .location_desc a').on('click', function(e){
        e.preventDefault();
        swiper5.slideToLoop(6);
    });

    $('.mobileLocation_list li.de').on('click', function(e){
        e.preventDefault();
        swiper5.slideToLoop(6);
    });

    $('.global_location li.vn .location_desc a').on('click', function(e){
        e.preventDefault();
        swiper5.slideToLoop(5);
    });

    $('.mobileLocation_list li.vn').on('click', function(e){
        e.preventDefault();
        swiper5.slideToLoop(5);
    });

    $('.go_top button').on('click', function(){
        $('html, body').animate({
            scrollTop: 0,
        }, 600);
    });

    
    function mapAniActive(){
        $('.globalMap_box').addClass('active');
    }

    ScrollTrigger.create({
        trigger: '.globalMap_img',
        start: '40% bottom',
        invalidateOnRefresh: true,
        onEnter: () => {
            mapAniActive();
        }
    });


        $('#visualMap g').each(function(){
            var max = 12, min = 3;
            var randomNum =  Math.floor(Math.random() * (max - min) + min);
            var delay = randomNum / 10;

            $(this).css({
                'transition-delay': delay + 's',
            });
        }); 

    window.addEventListener("resize", ScrollTrigger.refresh());

});