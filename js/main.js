function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 700){
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
        $('body').animate({scrollTop: 0}, 1000);
    });
 }

 backToTop();

 function backToOglav() {
    let button = $('.back-to-oglav');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 1200){
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    
 }

 backToOglav();