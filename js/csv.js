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

            // get today's date
            const today = new Date();

            // find the index of the first row for today's date
            const startIndex = data.findIndex((item) => new Date(item.Date) >= today);

            // filter the rows from today's date to the end of the year
            const prayerTimesData = data.slice(startIndex).filter((item) => {
                const date = new Date(item.Date);
                return date.getFullYear() === today.getFullYear();
            });

            // save the prayer times data to localStorage
            localStorage.setItem('prayerTimesData', JSON.stringify(prayerTimesData));


        } else {
            console.log('No prayer time data found for today.');
        }
    };
});

// check if prayer times data is available in localStorage on reload
window.addEventListener('load', () => {
    const prayerTimesData = localStorage.getItem('prayerTimesData');
    if (prayerTimesData) {
        const parsedData = JSON.parse(prayerTimesData);
        const fajrTimeCell = document.getElementById('fajr-time');
        const sunRiseCell = document.getElementById('sunrise-time');
        const dhuhrTimeCell = document.getElementById('dhuhr-time');
        const asrTimeCell = document.getElementById('asr-time');
        const maghribTimeCell = document.getElementById('maghrib-time');
        const ishaTimeCell = document.getElementById('isha-time');
        fajrTimeCell.textContent = parsedData.fajr;
        sunRiseCell.textContent = parsedData.sunrise;
        dhuhrTimeCell.textContent = parsedData.dhuhr;
        asrTimeCell.textContent = parsedData.asr;
        maghribTimeCell.textContent = parsedData.maghrib;
        ishaTimeCell.textContent = parsedData.isha;
    }
});
