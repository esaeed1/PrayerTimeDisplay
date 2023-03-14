// select the file input element
const fileInput = document.getElementById('csv-file-input');
const parseButton = document.getElementById('parse-csv-button');

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
            const fajrTime = todayPrayerTime.Fajr;
            const dhuhrTime = todayPrayerTime.Dhuhr;
            const asrTime = todayPrayerTime.Asr;
            const maghribTime = todayPrayerTime.Maghrib;
            const ishaTime = todayPrayerTime.Isha;

            // display prayer times
            console.log(`Fajr: ${fajrTime}`);
            console.log(`Dhuhr: ${dhuhrTime}`);
            console.log(`Asr: ${asrTime}`);
            console.log(`Maghrib: ${maghribTime}`);
            console.log(`Isha: ${ishaTime}`);
        } else {
            console.log('No prayer time data found for today.');
        }
    };
});
