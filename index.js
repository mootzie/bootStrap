const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector("button");
const authorName = document.querySelector(".author .name");
const cityInfo = document.querySelector(".content .cityInfo");
const countryName = document.querySelector(".cityInfo .countryName");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0ca2ca37b3msh8d284c3bffb353bp1c34bcjsne794ed9fbdc1',
        'X-RapidAPI-Host': 'cost-of-living-and-prices.p.rapidapi.com'
    }
};

function randomQuote(){
    fetch("http://api.quotable.io/random").then(res => res.json().then(result =>{
        quoteText.textContent = result.content;
        authorName.textContent = result.author;
        
        
    }));
}


function livingCost(){
    
    fetch('https://cost-of-living-and-prices.p.rapidapi.com/prices?city_name=Bratislava&country_name=Slovakia', options).then(response => response.json()
        .then(response =>{ 
            cityInfo.textContent = response.city_name;
            countryName.textContent = response.country_name
            console.log(response)
            console.log(response.country_name);
        }))
        .catch(err => console.error(err));
    }

quoteBtn.addEventListener("click", randomQuote)

randomQuote();

livingCost();

setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
 
    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    if (hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
 
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hour + ":"
            + min + ":" + sec + am_pm;
 
    document.getElementById("time")
            .innerHTML = currentTime;
}
showTime();