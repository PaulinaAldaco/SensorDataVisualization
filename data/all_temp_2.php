<?php
    // For database connections
    include_once 'table_temp_2.php';

    // MySQL select all data
    $sql = "SELECT * FROM $dbname.$tbname";
    
    // Perform Query
    $result = mysqli_query($conn,$sql);
    
    // Parse data as JSON and return it
    $rows = array();
    while($r = mysqli_fetch_assoc($result)) {
        $rows[] = $r;
    }
    echo json_encode($rows);
    
    // Close database connection
    mysqli_close($conn);

?>