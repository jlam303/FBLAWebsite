let mainAnim = document.getElementsByClassName("imgRows")
function startAnimation(){
    let keyframes = [
        {left: 0},
        {left: "-" + window.innerWidth + "px"},
        {left: 0},
    ]    
    let dur = window.innerWidth * 3.5
    let timing = {
        duration: dur,
        iterations: Infinity,
        easing: "linear",
    }
    let timing2 = {
        delay: "-" + window.innerWidth * 1.75,
        duration: dur,
        iterations: Infinity,
        easing: "linear",
    }
    mainAnim[0].animate(keyframes,timing)
    mainAnim[1].animate(keyframes,timing2)
    mainAnim[2].animate(keyframes,timing)
}