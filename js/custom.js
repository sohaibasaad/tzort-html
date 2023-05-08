jQuery(document).ready(function () {
  var currentUrl = (window.location.pathname.split("/")[1]);
  $('.custom_header .navbar-nav .nav-item a').each(function () {
    var hrefVal = $(this).attr('href');
    if(currentUrl == "#" || currentUrl == ""){
      $(".custom_header .navbar-nav .nav-item:first-child a.active").addClass('active');
    }
    if (hrefVal == currentUrl) {
        $(".custom_header .navbar-nav .nav-item a.active").removeClass('active');
        $(this).addClass('active');
        return false; // breaks
    } else {
        $(".custom_header .navbar-nav .nav-item a.active").removeClass('active');
    }

  });
});

$(".open_header_click").on('click', function () {
  if ($(this).hasClass("collapsed") == true) {
    $(".hameburgerIcon").addClass("fa-bars");
    $(".hameburgerIcon").removeClass("fa-times");
  }
  else {
    $(".hameburgerIcon").removeClass("fa-bars");
    $(".hameburgerIcon").addClass("fa-times");
  }
});

$(".open_page").on('click', function () {
  window.open("community.html","_self")
});

$("#navbarNavDarkDropdown").hover(function(){
    $(".open_page").addClass("show active");
    $(".open_page").siblings().addClass("show");
  }, function(){
    $(".open_page").removeClass("show active");
    $(".open_page").siblings().removeClass("show");
});

$('.reviews_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  });
}