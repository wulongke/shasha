jQuery(function ($) {
  // 渲染页面
  var $article = $(".article");
  show($article, 21, "../../api/list/goods.php");






  // ===================================================
  // 点击价格，降序渲染
  var $rate = $(".rate");
  $rate.on("click", function () {
    show($article, 21, '../../api/list/goods_desc.php');
  })
  // 点击人气,渲染已售件数
  var $popuBtn = $(".popu");
  $popuBtn.on("click",function(){
    var show = 3;
    $.get("../../api/list/goods.php",{"show":show},function(res){
      var $res = JSON.parse(res);
      arr($res);  
    })
  })

  // 点击左键渲染分页
  var $zuoBtn = $(".zuo");
  $zuoBtn.on("click",function(){
    var show = 2;
    $.get("../../api/list/goods.php",{"show":show},function(res){
      var $res = JSON.parse(res);
      arr($res); 
    })
  })

  // 点击右键渲染分页
  var $youBtn = $(".you");
  $youBtn.on("click",function(){
    var show = 1;
    $.get("../../api/list/goods.php",{"show":show},function(res){
      var $res = JSON.parse(res);
      arr($res);  
    })
  })
 


// 点击商品把id传送到详情页

  $article.on("click",".dispy",function(){
    var guid = this.id;
    location.href="details.html?guid="+guid;
  })



  // 封装点击渲染排序页面
  function show(ele, num, site) {
    $.ajax({
      type: "get",
      url: site,
      dataType: "json",
      success: function (res) {
        var $cm = "";
        for (i = 0; i < num; i++) {
          var item = res[i];
    console.log(item.id);
          $cm += `<div class="dispy fl" id="${item.id}">
                <div class="dispy_img">
                  <img src="${item.imgurl}" alt="" />
                </div>
                <div class="dispy_sele">
                  <span>${item.seleone}</span><br/><span>${item.seletow}</span>
                </div>
                <div class="ibm">
                  <img src="${item.ibm}" alt="" />
                  <span>${item.ibmtext}</span>
                </div>
                <div class="price">
                  <span class="price_dis"><span>${item.rmb}</span>${item.pricedis}</span>
                  <span class="price_orig"><span>${item.rmb}</span>${item.priceorig}</span>
                  <span class="price_count">${item.pricecount}</span>
                </div>
                <p class="intpro_top">
                  <span class="intpro_tx">${item.intprotx}
                  </span>
                  <span class="intpro_sz">${item.intprosz}</span>
                </p>
                <p class="intpro_bt">
                  <span>${item.intprobt}</span>
                </p>
                <p class="pcs">${item.pcs}</p>
                <p class="sales">${item.sales}</p>
            </div>`;
        };
        ele.html($cm);
      }
    })
  }


  // 封装点击渲染分页页面
  function arr(lise){
    var $cm = "";
        for (i = 0; i < lise.length; i++) {
          var item = lise[i];
          $cm += `<div class="dispy fl" id="${item.id}">
                <div class="dispy_img">
                  <img src="${item.imgurl}" alt="" />
                </div>
                <div class="dispy_sele">
                  <span>${item.seleone}</span><br/><span>${item.seletow}</span>
                </div>
                <div class="ibm">
                  <img src="${item.ibm}" alt="" />
                  <span>${item.ibmtext}</span>
                </div>
                <div class="price">
                  <span class="price_dis"><span>${item.rmb}</span>${item.pricedis}</span>
                  <span class="price_orig"><span>${item.rmb}</span>${item.priceorig}</span>
                  <span class="price_count">${item.pricecount}</span>
                </div>
                <p class="intpro_top">
                  <span class="intpro_tx">${item.intprotx}
                  </span>
                  <span class="intpro_sz">${item.intprosz}</span>
                </p>
                <p class="intpro_bt">
                  <span>${item.intprobt}</span>
                </p>
                <p class="pcs">${item.pcs}</p>
                <p class="sales">${item.sales}</p>
            </div>`;
        };
        $article.html($cm);
}

// ============================================
})
