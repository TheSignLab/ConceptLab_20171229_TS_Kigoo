// Clase para Color Background Actual
var ts_bg_c = "ts-bg-c1";
var ts_hv_fc_c = "ts-hv-fc-c1";






function update_colors(theColor) {
	
	var theColorString;
	var theColorClass = theColor;
	
	var coloredBgElements = $("." + ts_bg_c);
	var coloredHvFcElements = $("." + ts_hv_fc_c);

	if (theColorClass == "ts-fc-c1") {
		theColorString = "c1";
	}
	if (theColorClass == "ts-fc-c2") {
		theColorString = "c2";
	}
	if (theColorClass == "ts-fc-c3") {
		theColorString = "c3";
	}
	if (theColorClass == "ts-fc-c4") {
		theColorString = "c4";
	}
	if (theColorClass == "ts-fc-c5") {
		theColorString = "c5";
	}

	// Background Colored
	coloredBgElements.removeClass(ts_bg_c);
	coloredBgElements.addClass("ts-bg-" + theColorString);
	
	coloredHvFcElements.removeClass(ts_hv_fc_c);
	coloredHvFcElements.addClass("ts-hv-fc-" + theColorString);



	ts_bg_c = "ts-bg-" + theColorString;
	ts_hv_fc_c = "ts-hv-fc-" + theColorString;
	console.log("ts-bg-" + theColorString)
}
