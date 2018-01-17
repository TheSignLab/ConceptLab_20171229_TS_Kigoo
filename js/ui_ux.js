var btnClose = $($("nav img")[1]);

var uiMainControl = $(".ui-default-buttons");
var uiFxControl = $(".ui-effects-buttons");
var uiSnapControl = $(".ui-snapped-buttons");
var uiShareControl = $(".ui-sharing-buttons");
var uiContactControl = $(".ui-seemore-buttons");

var viewSeeMore = $(".ui-layer.seemore");



var btnSelectFx = $(".button.select-effect");
var btnTakeSnapshot = $(".button.take-snap");
var btnSwitchCamera = $(".button.button-share");

var btnFx1 = $(".button.fx1");
var btnFx2 = $(".button.fx2");
var btnFx3 = $(".button.fx3");
var btnFx4 = $(".button.fx4");

var btnShare = $($(".button.left > img")[0]);
var btnDownload = $($(".button.left > img")[1]);
var btnQuieroSaberMas = $($(".button.right .txt")[0]);





var videoBack = document.querySelector('.ui-layer.back-video video');
var videoFront = document.querySelector('.ui-layer.front-video video');

var canvasOutput = document.querySelector('.ui-layer.output-canvas canvas');







var context = canvasOutput.getContext('2d');
var w, h, ratio;
videoFront.addEventListener('loadedmetadata', function () {
    ratio = videoFront.videoWidth / videoFront.videoHeight;
    w = videoFront.videoWidth - 100;
    h = parseInt(w / ratio, 10);
    canvasOutput.width = w;
    canvasOutput.height = h;
}, false);




function uiMethod_TakeSnap() {
    $(canvasOutput).show();
    // Draw the path that is going to be clipped
    context.beginPath();
    context.arc(300, 125, 50, 0, 2 * Math.PI, false);
    // Don't stroke or fill it

    // Now clip() the canvas
    context.clip();

    context.fillRect(0, 0, w, h);
    context.drawImage(videoFront, 0, 0, w, h);
    console.log("Snaped")
}


function uiMethod_DeleteSnap() {
    $(canvasOutput).hide();

}









function uiControl_go2Init() {

    viewSeeMore.hide();

    uiMainControl.show();
    uiFxControl.hide();
    uiSnapControl.hide();
    uiShareControl.hide();
    uiContactControl.hide();
    uiMethod_DeleteSnap();
}

function uiControl_go2Fx() {

    viewSeeMore.hide();

    uiMainControl.hide();
    uiFxControl.show();
    uiSnapControl.hide();
    uiShareControl.hide();
    uiContactControl.hide();

    uiMethod_DeleteSnap();
}

function uiControl_go2Snap() {

    viewSeeMore.hide();

    uiMainControl.hide();
    uiFxControl.hide();
    uiSnapControl.show();
    uiShareControl.hide();
    uiContactControl.hide();


    uiMethod_TakeSnap();


}

function uiControl_go2Share() {

    viewSeeMore.hide();

    uiMainControl.hide();
    uiFxControl.hide();
    uiSnapControl.hide();
    uiShareControl.show();
    uiContactControl.hide();
    uiMethod_DeleteSnap();
}

function uiControl_go2Contact() {
    viewSeeMore.show();

    uiMainControl.hide();
    uiFxControl.hide();
    uiSnapControl.hide();
    uiShareControl.hide();
    uiContactControl.show();
    uiMethod_DeleteSnap();
}






function uiControl_SwitchCamera() {}

function uiControl_ApplyFx1() {
    updateFilter(1);
    uiControl_go2Snap();
}

function uiControl_ApplyFx2() {
    updateFilter(2);
    uiControl_go2Snap();
}

function uiControl_ApplyFx3() {
    updateFilter(3);
    uiControl_go2Snap();
}

function uiControl_ApplyFx4() {
    updateFilter(4);
    uiControl_go2Snap();
}

function uiControl_DownloadPic() {
    var link = document.getElementById('link');
    link.setAttribute('download', 'TheSignLabCo.png');
    link.setAttribute('href', canvasOutput.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
}

uiControl_go2Init();

btnClose.click(function () {
    uiControl_go2Init()
});

btnSelectFx.click(function () {
    uiControl_go2Fx()
});
btnTakeSnapshot.click(function () {
    uiControl_go2Snap();
});
btnSwitchCamera.click(function () {
    uiControl_SwitchCamera()
});


btnFx1.click(function () {
    uiControl_ApplyFx1()
});
btnFx2.click(function () {
    uiControl_ApplyFx2()
});
btnFx3.click(function () {
    uiControl_ApplyFx3()
});
btnFx4.click(function () {
    uiControl_ApplyFx4()
});


btnShare.click(function () {
    uiControl_go2Share()
});
btnDownload.click(function () {
    uiControl_DownloadPic()
});


btnQuieroSaberMas.click(function () {
    uiControl_go2Contact();
})












$("#id_input_name").click(function(){
    $(".wbox-row-c1").removeClass("wbox-active");
    $($(".wbox-row-c1")[0]).addClass("wbox-active");
})
$("#id_input_email").click(function(){
     $(".wbox-row-c1").removeClass("wbox-active");
    $($(".wbox-row-c1")[1]).addClass("wbox-active");
})










/*
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
