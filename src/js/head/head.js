jQuery(function($){
    //移动鼠标，让微信与微博二维码出现/隐藏
    var $qr_img = $(".qr_img");
    $(".member_attention").on("mouseover","img",function(){
        $(this).next().css("display","block");
        }).on("mouseout","img",function(){
        $(this).next().css("display","none");
        })

    //移动鼠标，让我的我的账户下面导航出现

    $(".member-linktext").on("mouseover",function(){
        clearTimeout(this.timer);
        $(this).next().slideDown(500);
        }).on("mouseout",function(){
        this.timer = setTimeout(()=>{
        $(this).next().slideUp(50);
        },1000);
        })
   
    

   //移动鼠标，让我的我的所有品牌下面导航出现
    var $category = $(".sasa_category_ul")
   $(".all-category").on("mouseover",function(){
        clearTimeout(this.timer);
        $category.slideDown(500);
        }).on("mouseout",function(){
        this.timer = setTimeout(()=>{
        $category.slideUp(50);
        },80);
    })

// ==================点击登入===============================
    var $logonBtn = $(".logon");
    var $loginBtn = $(".login");
    var $accnum = Cookie.getCookie("enterVal");
    if($accnum){
        $logonBtn.html($accnum);
        $logonBtn.next().html("退出");
    }
    
    $logonBtn.on("click",function(){
        location.href = "../../html/login.html";
        console.log($(this))
    })
    $logonBtn.next().on("click",function(){
       Cookie.delCookie("enterVal","/");
        $logonBtn.html("登录");
        $logonBtn.next().html("");
    })
    
    $loginBtn.on("click",function(){
        location.href = "../../html/register.html";
    })


// ====================点击跳转首页======================
})