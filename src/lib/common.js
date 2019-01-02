/****************************************************************
****函数名：GetRandomNumber()
****参数：  a  b
****功能：  随机输出[a,b]一个数
****返回值：num
****************************************************************/
function GetRandomNumber(a,b){
  var num = parseInt(Math.random()*(b-a+1)+a);
  return num;
  //30-100的随机数
  //Math.random()*(b-a+1)+a ==> [0,1)*71+30 ==> [30,101)
}
/****************************************************************
****函数名：GeneratedForm()
****参数：  line column
****功能：  生成line行column列的表格
****返回值：inc
****************************************************************/
function GeneratedForm(line,column){
    var inc = '';
    inc += '<table border style="border-collapse:collapse;">';
    for(var i=1; i<=column; i++){
        inc += '<tr>';
        for(var j=1; j<=column; j++){
            inc += '<td>单元格</td>';
            }
        inc += '</tr>';
    }
    inc += '</table>';
    return inc;
}
/*****************************************************************
****函数名：factorials()
****参数：  a
****功能：计算a的阶乘
****返回值：可返回string(如1*2*3*4*a),计算结果res
*****************************************************************/
function factorials(a){
  var n = 1;
  var str='';
  for(var i=1; i<a; i++){   
      str += i + "*";
      n = n * i; 

      if(i%10 == 0){
        str = str + '<br/>';
      }
  }
  str = str + a;
  n = n * a;
  return { 
          string: str,
          res:  n};
}
/*****************************************************************
****函数名：MoreFactorial()
****参数：  t
****功能：计算1!+2!+...+t!的阶乘
****返回值：可返回string(如1!+2!+3!+..+t!),计算结果res
*****************************************************************/
function MoreFactorial(t){
    var a = 0;
    var str='';
    for(var i=1; i<t; i++){
      var n = 1;
      for(var j=1; j<=i; j++){ 
          n = n * j;    
      }
      a = a+n; 
      str += i+'!+';  
      if(i%10==0){
          str=str+'<br/>';
      }
    }
    n = 1;
    for(var i=1; i<=t; i++){
      n = n*i;
    }
    a = a+n;
    str += t+'!';
    return { 
          string: str,
          res:  a};
}
/*****************************************************************
****函数名：sorting()
****参数：  可传n个数字参数
****功能：  对n个数进行从小到大排列
****返回值：myArray
*****************************************************************/
function sorting(){
    var leng = arguments.length;
    for(var i=1; i<=leng; i++){
        for(var j=1; j<=leng-i; j++){
            if(arguments[j-1] > arguments[j]){
                var temp = 0;
                temp = arguments[j-1];
                arguments[j-1] = arguments[j];
                arguments[j] = temp;
            }
        }
    }
    var myArray=new Array();
    for(i=0; i<leng; i++){
        myArray[i] = arguments[i];
    }
    return myArray;
}
/*****************************************************************
****对象名：Cookie
****参数：  1.name,val,data,path   2.name   3.name,val,path
****功能：  1.设置cookit   2.获取cookit   3.删除cookit
****返回值：1.无   2.""或者val   3.无
*****************************************************************/
var Cookie = {
    //  * name cookie名
    //  * val cookie值
    //  * date 时间对象
    //  * path 路径
  setCookie : function(name,val,data,path){
                var str='';
                str+=name+'='+val;
                if(data){
                  str+='; expires='+ data.toUTCString();
                }
                if(path){
                  str+='; path='+ path;
                }
                document.cookie = str;
              },
  getCookie : function(name){
                var cookie =  document.cookie;
                if(cookie == ""){
                  return "";
                }
                else{
                  var cookieArr = cookie.split("; ");
                  for(var i=0; i<cookieArr.length;i++){
                    var arr = cookieArr[i].split("=");
                    if(arr[0] == name){
                      return arr[1];
                    }
                  }
                  return "";
                }
              },
  delCookie : function(name,path){
                var d = new Date();
                d.setDate(d.getDate()-1);
                Cookie.setCookie(name,"",d,path);
              }
}
/*****************************************************************
****函数名：buffer_animation
****参数：  1.ele(节点对象)  2.obj{attr(属性):target(目标值)} 
********    3.time(每隔time时间执行一次)  4.fn()动画执行完毕后要执行的函数
****功能：  实现动画缓冲效果
****返回值：无  
*****************************************************************/
// 1.定时器名字根据css属性进行命名,从而保证多个定时器赋值给的变量名不同，不会发生覆盖。
// 2.在一个动画函数里面，可以定义多个css属性同时改变
//  * 参数变成对象{attr:target}
//  * for...in遍历对象，拿到每个attr及对应target值
//      * 利用let，将attr、target的值保留在当前的块级作用域
//      * 利用函数的形参，将attr、target的值存在局部作用域。
// 3.需求：所有动画执行完毕后，进行一堆操作。
// （1）在清除定时器后再执行这堆操作，会出现执行多次的问题
//      * 统计出attr的个数，每次清除定时器就对个数进行--，直到为0，代表所有动画执行完毕。
// (2) 封装动画函数结束后，别人要做什么，我不知道。所以只能帮你执行。你需要把你要做的东西封装成函数，传参给我
//      * 别人不一定会传递回调函数，要判断。 
function buffer_animation(ele,obj,time,fn){
  var temp = 0;
  for(var key in obj){
    var attr = key;
    var target = obj[key];
    temp++;
    perform(attr,target);
  }
  function perform(attr,target){
    target = attr == "opacity" ? target*100 : target;
    clearInterval(ele[attr+'Timer']);
    ele[attr+'Timer'] = setInterval(function(){
      var current = window.getComputedStyle(ele)[attr];
      var unit = current.match(/[a-z]+$/); //提取单位
      unit = unit ? unit[0] : "";
      var current = parseFloat(current);     //提取大小，去除单位
      current = attr == "opacity" ? current*100 : current;
      var speed = (target - current)/20;
      if(speed > 0){
        speed = Math.ceil(speed);
      }else if(speed < 0){
        speed = Math.floor(speed);
      }
      current = current+speed;
      if(current == target){
          clearInterval(ele[attr+'Timer']);
          temp--;
          if(temp == 0 && fn && typeof fn == "function"){
            fn();
          }
      }
      ele.style[attr] = attr=="opacity" ? current/100 : current + unit;
    },time)
  }
}