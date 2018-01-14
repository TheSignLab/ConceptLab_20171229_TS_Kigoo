// declare our variables
var seriously, // the main object that holds the entire composition
    colorbars, // a wrapper object for our source image
    vignette, // a vignette effect
    target; // a wrapper object for our target canvas

function updateFilter(current_tab){


      
        switch (current_tab) {
            case 0:
                apply_filter_1();
                console.log("Applying Filter 1");
                break;
            case 1:
                apply_filter_2();
                console.log("Applying Filter 2");
                break;
            case 2:
                apply_filter_3();
                console.log("Applying Filter 3");
                break;
            case 3:
                apply_filter_4();
                console.log("Applying Filter 4");
                break;
            default:
                apply_filter_1()
        }



};

















function apply_filter_1(){

    $(".frame-container").css({
        backgroundColor : "rgba(100,100,200,0.5)"
    })
    
}


function apply_filter_2(){

    $(".frame-container").css({
        backgroundColor : "rgba(100,200,200,0.5)"
    })
    
}

function apply_filter_3(){

    $(".frame-container").css({
        backgroundColor : "rgba(200,200,200,0.5)"
    })
    
}

function apply_filter_4(){

    $(".frame-container").css({
        backgroundColor : "rgba(200,100,200,0.5)"
    })
    
}












/*
function apply_filter_1() {
    try {
        var canvas = fx.canvas();
    } catch (e) {
        alert(e);
        return;
    }

    // convert the image to a texture
    var canvas = fx.canvas();
    var videoraw = document.getElementById('id_video_raw_camera');
    var texture = canvas.texture(videoraw);

    $(".frame-container-OutputVideoLayer")[0].appendChild(canvas);
    setInterval(function () {
        texture.loadContentsOf(videoraw);
        canvas.draw(texture).swirl(canvas.width / 2, canvas.height / 2, 100, -2).ink(0.5).update();
    }, 10);
    videoraw.play();
}
*/