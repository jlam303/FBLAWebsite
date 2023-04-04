function reprice(){
    console.log("E")
}
function checkout(){
    document.querySelectorAll("#checkout input").forEach(element => element.value = "")
    document.querySelector("#totals button").innerHTML = "Thank You For Your Purchase"
    setTimeout()
}