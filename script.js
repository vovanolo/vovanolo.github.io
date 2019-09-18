$(document).ready(function () {
    $('nav a').each(function (index,element) {
        // event.preventDefault();
        $(element).click(function () {
            const id = $(this).attr('href');
            const top = $(id).offset().top;
            $('html').animate({
                scrollTop:top
            },1500)
        })
    })


})

