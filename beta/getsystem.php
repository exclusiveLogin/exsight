<?php
require_once "path.php";
require_once $path_settings."db.php";


if($_GET['visits']){
    $q = "SELECT * FROM `visits` ORDER BY `id` DESC LIMIT 5;";

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
if($_GET['uniqueip']){
    $q = "SELECT * FROM `uniqueip`;";

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
if($_GET['defferreload']){
    $q = "SELECT * FROM `defferreload`;";

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
if($_GET['status']){
    $q = "SELECT * FROM `status`;";

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