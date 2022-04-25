// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let wallet = JSON.parse(localStorage.getItem("amount"))
let amount = document.getElementById("wallet").innerText = wallet[wallet.length -1];


let container = document.getElementById("container");


let selected = JSON.parse(localStorage.getItem("movie")) || [];

selected.map(function (el){

    console.log(el);
    let box = document.createElement("div");
    box.setAttribute("id" ,"box")

    let box1 = document.createElement("div");
    box1.setAttribute("id" ,"box1")
    let poster = document.createElement("img");
    poster.src = el.Poster

    let title = document.createElement("p")
    title.innerText = el.Title

    box1.append(poster)
    box.append(box1 , title)

    container.append(box)

})


function confirm(){
    let seats = document.getElementById("number_of_seats").value;
console.log(seats);

    console.log("object");
    if((seats *100) > amount ){
        alert("Insufficient Balance !")
    }
    else if ((seats *4) < amount){
        alert("Booking Successful!")
    }
}