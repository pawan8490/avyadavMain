$(document).ready(function () {
   
    var HeadH = $('#header').outerHeight();

    var scrollWindow = function() {
        $(window).on('load scroll',function() {
            var navbar = $('#header');
           
            if ($(this).scrollTop() >= 400) { 
                $('.back_top').addClass('active');
            }
            else {
                $('.back_top').removeClass('active');
            }
        });
    };
    scrollWindow();

    $('.back_top').click(function(){
        $('html, body').animate({scrollTop:0}, 500);
    });

    $('.back_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $(".navbar-toggler").click(function () {
        $(this).toggleClass("menu-opened");
        $(".collapse:not(.show)").toggleClass("menu-show");
        $("body").toggleClass("scroll-off");
        $(".overlay").fadeToggle();
    });

    $(".overlay").click(function () {
        $(this).fadeToggle();
        $(".collapse:not(.show)").toggleClass("menu-show");
        $("body").toggleClass("scroll-off");
        $(".navbar-toggler").toggleClass("menu-opened");
    });


});