<?php
require_once "path.php";
require_once $path_settings."db.php";


if($_GET['tank']){
    //в запросе есть номер резервуара
    $q = "SELECT * FROM `rt_tanks` WHERE num = ".$_GET['tank'].";";
    $result = $mysql->query($q);
	//var_dump($result);
    echo json_encode($result->fetch_assoc());
}
if($_GET['park']){
    //запрос уровней парка
    $q = "SELECT * FROM `rt_tanks`;";
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
if($_GET['asn2load']){
    //запрос уровней парка
    $q = "SELECT * FROM `asn2load`;";
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
