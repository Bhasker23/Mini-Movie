// Store the wallet amount to your local storage with key "amount"

let wallet = JSON.parse(localStorage.getItem("amount")) || [];

let arr = []

function addtowallet(){
    
    let money = document.getElementById("amount").value;
    // console.log(money);
   
    arr.push(money)
    //  console.log(arr);

    let bag = 0;
    for(let i = 0; i<arr.length; i++){
        bag =  bag + (+arr[i])
       
    }
    // console.log(bag)
   
    wallet.push(bag);
    console.log(wallet);
    localStorage.setItem("amount" , JSON.stringify(wallet))
    document.getElementById("wallet").innerText = wallet[wallet.length-1]
}

