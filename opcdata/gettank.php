<?php
require_once "../db.php";


if($_GET['tank']){
    //в запросе есть номер резервуара
    $q = "SELECT `num`, `mass`, `volume`, `plot`, `temp`, `level`, `max_level`, `datetime` FROM `rt_tanks` WHERE num = ".$_GET['tank'].";";
    $result = $mysql->query($q);
    echo json_encode($result->fetch_assoc());
}
