<?php
require_once "path.php";
require_once $path_settings."db_gas.php";


if($_GET['gaspark']){
    $q = "SELECT * FROM `rt_sensors`;";
    if($_GET['gaspark_min'] && $_GET['gaspark_max']){//в запросе есть интервал сенсоров
        $interval_min = $_GET['gaspark_min'];
        $interval_max = $_GET['gaspark_max'];
        $q = "SELECT * FROM `rt_sensors` WHERE `id` BETWEEN ".$interval_min." AND ".$interval_max.";";
        //echo $q;

    }

    $result = $mysql->query($q);
    //var_dump($result);
    $json = array();
    $row = $result->fetch_assoc();


    while($row){
        array_push($json,$row);
        $row = $result->fetch_assoc();
    }
    echo json_encode($json);
}
