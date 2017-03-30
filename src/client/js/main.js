$(document).ready(function() {
  $('.changeIterationThree').on('click', function() {
    $('.iteration').css('width', '33%');
    $('.info').show();
    $('.hoverName').css('opacity', '1');
    $('.iteration').removeClass('noInfo');
  });

  $('.changeIterationFive').on('click', function() {
    $('.iteration').css('width', '15%');
    $('.info').hide();
    $('.iteration').addClass('noInfo');
    $('.hoverName:hover').show();
    $('.hoverName').css('opacity', '0');

    $('.noInfo').hover(function() {
      $('.hoverName',this).css('opacity', '1');}, function() {
        $('.hoverName',this).css('opacity', '0');
      });
  });
});

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName('mySlides');
  for (i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1;}
  x[slideIndex - 1].style.display = 'block';
  setTimeout(carousel, 3000);
}

function initMap() {
  var directionsDisplay = new google.maps.DirectionsRenderer();
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: new google.maps.LatLng(39.7033, -105.00),
    mapTypeId: 'roadmap'
  });
}
