let keyframes = [
    {left: "0"},
    {left: window.innerWidth + "px"},
    {left: "0"},
    {right: window.innerWidth + "px"}
]
let timing = {
    duration: 12000,
    iterations: Infinity,
    easing: "ease-in-out",
}
let mainAnim = document.getElementById("imgRows")
function startAnimation(){
    mainAnim.animate(keyframes,timing)
}