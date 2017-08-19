<?php
    echo __DIR__."<br>";
    echo $_SERVER['SERVER_NAME']."<br>";
    echo __FILE__."<br>";
    var_dump($_SERVER);
    echo "<br>---------------<br>";
    echo "http://" . $_SERVER['SERVER_NAME'] . $_SERVER['CONTEXT_PREFIX']."<br>";
	$path_settings = $_SERVER['CONTEXT_DOCUMENT_ROOT']."/settings/";
	echo $path_settings."<br>";
	echo phpinfo();