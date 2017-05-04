<?php
//plot path
$ini_plot1 = "opcdata/portopcdata1.ini";
$ini_plot2 = "opcdata/portopcdata2.ini";
//ecu path
$ini_ecu1 = "opcdata/portecu1.ini";
$ini_ecu2 = "opcdata/portecu2.ini";
//tankselect
$ini_select = "opcdata/portselect.ini";
//valve path
$ini_valve = "opcdata/portvalve.ini";

require_once "db.php";
require_once "db_port.php";

//парсинг Valve
$f_valve = file_exists($ini_valve);
if($f_valve){
    $select_arr = parse_ini_file($ini_valve);

    $valve_smt1 = 0;
    $valve_smt2 = 0;
    $valve_smt3 = 0;
    $valve_smt4 = 0;
    $valve_smt5 = 0;
    $valve_smt6 = 0;
    $fixtime = 0;

    if (isset($select_arr['port_zadvsmt1'])) {
        $valve_smt1 = $select_arr['port_zadvsmt1'];
        //echo "t1:".$port_plot_t1."<br>";
    }
    if (isset($select_arr['port_zadvsmt2'])) {
        $valve_smt2 = $select_arr['port_zadvsmt2'];
        //echo "t1:".$port_plot_t1."<br>";
    }
    if (isset($select_arr['port_zadvdt1'])) {
        $valve_dt1 = $select_arr['port_zadvdt1'];
        //echo "t1:".$port_plot_t1."<br>";
    }
    if (isset($select_arr['port_zadvdt2'])) {
        $valve_dt2 = $select_arr['port_zadvdt2'];
        //echo "t1:".$port_plot_t1."<br>";
    }
    if (isset($select_arr['port_zadvoil1'])) {
        $valve_oil1 = $select_arr['port_zadvoil1'];
        //echo "t1:".$port_plot_t1."<br>";
    }
    if (isset($select_arr['port_zadvoil2'])) {
        $valve_oil2 = $select_arr['port_zadvoil2'];
        //echo "t1:".$port_plot_t1."<br>";
    }

    if (isset($select_arr['fixtime'])) {
        $fixtime = $select_arr['fixtime'];
        //echo "plotfixtime2 :".$plotfixtime2."<br>";
    }

    $q = "INSERT INTO `port_valve` (`id`,`valve_smt1`,`valve_smt2`,`valve_dt1`,`valve_dt2`,`valve_oil1`,`valve_oil2`,`fixtime`)
        VALUES (1,".$valve_smt1.",".$valve_smt2.",".$valve_dt1.",".$valve_dt2.",".$valve_oil1.",".$valve_oil2.",\"".$fixtime."\")
         ON DUPLICATE KEY UPDATE 
         `valve_smt1` = ".$valve_smt1.",
         `valve_smt2`=".$valve_smt2.",
        `valve_dt1`=".$valve_dt1.",
		`valve_dt2` = ".$valve_dt2.",
         `valve_oil1`=".$valve_oil1.",
        `valve_oil2`=".$valve_oil2.",
        `fixtime`=\"".$fixtime."\";";

    echo "<p>Q valve:$q</p>";

    $mysql->query($q);

}
//парсинг UserSelect
$f_select = file_exists($ini_select);
if($f_select){
    $select_arr = parse_ini_file($ini_select);

    $numbrezsmt = 0;
    $numbrezdt = 0;
    $numbrezoil = 0;
    $fixtime = 0;

    if (isset($select_arr['numbrezsmt'])) {
        $numbrezsmt = $select_arr['numbrezsmt'];
        //echo "t1:".$port_plot_t1."<br>";
    }
    if (isset($select_arr['numbrezoil'])) {
        $numbrezoil = $select_arr['numbrezoil'];
        //echo "t1:".$port_plot_t1."<br>";
    }
    if (isset($select_arr['numbrezdt'])) {
        $numbrezdt = $select_arr['numbrezdt'];
        //echo "t1:".$port_plot_t1."<br>";
    }

    if (isset($select_arr['fixtime'])) {
        $fixtime = $select_arr['fixtime'];
        //echo "plotfixtime2 :".$plotfixtime2."<br>";
    }

    $q = "INSERT INTO `port_tankselect` (`id`,`tanksmt`,`tankdt`,`tankoil`,`fixtime`)
        VALUES (1,".$numbrezsmt.",".$numbrezdt.",".$numbrezoil.",\"".$fixtime."\")
         ON DUPLICATE KEY UPDATE 
         `tanksmt` = ".$numbrezsmt.",
         `tankdt`=".$numbrezdt.",
        `tankoil`=".$numbrezoil.",
        `fixtime`=\"".$fixtime."\";";

    ////echo "<p>Q1:$q</p>";

    $mysql->query($q);

}
//парсинг Плотномеров
$f_plot1 = file_exists($ini_plot1);
$f_plot2 = file_exists($ini_plot2);

if($f_plot1 && $f_plot2){
    $plot1_arr =  parse_ini_file($ini_plot1);
    $plot2_arr =  parse_ini_file($ini_plot2);

    $port_plot_t1 = 0;
    $port_plot_t2 = 0;

    $port_plot_p1 = 0;
    $port_plot_p2 = 0;

    $port_plot_t11 = 0;
    $port_plot_t12 = 0;
    $port_plot_t21 = 0;
    $port_plot_t22 = 0;

    $port_plot_p11 = 0;
    $port_plot_p12 = 0;
    $port_plot_p21 = 0;
    $port_plot_p22 = 0;

    $port_plot_f11 = 0;
    $port_plot_f12 = 0;
    $port_plot_f21 = 0;
    $port_plot_f22 = 0;

    $port_plot_m11 = 0;
    $port_plot_m12 = 0;
    $port_plot_m21 = 0;
    $port_plot_m22 = 0;

    $port_plot_ms11 = 0;
    $port_plot_ms12 = 0;
    $port_plot_ms21 = 0;
    $port_plot_ms22 = 0;

    $port_plot_lz11 = 0;
    $port_plot_lz12 = 0;
    $port_plot_lz21 = 0;
    $port_plot_lz22 = 0;

    $plotfixtime1 = 0;
    $plotfixtime2 = 0;

    //t
    if (isset($plot1_arr['port_plotnomer_t1'])) {
        $port_plot_t1 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_t1'])), 1);
        //echo "t1:".$port_plot_t1."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_t2'])) {
        $port_plot_t2 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_t2'])), 1);
        //echo "t2:".$port_plot_t2."<br>";
    }

    //p
    if (isset($plot1_arr['port_plotnomer_p1'])) {
        $port_plot_p1 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_p1'])), 1);
        //echo "p1:".$port_plot_p1."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_p2'])) {
        $port_plot_p2 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_p2'])), 1);
        //echo "p1:".$port_plot_p1."<br>";
    }

    //t
    if (isset($plot1_arr['port_plotnomer_t11'])) {
        $port_plot_t11 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_t11'])), 1);
        //echo "t11:".$port_plot_t11."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_t21'])) {
        $port_plot_t21 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_t21'])), 1);
        //echo "t21:".$port_plot_t21."<br>";
    }
    if (isset($plot1_arr['port_plotnomer_t12'])) {
        $port_plot_t12 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_t12'])), 1);
        //echo "t12:".$port_plot_t12."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_t22'])) {
        $port_plot_t22 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_t22'])), 1);
        //echo "t22:".$port_plot_t22."<br>";
    }

    //p
    if (isset($plot1_arr['port_plotnomer_p11'])) {
        $port_plot_p11 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_p11'])), 1);
        //echo "p11:".$port_plot_p11."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_p21'])) {
        $port_plot_p21 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_p21'])), 1);
        //echo "p21:".$port_plot_p21."<br>";
    }
    if (isset($plot1_arr['port_plotnomer_p12'])) {
        $port_plot_p12 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_p12'])), 1);
        //echo "p12:".$port_plot_p12."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_p22'])) {
        $port_plot_p22 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_p22'])), 1);
        //echo "p22:".$port_plot_p22."<br>";
    }

    //f
    if (isset($plot1_arr['port_plotnomer_f11'])) {
        $port_plot_f11 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_f11'])), 1);
        //echo "f11:".$port_plot_f11."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_f21'])) {
        $port_plot_f21 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_f21'])), 1);
        //echo "f21:".$port_plot_f21."<br>";
    }
    if (isset($plot1_arr['port_plotnomer_f12'])) {
        $port_plot_f12 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_f12'])), 1);
        //echo "f12:".$port_plot_f12."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_f22'])) {
        $port_plot_f22 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_f22'])), 1);
        //echo "f22:".$port_plot_f22."<br>";
    }

    //m
    if (isset($plot1_arr['port_plotnomer_m11'])) {
        $tmp = $plot1_arr['port_plotnomer_m11'];
        $tmp = mb_convert_encoding($tmp,"UTF-8");
        $tmp = str_replace("?", "", $tmp);
        echo "tmp_r:".$tmp."<br>";
        $port_plot_m11 = round(((float)str_replace(",", ".", $tmp)), 1);
        echo "m11:".$port_plot_m11."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_m21'])) {
        $tmp = $plot1_arr['port_plotnomer_m21'];
        $tmp = mb_convert_encoding($tmp,"UTF-8");
        $tmp = str_replace("?", "", $tmp);
        echo "tmp_r:".$tmp."<br>";
        $port_plot_m21 = round(((float)str_replace(",", ".", $tmp)), 1);
        echo "m21:".$port_plot_m21."<br>";
    }
    if (isset($plot1_arr['port_plotnomer_m12'])) {
        $tmp = $plot1_arr['port_plotnomer_m12'];
        $tmp = mb_convert_encoding($tmp,"UTF-8");
        $tmp = str_replace("?", "", $tmp);
        echo "tmp:".$tmp."<br>";
        $port_plot_m12 = round(((float)str_replace(",", ".", $tmp)), 1);
        echo "m12:".$port_plot_m12."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_m22'])) {
        $tmp = $plot1_arr['port_plotnomer_m22'];
        $tmp = mb_convert_encoding($tmp,"UTF-8");
        $tmp = str_replace("?", "", $tmp);
        echo "tmp_r:".$tmp."<br>";
        $port_plot_m22 = round(((float)str_replace(",", ".", $tmp)), 1);
        echo "m22:".$port_plot_m22."<br>";
    }

    //ms
    if (isset($plot1_arr['port_plotnomer_ms11'])) {
        $port_plot_ms11 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_ms11'])), 1);
        //echo "ms11:".$port_plot_ms11."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_ms21'])) {
        $port_plot_ms21 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_ms21'])), 1);
        //echo "ms21:".$port_plot_ms21."<br>";
    }
    if (isset($plot1_arr['port_plotnomer_ms12'])) {
        $port_plot_ms12 = round(((float)str_replace(",", ".", $plot1_arr['port_plotnomer_ms12'])), 1);
        //echo "ms12:".$port_plot_ms12."<br>";
    }
    if (isset($plot2_arr['port_plotnomer_ms22'])) {
        $port_plot_ms22 = round(((float)str_replace(",", ".", $plot2_arr['port_plotnomer_ms22'])), 1);
        //echo "ms22:".$port_plot_ms22."<br>";
    }


    if (isset($plot1_arr['fixtime'])) {
        $plotfixtime1 = $plot1_arr['fixtime'];
        //echo "plotfixtime1 :".$plotfixtime1."<br>";
    }
    if (isset($plot2_arr['fixtime'])) {
        $plotfixtime2 = $plot2_arr['fixtime'];
        //echo "plotfixtime2 :".$plotfixtime2."<br>";
    }


    $q = "INSERT INTO `port_plotnomer` (`num`,`t`,`t1`,`t2`,`p`,`p1`,`p2`,`f1`,`f2`,`m1`,`m2`,`ms1`,`ms2`,`fixtime`) 
        VALUES (1,".$port_plot_t1 .",".$port_plot_t11.",".$port_plot_t12.",".$port_plot_p1.",".$port_plot_p11.",".$port_plot_p12.",
        ".$port_plot_f11.",".$port_plot_f12.",".$port_plot_m11.",".$port_plot_m12.",".$port_plot_ms11.",".$port_plot_ms12.",\"".$plotfixtime1."\")
         ON DUPLICATE KEY UPDATE 
         `t` = " . $port_plot_t1 . ",
         `t1`=".$port_plot_t11.",
        `t2`=".$port_plot_t12.",
        `p` = " . $port_plot_p1 . ",
         `p1`=".$port_plot_p11.",
        `p2`=".$port_plot_p12.",
        `f1` = " . $port_plot_f11 . ",
         `f2`=".$port_plot_f12.",
        `m1`=".$port_plot_m11.",
        `m2` = " . $port_plot_m12 . ",
         `ms1`=".$port_plot_ms11.",
        `ms2`=".$port_plot_ms12.",
        `fixtime`=\"".$plotfixtime1."\";";
    echo "q:".$q."<br>";
    $mysql->query($q);

    $q = "INSERT INTO `port_plotnomer` (`num`,`t`,`t1`,`t2`,`p`,`p1`,`p2`,`f1`,`f2`,`m1`,`m2`,`ms1`,`ms2`,`fixtime`) 
        VALUES (2,".$port_plot_t2 .",".$port_plot_t21.",".$port_plot_t22.",".$port_plot_p2.",".$port_plot_p21.",".$port_plot_p22.",
        ".$port_plot_f21.",".$port_plot_f22.",".$port_plot_m21.",".$port_plot_m22.",".$port_plot_ms21.",".$port_plot_ms22.",\"".$plotfixtime2."\")
         ON DUPLICATE KEY UPDATE 
         `t` = " . $port_plot_t2 . ",
         `t1`=".$port_plot_t21.",
        `t2`=".$port_plot_t22.",
        `p` = " . $port_plot_p2 . ",
         `p1`=".$port_plot_p21.",
        `p2`=".$port_plot_p22.",
        `f1` = " . $port_plot_f21 . ",
         `f2`=".$port_plot_f22.",
        `m1`=".$port_plot_m21.",
        `m2` = " . $port_plot_m22 . ",
         `ms1`=".$port_plot_ms21.",
        `ms2`=".$port_plot_ms22.",
        `fixtime`=\"".$plotfixtime2."\";";
    echo "q:".$q."<br>";
    $mysql->query($q);


    //insert in es_port for Trends
    $es_q1 = "INSERT INTO `plotnomer1` (`t`,`t1`,`t2`,`p`,`p1`,`p2`,`f1`,`f2`,`m1`,`m2`,`ms1`,`ms2`,`fixtime`) 
        VALUES (".$port_plot_t1 .",".$port_plot_t11.",".$port_plot_t12.",".$port_plot_p1.",".$port_plot_p11.",".$port_plot_p12.",
        ".$port_plot_f11.",".$port_plot_f12.",".$port_plot_m11.",".$port_plot_m12.",".$port_plot_ms11.",".$port_plot_ms12.",\"".$plotfixtime1."\");";

    $es_q2 = "INSERT INTO `plotnomer2` (`t`,`t1`,`t2`,`p`,`p1`,`p2`,`f1`,`f2`,`m1`,`m2`,`ms1`,`ms2`,`fixtime`) 
        VALUES (".$port_plot_t2 .",".$port_plot_t21.",".$port_plot_t22.",".$port_plot_p2.",".$port_plot_p21.",".$port_plot_p22.",
        ".$port_plot_f21.",".$port_plot_f22.",".$port_plot_m21.",".$port_plot_m22.",".$port_plot_ms21.",".$port_plot_ms22.",\"".$plotfixtime2."\");";

    $mysql_port_hd->query($es_q1);
    $mysql_port_hd->query($es_q2);
}

//парсинг Емкостей
$f_ecu1 = file_exists($ini_ecu1);
$f_ecu2 = file_exists($ini_ecu2);

if($f_ecu1 && $f_ecu2){
    $ecu1_arr =  parse_ini_file($ini_ecu1);
    $ecu2_arr =  parse_ini_file($ini_ecu2);

    $ecu1_level1 = 0;
    $ecu1_level2 = 0;
    $ecu1_level3 = 0;
    $ecu1_level4 = 0;
    $ecu1_level5 = 0;
    $ecu1_level6 = 0;

    $ecu2_level1 = 0;
    $ecu2_level2 = 0;
    $ecu2_level3 = 0;
    $ecu2_level4 = 0;
    $ecu2_level5 = 0;
    $ecu2_level6 = 0;

    $ecufixtime1 = 0;
    $ecufixtime2 = 0;

    //ecu1
    if (isset($ecu1_arr['port_ecu1_l1'])) {
        $ecu1_level1 = $ecu1_arr['port_ecu1_l1'];
        //echo "ecu1_level1:".$ecu1_level1."<br>";
    }
    if (isset($ecu1_arr['port_ecu1_l2'])) {
        $ecu1_level2 = $ecu1_arr['port_ecu1_l2'];
        //echo "ecu1_level2:".$ecu1_level2."<br>";
    }
    if (isset($ecu1_arr['port_ecu1_l3'])) {
        $ecu1_level3 = $ecu1_arr['port_ecu1_l3'];
        //echo "ecu1_level3:".$ecu1_level3."<br>";
    }
    if (isset($ecu1_arr['port_ecu1_l4'])) {
        $ecu1_level4 = $ecu1_arr['port_ecu1_l4'];
        //echo "ecu1_level4:".$ecu1_level4."<br>";
    }
    if (isset($ecu1_arr['port_ecu1_l5'])) {
        $ecu1_level5 = $ecu1_arr['port_ecu1_l5'];
        //echo "ecu1_level5:".$ecu1_level5."<br>";
    }
    if (isset($ecu1_arr['port_ecu1_l6'])) {
        $ecu1_level6 = $ecu1_arr['port_ecu1_l6'];
        //echo "ecu1_level6:".$ecu1_level6."<br>";
    }

    //ecu2
    if (isset($ecu2_arr['port_ecu2_l1'])) {
        $ecu2_level1 = $ecu2_arr['port_ecu2_l1'];
        //echo "ecu2_level1:".$ecu2_level1."<br>";
    }
    if (isset($ecu2_arr['port_ecu2_l2'])) {
        $ecu2_level2 = $ecu2_arr['port_ecu2_l2'];
        //echo "ecu2_level2:".$ecu2_level2."<br>";
    }
    if (isset($ecu2_arr['port_ecu2_l3'])) {
        $ecu2_level3 = $ecu2_arr['port_ecu2_l3'];
        //echo "ecu2_level3:".$ecu2_level3."<br>";
    }
    if (isset($ecu2_arr['port_ecu2_l4'])) {
        $ecu2_level4 = $ecu2_arr['port_ecu2_l4'];
        ////echo "ecu2_level4:".$ecu2_level4."<br>";
    }
    if (isset($ecu2_arr['port_ecu2_l5'])) {
        $ecu2_level5 = $ecu2_arr['port_ecu2_l5'];
        ////echo "ecu2_level5:".$ecu2_level5."<br>";
    }
    if (isset($ecu2_arr['port_ecu2_l6'])) {
        $ecu2_level6 = $ecu2_arr['port_ecu2_l6'];
        ////echo "ecu2_level6:".$ecu2_level6."<br>";
    }

    //fixtime
    if (isset($ecu1_arr['fixtime'])) {
        $ecufixtime1 = $ecu1_arr['fixtime'];
        ////echo "plotfixtime1 :".$ecufixtime1."<br>";
    }
    if (isset($ecu2_arr['fixtime'])) {
        $ecufixtime2 = $ecu2_arr['fixtime'];
        ////echo "plotfixtime2 :".$ecufixtime2."<br>";
    }

    // print_r($ecu1_arr);
    // print_r($ecu2_arr);

    $q = "INSERT INTO `port_ecu` (`num`,`level1`,`level2`,`level3`,`level4`,`level5`,`level6`,`fixtime`)
        VALUES (1,".$ecu1_level1.",".$ecu1_level2.",".$ecu1_level3.",".$ecu1_level4.",".$ecu1_level5.",".$ecu1_level6.",\"".$ecufixtime1."\")
         ON DUPLICATE KEY UPDATE 
         `level1` = ".$ecu1_level1.",
         `level2`=".$ecu1_level2.",
        `level3`=".$ecu1_level3.",
        `level4` = " .$ecu1_level4. ",
         `level5`=".$ecu1_level5.",
        `level6`=".$ecu1_level6.",
        `fixtime`=\"".$ecufixtime1."\";";

    ////echo "<p>Q1:$q</p>";

    $mysql->query($q);

    $q = "INSERT INTO `port_ecu` (`num`,`level1`,`level2`,`level3`,`level4`,`level5`,`level6`,`fixtime`)
        VALUES (2,".$ecu2_level1.",".$ecu2_level2.",".$ecu2_level3.",".$ecu2_level4.",".$ecu2_level5.",".$ecu2_level6.",\"".$ecufixtime2."\")
         ON DUPLICATE KEY UPDATE 
         `level1` = ".$ecu2_level1.",
         `level2`=".$ecu2_level2.",
        `level3`=".$ecu2_level3.",
        `level4` = " .$ecu2_level4. ",
         `level5`=".$ecu2_level5.",
        `level6`=".$ecu2_level6.",
        `fixtime`=\"".$ecufixtime2."\";";

    //echo "<p>Q2:$q</p>";

    $mysql->query($q);

    ////echo "q:".$q."<br>";
}