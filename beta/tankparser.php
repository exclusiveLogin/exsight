<?php
$ini_tank_path = "../opcdata/data_tank";
$ini_asnload_path = "../opcdata/asn_to_load.ini";
$ini_meteo_path = "../opcdata/meteodata.ini";

require_once "../db.php";
require_once "../db_hd.php";
//парсинг METEO
$f_meteo_exist = file_exists($ini_meteo_path);
if($f_meteo_exist){
    $meteo_ini_arr =  parse_ini_file($ini_meteo_path);

    $meteo_wind_nb = null;
    $meteo_wind_p = null;
    $meteo_temperature_air = null;
    $meteo_wind_direction = null;
    $fixtime = null;

    if (isset($meteo_ini_arr['meteo_temperature_air'])) {
        $meteo_temperature_air = round(((float)str_replace(",", ".", $meteo_ini_arr['meteo_temperature_air'])), 1);
        //echo "temp:".$meteo_temperature_air."<br>";
    }
    if (isset($meteo_ini_arr['meteo_windforce_nb'])) {
        $meteo_wind_nb = round(((float)str_replace(",", ".", $meteo_ini_arr['meteo_windforce_nb'])), 1);
        //echo "wind_nb:".$meteo_wind_nb."<br>";
    }
    if (isset($meteo_ini_arr['meteo_windforce_p'])) {
        $meteo_wind_p = round(((float)str_replace(",", ".", $meteo_ini_arr['meteo_windforce_p'])), 1);
        //echo "wind_p:".$meteo_wind_p."<br>";
    }
    if (isset($meteo_ini_arr['meteo_winddirection_p'])) {
        $meteo_wind_direction = round(((float)str_replace(",", ".", $meteo_ini_arr['meteo_winddirection_p'])), 1);
        //echo "wind_p:".$meteo_wind_p."<br>";
    }
    if (isset($meteo_ini_arr['fixtime'])) {
        $fixtime = $meteo_ini_arr['fixtime'];
        //echo "wind_p:".$meteo_wind_p."<br>";
    }
    $q = "INSERT INTO `meteo` (`wind_p`,`wind_nb`,`temperature_air`,`wind_direction`,`fixtime`) VALUES (" . $meteo_wind_p . "," . $meteo_wind_nb . ",
        ".$meteo_temperature_air.",".$meteo_wind_direction.",\"".$fixtime."\") ON DUPLICATE KEY UPDATE 
        `wind_p` = " . $meteo_wind_p . ",
        `wind_nb`=".$meteo_wind_nb.",
        `wind_direction`=".$meteo_wind_direction.",
        `temperature_air`=".$meteo_temperature_air.",
        `fixtime`=\"".$fixtime."\";";
    $mysql->query($q);
    //echo "q:".$q."<br>";
}



//парсинг ASNLOAD
$f_asn_exist = file_exists($ini_asnload_path);
if($f_asn_exist){
    $asn_ini_arr = parse_ini_file($ini_asnload_path);

    $q = "DELETE FROM `asn2load`;";
    $mysql->query($q);

    foreach ($asn_ini_arr as $key => $val){
        $q = "INSERT INTO `asn2load` (`product`,`value`) VALUES (\"$key\",\"$val\");";
        $mysql->query($q);
    }
}
//цикл парсинга с обходом ошибок
//движок цикла
for($i=1;$i<80;$i++) {
    //проверка целостности файла
    $f_exist = file_exists($ini_tank_path . $i . ".ini");
    //echo "tank_".$i.":".$f_exist."<br>";
    //внутренние переменные
    $tank_mass;
    $tank_level;
    $tank_volume;
    $tank_plot;
    $tank_temp;
    $tank_max_level;
    $tank_templab;
    $tank_plotlab;
    $tank_avlevel;
    $tank_signallevel;
    $tank_pereliv;
    $tank_product;
    $tank_vaportemp;

    if ($f_exist) {
        $ini_arr = parse_ini_file($ini_tank_path . $i . ".ini");
//        echo "<p>----VARDUMP for $i-----</p>";
//        var_dump($ini_arr);
//        echo "<p>---------</p>";

        if (isset($ini_arr['tank_mass'])) {
            if($i==2){
                $tank_mass = round(((float)str_replace(",", ".", $ini_arr['tank_mass'])/1000), 1);
                //echo "i:".$i."-2 tank_mass=".$tank_mass."<br>";
            }else{
                $tank_mass = round((float)str_replace(",", ".", $ini_arr['tank_mass']), 1);
                //echo "i:".$i."-not 2 tank_mass=".$tank_mass."<br>";
            }

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
            if($i==2){
                $tank_volume = round(((float)str_replace(",", ".", $ini_arr['tank_volume'])/1000), 1);
            }else{
                $tank_volume = round((float)str_replace(",", ".", $ini_arr['tank_volume']), 1);
            }

            $q = "INSERT INTO `rt_tanks` (`num`,`volume`) VALUES (" . $i . "," . $tank_volume . ") ON DUPLICATE KEY UPDATE `volume` = " . $tank_volume . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['tank_temp'])) {
            $tank_temp = round((float)str_replace(",", ".", $ini_arr['tank_temp']), 2);
            $q = "INSERT INTO `rt_tanks` (`num`,`temp`) VALUES (" . $i . "," . $tank_temp . ") ON DUPLICATE KEY UPDATE `temp` = " . $tank_temp . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['tank_level'])) {
            $tank_level = round((float)str_replace(",", ".", $ini_arr['tank_level']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`level`) VALUES (" . $i . "," . $tank_level . ") ON DUPLICATE KEY UPDATE `level` = " . $tank_level . ";";
            $mysql->query($q);
        }else{
            $tank_level = 0;
            $q = "INSERT INTO `rt_tanks` (`num`,`level`) VALUES (" . $i . ",-1000) ON DUPLICATE KEY UPDATE `level` = -1000;";
            $mysql->query($q);
        }
        if (isset($ini_arr['tank_maxlevel'])) {
            $tank_max_level = round((float)str_replace(",", ".", $ini_arr['tank_maxlevel']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`max_level`) VALUES (" . $i . "," . $tank_max_level . ") ON DUPLICATE KEY UPDATE `max_level` = " . $tank_max_level . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['tank_templab'])) {
            $tank_templab = round((float)str_replace(",", ".", $ini_arr['tank_templab']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`templab`) VALUES (" . $i . "," . $tank_templab . ") ON DUPLICATE KEY UPDATE `templab` = " . $tank_templab . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['tank_plotlab'])) {
            $tank_plotlab = round((float)str_replace(",", ".", $ini_arr['tank_plotlab']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`plotlab`) VALUES (" . $i . "," . $tank_plotlab . ") ON DUPLICATE KEY UPDATE `plotlab` = " . $tank_plotlab . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['tank_avlevel'])) {
            $tank_avlevel = round((float)str_replace(",", ".", $ini_arr['tank_avlevel']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`avlevel`) VALUES (" . $i . "," . $tank_avlevel . ") ON DUPLICATE KEY UPDATE `avlevel` = " . $tank_avlevel . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['tank_signallevel'])) {
            $tank_signallevel = round((float)str_replace(",", ".", $ini_arr['tank_signallevel']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`signallevel`) VALUES (" . $i . "," . $tank_signallevel . ") ON DUPLICATE KEY UPDATE `signallevel` = " . $tank_signallevel . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['tank_pereliv'])) {
            $tank_pereliv = round((float)str_replace(",", ".", $ini_arr['tank_pereliv']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`pereliv`) VALUES (" . $i . "," . $tank_pereliv . ") ON DUPLICATE KEY UPDATE `pereliv` = " . $tank_pereliv . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['tank_product'])) {
            $tank_product = round((float)str_replace(",", ".", $ini_arr['tank_product']), 1);
            $q = "INSERT INTO `rt_tanks` (`num`,`product`) VALUES (" . $i . "," . $tank_product . ") ON DUPLICATE KEY UPDATE `product` = " . $tank_product . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['tank_vaportemp'])) {
            $tank_vaportemp = round((float)str_replace(",", ".", $ini_arr['tank_vaportemp']), 2);
            $q = "INSERT INTO `rt_tanks` (`num`,`tempvapor`) VALUES (" . $i . "," . $tank_vaportemp . ") ON DUPLICATE KEY UPDATE `tempvapor` = " . $tank_vaportemp . ";";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
        if (isset($ini_arr['fixtime'])) {
            $tank_fixtime = $ini_arr['fixtime'];
            $q = "INSERT INTO `rt_tanks` (`num`,`fixtime`) VALUES (" . $i . ",'" . $tank_fixtime . "') ON DUPLICATE KEY UPDATE `fixtime` = '" . $tank_fixtime . "';";
            $mysql->query($q);
            //echo "q:".$q."<br>";
        }
    }
    $q_hd = "INSERT INTO `res".$i."_hd` (`level`,`plot`,`volume`,`temperature`,`vapor_temperature`,`mass`) VALUES ($tank_level,$tank_plot,$tank_volume,$tank_temp,$tank_vaportemp,$tank_mass);";
    //echo $q_hd;
    $mysql_res_hd->query($q_hd);
}

