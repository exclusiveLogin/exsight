<?php

require_once "db_hd.php";

if($_GET["lazy"]&&$_GET["tank"]){
    $tank = $_GET["tank"];
    $q = "SELECT *,UNIX_TIMESTAMP(`datetime`)*1000 AS `utc` FROM `res".$tank."_hd` WHERE `datetime`>SUBDATE(NOW(),INTERVAL 7 DAY)";
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