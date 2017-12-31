const mySiema = new Siema();
var k_photo;

$(".Thumb").click(function () {

	$(".Modal").fadeIn(500);

	k_photo = parseFloat($(this).attr("kphoto"));
	mySiema.goTo(k_photo)

	console.log(k_photo)
});




$(".modal-close").click(function () {

	$(".Modal").fadeOut(500);

})

$(".modal-prev").click(function () {

	mySiema.next()
})

$(".modal-next").click(function () {
	mySiema.prev()

})

window.onclick = function (event) {
	var modal = document.getElementsByClassName("flex-wrapper")[0];
	if (event.target == modal) {

		$(".Modal").fadeOut(200)

	} else {


	}
}


$(document).keyup(function (e) {
	if (e.keyCode == 27) {

		$(".Modal").fadeOut(200)
	}
});



function runCollageAnimation() {


	setTimeout(function () {
		c_anim(11);
		setTimeout(function () {
			c_anim(10);
			setTimeout(function () {
				c_anim(9);
				setTimeout(function () {
					c_anim(8);
					setTimeout(function () {
						c_anim(7);
						setTimeout(function () {
							c_anim(6);
							setTimeout(function () {
								c_anim(5);
								setTimeout(function () {
									c_anim(4);
									setTimeout(function () {
										c_anim(3);
										setTimeout(function () {
											c_anim(2);
											setTimeout(function () {
												c_anim(1);
												setTimeout(function () {
													c_anim(0);
												}, 100)
											}, 100)
										}, 100)
									}, 100);
								}, 100)
							}, 100)
						}, 100)
					}, 100);
				}, 100)
			}, 100)
		}, 100)
	}, 100);






}

function c_anim(k) {
	// $($(".Thumb")[k]).css({"left": "0px"})
	$($(".Thumb")[k]).fadeIn(150, function () {
		$($(".Thumb")[k]).css({
			"display": "inherit",
		});
		
	});
    $($(".Thumb")[k]).width('25%');
}
