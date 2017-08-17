<?php
$logindb_res_hd="root";
$passdb_res_hd="123";
$dbhost_res_hd="localhost";
$dbname_res_hd="es_respark";
$mysql_res_hd= new mysqli($dbhost_res_hd,$logindb_res_hd,$passdb_res_hd,$dbname_res_hd);
if($mysql_res_hd->connect_errno){
    die('{"errors":true,"errormsg":"error db":"'.$mysql_res_hd->connect_error.'"}');
}
$mysql_res_hd->query("SET NAMES 'UTF8';");