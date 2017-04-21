<?php
//plot path
$ini_plot1 = "opcdata/portopcdata1.ini";
$ini_plot2 = "opcdata/portopcdata2.ini";
//ecu path
$ini_plot1 = "opcdata/portecu1.ini";
$ini_plot2 = "opcdata/portecu2.ini";
//tankselect
$ini_plot1 = "opcdata/portselect.ini";
//valve path
$ini_plot1 = "opcdata/portvalve.ini";

require_once "db.php";
//require_once "db_hd.php";

//парсинг Плотномеров
$f_plot1 = file_exists($ini_plot1);
$f_plot2 = file_exists($ini_plot2);

if($f_plot1 && $f_plot2){
    $plot1_arr =  parse_ini_file($ini_plot1);
    $plot2_arr =  parse_ini_file($ini_plot2);

    $port_plot_t1 = null;
    $port_plot_t2 = null;

    $port_plot_p1 = null;
    $port_plot_p2 = null;

    $port_plot_t11 = null;
    $port_plot_t12 = null;
    $port_plot_t21 = null;
    $port_plot_t22 = null;

    $port_plot_p11 = null;
    $port_plot_p12 = null;
    $port_plot_p21 = null;
    $port_plot_p22 = null;

    $port_plot_f11 = null;
    $port_plot_f12 = null;
    $port_plot_f21 = null;
    $port_plot_f22 = null;

    $port_plot_m11 = null;
    $port_plot_m12 = null;
    $port_plot_m21 = null;
    $port_plot_m22 = null;

    $port_plot_ms11 = null;
    $port_plot_ms12 = null;
    $port_plot_ms21 = null;
    $port_plot_ms22 = null;

    $fixtime = null;

    //t
    if (isset($plot1_arr['port_plotnomer_t1'])) {
        $port_plot_t1 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_t1'])), 1);
        echo "t1:".$port_plot_t1."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_t2'])) {
        $port_plot_t2 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_t2'])), 1);
        echo "t2:".$port_plot_t2."<br>";
    }

    //p
    if (isset($plot1_arr['port_plotnomer_p1'])) {
        $port_plot_p1 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_p1'])), 1);
        echo "p1:".$port_plot_p1."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_p2'])) {
        $port_plot_p2 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_p2'])), 1);
        echo "p1:".$port_plot_p1."<br>";
    }

    //t
    if (isset($plot1_arr['port_plotnomer_t11'])) {
        $port_plot_t11 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_t11'])), 1);
        echo "t11:".$port_plot_t11."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_t21'])) {
        $port_plot_t21 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_t21'])), 1);
        echo "t21:".$port_plot_t21."<br>";
    }
    if (isset($plot1_arr['port_plotnomer_t12'])) {
        $port_plot_t12 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_t12'])), 1);
        echo "t12:".$port_plot_t12."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_t22'])) {
        $port_plot_t22 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_t22'])), 1);
        echo "t22:".$port_plot_t22."<br>";
    }

    //p
    if (isset($plot1_arr['port_plotnomer_p11'])) {
        $port_plot_p11 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_p11'])), 1);
        echo "p11:".$port_plot_p11."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_p21'])) {
        $port_plot_p21 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_p21'])), 1);
        echo "p21:".$port_plot_p21."<br>";
    }
    if (isset($plot1_arr['port_plotnomer_p12'])) {
        $port_plot_p12 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_p12'])), 1);
        echo "p12:".$port_plot_p12."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_p22'])) {
        $port_plot_p22 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_p22'])), 1);
        echo "p22:".$port_plot_p22."<br>";
    }

    //f
    if (isset($plot1_arr['port_plotnomer_f11'])) {
        $port_plot_f11 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_f11'])), 1);
        echo "f11:".$port_plot_f11."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_f21'])) {
        $port_plot_f21 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_f21'])), 1);
        echo "f21:".$port_plot_f21."<br>";
    }
    if (isset($plot1_arr['port_plotnomer_f12'])) {
        $port_plot_f12 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_f12'])), 1);
        echo "f12:".$port_plot_f12."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_f22'])) {
        $port_plot_f22 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_f22'])), 1);
        echo "f22:".$port_plot_f22."<br>";
    }

    //m
    if (isset($plot1_arr['port_plotnomer_m11'])) {
        $port_plot_m11 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_m11'])), 1);
        echo "m11:".$port_plot_m11."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_m21'])) {
        $port_plot_m21 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_m21'])), 1);
        echo "m21:".$port_plot_m21."<br>";
    }
    if (isset($plot1_arr['port_plotnomer_m12'])) {
        $port_plot_m12 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_m12'])), 1);
        echo "m12:".$port_plot_m12."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_m22'])) {
        $port_plot_m22 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_m22'])), 1);
        echo "m22:".$port_plot_m22."<br>";
    }

    //ms
    if (isset($plot1_arr['port_plotnomer_ms11'])) {
        $port_plot_ms11 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_ms11'])), 1);
        echo "ms11:".$port_plot_ms11."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_ms21'])) {
        $port_plot_ms21 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_ms21'])), 1);
        echo "ms21:".$port_plot_ms21."<br>";
    }
    if (isset($plot1_arr['port_plotnomer_ms12'])) {
        $port_plot_ms12 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_ms12'])), 1);
        echo "ms12:".$port_plot_ms12."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_ms22'])) {
        $port_plot_ms22 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_ms22'])), 1);
        echo "ms22:".$port_plot_ms22."<br>";
    }







//    $q = "INSERT INTO `meteo` (`wind_p`,`wind_nb`,`temperature_air`,`fixtime`) VALUES (" . $meteo_wind_p . "," . $meteo_wind_nb . ",
//        ".$meteo_temperature_air.",\"".$fixtime."\") ON DUPLICATE KEY UPDATE `wind_p` = " . $meteo_wind_p . ",`wind_nb`=".$meteo_wind_nb.",
//        `temperature_air`=".$meteo_temperature_air.",
//        `fixtime`=\"".$fixtime."\";";
//    $mysql->query($q);
    //echo "q:".$q."<br>";
}else{
    echo "нет одного или обоих файлов 1:".$f_plot1." 2:".$f_plot2."<br>";
}