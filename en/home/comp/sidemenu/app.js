$(document).ready(function () {

	$(".dots").click(function () {

		
		console.log("Abriendo Menu");
		
		$(".SideMenu").animate({
			right: "0px"
		});
	});
	
	
	$(".SideMenu-X").click(function () {

		
		console.log("Cerrando Menu");
		
		$(".SideMenu").animate({
			right: "-300px"
		});
	});
	

});
