const checkbox = document.getElementById('show-iqamah');
const iqamahCells = document.querySelectorAll('.iqamah-time');
checkbox.addEventListener('change', function() {
    iqamahCells.forEach(cell => cell.style.display = this.checked ? '' : 'none');

    const fajrTimeCell = document.getElementById('fajr-time');
    const dhuhrTimeCell = document.getElementById('dhuhr-time');
    const asrTimeCell = document.getElementById('asr-time');
    const maghribTimeCell = document.getElementById('maghrib-time');
    const ishaTimeCell = document.getElementById('isha-time');

    const iFajrTimeCell = document.getElementById('fajr-iqamah');
    const iDhuhrTimeCell = document.getElementById('dhur-iqamah');
    const iAsrTimeCell = document.getElementById('asr-iqamah');
    const iMaghribTimeCell = document.getElementById('maghrib-iqamah');
    const iIshaTimeCell = document.getElementById('isha-iqamah');

    console.log(fajrTimeCell);
    console.log(dhuhrTimeCell);
    console.log(asrTimeCell);
    console.log(maghribTimeCell);
    console.log(ishaTimeCell);


    iFajrTimeCell.textContent = fajrTimeCell.textContent;
    iDhuhrTimeCell.textContent = dhuhrTimeCell.textContent;
    iAsrTimeCell.textContent = asrTimeCell.textContent;
    iMaghribTimeCell.textContent = maghribTimeCell.textContent;
    iIshaTimeCell.textContent = ishaTimeCell.textContent;

});
