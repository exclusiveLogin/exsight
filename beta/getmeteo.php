<?php
require_once "db.php";


if($_GET['meteo']){
    $q = "SELECT * FROM `meteo`;";
    $result = $mysql->query($q);
    echo json_encode($result->fetch_assoc());
}