













// declare our variables
var seriously, // the main object that holds the entire composition
    colorbars, // a wrapper object for our source image
    vignette, // a vignette effect
    target; // a wrapper object for our target canvas




var glfx_canvas,
    glfx_texture,
    glfx_videoraw,
    glfx_interval;

var glfx_w,
    glfx_h;

function updateFilter(current_tab) {


    $(".frame-container-BackLayer canvas").remove();
        clearInterval(glfx_interval)
    
    if(current_tab == 0){
        apply_filter_0();
    }else{
        
    }
    
    if(current_tab == 1){
        apply_filter_1();
    }
    
    if(current_tab == 2){
        apply_filter_2();
    }
    
    if(current_tab == 3){
        apply_filter_3();
    }





};









function apply_filter_0() {

    $(".frame-container").css({
        backgroundColor: "rgba(100,100,200,0.5)"
    })

}


function apply_filter_1() {

    // Check WebGL Support
        try {
            var canvas = fx.canvas();
        } catch (e) {
            alert(e);
            return;
        }
    
    // Get Dimensions
    glfx_w = $($(".frame-container-BackLayer")[0]).innerWidth();
    glfx_h =$($(".frame-container-BackLayer")[0]).innerHeight();
    
    // Construct GLFX Objects
        glfx_canvas = fx.canvas();
        glfx_videoraw = document.getElementById('id_video_raw_camera');
        glfx_texture = glfx_canvas.texture(glfx_videoraw);

    
    // Append Canvas
    $(".frame-container-OutputVideoLayer")[0].appendChild(glfx_canvas);
    
    //Interval
    glfx_interval = setInterval(function () {
        glfx_texture.loadContentsOf(glfx_videoraw);
        glfx_canvas.draw( glfx_texture,glfx_w, glfx_h).dotScreen(glfx_w, glfx_h, 1.19, 13.48).update();
    }, 10);
    
    glfx_videoraw.play();

}

function destroy_filter_1(){
    // Append Canvas
    try{
        $(".frame-container-OutputVideoLayer canvas").remove();
        clearInterval(glfx_interval)
    }catch(e){
        console.log(e)
    }

}



function apply_filter_2() {

       // Check WebGL Support
        try {
            var canvas = fx.canvas();
        } catch (e) {
            alert(e);
            return;
        }
    
    // Get Dimensions
    glfx_w = $($(".frame-container-OutputVideoLayer")[0]).innerWidth();
    glfx_h =$($(".frame-container-OutputVideoLayer")[0]).innerHeight();
    
    // Construct GLFX Objects
        glfx_canvas = fx.canvas();
        glfx_videoraw = document.getElementById('id_video_raw_camera');
        glfx_texture = glfx_canvas.texture(glfx_videoraw);

    
    // Append Canvas
    $(".frame-container-OutputVideoLayer")[0].appendChild(glfx_canvas);
    
    //Interval
     glfx_interval =  setInterval(function () {
        glfx_texture.loadContentsOf(glfx_videoraw);
        glfx_canvas.draw( glfx_texture,glfx_w, glfx_h).colorHalftone(320, 239.5, 1.35, 13.69).update();
    }, 10);
    
    glfx_videoraw.play();
}






function apply_filter_3() {

       // Check WebGL Support
        try {
            var canvas = fx.canvas();
        } catch (e) {
            alert(e);
            return;
        }
    
    // Get Dimensions
    glfx_w = $($(".frame-container-OutputVideoLayer")[0]).innerWidth();
    glfx_h =$($(".frame-container-OutputVideoLayer")[0]).innerHeight();
    
    // Construct GLFX Objects
        glfx_canvas = fx.canvas();
        glfx_videoraw = document.getElementById('id_video_raw_camera');
        glfx_texture = glfx_canvas.texture(glfx_videoraw);

    
    // Append Canvas
    $(".frame-container-OutputVideoLayer")[0].appendChild(glfx_canvas);
    
    //Interval
     glfx_interval =  setInterval(function () {
        glfx_texture.loadContentsOf(glfx_videoraw);
        glfx_canvas.draw( glfx_texture,glfx_w, glfx_h).lensBlur(18, 1, 1.96841).update();
    }, 10);
    
    glfx_videoraw.play();
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
