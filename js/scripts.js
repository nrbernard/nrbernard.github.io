function setWindowHeight() {
	var windowHeight = $( window ).height();
	$( ".home" ).css("height", windowHeight );
};

$(function() {
	$( document ).ready( setWindowHeight );
	$( window ).resize( setWindowHeight );

	$( "body" ).hide();
	$( "body" ).fadeIn(800);
});
