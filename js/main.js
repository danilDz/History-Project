$(document).ready(() =>{
    $('.NavA').each((index, element) => {
        $(element).click(function(){
            const id = $(this).attr('href');
            const offset = $(id).offset().top;
            $('html').animate({
                scrollTop:offset
            },2300);
        });
    });
});

function toTop(){
    let button = $('.buttonUp');

    $(window).on('scroll', () =>{
        if ($(this).scrollTop() >= 400){
            button.fadeIn();
        } else {
            button.fadeOut();
    }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 2000);
    });
}

toTop();

$('.menu-btn').on('click', function(e){
    e.preventDefault();
    $('.menu-btn-span').toggleClass('menu-btn-span_active');
    $('.menu').toggleClass('menu_active');
});