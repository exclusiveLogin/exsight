<?php
require_once "db.php";


if($_GET['setstate'] && $_GET['sector']){
	$state = $_GET['setstate'];
	$sector = $_GET['sector'];
    $q = "UPDATE `status` SET `state` = '$state'  WHERE `sector` = '$sector';";
	echo $q;
	
    $mysql->query($q);
}
if($_GET['getstate']){
    $q = "SELECT * FROM `status`;";
    $result = $mysql->query($q);
    
    $json = array();
    $row = $result->fetch_assoc();
    
    while($row){
        array_push($json,$row);
        $row = $result->fetch_assoc();
    }
    echo json_encode($json);
}
