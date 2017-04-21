<?php
require_once "db.php";


//if($_GET['meteo']){
    //в запросе есть номер резервуара
    $q = "SELECT * FROM `meteo`;";
    $result = $mysql->query($q);
    //var_dump($result);
    echo json_encode($result->fetch_assoc());
//}