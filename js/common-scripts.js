
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });

        
        if ($('.review-item-wrap').length) {
            $('.review-item-wrap').slick({
                arrows: true,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: false,
                responsive: [

                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            swipe: false,
                        }
                    },

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            swipe: false,
                        }
                    },

                    {
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3,
                            swipe: false,
                        }
                    }

                ]
            });
            $(window).on('resize', function () {
                $('.review-item-wrap').slick('resize');

            });
        }
        
        
        
        if ($('.personal-story-slider').length) {
            $('.personal-story-slider').slick({
                arrows: true,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                centerMode: false,
                focusOnSelect: false,
                responsive: [

                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            swipe: false,
                            autoplay: true,
                        }
                    }

                ]
            });
            $(window).on('resize', function () {
                $('.personal-story-slider').slick('resize');

            });
        }
        
		
	})// End ready function.
   
    
    
    
    

	

})(jQuery)

