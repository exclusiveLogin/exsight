<?php
    require_once "../path.php";
    require_once $path_settings."db_hd.php";

    echo $path_settings."<br>";

    $q_hd = "SELECT UNIX_TIMESTAMP(`datetime`) AS `utc` FROM `res1_hd` ORDER BY `datetime` DESC LIMIT 1";

    $result = $mysql_res_hd->query($q_hd);
    $row = $result->fetch_assoc();
    echo "utc from db".$row["utc"]."<br>";
    echo "utc server".time();

