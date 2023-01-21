var slideInt=1;
var playing = setInterval(slideShowFor2,2000)
var hold;
function slideShowFor(){
    slidePause();
    slideInt++;
    if(slideInt > 6) slideInt = 1;
    slideChange();
}
function slideShowFor2(){
    slideInt++;
    if(slideInt > 6) slideInt = 1;
    slideChange();
}
function slideShowBack(){
    slidePause();
    slideInt--;
    if(slideInt < 1) slideInt = 6;
    slideChange();
}

var desc = ["Soupe à L'oignon","Boeuf Bourguignon","Steak Tartare","Confit de Canard","Bouillabaisse","Tartiflette"];
function slideChange(){
    for(let i = 1;i<=6;i++)
    {
        hold = document.getElementById("img" + i)
        hold.style.visibility = "hidden"
    }
    document.getElementById("img" + slideInt).style.visibility = "visible"
    document.getElementById("slideCaption").innerHTML = desc[slideInt-1]
}
var play = true;
function slidePlay(){
    if(play == true){
        slidePause();
    }
    else{
        document.getElementById("pause").src = "./images/icons8-pause-50.png"
        playing = setInterval(slideShowFor2,2000);
        play = true
    }
}
function slidePause(){
    document.getElementById("pause").src = "./images/icons8-play-50.png"
    clearInterval(playing)
    play = false;
}