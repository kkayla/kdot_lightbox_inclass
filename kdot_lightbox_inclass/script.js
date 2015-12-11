$(document).ready(function(){
	$(".lightbox-link").on("mouseover",
		// selecting the class light box link. listening speicifically for the click event on the anchor tag. the first thing we're passing in is click the second things is function. thenfinally selecting the outerlightbox class which is styled in css with a display of none an using jquery method show that sets it to be block, removes the diplay of none
		function(e){
		e.preventDefault();
		// prevents the default action of opening a new page on when you click a link
		console.log(this); 
				

		$(".outer-lightbox").show();
		$(".outer-lightbox").on('click', function(){
			$(".outer-lightbox").hide();

		});
	});
});

