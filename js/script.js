function displayTime() {
    var currentTime = new Date();
    document.getElementById("current-time").innerHTML = currentTime.toLocaleString();
}

setInterval(displayTime, 1000);

const toggleCheckbox = document.querySelector('#toggle-additional-columns');
const additionalColumns = document.querySelectorAll('.additional-column');

toggleCheckbox.addEventListener('change', function () {
    for (let column of additionalColumns) {
        if (this.checked) {
            column.style.display = 'table-cell';
        } else {
            column.style.display = 'none';
        }
    }
});

const settingsContainer = document.querySelector('#settings-container');
const settingsIcon = document.querySelector('#settings-icon');
settingsIcon.addEventListener('click', function () {
    if (settingsContainer.style.display === 'none') {
        settingsContainer.style.display = 'block';
    } else {
        settingsContainer.style.display = 'none';
    }
});