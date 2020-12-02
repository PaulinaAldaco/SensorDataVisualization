<?php
    // For database connections
    include_once 'table_pot.php';

    // http://tc1004b-project-template.gearhostpreview.com/data/in.php?var1=95.23&var2=13.4

    // Verifying data
    echo " [GET] var1: " . $_GET['var1'] . "<br/>";

    // Parsing data
    $var1 = $_GET['var1'];

    // Only insert, if variables are not empty
    if(isset($var1)){
        // MySQL injection query
        $sql = "INSERT INTO potentiometers (sensor1Value, sensor2Value, sensor3Value)
        VALUES ('$var1',NULL,NULL)";
        
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