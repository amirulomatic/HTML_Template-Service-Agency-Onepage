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
    })


    //gallery 
    $('.myGallery').magnificPopup({ //select gallery parent name
        type: 'image',
        delegate: '.portfolio-item a', // the selector for gallery item
        gallery:{
          enabled:true
        }
      });


});
})(jQuery);