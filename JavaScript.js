
var i = 0;
var images = [];
var time = 3000;

//Image list: put the images into the images array
images[0] = 'BeachReviewsCrop.png';
images[1] ='CoffeeHouse.png';
images[2] = 'TuscanyVillaScreenCapture.png';

//Change image
function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++
    } else {
        i = 0;
    }

    //run at 3 second intervals, set time to 3 seconds
    setTimeout("changeImg()", time);
}

window.onload = changeImg;

