	$(document).ready(function() {
        
		setTimeout(function(){
			$('.preloader').fadeOut(0);
            $('main').show();
            /*
			var mySVG = $('#id_preloader_svg').drawsvg();
			mySVG.drawsvg('animate');
            */

		},0);
		/*
        var typed = new Typed('.preloader h1', {
			strings: ["thes:gn","thes:g","thes:","the:","th:","t:",":"],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 40,
			// time before typing starts
			startDelay: 2500,
			// backspacing speed
			backSpeed: 0,
			// time before backspacing
			backDelay: 0,
			// loop
			loop: false,
			// false = infinite
			loopCount: 5,
			// show cursor
			showCursor: false,
			// character for cursor
			cursorChar: ":",
			// attribute to type (null == text)
			attr: null,
			// either html or text
			contentType: 'html',
			// call when done callback function
			callback: function() {	
			},
			// starting callback function before each string
			preStringTyped: function() {},
			//callback for every typed string
			onStringTyped: function() {
			},
			// callback for reset
			resetCallback: function() {
			}
	});
	*/
});
