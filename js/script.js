function displayTime() {
    var currentTime = new Date();
    document.getElementById("current-time").innerHTML = currentTime.toLocaleString();
}

setInterval(displayTime, 1000);

const settingsContainer = document.querySelector('#settings-container');
const settingsIcon = document.querySelector('#settings-icon');
settingsIcon.addEventListener('click', function () {
    if (settingsContainer.style.display === 'none') {
        settingsContainer.style.display = 'block';
    } else {
        settingsContainer.style.display = 'none';
    }
});


var sunriseCheckbox = document.getElementById("toggle-sunrise");
var sunriseRow = document.getElementById("sunrise-row");

sunriseCheckbox.addEventListener("change", function() {
    if (sunriseCheckbox.checked) {
        sunriseRow.style.display = "table-row";
    } else {
        sunriseRow.style.display = "none";
    }
});


function clearLocalStorage() {
    localStorage.clear();
    sessionStorage.clear()

    location.reload(true);
}