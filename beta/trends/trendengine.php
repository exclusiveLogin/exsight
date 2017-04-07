<?php

require_once "db_hd.php";

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
if($_GET['trend'] && $_GET['interval'] && $_GET['tank']){
    $time_min = $_GET['trendmin']/1000;
    $time_max = $_GET['trendmax']/1000;
    $interval = $_GET['interval'];
    $tank = $_GET['tank'];

    if($interval>3600*96*1000){//часовой тренд
        $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc`,DATE_FORMAT(`datetime`,\"%k\") AS `hour` FROM `res".$tank.
            "_hd` WHERE `datetime`BETWEEN "+$time_min+" AND "+$time_max+" ORDER BY `utc` ASC";
        $dumpflag = 0;
    }else if(interval>3600*12*1000 && interval<3600*96*1000){//суточный тренд
        $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc`,DATE_FORMAT(`datetime`,\"%i\") AS `minute` FROM `res".$tank.
            "_hd` WHERE `datetime`BETWEEN "+$time_min+" AND "+$time_max+" ORDER BY `utc` ASC";
        $dumpflag = 1;
    }else{//минутный тренд
        $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc`,DATE_FORMAT(`datetime`,\"%i\") AS `minute` FROM `res".$tank.
            "_hd` WHERE `datetime`BETWEEN "+$time_min+" AND "+$time_max+" ORDER BY `utc` ASC";
        $dumpflag = 2;
    }
}