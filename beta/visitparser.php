<?php
include_once "db.php";

$ip = $_SERVER["REMOTE_ADDR"];
$rip = $_SERVER["HTTP_X_FORWARDED_FOR"];
$ua = $_SERVER["HTTP_USER_AGENT"];
$ver = $_GET["version"];


echo "Remote IP:".$ip." real_IP:".$rip." ua:".$ua." version:".$ver;
$q = "INSERT INTO `visits` (`ip`,`rip`,`ua`,`ver`) VALUES (\"$ip\",\"$rip\",\"$ua\",\"$ver\")";

$mysql->query($q);
//echo $q;