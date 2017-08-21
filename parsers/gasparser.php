<?php
require_once "../path.php";

$ini_gas_path = $path_opc."upes_rp";
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

                //echo "RAW SG:".$key."<br>";
				
				
				if($key <> "fixtime"){
					//echo "--------------------RT-------------------------------------<br>";
                    $q = "INSERT INTO `rt_sensors` (`id`,`value`,`fixtime`) VALUES (" .
					    $gas_id . ",".$gas_value.",'" . $gas_fixtime . "') ON DUPLICATE KEY UPDATE 
					    `value` = '" . $gas_value . "',
					    `fixtime` = '" . $gas_fixtime . "';";
					$mysql->query($q);

					//echo $q."<br>";
					if($gas_value <> -1000){
						//echo "--------------------Hist-----------------------------------<br>";
						
						$q = "INSERT INTO `hist_sensors` (`num`,`value`,`fixtime`)
							VALUES ($gas_id,$gas_value,'$gas_fixtime');";
						$mysql->query($q);
						echo $q."<br>";
					}
				}
            }
        }
    }
}