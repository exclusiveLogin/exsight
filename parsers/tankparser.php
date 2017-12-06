<?php
require_once "../path.php";

$ini_tank_path = $path_opc."data_tank";
$ini_asnload_path = $path_opc."asn_to_load.ini";
$ini_meteo_path = $path_opc."meteodata.ini";

require_once $path_settings."db.php";
require_once $path_settings."db_hd.php";
//парсинг METEO
$f_meteo_exist = file_exists($ini_meteo_path);
if($f_meteo_exist){
    $meteo_ini_arr =  parse_ini_file($ini_meteo_path);

    $meteo_wind_nb = 888;
    $meteo_wind_p = 888;
    $meteo_temperature_air = 888;
    $meteo_wind_direction = 888;
    $fixtime = null;
    
    $q_var_str = "";
    $q_val_str = "";
    $q_duplicates_str = "";

    if (isset($meteo_ini_arr['meteo_windforce_p'])) {
        $meteo_wind_p = round(((float)str_replace(",", ".", $meteo_ini_arr['meteo_windforce_p'])), 1);
        ////echo "wind_p:".$meteo_wind_p."<br>";
    }

    $q_var_str .="`wind_p`,";
    $q_val_str .= "$meteo_wind_p ,";
    $q_duplicates_str .= "`wind_p` = " . $meteo_wind_p . ",";
    
    if (isset($meteo_ini_arr['meteo_windforce_nb'])) {
        $meteo_wind_nb = round(((float)str_replace(",", ".", $meteo_ini_arr['meteo_windforce_nb'])), 1);
        ////echo "wind_nb:".$meteo_wind_nb."<br>"; 
    }
    
    $q_var_str .="`wind_nb`,";
    $q_val_str .= "$meteo_wind_nb ,";
    $q_duplicates_str .= "`wind_nb` = " . $meteo_wind_nb . ","; 
    
    if (isset($meteo_ini_arr['meteo_temperature_air'])) {
        $meteo_temperature_air = round(((float)str_replace(",", ".", $meteo_ini_arr['meteo_temperature_air'])), 1);
        ////echo "temp:".$meteo_temperature_air."<br>";  
    }
    
    $q_var_str .="`temperature_air`,";
    $q_val_str .= "$meteo_temperature_air ,";
    $q_duplicates_str .= "`temperature_air` = " . $meteo_temperature_air . ",";
    
    if (isset($meteo_ini_arr['meteo_winddirection_p'])) {
        $meteo_wind_direction = round(((float)str_replace(",", ".", $meteo_ini_arr['meteo_winddirection_p'])), 1);
        ////echo "wind_p:".$meteo_wind_p."<br>";
    }
    
    $q_var_str .="`wind_direction`,";
    $q_val_str .= "$meteo_wind_direction ,";
    $q_duplicates_str .= "`wind_direction` = " . $meteo_wind_direction . ","; 
    
    if (isset($meteo_ini_arr['fixtime'])) {
        $fixtime = $meteo_ini_arr['fixtime'];
        ////echo "wind_p:".$meteo_wind_p."<br>";
    }
    
    $q_var_str .="`fixtime`";
    $q_val_str .= "\"$fixtime\"";
    $q_duplicates_str .= "`fixtime` = \"" . $fixtime . "\""; 
    
    $q = "INSERT INTO `meteo` ($q_var_str) VALUES ($q_val_str) ON DUPLICATE KEY UPDATE $q_duplicates_str";
    $mysql->query($q);
    echo "q:".$q."<br>";
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
    ////echo "tank_".$i.":".$f_exist."<br>";
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

    $tank_noerror = true;

    if ($f_exist) {
        $ini_arr = parse_ini_file($ini_tank_path . $i . ".ini");

        if (isset($ini_arr['tank_level'])) {
            //если пришел 0
            $tank_level = round((float)str_replace(",", ".", $ini_arr['tank_level']), 1);
            if($tank_level == 0){
                //запрос последних значений utc
                $q_hd = "SELECT UNIX_TIMESTAMP(`datetime`) AS `utc` FROM `res".$i."_hd` ORDER BY `datetime` DESC LIMIT 1";

                $result = $mysql_res_hd->query($q_hd);
                $row = $result->fetch_assoc();
                $serverUTC = time();
                $lastBDUTC = $row["utc"];
                ////echo "DATA OF REZ:".$i."<br>";
                ////echo "utc from db".$row["utc"]."<br>";
                ////echo "utc server".time()."<br>";
                //если пред данные старее 5 минут то не проводим проверок а сразу пишем.
                if(($serverUTC - $lastBDUTC)>300){
                    ////echo "Данные устарели - Пишем в БД<br>";
                }else{//иначе все остальное
                    ////echo "Данные актуальны - ПРОВЕРЯЕМ дальше<br>";
                    //запрос последний значений резервуара
                    $q_hd = "SELECT `level` FROM `res".$i."_hd` ORDER BY `datetime` DESC LIMIT 5";
                    $result = $mysql_res_hd->query($q_hd);
                    //интегрирование
                    $arr = array();
                    $row = $result->fetch_assoc();

                    while($row){
                        array_push($arr,(int)$row["level"]);
                        $row = $result->fetch_assoc();
                    }
                    $summ_of_arr = 0;
                    foreach($arr as $value){
                        $summ_of_arr += $value;
                    }
                    $avg_of_arr = $summ_of_arr/count($arr);

                    //демпфирование
                    if($avg_of_arr>10){
                        $tank_noerror = false;

                        //echo "<p>Blink ERROR res:$i level >10 AVG </p>";
                    }else{
                        ////echo "<10 ::AVG WRITE IN DB";
                        //если нет ошибок все таки пишем в RT и не сбрасываем флаг tank_noError, то есть данные попадут в HD
                    }
                    ////echo "error status:".$tank_noerror;
                }
            }
            //В RT и HD не попадают данные с ошибками
        }else{
            $tank_level = -1000;
        }
        if (isset($ini_arr['tank_mass'])) {
            if($i==2){
                $tank_mass = round(((float)str_replace(",", ".", $ini_arr['tank_mass'])/1000), 1);
                ////echo "i:".$i."-2 tank_mass=".$tank_mass."<br>";
            }else{
                $tank_mass = round((float)str_replace(",", ".", $ini_arr['tank_mass']), 1);
                ////echo "i:".$i."-not 2 tank_mass=".$tank_mass."<br>";
            }
        }else{
            $tank_noerror = false;
            //echo "<p>$i - tankmass error</p>";
        }
        if (isset($ini_arr['tank_plot'])) {
            $tank_plot = round((float)str_replace(",", ".", $ini_arr['tank_plot']), 1);
			//echo "<p>plot: $tank_plot</p>";
        }else {
            //$tank_noerror = false;
            //echo "<p>$i - tankplot error</p>";
        }
        if (isset($ini_arr['tank_volume'])) {
            if($i==2){
                $tank_volume = round(((float)str_replace(",", ".", $ini_arr['tank_volume'])/1000), 1);
            }else{
                $tank_volume = round((float)str_replace(",", ".", $ini_arr['tank_volume']), 1);
            }
        }else {
            $tank_noerror = false;
            //echo "<p>$i - tankvolume error</p>";
        }
        if (isset($ini_arr['tank_temp'])) {
            $tank_temp = round((float)str_replace(",", ".", $ini_arr['tank_temp']), 2);
        }else {
            //$tank_noerror = false;
            //echo "<p>$i - tanktemp error</p>";
        }
        if (isset($ini_arr['tank_maxlevel'])) {
            $tank_max_level = round((float)str_replace(",", ".", $ini_arr['tank_maxlevel']), 1);
        }else {
            //$tank_noerror = false;
            //echo "<p>$i - tankmaxlevel error</p>";
        }
        if (isset($ini_arr['tank_templab'])) {
            $tank_templab = round((float)str_replace(",", ".", $ini_arr['tank_templab']), 1);
        }else {
            //$tank_noerror = false;
            //echo "<p>$i - tanktemplab error</p>";
        }
        if (isset($ini_arr['tank_plotlab'])) {
            $tank_plotlab = round((float)str_replace(",", ".", $ini_arr['tank_plotlab']), 1);
        }else {
            //$tank_noerror = false;
            //echo "<p>$i - tankplotlab error</p>";
        }
        if (isset($ini_arr['tank_avlevel'])) {
            $tank_avlevel = round((float)str_replace(",", ".", $ini_arr['tank_avlevel']), 1);
        }else {
            //$tank_noerror = false;
            //echo "<p>$i - tankavlevel error</p>";
        }
        if (isset($ini_arr['tank_signallevel'])) {
            $tank_signallevel = round((float)str_replace(",", ".", $ini_arr['tank_signallevel']), 1);
        }else {
            //$tank_noerror = false;
            //echo "<p>$i - tanksignallevel error</p>";
        }
        if (isset($ini_arr['tank_pereliv'])) {
            $tank_pereliv = round((float)str_replace(",", ".", $ini_arr['tank_pereliv']), 1);
        }else {
            //$tank_noerror = false;
            //echo "<p>$i - tankpereliv error</p>";
        }
        if (isset($ini_arr['tank_product'])) {
            $tank_product = round((float)str_replace(",", ".", $ini_arr['tank_product']), 1);
        }else {
            //$tank_noerror = false;
            //echo "<p>$i - tankproduct error</p>";
        }
        if (isset($ini_arr['tank_vaportemp'])) {
            $tank_vaportemp = round((float)str_replace(",", ".", $ini_arr['tank_vaportemp']), 2);
        }else {
            //$tank_noerror = false;
            //echo "<p>$i - tankvaportemp error</p>";
        }
        if (isset($ini_arr['fixtime'])) {
            $tank_fixtime = $ini_arr['fixtime'];
        }

        //проверка переменных и флага noerror, запись в БД по состоянию
        if($tank_noerror){
            //RT
            $q = "INSERT INTO `rt_tanks` (`num`,`level`,`mass`,`plot`,`volume`,`temp`,`avlevel`,`max_level`,`signallevel`,`pereliv`,`tempvapor`,`product`,`plotlab`,`templab`,`fixtime`) 
                VALUES(" . $i . ", $tank_level, $tank_mass, $tank_plot, $tank_volume, $tank_temp, $tank_avlevel, $tank_max_level,
                 $tank_signallevel, $tank_pereliv, $tank_vaportemp, $tank_product, $tank_plotlab, $tank_templab, \"".$tank_fixtime."\") 
                 ON DUPLICATE KEY UPDATE `level` = $tank_level,
                                        `mass` = $tank_mass,
                                        `plot`= $tank_plot,
                                        `volume` = $tank_volume,
                                        `temp` = $tank_temp,
                                        `avlevel` = $tank_avlevel,
                                        `max_level` = $tank_max_level,
                                        `signallevel` = $tank_signallevel,
                                        `pereliv` = $tank_pereliv,
                                        `tempvapor` = $tank_vaportemp,
                                        `product` = $tank_product,
                                        `plotlab` = $tank_plotlab,
                                        `templab` = $tank_templab,
                                        `fixtime` = \"$tank_fixtime\"";
										
            $mysql->query($q);
            //if($i==15)//echo $q;
            //echo $q."--<br>";
            //HIST
            $q_hd = "INSERT INTO `res".$i."_hd` (`level`,`plot`,`volume`,`temperature`,`vapor_temperature`,`mass`) VALUES ($tank_level,$tank_plot,$tank_volume,$tank_temp,$tank_vaportemp,$tank_mass);";
            $mysql_res_hd->query($q_hd);
        }else{
            //echo "<p> rez: $i tankerror</p>";
        }
    }
}

