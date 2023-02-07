const navLinks = document.querySelectorAll(".navLinks")
let linkLetters = [];
for(let i = 0;i<navLinks.length;i++)
{
    let letters = navLinks[i].innerHTML.split("");
    linkLetters.push(letters)
    navLinks[i].addEventListener("mouseenter",hoverEffect)
    navLinks[i].addEventListener("mouseleave",endHoverEffect)
}
for(let i = 0;i<linkLetters.length;i++){
    navLinks[i].innerHTML = ""
    for(let j = 0; j < linkLetters[i].length;j++)
    {
        let span = document.createElement("span")
        span.innerHTML = linkLetters[i][j]
        span.style.position = "relative"
        span.className = "linkSpans"
        navLinks[i].appendChild(span)
    }
    
}

const linkSpans = document.querySelectorAll(".linkSpans")
let keyframes = [
    {top: "20%", opacity: .5},
    {top: "-20%", opacity: .5},
    {top: "0%", opacity: 1},
]   
let endKeyframes = [
    {top: 0, opacity:1}
] 
let timing = {
        duration: 1000,
        iterations: Infinity,
        easing: "linear",
}
let endTiming = {
    iterations: 1,
}
function hoverEffect(event){
    for(let i = 0;i < event.target.children.length;i++){
        event.target.children[i].animate(keyframes,timing)
    }
}
function endHoverEffect(event){
    console.log("e")
    for(let i = 0;i < event.target.children.length;i++){
        event.target.children[i].animation.cancel()
    }
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
