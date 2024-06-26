// API variables
const apiKey = "72a2eed9ea9740d29b896a241c0394cb";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var unit = "metric";
var name;

// HTML variables
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const cBtn = document.querySelector(".c");
const fBtn = document.querySelector(".f");

// Function that requests data to API and uses the response to update the HTML
async function checkWeather(city, units) {
    const response = await fetch(apiUrl + city + `&units=${unit}` + `&appId=${apiKey}`);

    if(response.status ==404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        var data = await response.json();

        console.log(data);
        
        document.querySelector(".img-description").innerHTML = data.weather[0].description;
        document.querySelector(".city").innerHTML = "in " + data.name  + ", " + data.sys.country;
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";

        if (units == "imperial") {
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " ºF";
            document.querySelector(".wind").innerHTML = data.wind.speed + " mph";
            document.querySelector(".feels-like").innerHTML = "but feels like " + Math.round(data.main.feels_like) + " ºF";
            document.querySelector(".min").innerHTML = Math.round(data.main.temp_min) + " ºF";
            document.querySelector(".max").innerHTML = Math.round(data.main.temp_max) + " ºF";
        }
        else {
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " ºC";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
            document.querySelector(".feels-like").innerHTML = "but feels like " + Math.round(data.main.feels_like) + " ºC";
            document.querySelector(".min").innerHTML = Math.round(data.main.temp_min) + " ºC";
            document.querySelector(".max").innerHTML = Math.round(data.main.temp_max) + " ºC";
        }
        
        const icon = data.weather[0].main.toLowerCase();
        weatherIcon.src = `images/${icon}.png`;
        
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather").style.display = "block";
    }
    
}


// Buttons event listeners
cBtn.addEventListener("click", () => {
    unit = "metric";
    checkWeather(name, unit);
})
fBtn.addEventListener("click", () => {
    unit = "imperial";
    checkWeather(name, unit);
})

// Event listener that awaits for the button to be clicked to then use the function to display weather
searchBtn.addEventListener("click", () => {
    name = searchBox.value;
    checkWeather(searchBox.value, unit);
})

