// select the file input element
const fileInput = document.getElementById('csv-file-input');
const parseButton = document.getElementById('parse-csv-button');

// select the prayer time elements
const fajrTime = document.getElementById('fajr-time');
const dhuhrTime = document.getElementById('dhuhr-time');
const asrTime = document.getElementById('asr-time');
const maghribTime = document.getElementById('maghrib-time');
const ishaTime = document.getElementById('isha-time');

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
        const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, "-");

        // find today's prayer time
        const todayPrayerTime = data.find((item) => item.Date === today);
        if (todayPrayerTime) {
            fajrTime.textContent = todayPrayerTime.Fajr;
            dhuhrTime.textContent = todayPrayerTime.Dhuhr;
            asrTime.textContent = todayPrayerTime.Asr;
            maghribTime.textContent = todayPrayerTime.Maghrib;
            ishaTime.textContent = todayPrayerTime.Isha;
        } else {
            console.log('No prayer time data found for today.');
        }
    };
});
