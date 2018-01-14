var current_tab = 0;
var number_tabs = 0;

var tabs;
var tab0;
var tab1;

var h_effect_tab = true;

$(document).ready(function () {

    number_tabs = $(".effect-title").length;

    $(".select-effect").click(function () {

        if (h_effect_tab == true) {


            h_effect_tab = false;

            tabs = $(".effect-titles");

            tab0 = $(".effect-title")[0];
            tab1 = $(".effect-title")[1];

            $(tab0).animate({
                left: "-=100vw"
            }, 200);
            $(tab1).animate({
                left: "-=100vw"
            }, 200, function () {
                h_effect_tab = true;

            });

            $(tab0).remove();
            $(tabs).append(tab0);
            
            updateFilter(current_tab );


            $(".effect-title").css({
                left: "0px"
            });
            
            current_tab = current_tab +1;
            if(current_tab == (number_tabs)){
                current_tab = 0;
            }


        }

    });
});
