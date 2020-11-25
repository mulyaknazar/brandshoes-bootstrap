$(document).ready(function(){
      $('.items-block').slick({
      	slidesToShow: 3,
      	slidesToScroll: 1,
        arrows: true,
        
        
    	nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
    	prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    	
    	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,    

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1

      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      });
    });

