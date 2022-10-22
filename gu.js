var img = document.getElementById("img");
var images = [], x=0;
images[0] = "shrimp.png";
images[1] = "escargots.png";
images[2] = "beef.png";
images[3] = "fish.png";
images[4] = "choco.png";
setInterval(slideShow, 3000);
function slideShow(){
    img.src = images[x];
    if(x == 4){
        x=0;
    }
    else{
        x++;
    }
}
