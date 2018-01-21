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
var canvasOutput;





// Converts image to canvas; returns new canvas element
function convertImageToCanvas(image) {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext("2d").drawImage(image, 0, 0);

    return canvas;
}

// Converts canvas to an image
function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}




function getRoundedCanvas(sourceCanvas) {

    var canvas1 = document.createElement('canvas');
    var context1 = canvas1.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;
    canvas1.width = width;
    canvas1.height = height;

    var canvas2 = document.createElement('canvas');
    var context2 = canvas2.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;
    canvas2.width = width;
    canvas2.height = height;

    d = 0.75 * height / 4;

    eps = 0;

    P0_x = width / 2;
    P1_x = width / 2;

    P0_y = d + eps;
    P1_y = height - (d + eps);


    context1.beginPath();
    context1.arc(P0_x, P0_y, d, 0, 2 * Math.PI);
    context1.strokeStyle = 'rgba(0,0,0,0.51)';
    context1.stroke();

    context2.beginPath();
    context2.arc(P1_x, P1_y, d, 0, 2 * Math.PI);
    context2.strokeStyle = 'rgba(0,0,0,0.51)';
    context2.stroke();


    context1.clip();
    context2.clip();


    context1.drawImage(sourceCanvas, 0, 0, width, height);
    context2.drawImage(sourceCanvas, 0, 0, width, height);


    var canvas3 = document.createElement('canvas');
    var context3 = canvas3.getContext('2d');
    var width = sourceCanvas.width;
    var height = sourceCanvas.height;
    canvas3.width = width;
    canvas3.height = height;

    var backCanvas = document.createElement('canvas');
    var context4 = backCanvas.getContext('2d');
    var width4 = sourceCanvas.width;
    var height4 = sourceCanvas.height;
    backCanvas.width = width4;
    backCanvas.height = height4;
    context4.drawImage(SnapImg1, 0, 0, width4, height4);


    context3.drawImage(backCanvas, 0, 0, width, height);
    context3.drawImage(canvas1, 0, 0, canvas1.width, canvas1.height);
    context3.drawImage(canvas2, 0, 0, canvas2.width, canvas2.height);

    //context3.clip();

    SnapImg2.src = canvas3.toDataURL();





    return canvas2;

}

function drawDataURIOnCanvas(strDataURI, canvas) {
    "use strict";
    var img = new window.Image();
    img.addEventListener("load", function () {
        canvas.getContext("2d").drawImage(img, 0, 0);
        canvas = getRoundedCanvas(canvas);
    });
    img.setAttribute("src", strDataURI);
};



var w, h, ratio;
videoFront.addEventListener('loadedmetadata', function () {
    ratio = videoFront.videoWidth / videoFront.videoHeight;
    w = videoFront.videoWidth - 100;
    h = parseInt(w / ratio, 10);
    canvasOutput.width = w;
    canvasOutput.height = h;
}, false);


var SnapImg1, SnapImg2;
var outCanvasFx;

function uiMethod_TakeSnap() {

    glfx_paused = true;


    var img = new Image();
    img.src = glfx_canvas.update().toDataURL();


    var img2 = new Image();
    img2.src = glfx_canvas2.update().toDataURL();


    SnapImg1 = img;
    SnapImg2 = img2;


    $("#imgTarget")[0].src = img2.src;

    var canvas = document.getElementById('newCanvas');
    canvas.width = $("main").width();
    canvas.height = $("main").height();
    drawDataURIOnCanvas(img2.src, canvas);



}




function cloneCanvas(oldCanvas) {

    //create a new canvas
    var newCanvas = document.createElement('canvas');
    var context = newCanvas.getContext('2d');

    //set dimensions
    newCanvas.width = oldCanvas.width;
    newCanvas.height = oldCanvas.height;

    //apply the old canvas to the new one
    context.drawImage(oldCanvas, 0, 0);

    //return the new canvas
    return newCanvas;
}


function uiMethod_DeleteSnap() {

}









function uiControl_go2Init() {

    viewSeeMore.hide();

    uiMainControl.show();
    uiFxControl.hide();
    uiSnapControl.hide();
    uiShareControl.hide();
    uiContactControl.hide();
    uiMethod_DeleteSnap();

    glfx_paused = false;



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

    uiMehtod_Share();
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
    uiControl_go2Init()
}

function uiControl_ApplyFx2() {
    updateFilter(2);
    uiControl_go2Init()
}

function uiControl_ApplyFx3() {
    updateFilter(3);
    uiControl_go2Init()
}

function uiControl_ApplyFx4() {
    updateFilter(4);
    uiControl_go2Init()
}

function uiControl_DownloadPic() {

    var link = document.getElementById('link');
    link.setAttribute('download', 'TheSignLabCo1.png');
    link.setAttribute('href', SnapImg1.src);
    link.click();
    link.setAttribute('download', 'TheSignLabCo2.png');
    link.setAttribute('href', SnapImg2.src);
    link.click();
}

uiControl_go2Init();

btnClose.click(function () {
    uiControl_go2Init();


    regFitler = 10000;

    updateFilter(1)

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









$("#id_input_name").click(function () {
    $(".wbox-row-c1").removeClass("wbox-active");
    $($(".wbox-row-c1")[0]).addClass("wbox-active");
})
$("#id_input_email").click(function () {
    $(".wbox-row-c1").removeClass("wbox-active");
    $($(".wbox-row-c1")[1]).addClass("wbox-active");
})




$("#id_btn_share_fb").click(function () {
    $(".fb-share-button")[0].click();
});



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









function update_mask() {

};



function uiMehtod_Share() {
    
    var url = 'hidden.php',
        data = $(SnapImg2).attr('src');

    $.ajax({
        type: "POST",
        url: url,
        dataType: 'text',
        data: {
            b64String: data
        }
    });

}
