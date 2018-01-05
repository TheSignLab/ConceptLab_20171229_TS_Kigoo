function handler_header(index, nextIndex, direction) {



	if (nextIndex == 1) {
		$(".Header").hide();
	} else {
		$(".Header").show();
	}

	if (nextIndex == 2 && direction == "down") {
		setTimeout(function () {
			$(".Header").animate({
				left: "0px",
			}, 500);
		}, 200);
	}

	if (nextIndex == 2) {
		$(".Header").css({
			"color": "white"
		})
		console.log(index)
	}
	if (nextIndex == 3) {
		$(".Header").css({
			"color": "black"
		})

	}
	if (nextIndex == 4) {
		$(".Header").css({
			"color": "white"
		})

	}








}
