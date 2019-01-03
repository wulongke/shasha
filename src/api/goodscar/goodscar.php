<?php
$guid = isset($_GET["guid"])?$_GET["guid"]:null;
$smallImg = isset($_GET["smallImg"])?$_GET["smallImg"]:null;
$logPing = isset($_GET["logPing"])?$_GET["logPing"]:null;
$logJie = isset($_GET["logJie"])?$_GET["logJie"]:null;
$costZhe = isset($_GET["costZhe"])?$_GET["costZhe"]:null;
$num = isset($_GET["num"])?$_GET["num"]:null;

$toToprice = isset($_GET["toToprice"])?$_GET["toToprice"]:null;
$accnum = isset($_GET["accnum"])?$_GET["accnum"]:null;
$show = isset($_GET["show"])?$_GET["show"]:null;
$amountVal = isset($_GET["amountVal"])?$_GET["amountVal"]:null;
$totalVal = isset($_GET["totalVal"])?$_GET["totalVal"]:null;
$accout = isset($_GET["accout"])?$_GET["accout"]:null;


$cfirm = isset($_GET["cfirm"])?$_GET["cfirm"]:null;
    $servername = "localhost";    
    $username = "root"; 
    $password = ""; 
    $dbname = 'shasha'; 
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        // var_dump($conn->connect_error);
    } 
    $conn->set_charset('utf8');
    // var_dump("成功");
    // 
    
    $res = $conn -> query('select * from goodscar where accout="'.$accnum.'"');
    if($cfirm){
        $res = $conn -> query('insert into goodscar (id,num,accout,total,smallImg,logPing,logJie,costZhe) values ("'.$guid.'","'.$num.'","'.$accnum.'","'.$toToprice.'","'.$smallImg.'","'.$logPing.'","'.$logJie.'","'.$costZhe.'")');
            echo 666;
    } else if($show == 1){
        $res = $conn -> query('select * from goodscar');
        $con = $res -> fetch_all(MYSQL_ASSOC);
        echo json_encode($con,JSON_UNESCAPED_UNICODE);
    }else if($show == 2){
        $res = $conn -> query('update goodscar set num="'.$amountVal.'",total="'.$totalVal.'"  where accout="'.$accout.'"');
       
    }
    
    
   


    
?>