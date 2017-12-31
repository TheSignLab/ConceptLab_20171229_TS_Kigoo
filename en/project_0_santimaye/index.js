var vFullPageCurrentSectionIndex = 0;
var currentPage = 0;
var isFirsTime = true;








$(document).ready(function () {

    $('main').fullpage({
        sectionSelector: 'section',
        onLeave: function (index, nextIndex, direction) {


            if (nextIndex == 2) {
                
                $(".Header").css({
                    "top": "0px"
                });
                
                runCollageAnimation();
                

                
                
                
            }
            if (nextIndex == 1) {
                $(".Header").css({
                    "top": "-200px"
                });
            }
            if (nextIndex == 2 || index == 2) {

                $(".Collage-Space").css({
                    "height": "0px"
                });
                
                
               
            }

            if (nextIndex == 3) {

               
                    $(".content ul li").css({
                        "left": "0px",
                    });
                
                
                

                $(".Description-Left").height('100vh');
                
                
                $(".titles").css({
                        "left": "0px",
                    });
                
                setTimeout(function () {
                    $(".Description-Right .content p").css({
                        "top": "0px",
                    });
                     setTimeout(function () {
                   setTimeout(function () {
                     $($(".content ul li")[0]).fadeIn(300);
                },0);
                 setTimeout(function () {
                     $($(".content ul li")[1]).fadeIn(300);
                },100);
                 setTimeout(function () {
                     $($(".content ul li")[2]).fadeIn(300);
                },200);
                 setTimeout(function () {
                     $($(".content ul li")[3]).fadeIn(300);
                },300);
                 setTimeout(function () {
                     $($(".content ul li")[4]).fadeIn(300);
                },300); 
                },700); 
                },500); 
                  



            }

        },
        afterLoad: function (anchorLink, index) {

            currentPage = index;


            // --- isFirstTime Handlers --- //
            if (isFirsTime) {
                runCoverFirstTime();
                isFirsTime = false;
            }
            // --------------------------- //



            if (index == 1 && !isFirsTime) {
                $("#myVideo").hide();
                $(".Intro-Bg-FullSize").show();

            }

            if (index == 2) {

                $(".Collage-Space").css({
                    "height": "200px"
                });
                



            }









        },
    });

    isFirstTime = true;
    blockScroll();

});


function blockScroll() {
    $('main').fullpage.setAllowScrolling(false);
    $('main').fullpage.setMouseWheelScrolling(false);

}


function enableScroll() {
    $('main').fullpage.setAllowScrolling(true);
    $('main').fullpage.setMouseWheelScrolling(true);

}
