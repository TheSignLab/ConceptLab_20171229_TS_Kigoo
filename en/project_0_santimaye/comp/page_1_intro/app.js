 var introLocked = true;
var inDarkZone = false;


 function runCoverFirstTime() {

     blockScroll();

     // -- Intro Text Animation -- //
     setTimeout(function () {
         $(".Intro-Bg-FullSize .Layer .title").css({
             "left": "0px"
         });
         setTimeout(function () {
             $(".Intro-Bg-FullSize .Layer .subtitle").css({
                 "left": "0px"
             });
             $(".Intro-Bg-FullSize .Layer p").css({
                 "left": "0px"
             });
             setTimeout(function () {

                 $(".Intro-Bg-FullSize").fadeOut(750);
                 $("#myVideo").fadeIn(350);
                 document.getElementById("myVideo").play();

                 setTimeout(function () {

                     document.getElementById("myVideo").pause();
                     $("#myVideo").hide();
                     $(".Intro-Bg-FullSize").show();
                     $('main').fullpage.moveTo(2, 3);
                     
                     
                     setTimeout(function () {
                         enableScroll()
                     }, 500);

                 }, 7000);
             }, 1500);
         }, 500);
     }, 500);




 }



 

   window.addEventListener('wheel', function (e) {



       if (e.deltaY < 0) {
           if(currentPage == 1 && !inDarkZone){
              
               inDarkZone = true;
               $(".Intro-Bg-FullSize").fadeIn(750);
                $("#myVideo").fadeOut(350);
               blockScroll()
               
           }
           
           
       }
       if (e.deltaY > 0) {
           if(currentPage == 1 && inDarkZone){
              
               inDarkZone = false;
               $(".Intro-Bg-FullSize").fadeOut(750);
                $("#myVideo").fadeIn(350);
               blockScroll()
           }
           
          
       }
       
       
       
   });






 /*
  setTimeout(function () {

      $(".Intro-Bg-FullSize .Layer .title").css({
          "left": "0px"
      });

      setTimeout(function () {

          $(".Intro-Bg-FullSize .Layer .subtitle").css({
              "left": "0px"
          });
          $(".Intro-Bg-FullSize .Layer p").css({
              "left": "0px"
          });

      }, 500);

  }, 500);




  setTimeout(function () {
      introLocked = false;
  }, 2500);

  setTimeout(function () {
      $(".Intro-Bg-FullSize .Layer .title").css({
          "left": "0px"
      });

      setTimeout(function () {

          $(".Intro-Bg-FullSize .Layer .subtitle").css({
              "left": "0px"
          });
          $(".Intro-Bg-FullSize .Layer p").css({
              "left": "0px"
          });
          

      }, 500);
  }, 6000);


  function updateSection1() {

      $(document).on('DOMMouseScroll mousewheel', function () {

          if (!introLocked) {

              $(".Header").css({
                  "top": "0px"
              });

              $(".Layer").fadeOut(1500, function () {

                  

              });
              
              $(".Intro-Bg-FullSize").hide();
              $("#myVideo").show();
              document.getElementById("myVideo").play();
              
               setTimeout(function () {
                   
                    
                   $('main').fullpage.setAllowScrolling(true);
                  $('main').fullpage.setMouseWheelScrolling(true);
                   $('main').fullpage.moveTo(2, 3);
                   
               },7000);
          }



      });




  }

  /*

   window.addEventListener('wheel', function (e) {



       if (e.deltaY < 0) {
           window.userScrollDirection = "Up";
           if($(".Layer").css({}))
           
       }
       if (e.deltaY > 0) {
           window.userScrollDirection = "Down";
       }
       
       
       
   });




       if (currentPage == 0 && e.deltaY < 0) //Estoy en 0 y voy arriba
       {

           currentPage = 0;
       }
       if (currentPage == 0 && e.deltaY > 0) //Estoy en 0 y voy abajo
       {

           currentPage = 1;
       }




       if (currentPage == 1 && e.deltaY < 0) //Estoy en 1 y voy arriba
       {

           currentPage = 0;
       }
       if (currentPage == 1 && e.deltaY > 0) //Estoy en 1 y voy abajo
       {

          // $('main').fullpage.moveSectionDown();

       }



       console.log(currentPage)





   });
  */
