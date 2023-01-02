let img = document.getElementById("timelinePic")
let desc = document.getElementById("timelineDesc").innerHTML
let pictureChange = ["cookbook.jpg","grandOpening.webp","chef.jpg","ratatouille.jpg", "bestOfPhoenix.png", "souffle.jpg", "2michelinStar.png", "michelinStar.png","gusteauDish.jpg"]
let descriptionChange = ["hello","hi"]
let clicks = 0;

img.src = pictureChange[clicks]
desc.innerHTML = descriptionChange[clicks]
function next(){
clicks++;
if(clicks >= 9) clicks = 0;
img.src = pictureChange[clicks];
desc = descriptionChange[clicks];
}

function prev(){
clicks --;
if(clicks <= -1) clicks = 8;
img.src = pictureChange[clicks];
desc = descriptionChange[clicks];
}
