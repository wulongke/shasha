jQuery(function($){
var str = location.search.slice(1);
var arr = str.split("=");
var guid = arr[1];

var $introLog = $(".intro_log");
var $cost = $(".cost");
var $minImg = $(".minimg");
var $agsTop = $(".ags_top_span");
$.getJSON("../../api/details/details.php",{"guid":guid},(res) =>{
    var $img = ""; 
    var $log = "";
    var $cos = "";
    var $ssr = "";
    var $Price = "";
    $.map(res,(item) =>{
   // 渲染放大镜图片
    $img += ` <li>
            <div class="small-img">
              <img src="../img/details/03.jpg" />
            </div>
          </li>          <li>
            <div class="small-img">
              <img src="${item.imgurl}" />
            </div>
          </li>
          <li>
            <div class="small-img">
              <img src="../img/details/03.jpg" />
            </div>
          </li>
          <li>
            <div class="small-img">
              <img src="${item.imgurl}" />
            </div>
          </li>
          <li>
            <div class="small-img">
              <img src="${item.imgurl}" />
            </div>
          </li>`;
    // 渲染右部分标题
    $log +=` <span class="log_gan">香港特快</span>
          <span class="log_guan">零关税</span>
          <span class="log_bao">包税</span>
          <span class="log_ping">${item.intprosz}</span>
          <span class="log_jie">${item.intprobt}</span>`;   
    //渲染价格折扣
    $cos +=` <span class="cost_rmb">${item.rmb}</span>
        <span class="cost_zhe">${item.pricedis}</span>
        <p class="cost_yuan">
          <span>市场价</span>
          <span>￥${item.priceorig}</span>
        </p>
        <span class="cost_kou">${item.priceorig}</span>`;
        $ssr = ` <img src="${item.imgurl}" />`;
        $Price =`<span>￥</span>
            <span class="toprice">0</span>`;

});
    $minImg.html($img);
    $introLog.html($log);
    $cost.html($cos);
    $(".images-cover").html($ssr);
    $(".magnifier-view").html($ssr);
    $agsTop.html($Price);

//点击增加购买数量+计算件数*单价=总价
//
var $minusBtn = $(".btn-decrease");
var $addBtn = $(".btn-increase");
var $num = $(".num");
var $toprice = $(".toprice");
var $costNum = Number($(".cost_zhe").html());
$addBtn.on("click",function(){
    var qty = Number($num.html());
    if(qty == 100){
        qty = 100;
    }else{
        qty++;
    }
    $num.html(qty);
//计算件数*单价=总价
    $toprice.html($costNum * qty);
})

//点击减少购买数量+计算件数*单价=总价
//
$minusBtn.on("click",function(){
    var qty = Number($num.html());
    if(qty>0){
        qty--;
    }
    $num.html(qty);
//计算件数*单价=总价
    $toprice.html($costNum * qty);
})
//点击加入购物车，传送数据到购物车页面
    
var $majorBtn = $(".btn-major");
$majorBtn.on("click",()=>{
  var cfirm = true;
  var $smallImg = $(".images-cover").find("img")[0].src
  var $logPing = $(".log_ping").html();
  var $logJie = $(".log_jie").html();
  var $costZhe = $(".cost_zhe").html()
  var $num = $(".num").html();
  var $toToprice = $toprice.html();
  var $accnum = Cookie.getCookie("enterVal");

   $.get("../../api/goodscar/goodscar.php",{"smallImg":$smallImg,"logPing":$logPing,"logJie":$logJie,"costZhe":$costZhe,"guid":guid,"num":$num,"toToprice":$toToprice,"accnum":$accnum,"cfirm":cfirm},function(res){
    // console.log(res)
      location.href = "../../html/goodscar.html"
    })

})


})


})
// ================放大镜=================

