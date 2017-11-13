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

    $json = array();

    $result = $mysql->query($q);
    $row = $result->fetch_assoc();
    array_push($json,$row);

    echo json_encode($json);
}
if($_GET['visits_d']){
    $q = "SELECT COUNT(`ip`) AS `cnt` ,`ip`,`rip` FROM `visits` WHERE `datetime`>SUBDATE(NOW(),INTERVAL 1 DAY) GROUP by `ip`,`rip`";

    $json = array();

    $result = $mysql->query($q);
    $row = $result->fetch_assoc();
    while($row){
        array_push($json,$row);
        $row = $result->fetch_assoc();
    }
    echo json_encode($json);
}
if($_GET['visits_w']){
    $q = "SELECT COUNT(`ip`) AS `cnt` ,`ip`,`rip` FROM `visits` WHERE `datetime`>SUBDATE(NOW(),INTERVAL 7 DAY) GROUP by `ip`,`rip`";

    $json = array();

    $result = $mysql->query($q);
    $row = $result->fetch_assoc();
    while($row){
        array_push($json,$row);
        $row = $result->fetch_assoc();
    }
    echo json_encode($json);
}
if($_GET['visits_m']){
    $q = "SELECT COUNT(`ip`) AS `cnt` ,`ip`,`rip` FROM `visits` WHERE `datetime`>SUBDATE(NOW(),INTERVAL 1 MONTH) GROUP by `ip`,`rip`";

    $json = array();

    $result = $mysql->query($q);
    $row = $result->fetch_assoc();
    while($row){
        array_push($json,$row);
        $row = $result->fetch_assoc();
    }
    echo json_encode($json);
}
if($_GET['visits_y']){
    $q = "SELECT COUNT(`ip`) AS `cnt` ,`ip`,`rip` FROM `visits` WHERE `datetime`>SUBDATE(NOW(),INTERVAL 12 MONTH) GROUP by `ip`,`rip`";

    $json = array();

    $result = $mysql->query($q);
    $row = $result->fetch_assoc();
    while($row){
        array_push($json,$row);
        $row = $result->fetch_assoc();
    }
    echo json_encode($json);
}