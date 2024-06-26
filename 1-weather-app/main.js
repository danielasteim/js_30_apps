// API variables
const apiKey = "72a2eed9ea9740d29b896a241c0394cb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// HTML variables
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// Function that requests data to API and uses the response to update the HTML
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appId=${apiKey}`);

    if(response.status ==404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " ºC";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzel.png";
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    
}

// Event listener that awaits for the button to be clicked to then use the function to display weather
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

aaaaaaaaaaaaaaa