<?php
// Require core file
const DS = DIRECTORY_SEPARATOR;
require dirname(__FILE__) . DS . 'core' . DS . 'Prayer_Times.php';

// By specifying a country, it will automatically detect method/madhab
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

// Create CSV content
$csv = "Date,Fajr,Dhuhr,Asr,Maghrib,Isha\n";
while ($current_date <= $end_date) {
    $times = $prayer->getPrayerTimes($current_date->getTimestamp());

    $csv .= $current_date->format('m-d-Y') . ',';
    $csv .= format_am_pm($times[0]) . ',';
    $csv .= format_am_pm($times[2]) . ',';
    $csv .= format_am_pm($times[3]) . ',';
    $csv .= format_am_pm($times[5]) . ',';
    $csv .= format_am_pm($times[6]) . "\n";

    $current_date->modify('+1 day');
}

// Send headers
header('Content-Type: application/csv');
header('Content-Disposition: attachment; filename="prayer_times.csv";');

// Send CSV content
echo $csv;

function format_am_pm($el) {
    return str_replace(array('%am%', '%pm%'), array('AM', 'PM'), $el);
}