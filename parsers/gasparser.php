<?php
$path_settings = $_SERVER['CONTEXT_DOCUMENT_ROOT']."/settings/";
$ini_gas_path = "../opcdata/upes_rp";

require_once $path_settings."db_gas.php";

//цикл парсинга с обходом ошибок
//движок цикла
for($i=1;$i<210;$i++) {//проходим по папке в поисках файлов из диапазона
    //проверка наличия нужных файлов
    $f_exist = file_exists($ini_gas_path . $i . ".ini");
    if($f_exist){//файд найден делаем парсинг значений
        $gas_ini_arr = parse_ini_file($ini_gas_path . $i . ".ini");

        //внутренние переменные
        $gas_value;//значение датчика
        $gas_id;//ID датчика SGO_*id
        $gas_fixtime;//время измений на iFix

        if($gas_ini_arr["fixtime"]){
            $gas_fixtime = $gas_ini_arr['fixtime'];

            foreach ($gas_ini_arr as $key => $val){

                if($key <> "fixtime" && $val<>""){
                    $gas_value = (int)$val;


                }else{
                    $gas_value = -1000;
                }

                $gas_id = str_replace("SGO_","",$key);


                $q = "INSERT INTO `rt_tanks` (`id`,`fixtime`) VALUES (" . $gas_id . ",'" . $gas_fixtime . "') ON DUPLICATE KEY UPDATE `fixtime` = '" . $gas_fixtime . "';";
                $mysql->query($q);


            }


        }
        //проходим по массиву и скидываем в БД

    }






}
    $q_hd = "INSERT INTO `res".$i."_hd` (`level`,`plot`,`volume`,`temperature`,`vapor_temperature`,`mass`) VALUES ($tank_level,$tank_plot,$tank_volume,$tank_temp,$tank_vaportemp,$tank_mass);";
    //echo $q_hd;
    $mysql_res_hd->query($q_hd);

