// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


var myCarousel = document.querySelector('#carouselExample')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 3000,
  ride: 'carousel',
  wrap: true
});

myCarousel.addEventListener('slid.bs.carousel', function () {
  var currentItem = myCarousel.querySelector('.carousel-item-next, .carousel-item-prev, .carousel-item.active');
  currentItem.querySelector('img').style.display = 'block';
});

$(document).ready(function() {
    $('.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).fadeIn();
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).fadeOut();
    });
  });



/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

