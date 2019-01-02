<?php
    $show = isset($_GET["show"])?$_GET["show"]:null;
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

    if($show == 1){
        $res = $conn -> query('select * from goods where id between 15 and 20');
        $con = $res -> fetch_all(MYSQL_ASSOC);
        echo json_encode($con,JSON_UNESCAPED_UNICODE);
    }else if($show == 2){
        $arr = $conn -> query('select * from goods where id between 8 and 17');
        $con = $arr -> fetch_all(MYSQL_ASSOC);
        echo json_encode($con,JSON_UNESCAPED_UNICODE);
    }else if($show == 3){
        $arr = $conn -> query('select * from goods where sales');
        $con = $arr -> fetch_all(MYSQL_ASSOC);
        echo json_encode($con,JSON_UNESCAPED_UNICODE);
    }
    else{
        $skin = $conn -> query('select * from goods');
        $con = $skin -> fetch_all(MYSQL_ASSOC);
        $skin->close();
        echo json_encode($con);
    }

    
   

// ==========================================================================
    
    
?>
