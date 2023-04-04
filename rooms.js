let roomDate =[4,3,6,1,7,2]
let roomGuests =[2,2,6,1,6,4]
function search(){
    let checkIn = document.querySelector("#roomSearch input:nth-of-type(1)").value;
    let checkOut = document.querySelector("#roomSearch input:nth-of-type(2)").value;
    let guest = document.querySelector("#roomSearch input:nth-of-type(3)").value;
    let date = (Date.parse(checkOut) - Date.parse(checkIn))/(86400000)
    console.log(date);
    let dateTrue = false;
    let guestTrue = false;
    for(let i = 1; i <= 6; i++){
        
        if(date <= roomDate[i-1]){
            dateTrue = true;
        }
        else{dateTrue = false;}
        if(guest <= roomGuests[i-1]){
            guestTrue = true;
        }
        else{guestTrue = false;}
        if(guestTrue && dateTrue){
            document.getElementById("room" +i).style.display = "block"
        }
        else{document.getElementById("room" +i).style.display = "none"}
    }
    
}