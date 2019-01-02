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
    


    $skin = $conn -> query('select * from skin');

    $con = $skin -> fetch_all(MYSQL_ASSOC);
    $skin->close();
    echo json_encode($con);
    
?>
