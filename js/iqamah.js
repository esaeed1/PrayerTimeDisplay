const checkbox = document.getElementById('show-iqamah');
const iqamahCells = document.querySelectorAll('.iqamah-time');

const fajrTimeCell = document.getElementById('fajr-time');
const dhuhrTimeCell = document.getElementById('dhuhr-time');
const asrTimeCell = document.getElementById('asr-time');
const maghribTimeCell = document.getElementById('maghrib-time');
const ishaTimeCell = document.getElementById('isha-time');

const iqamahFajrTimeCell = document.getElementById('fajr-iqamah');
const iqamahDhuhrTimeCell = document.getElementById('dhuhr-iqamah');
const iqamahAsrTimeCell = document.getElementById('asr-iqamah');
const iqamahMaghribTimeCell = document.getElementById('maghrib-iqamah');
const iqamahIshaTimeCell = document.getElementById('isha-iqamah');

const fajrAdjustmentInput = document.getElementById('fajr-adjustment');
const dhuhrAdjustmentInput = document.getElementById('dhuhr-adjustment');
const asrAdjustmentInput = document.getElementById('asr-adjustment');
const maghribAdjustmentInput = document.getElementById('maghrib-adjustment');
const ishaAdjustmentInput = document.getElementById('isha-adjustment');

checkbox.addEventListener('change', function () {
    iqamahCells.forEach(cell => cell.style.display = this.checked ? '' : 'none');
    updateIqamahTimes();
});

fajrAdjustmentInput.addEventListener('change', updateIqamahTimes);
dhuhrAdjustmentInput.addEventListener('change', updateIqamahTimes);
asrAdjustmentInput.addEventListener('change', updateIqamahTimes);
maghribAdjustmentInput.addEventListener('change', updateIqamahTimes);
ishaAdjustmentInput.addEventListener('change', updateIqamahTimes);

function addMinutes(timeString, minutes) {
    const [hours, minutesStr] = timeString.split(':');
    const totalMinutes = parseInt(hours) * 60 + parseInt(minutesStr) + minutes;
    const newHours = Math.floor(totalMinutes / 60);
    const newMinutes = (totalMinutes % 60).toString().padStart(2, '0');
    const ampm = newHours >= 12 ? 'PM' : 'AM';
    const displayHours = (newHours % 12 || 12).toString().padStart(2, '0');
    return `${displayHours}:${newMinutes} ${ampm}`;
}

function updateIqamahTimes() {
    iqamahFajrTimeCell.textContent = addMinutes(fajrTimeCell.textContent, parseInt(fajrAdjustmentInput.value));
    iqamahDhuhrTimeCell.textContent = addMinutes(dhuhrTimeCell.textContent, parseInt(dhuhrAdjustmentInput.value));
    iqamahAsrTimeCell.textContent = addMinutes(asrTimeCell.textContent, parseInt(asrAdjustmentInput.value));
    iqamahMaghribTimeCell.textContent = addMinutes(maghribTimeCell.textContent, parseInt(maghribAdjustmentInput.value));
    iqamahIshaTimeCell.textContent = addMinutes(ishaTimeCell.textContent, parseInt(ishaAdjustmentInput.value));
}

