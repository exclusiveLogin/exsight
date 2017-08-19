<?php
require_once "path.php";
include_once $path_settings."db.php";

$ip = $_SERVER["REMOTE_ADDR"];
$rip = $_SERVER["HTTP_X_FORWARDED_FOR"];
$ua = $_SERVER["HTTP_USER_AGENT"];
$ver = $_GET["version"];
$build  = $_GET["build"];


echo "Remote IP:".$ip." real_IP:".$rip." ua:".$ua." version:".$ver."build:".$build;
$q = "INSERT INTO `visits` (`ip`,`rip`,`ua`,`ver`,`build`) VALUES (\"$ip\",\"$rip\",\"$ua\",\"$ver\",\"$build\")";
$mysql->query($q);

if(!$rip)$rip = $ip;
$q = "INSERT INTO `uniqueip` (`ip`,`ua`,`ver`,`build`) VALUES (\"$rip\",\"$ua\",\"$ver\",\"$build\") ON DUPLICATE KEY UPDATE `ua`=\"$ua\",`ver`=\"$ver\",`build`=\"$build\"";
$mysql->query($q);
//echo $q;