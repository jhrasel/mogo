$(function(){
   
//    ====== Counter
    $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
    
    
//    ===== slider
    $('.feed-slid').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: true,
          nextArrow: '.right',
          prevArrow: '.left',
          autoplaySpeed: 1200,
        });
    
//    ====== Venubox
    $('.venobox').venobox(); 

// ============= preloader Pare js   ============= 
    
$(window).on('load',function(){
    $('.preloader').delay(500).fadeOut(500);
});      

//    ================= BACK TO TOP PART ============

    $('.back-to-top').click(function(){
        $('html, body').animate({scrollTop:0}, 1000);
    });    
    
  
//    ================= ADD CLASS SCROLLING PART ============
  
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > 250) {
            $('.navbar').addClass('bg');
        } 
        else {
            $('.navbar').removeClass('bg'); 
        }
//    ================= SCROLLING PART ============       
        if (scrolling > 200) {
            $('.back-to-top').fadeIn(800);
        } 
	    else {
            $('.back-to-top').fadeOut(800);
        }
    });

    
});