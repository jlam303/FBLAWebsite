let img = document.getElementById("timelinePic")
let desc = document.getElementById("timelineDesc").innerHTML
let pictureChange = ["firstPlace.jpg","ratatouille.jpg"]
let descriptionChange = ["hello","hi"]
let clicks = 0;

img.src = pictureChange[clicks]
desc = descriptionChange[clicks]
function next(){
clicks++;
if(clicks >= 2) clicks = 0;
img.src = pictureChange[clicks];
desc = descriptionChange[clicks];
}

function prev(){
clicks --;
if(clicks <= -1) clicks = 1;
img.src = pictureChange[clicks];
desc = descriptionChange[clicks];
}
