const fajrTimeCell2 = document.getElementById('fajr-time');
const dhuhrTimeCell2 = document.getElementById('dhuhr-time');
const asrTimeCell2 = document.getElementById('asr-time');
const maghribTimeCell2 = document.getElementById('maghrib-time');
const ishaTimeCell2 = document.getElementById('isha-time');

// Create audio objects for the adhan sounds
const fajrAdhan = new Audio('/mp3/Fajr-Mishary-Rashid-Alafasy.mp3');
const regularAdhan = new Audio('/mp3/Adhan-Mishary-Rashid-Alafasy.mp3');
function updateTimes() {
    const now = new Date();
    const currentHour = hours12(now);
    const currentMinute = now.getMinutes();


// Check if it's time for Fajr
    const fajrTime = fajrTimeCell2.textContent;
    console.log(`Fajr time: ${fajrTime}`);

    if (currentHour === parseInt(fajrTime.split(':')[0]) && currentMinute === parseInt(fajrTime.split(':')[1])) {
        console.log("Fajr time: play adhan");
        fajrAdhan.play();
    }

    console.log(currentHour);
    console.log(currentMinute)

// Check if it's time for Dhuhr
    const dhuhrTime = dhuhrTimeCell2.textContent;
    console.log(`Dhuhr time: ${dhuhrTime}`);

    if (currentHour === parseInt(dhuhrTime.split(':')[0]) && currentMinute === parseInt(dhuhrTime.split(':')[1])) {
        console.log("Dhuhr time: play adhan");
        regularAdhan.play();
    }

// Check if it's time for Asr
    const asrTime = asrTimeCell2.textContent;
    console.log(`Asr time: ${asrTime}`);

    if (currentHour === parseInt(asrTime.split(':')[0]) && currentMinute === parseInt(asrTime.split(':')[1])) {
        console.log("Asr time: play adhan");
        regularAdhan.play();
    }

// Check if it's time for Maghrib
    const maghribTime = maghribTimeCell2.textContent;
    console.log(`Maghrib time: ${maghribTime}`);

    if (currentHour === parseInt(maghribTime.split(':')[0]) && currentMinute === parseInt(maghribTime.split(':')[1])) {
        console.log("Maghrib time: play adhan");
        regularAdhan.play();
    }

// Check if it's time for Isha
    const ishaTime = ishaTimeCell2.textContent;
    console.log(`Isha time: ${ishaTime}`);

    if (currentHour === parseInt(ishaTime.split(':')[0]) && currentMinute === parseInt(ishaTime.split(':')[1])) {
        console.log("Isha time: play adhan");
        regularAdhan.play();
    }
}

function hours12(date) { return (date.getHours() + 24) % 12 || 12; }
setInterval(updateTimes, 1000); // call updateTimes() function every second
