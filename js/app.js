$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 1000) {
            $('#arrow-up-container').fadeIn();
        } else {
            $('#arrow-up-container').fadeOut();
        }
    });

    $('#arrow-up-container').click( function(){
        $('html').animate({scrollTop: 0}, 800);
    });

    $('.link').click(function(){
        $('html, body').animate({
            scrollTop: $('#about').position().top
        }, 800);
    });

    $('.btn-about').click(function(e){
        e.preventDefault();

        $('.about-content').hide();

        var href = $(this).attr('href');

        $(href).fadeIn();
    });
});