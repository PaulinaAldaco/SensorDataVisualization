<?php
    // Database credentials
    $servername = "den1.mysql1.gear.host";
    $username   = "datasensor";
    $password   = "Zr6l8~0I4?Hx";
    $dbname     = "datasensor";
    $tbname     = "sensor_temp_3";

    // Create database connection
    $conn=mysqli_connect($servername,$username,$password,"$dbname");
    
    // Check Connection
    if(!$conn){
        die('Could not Connect My Sql:' .mysql_error());
    }
    //echo "[MySQL] Connected successfully <br/>";
?>