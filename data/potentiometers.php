<?php
    // For database connections
    include_once 'table_pot.php';

    // MySQL select all data
    //$sql = "SELECT sensor1Value FROM $dbname.$tbname WHERE sensor1Value IS NOT NULL ORDER BY ID DESC LIMIT 1";

    //Get last values that are not null
    $sql = "SELECT (SELECT sensor1Value FROM potentiometers WHERE sensor1Value IS NOT NULL ORDER BY ID DESC LIMIT 1) as sensor1Value,
	        (SELECT sensor2Value FROM potentiometers WHERE sensor2Value IS NOT NULL ORDER BY ID DESC LIMIT 1) as sensor2Value,
	        (SELECT sensor3Value FROM potentiometers WHERE sensor3Value IS NOT NULL ORDER BY ID DESC LIMIT 1) as sensor3Value";
    
    // Perform Query
    $result = mysqli_query($conn,$sql);

    //Get int values
    $result = $result->fetch_array();
    $pot1 = intval($result[0]);
    $pot2 = intval($result[1]);
    $pot3 = intval($result[2]);

    //Add values to get final result
    $response = $pot1 + $pot2 + $pot3;
    $response = strval($response);
    
    //Return final response
    echo $response;
    
    //Close database connection
    mysqli_close($conn);

?>