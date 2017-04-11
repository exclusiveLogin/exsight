<?php
require_once "../db_hd.php";

//echo "<p> start programm </p>";

if($_GET["lazy"]&&$_GET["tank"]){
    $tank = $_GET["tank"];
    $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc` FROM `res".$tank."_hd` WHERE `datetime`>SUBDATE(NOW(),INTERVAL 3 DAY)";
    $result = $mysql_res_hd->query($q);

    $json = array();
    $row = $result->fetch_assoc();

    while($row){
        array_push($json,$row);
        $row = $result->fetch_assoc();
    }
    echo json_encode($json);
}
if(isset($_GET['coldstart'])){//холодный старт приложения
    if(isset($_GET['tends']) && isset($_GET['tanktends'])){//тенденции

        $q = "SELECT `mass`,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc` FROM `res".$_GET['tanktends']."_hd` WHERE `datetime`>SUBDATE(NOW(),INTERVAL 1 HOUR)";
        $result = $mysql_res_hd->query($q);

        $json = array();
        $row = $result->fetch_assoc();


        while($row){
            array_push($json,$row);
            $row = $result->fetch_assoc();
        }
        echo json_encode($json);
    }
}

if($_GET['trend'] && $_GET['tank']){
    $time_min = 0;
    $time_max = 0;
    if($_GET['trendmin'])$time_min = $_GET['trendmin']/1000;
    if($_GET['trendmax'])$time_max = $_GET['trendmax']/1000;

    $interval = 0 || $_GET['interval'];
    $tank = $_GET['tank'];

    if($_GET['coldtrend']){
        $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc` FROM `res".$tank."_hd` WHERE `datetime` BETWEEN SUBDATE(NOW(),INTERVAL 3 DAY) AND NOW()";
    }else{
        if($_GET['trendall']){
            $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc` FROM `res".$tank."_hd` WHERE UNIX_TIMESTAMP(`datetime`) IN(
            SELECT UNIX_TIMESTAMP(`datetime`) AS `utc` FROM `res".$tank."_hd` WHERE DATE_FORMAT(`datetime`,\"%i\")=0
            )";
        }elseif($interval<1){//часовой тренд
            $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc` FROM `res".$tank."_hd` WHERE UNIX_TIMESTAMP(`datetime`) BETWEEN ".$time_min." AND ".$time_max." AND UNIX_TIMESTAMP(`datetime`) IN(
        SELECT UNIX_TIMESTAMP(`datetime`) AS `utc` FROM `res".$tank."_hd` WHERE DATE_FORMAT(`datetime`,\"%i\")=0
        )";
        }elseif($interval>1){//суточный тренд
            $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc` FROM `res".$tank."_hd` WHERE UNIX_TIMESTAMP(`datetime`) BETWEEN ".$time_min." AND ".$time_max." AND UNIX_TIMESTAMP(`datetime`) IN(
        SELECT UNIX_TIMESTAMP(`datetime`) AS `utc` FROM `res".$tank."_hd` WHERE DATE_FORMAT(`datetime`,\"%k\")=0 AND DATE_FORMAT(`datetime`,\"%i\")=0
        )";
        }else{//минутный тренд
            $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc` FROM `res".$tank.
                "_hd` WHERE UNIX_TIMESTAMP(`datetime`) BETWEEN ".$time_min." AND ".$time_max.";";
        }
    }

    $result = $mysql_res_hd->query($q);

    $json = array();
    $row = $result->fetch_assoc();


    while($row){
        array_push($json,$row);
        $row = $result->fetch_assoc();
    }
    echo json_encode($json);
}
if($_GET['minmax'] && $_GET['tank']){
    $tank = $_GET['tank'];
    $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc` FROM `res".$tank."_hd` WHERE UNIX_TIMESTAMP(`datetime`) = (SELECT MIN(UNIX_TIMESTAMP(`datetime`)) FROM `res".$tank."_hd`)";
    $res = $mysql_res_hd->query($q);
    $json = array();
    $row = $res->fetch_assoc();
    array_push($json,$row);
    $res->close();

    $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc` FROM `res".$tank."_hd` WHERE UNIX_TIMESTAMP(`datetime`) = (SELECT MAX(UNIX_TIMESTAMP(`datetime`)) FROM `res".$tank."_hd`)";
    $res = $mysql_res_hd->query($q);
    $row = $res->fetch_assoc();
    array_push($json,$row);
    $res->close();

    echo json_encode($json);
}