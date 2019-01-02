
jQuery(function($){
    // 渲染每日必看页面
    var $container = $("#sasa_mustcheck_container")
    var $xhr = new XMLHttpRequest();
    var status = [200,304];
    var $stt = "";

    $xhr.onreadystatechange = function(){
        if($xhr.readyState == 4 && status.indexOf($xhr.status)!=-1){
            var $brr = JSON.parse($xhr.responseText);  
            $brr.map(function(item){
                $stt += ` <a target="_blank" href="#" class="sasa_mustcheck_a_odd">
                    <div class="sasa_mustcheck_item sasa_mustcheck_item_odd">
                    <img class="sasa_mustcheck_img" src="${item.images}">
                    <div class="sasa_mustcheck_info">
                    <p class="sasa_mustcheck_title">${item.title}</p>
                    <p class="sasa_mustcheck_subtit">${item.subtit}</p>
                    <p class="sasa_mustcheck_date">${item.date}</p>
                    <span class="sasa_mustcheck_btn">${item.btn}</span>
                    </div>
                    </div>
                    </a>`;
                    }).join("");
                    $container. html($stt)
        }
    }
    $xhr.open("get","../../api/index/checkp.php",true);
    $xhr.send(null);
    // ==============================================================
    // 渲染限时特价
    var $limit = $(".sasa_limit")
    var $xhoffer = new XMLHttpRequest();
    var status = [200,304];
    var $sac = "";

    $xhoffer.onreadystatechange = function(){
        if($xhoffer.readyState == 4 && status.indexOf($xhoffer.status)!=-1){
            var $arr = JSON.parse($xhoffer.responseText);
            $arr.map(function(item){
                $sac += ` <a href="#" target="_blank"> 
                                <div class="sasa_limit_item" id="iprefix_index_seckill2_524172">
                                <div class="sasa_limit_imgWrapper">
                                    <img class="sasa_limit_img" src="${item.images}">
                                    <i class="sasa_limit_count">
                                        <b>${item.count} 
                                            <span>${item.span}</span>
                                        </b>
                                    </i>
                                </div>
                                <div class="sasa_limit_info">
                                <div class="sasa_limit_countdown" id="iprefix_seckill2_time_524172">${item.countdown}
                                    <span class="hour">${item.hour}</span>:<span class="minute">${item.minute}</span>:<span class="second">${item.second}</span>
                                </div>
                                <div class="sasa_limit_detail">
                                <div class="sasa_limit_detail_intro">
                                    ${item.intro}
                                </div>
                                <div class="sasa_limit_detail_title">
                                    <b class="yew"> ${item.yew}</b>
                                ${item.title}          
                                </div>
                                <div class="sasa_limit_detail_price">
                                    <div class="sasa_limit_pirce_cur">
                                        <span class="sasa_limit_price_cur_sig">${item.sig}</span>
                                        <span class="sasa_limit_price_cur_num">${item.curnum}</span>
                                    </div>
                                    <div class="sasa_limit_price_old">
                                        <span class="sasa_limit_price_old_num">￥${item.oldnum}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="sasa_limit_bottom">
                                <div class="sasa_limit_sold">${item.sold}
                                    <span class="sasa_limit_soldnum">${item.soldnum}</span>
                                ${item.soldtow}
                                </div>
                                <span class="sasa_limit_btn">${item.btn}</span>
                            </div>
                        </div>
                     </div>
                     </a> `;
                    }).join("");

                    $limit. html($sac)
                }
            }
            $xhoffer.open("get","../../api/index/offer.php",true);
            $xhoffer.send(null);

// ==================================渲染排行============================================================
    var $rankItem = $(".sasa_rank_item")
    var $xhrank = new XMLHttpRequest();
    var status = [200,304];
    var $rank = "";

    $xhrank.onreadystatechange = function(){
        if($xhrank.readyState == 4 && status.indexOf($xhrank.status)!=-1){
            var $crr = JSON.parse($xhrank.responseText);        
            $crr.map(function(item){
                $rank += `  <div class="sasa_rank_icon"></div>
                <a class="" href="#" target="_blank">
                  <img class="sasa_rank_item_img" src="${item.imgs}">
                </a>
                <div class="sasa_rank_item_info">
                  <div class="sasa_rank_item_name">
                    <a href="#">
                      <b class="yew">${item.yew}</b>
                     ${item.ahref}
                    </a>
                  </div>
                  <div class="sasa_rank_item_price">
                    <div class="sasa_rank_item_price_cur">
                      <span class="sasa_rank_item_price_cur_num">${item.pricecur}</span>
                    </div>
                    <div class="sasa_rank_item_price_old">
                      <span class="sasa_rank_item_price_old_num">${item.oldnum}</span>
                    </div>
                    <div class="sasa_rank_item_sold">${item.sold}
                      <span class="sasa_rank_item_sold_num">${item.soldnum}</span>
                    </div>
                  </div>
                </div>  `;
                    }).join("");

                    $rankItem. html($rank)
                }
            }
            $xhrank.open("get","../../api/index/top.php",true);
            $xhrank.send(null);
// ======================渲染新品上市====================

// var $box = $(".new_box")
//     var $xhrnew = new XMLHttpRequest();
//     var status = [200,304];
//     var $ran = "";
//     $xhrnew.onreadystatechange = function(){
//         if($xhrnew.readyState == 4 && status.indexOf($xhrnew.status)!=-1){
//             var $drr = JSON.parse($xhrnew.responseText);
//             console.log($drr)         
//             $drr.map(function(item){
//                 $rank += `<div class="sasa_new">
//                         <a href="#">
//                         <ul class="sasa_ul">
//                         <li class="sasa_ul_1">
//                         <span>${item.arrival}<span>${item.arrivalicon}</span></span>
//                         </li>
//                         <li class="sasa_ul_2">
//                         <span></span>
//                         </li>
//                         <li class="sasa_ul_3">
//                         <span>${item.nation}</span>
//                         </li>
//                         </ul>
//                          <div class="sasa_img">
//                         <img src="${item.img}" alt="" />
//                         </div>
//                         <p class="jian">
//                         <a href="">
//                         <span class="chan">${item.yew}</span>
//                         <span class="yr">${item.ahref}</span>
//                         </a>
//                         </p>
//                         <p class="jia">
//                         <span>${item.pricesign}</span><span>${item.pricenum}</span>
//                         <span>${item.priceold}</span>
//                         </p>
//                         </a>
//                         </div>`;}).join("");

//                         $box. html($ran)
//                 }
//             }
//             $xhrnew.open("get","../../api/index/new.php",true);
//             $xhrnew.send(null);
 
//             console.log(666)



})
