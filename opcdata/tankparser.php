<?php
$ini_tank_path = "data_tank";

require_once "../db.php";

//цикл парсинга с обходом ошибок
//движок цикла
for($i=1;$i<20;$i++) {
    //проверка целостности файла
    $f_exist = file_exists($ini_tank_path . $i . ".ini");
    //echo "tank_".$i.":".$f_exist."<br>";
    //внутренние переменные
    $tank_mass = 888;
    $tank_level = 888;
    $tank_volume = 888;
    $tank_plot = 888;
    $tank_temp = 888;
    $tank_max_level = 888;

    if ($f_exist) {
        $ini_arr = parse_ini_file($ini_tank_path . $i . ".ini");

        //var_dump($ini_arr);

        if (isset($ini_arr['tank_mass'])) {
            $tank_mass = round((float)str_replace(",", ".", $ini_arr['tank_mass']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`mass`) VALUES (" . $i . "," . $tank_mass . ") ON DUPLICATE KEY UPDATE `mass` = " . $tank_mass . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }

        if (isset($ini_arr['tank_plot'])) {
            $tank_plot = round((float)str_replace(",", ".", $ini_arr['tank_plot']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`plot`) VALUES (" . $i . "," . $tank_plot . ") ON DUPLICATE KEY UPDATE `plot` = " . $tank_plot . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }

        if (isset($ini_arr['tank_volume'])) {
            $tank_volume = round((float)str_replace(",", ".", $ini_arr['tank_volume']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`volume`) VALUES (" . $i . "," . $tank_volume . ") ON DUPLICATE KEY UPDATE `volume` = " . $tank_volume . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }

        if (isset($ini_arr['tank_temp'])) {
            $tank_temp = round((float)str_replace(",", ".", $ini_arr['tank_temp']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`temp`) VALUES (" . $i . "," . $tank_temp . ") ON DUPLICATE KEY UPDATE `temp` = " . $tank_temp . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['tank_level'])) {
            $tank_level = round((float)str_replace(",", ".", $ini_arr['tank_level']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`level`) VALUES (" . $i . "," . $tank_level . ") ON DUPLICATE KEY UPDATE `level` = " . $tank_level . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['tank_max_lvl'])) {
            $tank_max_level = round((float)str_replace(",", ".", $ini_arr['tank_max_lvl']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`max_level`) VALUES (" . $i . "," . $tank_max_level . ") ON DUPLICATE KEY UPDATE `max_level` = " . $tank_max_level . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
    }
}