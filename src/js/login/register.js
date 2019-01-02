jQuery(function($){
  var $Bigbtn = $(".btn-big");
  var $accout = $(".accout"); 
  var $pwd = $(".pwd");
  var $confirmPwd = $(".confirm_pwd");
  var $auth = $(".auth");
  var $license = $("#license");
  var $formAct = $(".form-act");
  var $judgeAccout;
  var $judgePwd;
  var $judgeConfirmPwd;
  var $judgeimgInput;
  //获取随机验证码
    var $code = $(".code");
    var $codeVal = $(".code").val();
    $code.on("click",function(){
    var $su = ""+getRandomNum(0,9)+getRandomNum(0,9)+getRandomNum(0,9)+getRandomNum(0,9)
      $code.val($su)
    })

    var $hint = $(".accout_hint");

  // 账户判断
    $accout.on("blur",function(){
      var accout = this.value;
      console.log(accout)
      if(!(/^1[3-8]\d{9}$/.test(accout))){
        $(this).next().css("color","red").html("用户名不符合");
          $judgeAccout = false;
      }else{
        $.post("../../api/login/register.php",{"accout":accout},(data)=>{
          console.log(data)
          $(this).next().html(data).css("color","red");
            $judgeAccout = true;
            if(data == "用户名已被注册"){
              $(this).next().css("color","red");
              $judgeAccout = false;
            }
        });
      }
    })

  // // 密码判断
    $pwd.on("blur",function(){
      var $pwsVal = this.value.trim();
      console.log($pwsVal);
      if($pwsVal.length < 6){
         $(this).next().css("color","red").html("密码不符合");
          $judgePwd = false;
      }else{
            $(this).next().html("√").css("color","red");
            $judgeAccout = true;
            }
    })

  //确认密码判断
      $confirmPwd.on("blur",function(){
      var $conPwsVal = this.value.trim();
        if($conPwsVal != $pwd.val()){
          $(this).next().css("color","red").html("密码不一致");
        }else{
         $(this).next().css("color","red").html("√");
          $judgeConfirmPwd = true;
        }
      })
    
  // //验证码判断
    $auth.on("blur",function(){
        var $authVal = $(this).val().trim();
        console.log($authVal)
        if($authVal == ""){
            $(this).next().next().css("color","red").html("请输入验证码");
            $judgeimgInput = false;
        }else if($authVal != $(".code").val()){
            $(this).next().next().css("color","red").html("验证码错误");
            $judgeimgInput = false;
        }else if($authVal = $(".code").val()){
           $(this).next().next().css("color","red").html("√");
            $judgeimgInput = true;
        }
    })

  //   //服务条款判断
    $license.on("change",function(){
    if(!this.checked){
        $(this).next().next().html("请接受服务条款").css("color","red");
    }else{
        $(this).next().next().html("");
    }
  })

  //   /*注册完成提交*/
    $Bigbtn.on("click",function(e){
        e.preventDefault();
            if($license.prop("checked")){
                var reg = true;
                var accout = $accout.val();
                console.log(accout)
                var pwd = $pwd.val();
                var confirmPwd = $confirmPwd.val();
                $.post("../../api/login/register.php",{"accout":accout,"pwd":pwd,"confirmPwd":confirmPwd,"reg":reg},function(data){
                    if(data){
                        // location.href = "../../index.html";
                    }
                })
            }
        
    }) 


  
})