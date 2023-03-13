<?php
// Require core file
const DS = DIRECTORY_SEPARATOR;
require dirname(__FILE__) . DS . 'core' . DS . 'Prayer_Times.php';


// By specifing a country, it will automatically detect method/madhab
$settings = new Settings('US');
$settings->location     = array('Detroit', 'Michigan', 'US');
$settings->latitude     = 42.4056;
$settings->longitude    = -83.0531;
$settings->timezone     = 'America/Detroit';

// Generate prayer times for each day of the current year
$current_year = date('Y');
$start_date = new DateTime($current_year . '-01-01');
$end_date = new DateTime($current_year . '-12-31');
$current_date = clone $start_date;

// Set Prayer Object
$prayer = new Prayer_Times($settings);

while ($current_date <= $end_date) {
    $times = $prayer->getPrayerTimes($current_date->getTimestamp());

    echo '--------------------';
    echo $current_date->format('M jS Y') . PHP_EOL;
    echo 'Fajr: '      . format_am_pm($times[0]) . PHP_EOL;
    echo 'Dhuhr: '     . format_am_pm($times[2]) . PHP_EOL;
    echo 'Asr: '       . format_am_pm($times[3]) . PHP_EOL;
    echo 'Maghrib: '   . format_am_pm($times[5]) . PHP_EOL;
    echo 'Isha: '      . format_am_pm($times[6]) . PHP_EOL;

    $current_date->modify('+1 day');
}

function format_am_pm($el) { return str_replace(array('%am%', '%pm%'), array('AM', 'PM'), $el);}
