Tmpl = {
/***********************--[ Slider-Photo ]--************************/
	slick : function() {
		jQuery('body div.slick-photoSlider').slick({
		  centerMode: true,
		  centerPadding: '193px',
		  slidesToShow: 1,
		  speed: 1000,
          lazyLoad: 'progressive',
		  index: 2,
          dots: true,
		  autoplay: true,
		  swipe: false,
		  responsive: [
			{
			  breakpoint: 768,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1,
				swipeToSlide: true,
				swipe: true,
			  }
			}
		  ]
		})
	},
}
/***********************--[ Scroll-Menu ]--************************/
 $(document).ready(function() {
     //funkcja click dodana do każdego linku z menu
    $('.menu-item').click(function(e) {    
        var linkHref = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(linkHref).offset().top-65
        }, 500);
        
        e.preventDefault();
    });
     $('.scrollup').click(function(e){
			
			jQuery('html, body').animate({	
				scrollTop: jQuery('body').offset().top
			}, 500);	
         
         e.preventDefault();
     });
           
     //butoon 'scrollup' if > 300
     $(window).scroll(function()
		{
			if($(this).scrollTop()>300) $('.scrollup').fadeIn(); 
			else $('.scrollup').fadeOut();		
		}		
		);
   	 $('body').addClass('ready');
       
}); 
 /***********************--[ Showing-Elements of Page ]--************************/
 $(window).scroll(function() {
 	 var wScroll = $(this).scrollTop();

	  if(wScroll > $('body .sliderBottom').offset().top-$(window).height() - 200) {

 	 	$('body .aboutUS .left').addClass('bounceInLeft animated');
 	 	$('body .aboutUS .right').addClass('bounceInRight animated');
 	 	$('body .aboutUS .left, body .aboutUS .right ').css({
 	 		'opacity' : '1'
 	 	})
 	   }

 	 if(wScroll > $('body .sliderBottom').offset().top-$(window).height()/2 - 159) {

 	 	$('.sliderBottom li').each(function(i) {

 	 		setTimeout(function(){
 	 			$('.sliderBottom li').eq(i).addClass('is-showing');
 	 		}, 150 * (i+1));
 	 	});
 	 }
 	 if(wScroll > $('.infoMiddle').offset().top-$(window).height() + 100) {
 	 		
 	 		setTimeout(function(){
 	 			$('body .infoMiddle img').addClass('is-showing');
 	 		}, 50);

 	 }
 	 if(wScroll > $('.infoMiddle').offset().top-$(window).height() + 100) {

 	 	$('body .infoMiddle .center .box').each(function(i) {
 	 		
 	 		setTimeout(function(){
 	 			$('body .infoMiddle .center .box').eq(i).addClass('is-showing');
 	 		}, 150 * (i+1)); 		
 	 	});
 	 }
});