<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Idade do usuário</title>
</head>
<body>

<?php

// 1st way to do it
function calcAge($date){
    $time = strtotime($date);
    if($time === false){
        return '';
    }

    $year_diff = '';
    $date = date('Y-m-d', $time);
    list($year, $month, $day) = explode('-', $date);
    $year_diff = date('Y') - $year;
    $month_diff = date('m') - $month;
    $day_diff = date('d') - $day;
    if($day_diff < 0 || $month_diff < 0) $year_diff;
    return $year_diff;

}

echo calcAge('1988/05/28'). ' '. 'anos de idade'.'<br>';

// Forma 02 de fazer:
$birthdayDate = '1988/06/17';
$date = new DateTime($birthdayDate);
$interval = $date->diff( new DateTime(date('Y-m-d')));
echo $interval->format('%Y anos');
?>
 
</body>
</html>