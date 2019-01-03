jQuery(function () {
  var $car = $(".pick_car").find("ul").next("div");
  var show = 1;
  $.getJSON("../../api/goodscar/goodscar.php", { "show": show }, (res) => {

    vray(res);
    
    plusminus();//加减
    spaceoOut();//增加

  })

  function vray(lise) {
    var $cm = "";
    for (i = 0; i < lise.length; i++) {
      var item = lise[i];
      $cm += ` <ul class="minute">
                  <li class="minute_list minute_list_as">
                    <input type="checkbox" />
                    <img src="${item.smallImg}" alt="" />
                  </li>
                  <li class="minute_list minute_list_bs">
                    <p>${item.logPing}&nbsp;${item.logJie}</p>
                    <p>100毫升</p>
                    <p>
                      <span class="ns">直降</span>
                      <span>直降活动</span>
                    </p>
                  </li>
                  <li class="minute_list minute_list_cs">
                    <span>￥</span>
                    <i class="at">${item.costZhe}</i>
                  </li>
                  <li class="minute_list .minute_list_ds">
                    <div class="p-quantity">
                      <a href="javascript:;" class="btn-decrease">-</a>
                      <input type="text" name="" value="${item.num}" class="amount">
                      <a href="javascript:;" class="btn-increase">+</a>
                    </div>
                  </li>
                  <li class="minute_list minute_list_es">
                    <span>￥<i class="total" style="display: inline;">${item.total}</i></span>
                    <span>商品已包税</span>
                  </li>
                  <li class="minute_list minute_list_fs"><a href="javascript:;">删除</a>
                  </li>
                  </ul>`;
    }
    $car.html($cm);
  }

  //点击减,减去数量，且减数据库里面数量
  function plusminus(){
    var $decreaseBtn = $(".btn-decrease");
    $decreaseBtn.on("click",function(){
      var $total = $(this).parent().parent().next().children("span").children("i");
   
      var $at = $(this).parent().parent().prev().children("i").html();
      var $amount = $(this).next();
      var $amountVal = $(this).next().val();
      if($amountVal > 0){
       $amountVal --;
      }
      $amount.val($amountVal);
      //点击减，小计金额改变
      $total.html($amountVal * $at);
      //数据库内容加减
      var $show = 2;
      var $totalVal = $total.html();
      var $accout = Cookie.getCookie("enterVal");
      console.log($accout)
      
            console.log($totalVal)
      $.get("../../api/goodscar/goodscar.php",{"amountVal":$amountVal,"totalVal":$totalVal,"show":$show,"accout":$accout},function(res){

      })
    })
  }


  //点击减,增加数量，且加数据库里面数量  
  function spaceoOut(){
    var $increaseBtn = $(".btn-increase")
    $increaseBtn.on("click",function(){
      var $total = $(this).parent().parent().next().children("span").children("i");
      var $at = $(this).parent().parent().prev().children("i").html();
      var $amount = $(this).prev();
      var $amountVal = $(this).prev().val();
      $amountVal ++;
      $amount.val($amountVal)
      //点击加，小计金额改变
      $total.html($amountVal * $at);
      //数据库内容加减
      var $show = 2;
      var $accout = Cookie.getCookie("enterVal");
      console.log($accout)
     
      var $totalVal = $total.html();
      console.log($totalVal)
      $.get("../../api/goodscar/goodscar.php",{"amountVal":$amountVal,"totalVal":$totalVal,"show":$show,"accout":$accout},function(res){
      
      })
    })
  }


  // ======================================
})