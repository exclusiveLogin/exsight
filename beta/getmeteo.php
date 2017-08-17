<?php
$path_settings = $_SERVER['CONTEXT_DOCUMENT_ROOT']."/settings/";
require_once $path_settings."db.php";


if($_GET['meteo']){
    $q = "SELECT * FROM `meteo`;";
    $result = $mysql->query($q);
    echo json_encode($result->fetch_assoc());
}