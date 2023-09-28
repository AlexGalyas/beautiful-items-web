//using OpenWeatherApi

const apiKey ='203bdd9f0ef531d41c46a1a9583ca5e4';
const apiUrl =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    let data = await response.json();

    if(response.status == 404){
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none'
    }

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    const weatherIcons = {
        "Clouds": 'images/clouds.png',
        "Clear": 'images/clear.png',
        "Rain": 'images/rain.png',
        "Drizzle": 'images/drizzle.png',
        "Mist": 'images/mist.png',
        "Snow": 'images/snow.png'
    };
    
    const weatherType = data.weather[0].main;
    const defaultIcon = 'images/clouds.png'; 

    if (weatherIcons.hasOwnProperty(weatherType)) {
        weatherIcon.src = weatherIcons[weatherType];
    } else {
        weatherIcon.src = defaultIcon;
    }
    

    document.querySelector('.error').style.display = 'none';
    document.querySelector('.weather').style.display = 'block'

}

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
});

