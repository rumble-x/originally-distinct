$(document).ready(function() {
		$('#rumble-credit').fadeIn(550);
    //   // $('navbar').hide(0);
		//
		setTimeout(function(){
			$('#rumble-credit').hide();
			// $('.borboletas').fadeOut(1500);
		}, 1250);

		// setTimeout(function(){
		// 	$('#project-title').show();
		// 	$('#artist-name').show();
		// 	$('#bars').show();
		// }, 3500);
    //
    //
		// $( "#skip" ).click(function() {
		// 	$('#project-title').hide();
		// 	$('#bars').hide();
		// 	$('#artist-name').hide();

		setTimeout(function(){
			$('body').removeClass("noscroll");
			$('body').addClass('loaded');
      $('#mainNav').removeClass('none');
		}, 1750);


	//   setTimeout(function(){
	// 		$('#project-title').hide();
	// 		$('#artist-name').hide();
	//   }, 6000);
  //
  //
  // setTimeout(function(){
	// 	  $('body').addClass('loaded');
	// 		$('body').removeClass("noscroll");
	// 	}, 6400);
 });
