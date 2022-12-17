let img = document.getElementById("timelinePic")
let desc = document.getElementById("timelineDesc").innerHTML
let pictureChange = ["bestOfPhoenix.png","g.png"]
let description = ["hello","hi","no","nope"]
let clicks = 0;

img.src = pictureChange[clicks]
desc = description[clicks]
function next(){
clicks++;
if(clicks >= 2) clicks = 0;
img.src = pictureChange[clicks];
desc = description[clicks];
}

function prev(){
clicks --;
if(clicks <= -1) clicks = 1;
img.src = pictureChange[clicks];
desc = description[clicks];
}

