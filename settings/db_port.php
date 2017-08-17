<?php
$logindb_port_hd="root";
$passdb_port_hd="123";
$dbhost_port_hd="localhost";
$dbname_port_hd="es_port";
$mysql_port_hd= new mysqli($dbhost_port_hd,$logindb_port_hd,$passdb_port_hd,$dbname_port_hd);
if($mysql_port_hd->connect_errno){
    die('{"errors":true,"errormsg":"error db":"'.$mysql_port_hd->connect_error.'"}');
}
$mysql_port_hd->query("SET NAMES 'UTF8';");