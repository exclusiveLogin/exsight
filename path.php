<?php
$check_prefix_lenght = strlen($_SERVER['CONTEXT_PREFIX']);
$check_prefix = $check_prefix_lenght>0;

$path_settings = "";
$path_opc = "";
//echo $check_prefix;
if($check_prefix){
	$path_settings = $_SERVER['CONTEXT_DOCUMENT_ROOT']."/settings/";
	$path_opc = $_SERVER['CONTEXT_DOCUMENT_ROOT']."/opcdata/";
}else{
	$path_arr = explode("/",$_SERVER['REQUEST_URI']);
	//var_dump($path_arr);
	$path_settings = $_SERVER['CONTEXT_DOCUMENT_ROOT']."/".$path_arr[1]."/settings/";
	$path_opc = $_SERVER['CONTEXT_DOCUMENT_ROOT']."/".$path_arr[1]."/opcdata/";
}
//echo $path_settings;