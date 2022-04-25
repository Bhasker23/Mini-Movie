// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let wallet = JSON.parse(localStorage.getItem("amount"))
document.getElementById("wallet").innerText = wallet[wallet.length -1];

let movies_div = document.getElementById("movies")


async function searchMovie(){

    try{

        const query = document.getElementById("search").value;

        let res = await fetch(`https://www.omdbapi.com/?apikey=78185b06&s=${query}`);

        let data = await res.json();
        // console.log(data.Search);
       
        const movies = data.Search

        return movies;
    }
    catch (err){
        console.log("err : ULR crashed");
    }
}

function appendMovies(data){
    movies_div.innerHTML = null;

data.forEach(function (el){

console.log(el)

    let box = document.createElement("div");
    box.setAttribute("id" ,"box")

    let box1 = document.createElement("div");
    box1.setAttribute("id" ,"box1")
    let poster = document.createElement("img");
    poster.src = el.Poster

    let title = document.createElement("p")
    title.innerText = el.Title

    let btn = document.createElement("button");
    btn.innerText = "book now";
    btn.setAttribute("class", "book_now")

   
    btn.addEventListener("click", function(){
        gotonextpage(el)
    })


    box1.append(poster)
    box.append(box1 , title,btn)
    movies_div.append(box)
})
}
let selected = []
function  gotonextpage(el){
    selected.push(el)
    window.location.href = "checkout.html"
    localStorage.setItem("movie", JSON.stringify(selected))
    
}

async function main(){
    let data =  await searchMovie()

    if(data === undefined){
        return false;

    }
    appendMovies(data)
    console.log("data :", data);
}


let id ;
function debounce(func,time){
 if(id){
     clearTimeout(id);
 }
 setTimeout (function (){
     func()
 },time)
}