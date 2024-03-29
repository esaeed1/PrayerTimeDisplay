<html lang="EN">
<meta charset="UTF-8">
<link rel="shortcut icon" href="/images/logo.png" type="image/x-icon">

<head>
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <title>Prayer Time Display</title>
    <link rel="icon" type="image/x-icon" href="/images/logo.png">
    <script src="/js/hijri-date.js"></script>
</head>

<div id="hijri-date"></div>
<script>
    var hijriDateElement = document.getElementById("hijri-date");
    hijriDateElement.innerHTML = writeHijriDate();
</script>

<body onload="displayTime()">
<div id="current-time-container">
    <span id="current-time"></span>
</div>

<div id="settings-icon">
    <img src="/images/settings-icon.png" alt="Settings Icon">
</div>

<div id="settings-container" style="display: none;">
    <label for="toggle-additional-columns"></label>

    <input type="checkbox" id="toggle-additional-columns"> Show Sunnah Rawatib
    <br>
    <input type="checkbox" id="toggle-weather-info">
    <label for="toggle-weather-info">Show Weather Info</label>
    <br>
    <input type="checkbox" id="toggle-sunrise">
    <label for="toggle-sunrise">Show Sunrise Time</label>
    <br>
    <label><input type="checkbox" id="show-iqamah"> Show Iqamah Time</label>
    <form method="POST" action="/php/downloadYearlyTime.php">
        <br>
        <button type="submit" name="submit">Generate CSV</button>
        <br>
    </form>
    <br>
    <div id="csv-upload-container">
        <input type="file" id="csv-file-input">
        <button id="parse-csv-button">Upload Prayer Time</button>
    </div>

    <label>
        Adjust Fajr Iqamah:
        <input type="number" id="fajr-adjustment" min="-60" max="60" value="15">
    </label>
    <br>
    <label>
        Adjust Dhuhr Iqamah:
        <input type="number" id="dhuhr-adjustment" min="-60" max="60" value="10">
    </label>
    <br>
    <label>
        Adjust Asr Iqamah:
        <input type="number" id="asr-adjustment" min="-60" max="60" value="10">
    </label>
    <br>
    <label>
        Adjust Maghrib Iqamah:
        <input type="number" id="maghrib-adjustment" min="-60" max="60" value="7">
    </label>
    <br>
    <label>
        Adjust Isha Iqamah:
        <input type="number" id="isha-adjustment" min="-60" max="60" value="7">
    </label>

</div>

<table id="prayer-times">
    <thead>
    <tr>
        <th>Prayer</th>
        <th>Time</th>
        <th class="iqamah-time" style="display: none;">Iqamah</th>
        <th class="additional-column" style="display: none;">Before</th>
        <th class="additional-column" style="display: none;">After</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>Fajr</td>
        <td id="fajr-time"></td>
        <td id="fajr-iqamah" class="iqamah-time" style="display: none;"></td>
        <td class="additional-column" style="display: none;">2</td>
        <td class="additional-column" style="display: none;">0</td>

    </tr>
    <tr id="sunrise-row" style="display: none;">
        <td>Sunrise</td>
        <td id="sunrise-time"></td>
    </tr>
    <tr>
        <td>Dhuhr</td>
        <td id="dhuhr-time"></td>
        <td id="dhuhr-iqamah" class="iqamah-time" style="display: none;"></td>
        <td class="additional-column" style="display: none;">2+2</td>
        <td class="additional-column" style="display: none;">2</td>
    </tr>
    <tr>
        <td>Asr</td>
        <td id="asr-time"></td>
        <td id="asr-iqamah" class="iqamah-time" style="display: none;"></td>
        <td class="additional-column" style="display: none;">0</td>
        <td class="additional-column" style="display: none;">0</td>
    </tr>
    <tr>
        <td>Maghrib</td>
        <td id="maghrib-time"></td>
        <td id="maghrib-iqamah" class="iqamah-time" style="display: none;"></td>
        <td class="additional-column" style="display: none;">0</td>
        <td class="additional-column" style="display: none;">2</td>
    </tr>
    <tr>
        <td>Isha</td>
        <td id="isha-time"></td>
        <td id="isha-iqamah" class="iqamah-time" style="display: none;"></td>
        <td class="additional-column" style="display: none;">0</td>
        <td class="additional-column" style="display: none;">2</td>
    </tr>
    </tbody>
</table>

<script src="/js/script.js"></script>
<script src="/js/image.js"></script>
<script src="/js/csv.js"></script>
<script src="/js/iqamah.js"></script>
<script src="/js/sunnahRawatib.js"></script>
<script src="/js/mp3.js"></script>

<button onclick="clearLocalStorage()">Clear localStorage</button>


</body>

</html>
