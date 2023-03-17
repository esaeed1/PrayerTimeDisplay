// select the file input element
const fileInput = document.getElementById('csv-file-input');
const parseButton = document.getElementById('parse-csv-button');
const prayerTimesTable = document.getElementById('prayer-times');

// listen for file upload event
parseButton.addEventListener('click', () => {
    const file = fileInput.files[0];

    // read the file as text
    const reader = new FileReader();
    reader.readAsText(file);

    // wait for the file to be read
    reader.onload = () => {
        // parse the CSV file
        const csv = reader.result;
        const rows = csv.split('\n');
        const headers = rows[0].split(',');
        const data = [];
        for (let i = 1; i < rows.length; i++) {
            const row = rows[i].split(',');
            if (row.length === headers.length) {
                const obj = {};
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j].trim()] = row[j].trim();
                }
                data.push(obj);
            }
        }

        // get today's date
        const today = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).replace(/\//g, "-");

        // find today's prayer time
        const todayPrayerTime = data.find((item) => item.Date === today);
        if (todayPrayerTime) {
            const fajrTime = todayPrayerTime.Fajr;
            const sunRiseTime = todayPrayerTime.Sunrise;
            const dhuhrTime = todayPrayerTime.Dhuhr;
            const asrTime = todayPrayerTime.Asr;
            const maghribTime = todayPrayerTime.Maghrib;
            const ishaTime = todayPrayerTime.Isha;

            updatePrayerTimeTable(fajrTime, sunRiseTime, dhuhrTime, asrTime, maghribTime, ishaTime);

            // get today's date
            const today = new Date();

            // find the index of the first row for today's date
            const startIndex = data.findIndex((item) => new Date(item.Date) >= today);

            // filter the rows from today's date to the end of the year
            const prayerTimesData = data.slice(startIndex).filter((item) => {
                const date = new Date(item.Date);
                return date.getFullYear() === today.getFullYear();
            });

            // need to add todays prayer time in local storage
            prayerTimesData.unshift(data[data.findIndex((item) => new Date(item.Date).toDateString() === today.toDateString())]);

            // save the prayer times data to localStorage
            localStorage.setItem('prayerTimesData', JSON.stringify(prayerTimesData));


        } else {
            console.log('No prayer time data found for today.');
        }
    };
});

// check if prayer times data is available in localStorage on reload
const currentDate = new Date();
const year = currentDate.getFullYear();
const month = String(currentDate.getMonth() + 1).padStart(2, '0');
const day = String(currentDate.getDate()).padStart(2, '0');
const formattedDate = `${month}-${day}-${year}`;

// Retrieve the prayer times data from local storage
const prayerTimesData = JSON.parse(localStorage.getItem('prayerTimesData'));

function updatePrayerTimeTable(fajrTime, sunRiseTime, dhuhrTime, asrTime, maghribTime, ishaTime) {
    // update the table with the prayer times
    const fajrTimeCell = document.getElementById('fajr-time');
    const sunRiseCell = document.getElementById('sunrise-time');
    const dhuhrTimeCell = document.getElementById('dhuhr-time');
    const asrTimeCell = document.getElementById('asr-time');
    const maghribTimeCell = document.getElementById('maghrib-time');
    const ishaTimeCell = document.getElementById('isha-time');

    fajrTimeCell.textContent = fajrTime;
    sunRiseCell.textContent = sunRiseTime;
    dhuhrTimeCell.textContent = dhuhrTime;
    asrTimeCell.textContent = asrTime;
    maghribTimeCell.textContent = maghribTime;
    ishaTimeCell.textContent = ishaTime;
}

// Check if prayerTimesData is not null or undefined before accessing it
if (prayerTimesData) {
    // Find the prayer times for the current date
    let todaysPrayerTimes = null;
    prayerTimesData.forEach((prayerTime) => {
        if (prayerTime.Date === formattedDate) {
            todaysPrayerTimes = prayerTime;
        }
    });

    // Display the prayer times for the current date in table cells
    if (todaysPrayerTimes) {
        const fajrTime = todaysPrayerTimes.Fajr;
        const sunRiseTime = todaysPrayerTimes.Sunrise;
        const dhuhrTime = todaysPrayerTimes.Dhuhr;
        const asrTime = todaysPrayerTimes.Asr;
        const maghribTime = todaysPrayerTimes.Maghrib;
        const ishaTime = todaysPrayerTimes.Isha;
        updatePrayerTimeTable(fajrTime, sunRiseTime, dhuhrTime, asrTime, maghribTime, ishaTime);
    } else {
        console.log(`No prayer times found for ${formattedDate}`);
    }
} else {
    console.log('No prayer times data found');
}

//refresh page so i can get new data for next day
setInterval(function() {
    let nowHour = new Date().getHours()
    let nowMinutes = new Date().getMinutes()
    let nowSeconds = new Date().getSeconds()

    if (nowHour == 0 && nowMinutes == 0 && nowSeconds <= 1){
        location.reload();
    }
}, 1000);
