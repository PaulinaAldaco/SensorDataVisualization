<?php
    // For database connections
    include_once 'table_temp_3.php';

    // http://tc1004b-project-template.gearhostpreview.com/data/in.php?var1=95.23&var2=13.4

    // Verifying data
    echo " [GET] var1: " . $_GET['var1'] . " var2: " . $_GET['var2'] . "<br/>";

    // Parsing data
    $var1 = $_GET['var1'];
    $var2 = $_GET['var2'];

    // Only insert, if variables are not empty
    if(isset($var1) || isset($var2)){
        // MySQL injection query
        $sql = "INSERT INTO sensor_temp_3 (sensor1Value, sensor2Value)
        VALUES ('$var1','$var2')";
        
        // Insert into database
        if (mysqli_query($conn, $sql)) {
            echo "[MySQL] New record created successfully ! <br/>";
        } else {
            echo "[MySQL] Error: " . $sql . " " . mysqli_error($conn) . "<br/>";
        }
        // Close connection to database
        mysqli_close($conn);
        echo "[MySQL] Connection Closed <br/>";
    }
    
?>