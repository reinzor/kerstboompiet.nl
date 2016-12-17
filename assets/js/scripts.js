
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $('.coming-soon').backstretch([
      "assets/img/backgrounds/1.jpeg"
    , "assets/img/backgrounds/2.jpeg"
    ], {duration: 6000, fade: 1250});

    /*
	    Countdown to next x-mas
	*/

    var d = new Date();
    var y = d.getFullYear();
    if (d.getMonth() == 11 && d.getDate() > 25)
       y += 1;

	$('.timer').countdown("12/25/" + y, function(event) {
		$(this).find('.days').text(event.offset.totalDays);
		$(this).find('.hours').text(event.offset.hours);
		$(this).find('.minutes').text(event.offset.minutes);
		$(this).find('.seconds').text(event.offset.seconds);
	});

    /*
        Tooltips
    */
    $('.social a').tooltip();

});
