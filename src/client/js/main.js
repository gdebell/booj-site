// this myFunction is the dropdown sorting menu

function testingFunction() {
  console.log('hey');
}

function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};


$(document).ready(function() {
  $('.changeIterationThree').on('click', function() {
    $('.iteration').css('width', '33%');
    $('.info').show();
    $('.hoverName').css("opacity", '1')
    $('.iteration').removeClass('noInfo')
  });

  $('.changeIterationFive').on('click', function() {
    $('.iteration').css('width', '20%');
    $('.info').hide();
    $('.iteration').addClass('noInfo')
    $('.hoverName:hover').show()
    $(".hoverName").css("opacity", '0');

    $('.noInfo').hover(function(){
      $(".hoverName",this).css("opacity", '1');}, function(){
        $(".hoverName",this).css("opacity", '0');
      });
  });
});


var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}
