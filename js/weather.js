const API_KEY = "2c7b142bb917d0fc38d10c37ad53a2d4";

const onGeoOk = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //console.log(`lat=${lat} | lon=${lon}`)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
                console.log(data);
                const weather = document.querySelector("#weather span:first-child");
                const city = document.querySelector("#weather span:last-child");
                city.innerText = data.name;
                weather.innerText = data.weather[0].main;
            });
}

const onGeoError = () => {
    alert("I can't find you. No weather for you");
    console.log("I can't find you. No weather for you");
}

const initWeather = () => {
    console.log('init weather');
    navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
}

initWeather();
