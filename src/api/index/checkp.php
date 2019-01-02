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
    

    $res = $conn -> query('select * from checkp');

    $content = $res -> fetch_all(MYSQL_ASSOC);
    $res->close();
    echo json_encode($content);


?>

