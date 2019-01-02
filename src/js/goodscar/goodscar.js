jQuery(function(){
  var $car = $(".pick_car").find("ul").next("div");
  var show = 1;
  $.getJSON("../../api/goodscar/goodscar.php",{"show":show},function(res){
   
    arr(res);
 
  })

   // function arr(lise){
   //  var $cm = "";
   //  for (i = 0; i < lise.length; i++) {
   //        var item = lise[i];
   //  $(".minute_list_as").find("ul").next("img").arrt("src",${item.smallImg});      
   //  $("letter").html(${item.logPing}&nbsp;${item.logJie})
   //  $("unitPrice").html(${item.costZhe})
   //  $("gross").html("￥"+ ${item.total})       
   //      }



   function arr(lise){
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
                    <span>${item.costZhe}</span>
                  </li>
                  <li class="minute_list .minute_list_ds">
                    <div class="p-quantity">
                      <a href="javascript:;" class="btn-decrease">-</a>
                      <input type="text" name="" value="${item.num}">
                      <a href="javascript:;" class="btn-increase">+</a>
                    </div>
                  </li>
                  <li class="minute_list minute_list_es">
                    <span>￥${item.total}</span>
                    <span>商品已包税</span>
                  </li>
                  <li class="minute_list minute_list_fs"><a href="">删除</a>
                  </li>
                  </ul>`;
                };
                $car.html($cm);
        var $btn_decrease = $(".btn-decrease")

        }


  // ======================================
})