function displayTime() {
    var currentTime = new Date();
    document.getElementById("current-time").innerHTML = currentTime.toLocaleString();
}

setInterval(displayTime, 1000);

const toggleCheckbox = document.querySelector('#toggle-additional-columns');
const additionalColumns = document.querySelectorAll('.additional-column');

toggleCheckbox.addEventListener('change', function () {
    for (let column of additionalColumns) {
        if (this.checked) {
            column.style.display = 'table-cell';
        } else {
            column.style.display = 'none';
        }
    }
});

const settingsContainer = document.querySelector('#settings-container');
const settingsIcon = document.querySelector('#settings-icon');
settingsIcon.addEventListener('click', function () {
    if (settingsContainer.style.display === 'none') {
        settingsContainer.style.display = 'block';
    } else {
        settingsContainer.style.display = 'none';
    }
});

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

                temperatureElement.textContent = temperature + ' °F';
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

document.getElementById('file-upload').addEventListener('change', readFile, false);

function readFile(evt) {
    var file = evt.target.files[0];
    var reader = new FileReader();
    reader.onload = function() {
        var csv = reader.result;
        var lines = csv.split('\n');
        var prayer_times = [];

        for (var i = 1; i < lines.length; i++) {
            var line = lines[i];
            var parts = line.split(',');
            prayer_times.push({
                date: parts[0],
                fajr: parts[1],
                dhuhr: parts[2],
                asr: parts[3],
                maghrib: parts[4],
                isha: parts[5]
            });
        }

        // Do something with the prayer times array
        console.log(prayer_times);
    };

    reader.readAsText(file);
}
