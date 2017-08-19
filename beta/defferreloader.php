<?php
require_once "path.php";

include_once $path_settings."db.php";

$ip = $_SERVER["REMOTE_ADDR"];
$rip = $_SERVER["HTTP_X_FORWARDED_FOR"];
if(!$rip)$rip = $ip;

if($_GET["ask"]){
    $q = "SELECT `ip`,`ua`,`ver`,`build` FROM `defferreload`";
    $res = $mysql->query($q);
    $row = $res->fetch_assoc();

    $result_list_ip = array();
    while ($row){
        array_push($result_list_ip,$row);
        $row = $res->fetch_assoc();
    }

    $result = ["needreload"=>false];

    foreach ($result_list_ip as $key => $val){
        $row_ip = $result_list_ip[$key];
        $tmpip = $row_ip["ip"];

        if($tmpip == $rip){
            $result["needreload"]=true;
        }
    }
    echo json_encode($result);
}

if($_GET["query"]){
    $q = "INSERT IGNORE INTO `defferreload` (`ip`,`ua`,`ver`,`build`) SELECT `ip`,`ua`,`ver`,`build` FROM `uniqueip`";
    $mysql->query($q);
}

if($_GET["ipdel"]){
    $q = "DELETE FROM `defferreload` WHERE `ip`=\"$rip\" ";
    $mysql->query($q);
}


