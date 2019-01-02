<?php
    $accout = isset($_POST["accout"])?$_POST["accout"]:null;
    $pwd = isset($_POST["pwd"])?$_POST["pwd"]:null;
    $confirmPwd = isset($_POST["confirmPwd"])?$_POST["confirmPwd"]:null;
    $reg = isset($_POST["reg"])?$_POST["reg"]:null;
    
    $state = isset($_POST["state"])?$_POST["state"]:null;
    $enterVal = isset($_POST["enterVal"])?$_POST["enterVal"]:null;
    $cipherVal = isset($_POST["cipherVal"])?$_POST["cipherVal"]:null;
    // 1.创建连接,测试是否连接成功
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'shasha';
    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        // var_dump($conn->connect_error);
    }

    //2.查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
    //3.执行查询语句，得到查询结果集(对象)
    $res = $conn->query('select * from register where accout="'.$accout.'"');



    if($state){
        $res = $conn->query('select * from register where accout = "'.$enterVal.'" and password = "'.$cipherVal.'"');
            if($res->num_rows >0){
            $con = $res->fetch_all(MYSQLI_ASSOC);
            echo json_encode($con,JSON_UNESCAPED_UNICODE);
            }
            $res ->close();
    }else{if($reg){
        $res = $conn->query( 'insert into register (accout,password,conpassword) values ("'.$accout.'",'.$pwd.',"'.$confirmPwd .'")');
        if($res){
            echo true;
        }
    }else if($accout){
            $res = $conn->query('select *from register where accout ="'.$accout.'"');
            if($res->num_rows > 0){
                echo "该用户名已被注册";
            }else{
                echo "用户名可用";       
            }
    }
       
}
    


?>