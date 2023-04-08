const prayerTimes = [
    { name: 'fajr', cell: document.getElementById('fajr-time'), adhan: new Audio('/mp3/Fajr-Mishary-Rashid-Alafasy.mp3') },
    { name: 'dhuhr', cell: document.getElementById('dhuhr-time'), adhan: new Audio('/mp3/Adhan-Mishary-Rashid-Alafasy.mp3') },
    { name: 'asr', cell: document.getElementById('asr-time'), adhan: new Audio('/mp3/Adhan-Mishary-Rashid-Alafasy.mp3') },
    { name: 'maghrib', cell: document.getElementById('maghrib-time'), adhan: new Audio('/mp3/Adhan-Mishary-Rashid-Alafasy.mp3') },
    { name: 'isha', cell: document.getElementById('isha-time'), adhan: new Audio('/mp3/Adhan-Mishary-Rashid-Alafasy.mp3') }
];

function checkAdhan(prayer) {
    const now = new Date();
    const currentHour = hours12(now);
    const currentMinute = now.getMinutes();
    const currentPeriod = now.getHours() < 12 ? "AM" : "PM";

    const time = prayer.cell.textContent;
    const period = time.split(' ')[1];
    const hour = parseInt(time.split(':')[0]);
    const minute = parseInt(time.split(':')[1]);

    if (currentHour === hour && currentMinute === minute && currentPeriod === period) {
        prayer.adhan.play();
    }
}

function updateTimes() {
    prayerTimes.forEach(checkAdhan);
}

function hours12(date) {
    return (date.getHours() + 24) % 12 || 12;
}

setInterval(updateTimes, 1000);
