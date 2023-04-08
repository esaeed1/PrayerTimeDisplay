const toggleWeatherInfo = document.getElementById('toggle-weather-info');
const weatherInfo = document.getElementById('weather-info');

toggleWeatherInfo.addEventListener('click', () => {
    if (toggleWeatherInfo.checked) {
        // Make a request to the weather-gov API and display the weather info
        fetch('https://api.weather.gov/gridpoints/DTX/65,79/forecast/hourly')
            .then(response => response.json())
            .then(data => {
                const temperature = data.properties.periods[0].temperature;
                const windSpeed = data.properties.periods[0].windSpeed;
                const temperatureElement = document.getElementById('temperature');
                const windSpeedElement = document.getElementById('wind-speed');

                temperatureElement.textContent = temperature + '°F';
                windSpeedElement.textContent = windSpeed;
            })
            .catch(error => {
                console.log('Error:', error);
            });

        // Show the weather info
        weatherInfo.style.display = 'block';
    } else {
        // Hide the weather info
        weatherInfo.style.display = 'none';
    }
});