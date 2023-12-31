
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger, .dashboard-hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap, .dashboard-nav").fadeToggle()
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
        
        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({

            });
        }
        
        
        $(".company-item-bottom").each(function(){
            var $this = $(this);
            $this.find(" > .review-accordion-trigger").on("click touch", function(){
                $(".company-item-bottom").removeClass("accordion-active")
                $(".review-accordion-content").slideUp();
                if($this.find(".review-accordion-content:visible").length){
                    $(".company-item-bottom").removeClass("accordion-active")
                    $(".review-accordion-content").slideUp();
                }
                else{
                    $this.addClass("accordion-active")
                    $(".review-accordion-content").slideUp();
                    $this.find(" > .review-accordion-content").slideDown();
                }
            })
        })
        
        
        if ($('.three-step-slider-wrap').length) {
            $('.three-step-slider-wrap').slick({
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
//                responsive: [
//
//                    {
//                        breakpoint: 768,
//                        settings: {
//                            slidesToShow: 1,
//                            swipe: false,
//                            autoplay: true,
//                        }
//                    }
//
//                ]
            });
            $(window).on('resize', function () {
                $('.three-step-slider-wrap').slick('resize');

            });
        }
        
        
        $('.analytics-tab-trigger ul li').click(function(){
            $('.analytics-tab-trigger ul li').removeClass('analytics-active');
            $(this).addClass('analytics-active');
            $('.analytics-tab-item-wrap .analytics-tab-item').hide();

            var activeTab = $(this).find('a').attr('href');
            $(activeTab).fadeIn();
            return false;
        });
        
        
        $(".privacy-accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h4").on("click touch", function(){
                $(".privacy-accordion-item").removeClass("privacy-accordion-active")
                $(".privacy-accordion-content").slideUp();
                if($this.find(".privacy-accordion-content:visible").length){
                    $(".company-item-bottom").removeClass("privacy-accordion-active")
                    $(".privacy-accordion-content").slideUp();
                }
                else{
                    $this.addClass("privacy-accordion-active")
                    $(".privacy-accordion-content").slideUp();
                    $this.find(" > .privacy-accordion-content").slideDown();
                }
            })
        })
        
        
        
        var header = new Headroom(document.querySelector('header'), {
            tolarence: 80,
            offset: 155,
            classes: {

                initial: 'headroom',
                pinned: 'slidedown',
                unpinned: 'slideup'


            }
        });
        header.init();
        
		
	})// End ready function.
   
    
    
    
    

	

})(jQuery)

