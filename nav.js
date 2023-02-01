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