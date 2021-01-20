(function($){
$(document).ready(function(){

    //responsive navigation bar

    $('.mobile-menu a').click(function(){
        let menuStatus = $('nav.menu').css('display');

        if(menuStatus == 'block'){
            $('.mobile-menu a').html('<i class="fas fa-bars"></i>');
        }else if(menuStatus == 'none'){
            $('.mobile-menu a').html('<i class="fas fa-times"></i>')
        }

        $('nav.menu').slideToggle();
    });


    $(window).resize(function(){
        let bodyWidth = $('body').width();

        if(bodyWidth > 992){
            $('nav.menu').show();
            $('.mobile-menu a').html('<i class="fas fa-bars"></i>');
        }else{
            $('nav.menu').hide();
        }
    });

    //testimonial carusel

        $(".owl-carousel").owlCarousel({ //this class needs to put in mother div
            items: 1, //per page
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            autoplayTimeout: 6000
        });


    
    


});
})(jQuery);