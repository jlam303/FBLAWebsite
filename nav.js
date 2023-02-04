const navLinks = document.querySelectorAll(".navLinks")
let linkLetters = [];
for(let i = 0;i<navLinks.length;i++)
{
    let letters = navLinks[i].innerHTML.split("");
    linkLetters.push(letters)
    navLinks[i].addEventListener("mouseenter",hoverEffect)
}
for(let i = linkLetters.length; i < linkLetters;i++)
{
    linkLetters[i]
}
function hoverEffect(){

}
document.getElementById("navButton").addEventListener("click",navBar)
let openNav = false;
function navBar(){
    if(openNav == false){

        openNav = true;
    }
    else{
        
        openNav = false;
    }
}
