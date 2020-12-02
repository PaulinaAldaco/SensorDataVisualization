<?php
    // For database connections
    include_once 'table_pot.php';

    // MySQL select all data
    //$sql = "SELECT sensor1Value FROM $dbname.$tbname WHERE sensor1Value IS NOT NULL ORDER BY ID DESC LIMIT 1";

    //Get last values that are not null
    $sql = "SELECT
            (SELECT sensor1Value FROM $dbname.$tbname WHERE sensor1Value IS NOT NULL ORDER BY ID DESC LIMIT 1) as sensor1Value,
            (SELECT sensor2Value FROM $dbname.$tbname WHERE sensor2Value IS NOT NULL ORDER BY ID DESC LIMIT 1) as sensor2Value,
            (SELECT sensor3Value FROM $dbname.$tbname WHERE sensor3Value IS NOT NULL ORDER BY ID DESC LIMIT 1) as sensor3Value"
    
    // Perform Query
    $result = mysqli_query($conn,$sql);

    //Get int values
    $row = mysqli_fetch_array($result, 'MYSQLI_ASSOC');
    $pot1 = $row['sensor1Value'];
    $pot2 = $row['sensor2Value'];
    $pot3 = $row['sensor3Value'];

    //Add values to get final result
    $response = $pot1 + $pot2 + $pot3;
    
    //Return final response
    echo strval($response);
    
    //Close database connection
    mysqli_close($conn);

?>