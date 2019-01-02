jQuery(function($){


  var $getCode = $(".getcode");
  var $enterbtn = $(".enterbtn")

  $getCode.on("click",function(){
    console.log(getRandomNum)
  var $code = ""+getRandomNum(0,9)+getRandomNum(0,9)+getRandomNum(0,9)+getRandomNum(0,9)
    $(this).val($code);

    })


  $enterbtn.on("click",function(e){
    var $enter = $(".enter");
    var $cipher = $(".ciphe");
    var $verify = $(".verify");
    var $rberMe = $(".rberme");
    var $enterVal = $(".enter").val();
    var $cipherVal = $(".cipher").val();
    e.preventDefault();
    if($enterVal.length == ""){
      $enter.next().css("color","red").html("请输入用户名")
    }
    if($cipherVal.length == ""){
      $cipher.next().css("color","red").html("请输入密码")
    }
    if($verify.val() == $getCode.val()){
      $.post("../../api/login/register.php",{"enterVal":$enterVal,"cipherVal":$cipherVal,"state":"signIn"},function(res){
        if(res){
        //===========存cookie=========
          var d = new Date();
          d.setDate(d.getDate()+30);
          Cookie.setCookie("enterVal",$enterVal,d,"/");
          location.href = "../../index.html";
        }else{
          alert("用户名或密码不正确，请重新输入");
        }
      })
    }else{
      $verify.next().next().css("color","red").html("验证码输入错误");
    }
    if($verify.val().length == ""){
      $verify.next().next().css("color","red").html("验证码不能为空");

    }

  })


    
})