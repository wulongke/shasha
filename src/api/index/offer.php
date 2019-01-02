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
    


    $offer = $conn -> query('select * from offer');

    $con = $offer -> fetch_all(MYSQL_ASSOC);
    $offer->close();
    echo json_encode($con);
    
?>
