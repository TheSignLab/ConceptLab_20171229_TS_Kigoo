function run_animation_coolmenu() {

	var k = 0;
	$($(".menu-li").get()).each(function () {
		$(this).delay(k * 250).animate({
			left: "0px"
		})
		k = k + 1;
	});


}
