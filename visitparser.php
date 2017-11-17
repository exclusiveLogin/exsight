<?php
require_once "path.php";
include_once $path_settings."db.php";

//var_dump($_SERVER);

$ip = $_SERVER["REMOTE_ADDR"];
$rip = $_SERVER["HTTP_X_FORWARDED_FOR"];
$remote_port = $_SERVER["REMOTE_PORT"];
$ua = $_SERVER["HTTP_USER_AGENT"];
$path = $_SERVER["CONTEXT_PREFIX"];
$doc_root =  $_SERVER["CONTEXT_DOCUMENT_ROOT"];

$ver = $_GET["version"];
$build  = $_GET["build"];



echo "Remote IP:".$ip." real_IP:".$rip." remote port:".$remote_port." ua:".$ua." path:".$path." document root:".$doc_root." version:".$ver."build:".$build."<br><br>";
$q = "INSERT INTO `visits` (`ip`,`rip`,`remote_port`,`ua`,`path`,`doc_root`,`ver`,`build`) VALUES (\"$ip\",\"$rip\",\"$remote_port\",\"$ua\",\"$path\",\"$doc_root\",\"$ver\",\"$build\")";
$mysql->query($q);

//echo $q."<br><br>";

if(!$rip)$rip = $ip;
$q = "INSERT INTO `uniqueip` (`ip`,`ua`,`ver`,`build`) VALUES (\"$rip\",\"$ua\",\"$ver\",\"$build\") ON DUPLICATE KEY UPDATE `ua`=\"$ua\",`ver`=\"$ver\",`build`=\"$build\"";
$mysql->query($q);
//echo $q."<br>-----------<br>";