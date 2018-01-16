$(function () {
    var dev_width = $(".frame-container-FrontLayer").width();
    var nSlideEffect = 0;
    $(".effect-titles").slidesjs({
        width: dev_width,
        height: 50,
        navigation: {
            active: false,
            effect: "slide"
        },
        pagination: {
            active: false,
            effect: "slide"
        },
        play: {
            active: false,
            effect: "slide",
            interval: 5000,
            auto: false,
            swap: false,
            pauseOnHover: false,
            restartDelay: 2500
        },
        callback: {
            complete: function (number) {
                updateFilter(number)
            }
        }
    });
});


/*


    <div class="frame-container-RawLayer">
                    <video autoplay nocontrols height="100%">
                    <source src="example_video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>
                </div>
                
                <div class="frame-container-BackLayer">
                    <video autoplay nocontrols height="100%">
                    <source src="example_video.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                    </video>

                </div>
*/
