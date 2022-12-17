var img = document.getElementById("img");
let imgPreview1 = document.getElementById("preview1");
let imgPreview2 = document.getElementById("preview2");
let imgPreview3 = document.getElementById("preview3");
var images = ["shrimp.png","escargots.png","beef.png","fish.png","choco.png"], x=0;

function slideShowFor(){
    if(x == images.length-1) x=0;
    else x++;
    img.src = images[x];
    imgPreview2.src = images[x];
    if(x != 0) imgPreview1.src = images[x-1];
    else imgPreview1.src = images[images.length-1]
    if(x != images.length-1) imgPreview3.src = images[x+1];
    else imgPreview3.src = images[0]
}
function slideShowBack(){
    if(x == 0) x=images.length-1;
    else x--;
    img.src = images[x];
    imgPreview2.src = images[x];
    if(x != 0) imgPreview1.src = images[x-1];
    else imgPreview1.src = images[images.length-1]
    if(x != images.length-1) imgPreview3.src = images[x+1];
    else imgPreview3.src = images[0]
}
