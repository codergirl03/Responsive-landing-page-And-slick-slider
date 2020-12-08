$(document).ready(function (){
    $(".fa-search").click (function (){
        $('.search').toggleClass('active');
        $('input[type="text"]').toggleClass('active');
        $('.fa-search').toggleClass('active');
    });
    $(".fa-bars").click(function () {
        $('.menu').toggleClass('navs');
        $('.nav').toggleClass('navs');
        $('.navbar').toggleClass('navs');
        $('.fa-bars').toggleClass('navs');
    });
   
});

/*--- slick slider ---*/
$(document).ready(function(){

    $('.team-content').slick({

   prevArrow:'<button class="arrow prev"><i class="fas fa-chevron-circle-left"></i></button>',
   nextArrow:'<button class="arrow next"><i class="fas fa-chevron-circle-right"></i></button>',

    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
         
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
   
    ]
  });
 });
