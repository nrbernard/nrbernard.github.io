function setWindowHeight() {
	var windowHeight = $( window ).height();
	$( ".home" ).css("height", windowHeight );
};

$(function() {
	$( "body" ).hide();
  $( document ).ready( setWindowHeight );
  $( window ).resize( setWindowHeight );
	$( "body" ).fadeIn(800);
});
