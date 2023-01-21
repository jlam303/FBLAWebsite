document.getElementById("cart").innerHTML = '<i class="fa-solid fa-cart-shopping"></i> : $' + localStorage.getItem("total")
function find(){
    navigator.geolocation.getCurrentPosition(success,fail)
}
let delivery = false;
function success(position){
    const {latitude, longitude} = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=9abd7ab16ce6405b9e7c5985750873a1`)
    .then(response => response.json())
    .then(result => {
        let city = result.results[0].components.city;
        if(city == "Peoria"){
            delivery = true;
            document.getElementById("locationText").style.borderRadius = "5%/15%"
            document.getElementById("locationText").innerHTML = '<i class="fa-solid fa-location-dot"></i> ' + city
        }
        else{
            delivery = false;
            document.getElementById("locationText").innerHTML = "You are outside of our delivery range."
        }
        localStorage.setItem("allowDelivery",delivery)
    })
    
}
function fail(){
    alert("Unable to find location")
}
let overall = 0; 
let names =["Chicken Biscuit","Sausage Muffin", "Bacon Muffin" , "Chicken Burrito", "Chicken Minis", "Grilled Muffin"];
let items=""
function createItem(cost, item){
    overall = Number(localStorage.getItem("total"))
    overall += cost
    localStorage.setItem("total", String(overall))
    items += names[item] + "."
    localStorage.setItem("food",items)
    document.getElementById("cart").innerHTML = '<i class="fa-solid fa-cart-shopping"></i> : $' + localStorage.getItem("total")
}