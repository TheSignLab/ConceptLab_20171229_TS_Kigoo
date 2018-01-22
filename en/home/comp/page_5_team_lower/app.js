var obj_po;
var obj_po_class;
var obj_drops_h =false;
var obj_drops_timer_op;
var obj_drops_timer_cl;


$(document).ready(function () {

	function openDrops(){
		
		var obj_drop = $(".Footer-Drop i");
		$(obj_drop[0]).animate({
			left: '0px'
		}, "slow");
		$(obj_drop[1]).animate({
			left: '0px'
		}, "slow");
		$(obj_drop[2]).animate({
			left: '0px'
		}, "slow");
		$(obj_drop[3]).animate({
			left: '0px'
		}, "slow");
		$(obj_drop[4]).animate({
			left: '0px'
		}, "slow");
		$(obj_drop[5]).animate({
			left: '0px'
		}, "slow");
	}
	
	function closeDrops(){
		
		var obj_drop = $(".Footer-Drop i");

		$(obj_drop[0]).animate({
			left: '0px'
		}, "slow");
		$(obj_drop[1]).animate({
			left: '-16px'
		}, "slow");
		$(obj_drop[2]).animate({
			left: '-32px'
		}, "slow");
		$(obj_drop[3]).animate({
			left: '-48px'
		}, "slow");
		$(obj_drop[4]).animate({
			left: '-64px'
		}, "slow");
		$(obj_drop[5]).animate({
			left: '-80px'
		}, "slow");
		
	}
	
	
	$(".Footer-Drop").mouseenter(function () {

		obj_drops_timer_op =  setTimeout(function(){
			 openDrops()
		},200);
		
		clearTimeout(obj_drops_timer_cl)

	});

	$(".Footer-Drop").mouseleave(function () {

			obj_drops_timer_cl =  setTimeout(function(){
			 closeDrops()
		},200);
		
		clearTimeout(obj_drops_timer_op)
		

	});

	$(".Footer-Drop i").click(function() {

		obj_po = $(this);
		obj_po_class = $(obj_po[0]).attr("class").split(' ')[2];
		update_colors(obj_po_class)
		
	});


});
