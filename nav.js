const navLinks = document.querySelectorAll(".navLinks")
navLinks.map( link => {
    link.addEventListener("mouseenter",hoverEffect)
})
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
