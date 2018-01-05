$(document).ready(function () {

	var ClockOffP1_Timer;

	$('#id_trigger_p1').mouseenter(function () {
		$('#id_bubble_p1').fadeIn("slow");
		$('#id_bubble_p1').addClass('animated bounceInUp');
	})
	$('#id_trigger_p1').mouseleave(function (e) {

		ClockOffP1_Timer = setTimeout(function () {
			$('#id_bubble_p1').fadeOut("slow");
		}, 1000);

	})

	$('#id_bubble_p1').mouseenter(function () {
		clearTimeout(ClockOffP1_Timer);
	})

	$('#id_bubble_p1').mouseleave(function () {
		ClockOffP1_Timer = setTimeout(function () {
			$('#id_bubble_p1').fadeOut("slow");
		}, 1000);
	})


});
