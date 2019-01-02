<?php
$guid = isset($_GET["guid"])?$_GET["guid"]:null;
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
    // 
    
    $res = $conn -> query('select * from goods');
    $con = $res -> fetch_all(MYSQL_ASSOC);
   
    for($i = 0;$i <count($con);$i++){
        if($con[$i]["id"] == $guid){
        $arr = $conn -> query('select * from goods where id='.$guid.'');
        $con = $arr -> fetch_all(MYSQL_ASSOC);
        echo json_encode($con,JSON_UNESCAPED_UNICODE);
        }
    }

    
?>