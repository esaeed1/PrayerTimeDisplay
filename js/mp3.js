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
    const currentPeriod = now.getHours() < 12 ? "AM" : "PM";


    const fajrTime = fajrTimeCell2.textContent;
    const fajrPeriod = fajrTime.split(' ')[1];
    if (currentHour === parseInt(fajrTime.split(':')[0]) && currentMinute === parseInt(fajrTime.split(':')[1]) && currentPeriod === fajrPeriod) {
        fajrAdhan.play();
    }

    const dhuhrTime = dhuhrTimeCell2.textContent;
    const dhuhrPeriod = dhuhrTime.split(' ')[1];
    if (currentHour === parseInt(dhuhrTime.split(':')[0]) && currentMinute === parseInt(dhuhrTime.split(':')[1]) && currentPeriod === dhuhrPeriod) {
        regularAdhan.play();
    }

    const asrTime = asrTimeCell2.textContent;
    const asrPeriod = asrTime.split(' ')[1];
    if (currentHour === parseInt(asrTime.split(':')[0]) && currentMinute === parseInt(asrTime.split(':')[1]) && currentPeriod === asrPeriod) {
        regularAdhan.play();
    }

    const maghribTime = maghribTimeCell2.textContent;
    const maghribPeriod = maghribTime.split(' ')[1];
    if (currentHour === parseInt(maghribTime.split(':')[0]) && currentMinute === parseInt(maghribTime.split(':')[1]) && currentPeriod === maghribPeriod) {
        regularAdhan.play();
    }

    const ishaTime = ishaTimeCell2.textContent;
    const ishaPeriod = ishaTime.split(' ')[1];
    if (currentHour === parseInt(ishaTime.split(':')[0]) && currentMinute === parseInt(ishaTime.split(':')[1]) && currentPeriod === ishaPeriod) {
        regularAdhan.play();
    }

}

function hours12(date) {
    return (date.getHours() + 24) % 12 || 12;
}

setInterval(updateTimes, 1000);
