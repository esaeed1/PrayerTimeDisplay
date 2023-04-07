const checkbox = document.getElementById('show-iqamah');
const iqamahCells = document.querySelectorAll('.iqamah-time');
checkbox.addEventListener('change', function () {
    iqamahCells.forEach(cell => cell.style.display = this.checked ? '' : 'none');

    const iqamahFajrTimeCell = document.getElementById('fajr-iqamah');
    const iqamahDhuhrTimeCell = document.getElementById('dhuhr-iqamah');
    const iqamahAsrTimeCell = document.getElementById('asr-iqamah');
    const iqamahMaghribTimeCell = document.getElementById('maghrib-iqamah');
    const iqamahIshaTimeCell = document.getElementById('isha-iqamah');

    iqamahFajrTimeCell.textContent = (document.getElementById('fajr-time')).textContent;
    iqamahDhuhrTimeCell.textContent = (document.getElementById('dhuhr-time')).textContent;
    iqamahAsrTimeCell.textContent = (document.getElementById('asr-time')).textContent;
    iqamahMaghribTimeCell.textContent = (document.getElementById('maghrib-time')).textContent;
    iqamahIshaTimeCell.textContent = (document.getElementById('isha-time')).textContent;

});
