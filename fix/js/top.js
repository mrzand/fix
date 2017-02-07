$(document).ready(function() {
  $('#bktop').click(function(e){
    $('html, body').animate({scrollTop:0}, '1000');
    e.preventDefault();
  });
});