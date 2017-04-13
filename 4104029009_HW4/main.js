$(document).ready(function(){
  $("marquee").click(function(){
          $("#mainimg").stop(true,true).slideToggle();
  });


  $("#p1").click(function(){
      $("#pp2").slideUp();
      $("#pp3").slideUp();
      $("#pp1").slideDown();
  });
  $("#p2").click(function(){
      $("#pp1").slideUp();
      $("#pp3").slideUp();
      $("#pp2").slideDown();
  });
  $("#p3").click(function(){
      $("#pp2").slideUp();
      $("#pp1").slideUp();
      $("#pp3").slideDown();
  });

    $("#img1").click(function(){
        $("#ol1").show();
        $("#ol2").hide();
        $("#ol3").hide();
        $("#img1").fadeOut();
    		$("#img2").fadeTo("slow" , 0.5);
        $("#img3").fadeTo("slow" , 0.5);
    });
    $("#img2").click(function(){
        $("#ol2").show();
        $("#ol1").hide();
        $("#ol3").hide();
        $("#img2").fadeOut();
    		$("#img1").fadeTo("slow" , 0.5);
        $("#img3").fadeTo("slow" , 0.5);
    });
    $("#img3").click(function(){
        $("#ol3").show();
        $("#ol1").hide();
        $("#ol2").hide();
        $("#img3").fadeOut();
    		$("#img2").fadeTo("slow" , 0.5);
        $("#img1").fadeTo("slow" , 0.5);
    });

    $("iframe").hover(function(){
        $("#lyrics").fadeIn(1000);
    });

    $("#shining").hover(function(){
        $("#shining").fadeToggle("fast");
    });
});






//用來紀錄作用中頁籤的ID 預設是第一個頁籤
var currentLayer = "cell1";
//用來紀錄作用中頁籤的頁面ID 預設是第一個頁面
var currentDiv = "d1";
//用來紀錄預設的顏色
//showLayer()函式，參數為觸發該函式的元素、所屬頁面ID及顏色索引
function showLayer(obj, div, cIndex) {
    //若目前的currentLayer不等於obj.id 表示要換頁面
    if (currentLayer != obj.id) {
        //先改變上一個頁籤及頁面的樣式
        showIt(currentLayer, currentDiv, cIndex, false);
        //重設currentLayer及currentDiv的值
        currentLayer = obj.id;
        currentDiv = div;
        //最後再改變目前頁籤及頁面的樣式
        showIt(currentLayer, currentDiv, cIndex, true);
    }
}
//showIt()函式，參數為currentLayer、currentDiv、colorArray的索引及模式
//mode為true時 則表示目前作用中 所以要顯示
//mode為false時 則表示目前非作用中 所以要隱藏
function showIt(o, d, cIndex, mode) {
    var obj = document.getElementById(o);
    var div = document.getElementById(d);
    //改變className則表示改變該元素所用的class
    obj.className = mode ? "active" : "inactive";
    div.style.display = mode ? "block" : "none";
}
