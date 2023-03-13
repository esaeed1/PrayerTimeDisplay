<?php
if (isset($_FILES['prayer_times_file'])) {
    $file = $_FILES['prayer_times_file'];
    $filename = $file['name'];
    $filetmpname = $file['tmp_name'];
    $filesize = $file['size'];
    $filetype = $file['type'];
    $fileext = explode('.', $filename);
    $fileext = strtolower(end($fileext));

    // Check if file is a CSV file
    if ($fileext === 'csv') {
        // Read CSV file into array
        $file = fopen($filetmpname, 'r');
        $csv_data = array();
        while ($row = fgetcsv($file)) {
            $csv_data[] = $row;
        }
        fclose($file);

        // Convert CSV data to HTML table
        $table_html = '<table>';
        foreach ($csv_data as $row) {
            $table_html .= '<tr>';
            foreach ($row as $cell) {
                $table_html .= '<td>' . htmlspecialchars($cell) . '</td>';
            }
            $table_html .= '</tr>';
        }
        $table_html .= '</table>';

        // Display HTML table to user
        echo $table_html;
    } else {
        echo 'Error: File must be a CSV file';
    }
}
?>
