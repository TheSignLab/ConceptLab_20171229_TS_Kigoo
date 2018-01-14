window.fbAsyncInit = function () {
	FB.init({
		appId: '180502036023973',
		status: true,
		cookie: true,
		version: 'v2.10'
	});

	$('.button').click(function (e) {
		e.preventDefault();
		var image = $(this).siblings('img').attr('src');

		FB.ui({
				method: 'share',
				href: $(location).attr('href') + '?og_img=' + image,
			},
			function (response) {
console.log(response)
			}
		);
	})
};

(function (d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0];
	if (d.getElementById(id)) {
		return;
	}
	js = d.createElement(s);
	js.id = id;
	js.src = "//connect.facebook.net/en_US/sdk.js";
	fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
