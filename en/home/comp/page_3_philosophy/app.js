/*---------------------------------------------------------------- */
/*  CONTROLADOR PARA LA INTERACCIÓN DE THEPHILOSOPHY               */
/*	                                                               */
/*	Author: Jorge Luis Mayorga
/*
/*---------------------------------------------------------------- */



/*---------------------------------------------------------------- */
/*----    Variables y Constantes   ------------------------------- */
/*---------------------------------------------------------------- */

// Llave que nos indica si se puede o no cambiar de pestaña
var key_switch_philosophyTabs = false;

// Registro que nos indica si ya ha sido corrido por primera vez la animación inicial
var reg_init_philosophyAnimation = false;

// Objeto para controlar las funciones del efecto Type.JS
var obj_typed;

var TimerKey1 = 500;

var reg_currentTab = 0;

var reg_switch_philosophyTabs = "BRAND STRATEGY";

var seemore_flag;
var seemore_autoplay;

var wrapper_obj;
var p_obj;
var ul_obj;
var see_label;
var more_label;

var seemore_label;
var pul_label;


var front_img;
var back_video;

var waitTimer_BgVideo;

/*---------------------------------------------------------------- */






/*---------------------------------------------------------------- */
/*----    Animación Inicial   ------------------------------------ */
/*---------------------------------------------------------------- */
function run_animation_philosophy() {
	var k = 0;
	$($(".philosophy-menu-wrapper ul li").get()).each(function () {
		$(this).delay(k * 500).animate({
			opacity: 1.0,
			left: "0px"
		});
		k = k + 1;
	});
	run_animation_philosophy_stage2();
}

function run_animation_philosophy_stage2() {
	setTimeout(function () {
		// Segunda Parte de la animación
		if (reg_init_philosophyAnimation == false) {
			obj_typed = new Typed('#Philosphy-Title', {
				strings: ["<i> </i>", "<span class='f-light'>THE WAY WE</span><span class='f-bold'> PERCEIVE REALITY</span>"],
				typeSpeed: 30,
				showCursor: false,
				onComplete: function (self) {
					run_animation_philosophy_stage3();
				},
			});
		}
		reg_init_philosophyAnimation = true;
		setTimeout(function () {
			$(".philosophy-bg-img-wrapper").animate({
				opacity: "1",
			}, 1500);
		}, 500)
	}, 2000);
}

function run_animation_philosophy_stage3() {
	$(".philosophy-seemore").animate({
		width: "0px",
		height: "30px",
		marginTop: '0px'
	}, 500, function () {
		$(".philosophy-seemore").animate({
			width: "100px",
		}, 500, function () {
			$(".philosophy-seemore .f-light").fadeIn();
			$(".philosophy-seemore .f-bold").fadeIn();
			key_switch_philosophyTabs = true;
		})
	})
}
/*---------------------------------------------------------------- */









// ---------------------------------------------- //
// SeeMore Handler Functions and Methods          //
// ---------------------------------------------- //
function handler_seemore_open() {

	wrapper_obj.animate({
		width: "510px",
	}, 500, function () {
		wrapper_obj.animate({
			height: "120px",
		}, 500, function () {
			pul_label.fadeIn();
			more_label.text("less");
		});
	});

	waitTimer_BgVideo = setTimeout(function () {

		front_img = $(".philosophy-bg-img-wrapper img");
		back_video = $(".philosophy-bg-img-wrapper video");

		front_img.fadeOut();
		back_video.fadeOut();

		$(back_video[reg_currentTab - 1]).fadeIn("slow", function () {
			back_video[reg_currentTab - 1].play();
		});





	}, 5000);
}

function handler_seemore_close() {

	pul_label.fadeOut('slow', function () {
		wrapper_obj.animate({
			width: "0px",
		}, 300);
		wrapper_obj.animate({
			height: "0px",
		}, 350, function () {
			more_label.text("more");
		});
	});

	clearTimeout(waitTimer_BgVideo); 

	front_img = $(".philosophy-bg-img-wrapper img");
	back_video = $(".philosophy-bg-img-wrapper video");

	front_img.fadeOut();
	back_video.fadeOut();
	try {
		back_video[reg_currentTab - 1].pause();
	} catch (e) {}
	$(front_img[reg_currentTab - 1]).fadeIn();


}
// ---------------------------------------------- //







/*---------------------------------------------------------------- */
/*----    UpdateTab  --------------------------------------------- */
/*---------------------------------------------------------------- */
function updateTabMethod(targetTab, current_tab, prev_tab, content_p_str, typed_str) {
	key_switch_philosophyTabs = false;
	reg_switch_philosophyTabs = current_tab;
	
	$(".pmw-active").removeClass(ts_bg_c);
	$(".pmw-active").removeClass("pmw-active");
	

	targetTab.addClass("pmw-active");
	targetTab.addClass(ts_bg_c);


	var content_p = $(".philosophy-seemore-content p");
	content_p.text(content_p_str);

	try {
		obj_typed.stop();
	} catch (e) {

	}

	obj_typed = new Typed('#Philosphy-Title', {
		strings: typed_str,
		typeSpeed: 30,
		showCursor: false
	});

	nFrom = numberTabByText(prev_tab);
	nTo = numberTabByText(current_tab);

	reg_currentTab = nTo;

	handler_philosophy_tooglebg(nFrom, nTo);

	handler_seemore_close();



	setTimeout(function () {
		key_switch_philosophyTabs = true;
	}, TimerKey1 / 2);
}
/*---------------------------------------------------------------- */





/*---------------------------------------------------------------- */
/*----    Cambio de Pestaña   ------------------------------------ */
/*---------------------------------------------------------------- */
function handler_philosophy_tooglebg(n_from, n_to) {

	var str_from_img = "#philo-img-id-" + n_from;
	var str_to_img = "#philo-img-id-" + n_to;
	var str_from_vid = "#philo-vid-id-" + n_from;
	var str_to_vid = "#philo-vid-id-" + n_to;

	var obj_from_img = $(str_from_img);
	var obj_to_img = $(str_to_img);

	var obj_from_vid = $(str_from_vid);
	var obj_to_vid = $(str_to_vid);



	obj_from_img.fadeOut("slow");
	obj_from_vid.fadeOut("slow");

	obj_to_vid.fadeIn("slow");
	obj_to_img.fadeIn("slow");



}

function numberTabByText(a) {
	var p = 0;
	if (a == "BRAND STRATEGY") {
		p = 1;
	}
	if (a == "DESIGN EXPERIENCE") {
		p = 2;
	}
	if (a == "DESIGN CONSULTANCY") {
		p = 3;
	}
	if (a == "IDEA PROTOTYPING") {
		p = 4;
	}
	if (a == "CREATIVE CONCEPT") {
		p = 5;
	}
	return p
}

function handler_philosophy_mouseover(targetTab) {

	var current_tab = targetTab.text();
	var prev_tab = reg_switch_philosophyTabs;

	var isUnlock = key_switch_philosophyTabs;
	var isTargetTab1 = (current_tab == "BRAND STRATEGY" && current_tab != reg_switch_philosophyTabs);
	var isTargetTab2 = (current_tab == "DESIGN EXPERIENCE" && current_tab != reg_switch_philosophyTabs);
	var isTargetTab3 = (current_tab == "DESIGN CONSULTANCY" && current_tab != reg_switch_philosophyTabs);
	var isTargetTab4 = (current_tab == "IDEA PROTOTYPING" && current_tab != reg_switch_philosophyTabs);
	var isTargetTab5 = (current_tab == "CREATIVE CONCEPT" && current_tab != reg_switch_philosophyTabs);

	var nFrom = 0;
	var nTo = 0;
	if (isTargetTab1) {
		var typed_str = ["<i></i>",
					 "<span class='f-light'>THE WAY WE</span><span class='f-bold'> PERCEIVE REALITY</span>"];
		var content_p_str = "We design brands that impact not only in their costumers but challenges the market standards with new values.";
		var nChild = 0;
		updateTabMethod(targetTab, current_tab, prev_tab, content_p_str, typed_str, nChild);
	}
	if (isTargetTab2) {
		var typed_str = ["<i></i>",
					 "<span class='f-light'>THE USER EXPERIENCE IN A </span><span class='f-bold'> MEANINGFUL WAY</span>"];
		var content_p_str = "We design products, services, communication with the focus in the person and its user experience. ";
		var nChild = 1;
		updateTabMethod(targetTab, current_tab, prev_tab, content_p_str, typed_str, nChild);
	}
	if (isTargetTab3) {
		var typed_str = ["<i></i>",
					 "<span class='f-light'>THE ESSENCE OF A </span><span class='f-bold'> GREAT BRAND</span>"];
		var content_p_str = "Behind a successful business is a strategy with a distinctive value proposition. We help companies, with design thinking, to create the key elements for a successful business model, a new brilliant product, a redesigned brand.";
		var nChild = 2;
		updateTabMethod(targetTab, current_tab, prev_tab, content_p_str, typed_str, nChild);
	}
	if (isTargetTab4) {
		var typed_str = ["<i></i>",
					 "<span class='f-light'>THE CREATION OF </span><span class='f-bold'> NEW REALITIES</span>"];
		var content_p_str = "The prototyping of ideas is the art of showing instead of telling. Bringing life to an idea, building the space where it could become in a memorable design experience is the ultimate way to be creative.";
		var nChild = 3;
		updateTabMethod(targetTab, current_tab, prev_tab, content_p_str, typed_str, nChild);
	}
	if (isTargetTab5) {
		var typed_str = ["<i></i>",
					 "<span class='f-light'>THE STRATEGY TO </span><span class='f-bold'> DEFINE THE FUTURE</span>"];
		var content_p_str = "The “Big Ideas” could capture the audience interests, influences their emotional response and inspires them to take action. Creative concept is an idea that unifies all business communications channels, campaign messages, calls to actions and audiences.";
		var nChild = 4;
		updateTabMethod(targetTab, current_tab, prev_tab, content_p_str, typed_str, nChild);
	}


}
/*---------------------------------------------------------------- */






$(document).ready(function () {

	seemore_flag = "Close";
	seemore_autoplay;

	wrapper_obj = $(".philosophy-seemore-content");
	p_obj = $(".philosophy-seemore-content p");
	ul_obj = $(".philosophy-seemore-content ul");
	see_label = $(".philosophy-seemore .f-light");
	more_label = $(".philosophy-seemore .f-bold");

	seemore_label = $(".philosophy-seemore .f-bold, .philosophy-seemore .f-light");
	pul_label = $(".philosophy-seemore-content ul, .philosophy-seemore-content p");


	front_img = $(".philosophy-bg-img-wrapper img");
	back_video = $(".philosophy-bg-img-wrapper video");

	// Evento Mouseover en pestaña

	$(".philosophy-menu-wrapper ul li").mouseover(function () {

		if (key_switch_philosophyTabs) {

			document.getElementById("id_tab_click").play();
			handler_philosophy_mouseover($(this));
		}

	});

	// Ocultar todos los fondos: imagens  y video.

	$(".philosophy-bg-img-wrapper img").fadeOut();
	$(".philosophy-bg-img-wrapper .video-shadow video").fadeOut();

	$("#philo-img-id-1").fadeIn();
	$("#philo-vid-id-1").fadeIn();

	$(".philosophy-seemore").click(function () {

		if (seemore_flag == "Open") {
			handler_seemore_close();
			seemore_flag = "Close";
		} else {
			handler_seemore_open();
			seemore_flag = "Open";
		}
	});

	$(".philosophy-seemore").mouseenter(function () {
		document.getElementById("id_seemore_hover").play();
	})





});

// ---------------------------------------------- //
// SeeMore Handler                                //
// ---------------------------------------------- //









/*



	if (seemore_flag == "Open") {
			// ---  Open SeeMore Content --- //
			wrapper_obj.animate({
				width: "510px",
			}, 500, function () {
				wrapper_obj.animate({
					height: "120px",
				}, 500, function () {
					pul_label.fadeIn();

					seemore_flag = "Close";
					more_label.text("less");
				});
			});


			seemore_autoplay = setTimeout(function () {

				$(front_img[reg_currentTab - 1]).fadeOut();
				$(back_video[reg_currentTab - 1]).fadeIn();

				$(".philosophy-content").addClass("flex-up");
				$(".philosophy-content").removeClass("flex-center");


			
					back_video.play();
			

			}, 3500);
			// --- / Open SeeMore Content --- //


		} else {
			// ---  Close SeeMore Content --- //
			pul_label.fadeOut('slow', function () {
				wrapper_obj.animate({
					height: "0px",
				}, 250, function () {
					wrapper_obj.animate({
						width: "0px",
					}, 350);
				});
			});


			seemore_flag = "Open";
			more_label.text("more");
			
			clearTimeout(seemore_autoplay);
			
			$(front_img[reg_currentTab - 1]).fadeOut();
			$(back_video[reg_currentTab - 1]).fadeIn();
			
			$(".philosophy-content").removeClass("flex-up");
			$(".philosophy-content").addClass("flex-center");
			try {
				back_video[reg_currentTab].stop();
			} catch (e) {
				console.log(e)
			}
			// --- /Close SeeMore Content --- //
		}




*/
