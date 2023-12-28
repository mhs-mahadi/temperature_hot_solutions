document.getElementById('search').addEventListener('click', function() {
    const api_key = 'e57eab60004872f7d12f35489d7eee26';
    const city = document.getElementById('city_name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${api_key}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const country = data.sys.country;
            const fullName = `${data.name}, ${country}`;
            const temperatureInCelsius = Math.floor(data.main.temp - 273.15);
            const weatherIconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

            document.getElementById('city').innerText = fullName;
            document.getElementById('temperature').innerText = temperatureInCelsius;
            document.getElementById('weather_icon').setAttribute('src', weatherIconUrl);
            document.getElementById('weather_mode').innerText = data.weather[0].main;
        })
        .catch(error => console.error('Error:', error));
});