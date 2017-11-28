<?php

require_once "path.php";
require_once $path_settings."db.php";


if($_GET['tankselect']){
    $q = "SELECT * FROM `port_tankselect`;";
    $result = $mysql->query($q);
    echo json_encode($result->fetch_assoc());
}
if($_GET['valve']){
    $q = "SELECT * FROM `port_valve`;";
    $result = $mysql->query($q);
    echo json_encode($result->fetch_assoc());
}
if($_GET['plotnomer']){
    $q = "SELECT * FROM `port_plotnomer`;";
    $result = $mysql->query($q);
    $json = array();
    $row = $result->fetch_assoc();

    while($row){
        array_push($json,$row);
        $row = $result->fetch_assoc();
    }

    echo json_encode($json);
}
if($_GET['ecu']){
    $q = "SELECT * FROM `port_ecu`;";
    $result = $mysql->query($q);
    $json = array();
    $row = $result->fetch_assoc();

    while($row){
        array_push($json,$row);
        $row = $result->fetch_assoc();
    }

    echo json_encode($json);
}
