<?php

    $servername = "localhost";  
    $username = "root"; 
    $password = ""; 
    $dbname = 'shasha'; 
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        var_dump($conn->connect_error);
    } 
    $conn->set_charset('utf8');
    // var_dump("成功");
    


    $NewArrival = $conn -> query('select * from NewArrival');

    $con = $NewArrival -> fetch_all(MYSQL_ASSOC);
    $NewArrival->close();
    echo json_encode($con);
    
?>
