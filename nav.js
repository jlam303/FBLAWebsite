$(function(){
    $("#navBurger").on("click",openNav)
    $("#navPopup").slideUp(0)
    $("#topOffers > div").on("click",goToOffers)
    $("#mainContainer h3").slideUp(0).slideDown(800)
    $(".infoCon").on("click",goToOffers)
    $("#roomCon img").hover(function() {
        $(this).css("filter","blur(1.5px)")
    },function() {
        $(this).css("filter","blur(0px)")
    })
})
let nav = false;

function goToOffers(){
    window.location.href='rooms.html';
}
function openNav(){
    if(nav == false){
        $("#navPopup").slideDown(800)
        nav = true;
        $(".bars:nth-of-type(2)").css("visibility","hidden")
        document.querySelector(".bars:nth-of-type(1)").animate([
            {transform: "translateY(0) rotate(0)"}, 
            {transform: "translateX(1rem)"}, 
            {transform: "translateY(1.25rem) rotate(-45deg)"} 
            ],{duration:400, iterations:1,fill:"forwards"}
        )
        document.querySelector(".bars:nth-of-type(3)").animate([
            {transform: "translateY(0) rotate(0)"}, 
            {transform: "translateX(-1rem)"}, 
            {transform: "translateY(-1.25rem) rotate(45deg)"} 
            ],{duration:400, iterations:1,fill:"forwards"}
        )
    }else{
        $("#navPopup").slideUp(800)
        nav = false;
        $(".bars:nth-of-type(2)").css("visibility","visible")
        document.querySelector(".bars:nth-of-type(1)").animate([
            {transform: "translateY(1.25rem) rotate(-45deg)"} ,
            {transform: "translateX(1rem)"}, 
            {transform: "translateY(0) rotate(0)"}, 
            ],{duration:400, iterations:1,fill:"forwards"}
        )
        document.querySelector(".bars:nth-of-type(3)").animate([
            {transform: "translateY(-1.25rem) rotate(45deg)"}, 
            {transform: "translateX(-1rem)"}, 
            {transform: "translateY(0) rotate(0)"}, 
            ],{duration:400, iterations:1,fill:"forwards"}
        )
    }
}