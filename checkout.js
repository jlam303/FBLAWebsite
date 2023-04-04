function reprice(){
    let cost = document.querySelector("#roomInfo input:nth-of-type(4)").id
    let temp = cost.split("")
    temp.shift()
    temp = temp.join("")
    document.querySelector("#totals div:nth-of-type(1)").innerHTML = "Amount Due: $"+ String(temp*document.querySelector("#roomInfo input:nth-of-type(4)").value) 
    document.querySelector("#totals div:nth-of-type(2)").innerHTML = "Tax: $"+ String(Number(temp*document.querySelector("#roomInfo input:nth-of-type(4)").value * .056).toFixed(2))
    let num1 = (Number(temp*document.querySelector("#roomInfo input:nth-of-type(4)").value * .056).toFixed(2))
    let num2 = (temp*document.querySelector("#roomInfo input:nth-of-type(4)").value) ;
    console.log(num1,num2) 
    document.querySelector("#totals div:nth-of-type(3)").innerHTML = "Total: $"+ (Number(num1) + Number(num2))
}

function checkout(){
    document.querySelectorAll("#checkout input").forEach(element => element.value = "")
    document.querySelector("#totals button").innerHTML = "Thanks For Your Purchase! An Email Has Been Sent With Your Receipt."
    setTimeout(function(){
        document.querySelector("#totals button").innerHTML = "Checkout"
    },3000)
    document.querySelector("#totals div:nth-of-type(1)").innerHTML = "Amount Due: $0" 
    document.querySelector("#totals div:nth-of-type(2)").innerHTML = "Tax: $0"
    document.querySelector("#totals div:nth-of-type(3)").innerHTML = "Total: $0"
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "jplam904@gmail.com",
    Password : "82673BE8D075160373487B08D7D622CBE44B",
    To : 'jplam904409@outlook.com',
    From : "jplam904@gmail.com",
    Subject : "Hotel Santos receipt",
    Body : "Your receipt code is 234hUje405@"
})
}    