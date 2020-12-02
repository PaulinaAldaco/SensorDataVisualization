<?php
    // For database connections
    include_once 'table_pot.php';

    // MySQL select all data
    //$sql = "SELECT sensor1Value FROM $dbname.$tbname WHERE sensor1Value IS NOT NULL ORDER BY ID DESC LIMIT 1";

    //Get last values that are not null
    $sql = "SELECT sensor1Value FROM $dbname.$tbname WHERE sensor1Value IS NOT NULL ORDER BY ID DESC LIMIT 1";
    
    // Perform Query
    $result = mysqli_query($conn,$sql);

    //Get int values
    $result = $result->fetch_array();
    $pot1 = intval($result[0]);

    //Add values to get final result
    $response = strval($pot1);
    
    //Return final response
    echo $response;
    
    //Close database connection
    mysqli_close($conn);

?>