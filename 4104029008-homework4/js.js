$(document).ready(function() {
    $("#a1").click(function() {
        $("#b2").slideUp();
        $("#c2").slideUp();
        $("#d2").slideUp();
        $("#e2").slideUp();
        $("#f22").slideUp();
        $("#g2").slideUp();
        $("#h2").slideUp();
        $("#i2").slideUp();
        $("#a2").slideDown();
        $("#a4").fadeIn();
        $("#b4").fadeOut();
        $("#c4").fadeOut();
        $("#d4").fadeOut();
        $("#e4").fadeOut();
        $("#f44").fadeOut();
        $("#g4").fadeOut();
        $("#h4").fadeOut();
        $("#i4").fadeOut();
    });


    $("#b1").click(function() {
        $("#a2").slideUp();
        $("#c2").slideUp();
        $("#d2").slideUp();
        $("#e2").slideUp();
        $("#f22").slideUp();
        $("#g2").slideUp();
        $("#h2").slideUp();
        $("#i2").slideUp();
        $("#b2").slideDown();
        $("#b4").fadeIn();
        $("#a4").fadeOut();
        $("#c4").fadeOut();
        $("#d4").fadeOut();
        $("#e4").fadeOut();
        $("#f44").fadeOut();
        $("#g4").fadeOut();
        $("#h4").fadeOut();
        $("#i4").fadeOut();
    });


    $("#c1").click(function() {
        $("#a2").slideUp();
        $("#b2").slideUp();
        $("#d2").slideUp();
        $("#e2").slideUp();
        $("#f22").slideUp();
        $("#g2").slideUp();
        $("#h2").slideUp();
        $("#i2").slideUp();
        $("#c2").slideDown();
        $("#c4").fadeIn();
        $("#b4").fadeOut();
        $("#a4").fadeOut();
        $("#d4").fadeOut();
        $("#e4").fadeOut();
        $("#f44").fadeOut();
        $("#g4").fadeOut();
        $("#h4").fadeOut();
        $("#i4").fadeOut();
    });


    $("#d1").click(function() {
        $("#a2").slideUp();
        $("#b2").slideUp();
        $("#c2").slideUp();
        $("#e2").slideUp();
        $("#f22").slideUp();
        $("#g2").slideUp();
        $("#h2").slideUp();
        $("#i2").slideUp();
        $("#d2").slideDown();
        $("#d4").fadeIn();
        $("#b4").fadeOut();
        $("#c4").fadeOut();
        $("#a4").fadeOut();
        $("#e4").fadeOut();
        $("#f44").fadeOut();
        $("#g4").fadeOut();
        $("#h4").fadeOut();
        $("#i4").fadeOut();
    });

    $("#e1").click(function() {
        $("#a2").slideUp();
        $("#b2").slideUp();
        $("#c2").slideUp();
        $("#d2").slideUp();
        $("#f22").slideUp();
        $("#g2").slideUp();
        $("#h2").slideUp();
        $("#i2").slideUp();
        $("#e2").slideDown();
        $("#e4").fadeIn();
        $("#b4").fadeOut();
        $("#c4").fadeOut();
        $("#d4").fadeOut();
        $("#a4").fadeOut();
        $("#f44").fadeOut();
        $("#g4").fadeOut();
        $("#h4").fadeOut();
        $("#i4").fadeOut();
    });
    $("#f11").click(function() {
        $("#a2").slideUp();
        $("#b2").slideUp();
        $("#c2").slideUp();
        $("#d2").slideUp();
        $("#e2").slideUp();
        $("#g2").slideUp();
        $("#h2").slideUp();
        $("#i2").slideUp();
        $("#f22").slideDown();
        $("#f44").fadeIn();
        $("#b4").fadeOut();
        $("#c4").fadeOut();
        $("#d4").fadeOut();
        $("#e4").fadeOut();
        $("#a4").fadeOut();
        $("#g4").fadeOut();
        $("#h4").fadeOut();
        $("#i4").fadeOut();
    });


    $("#g1").click(function() {
        $("#a2").slideUp();
        $("#b2").slideUp();
        $("#c2").slideUp();
        $("#d2").slideUp();
        $("#e2").slideUp();
        $("#f22").slideUp();
        $("#h2").slideUp();
        $("#i2").slideUp();
        $("#g2").slideDown();
        $("#g4").fadeIn();
        $("#b4").fadeOut();
        $("#c4").fadeOut();
        $("#d4").fadeOut();
        $("#e4").fadeOut();
        $("#f44").fadeOut();
        $("#a4").fadeOut();
        $("#h4").fadeOut();
        $("#i4").fadeOut();
    });



    $("#h1").click(function() {
        $("#a2").slideUp();
        $("#b2").slideUp();
        $("#c2").slideUp();
        $("#d2").slideUp();
        $("#e2").slideUp();
        $("#f22").slideUp();
        $("#g2").slideUp();
        $("#i2").slideUp();
        $("#h2").slideDown();
        $("#h4").fadeIn();
        $("#b4").fadeOut();
        $("#c4").fadeOut();
        $("#d4").fadeOut();
        $("#e4").fadeOut();
        $("#f44").fadeOut();
        $("#g4").fadeOut();
        $("#a4").fadeOut();
        $("#i4").fadeOut();
    });


    $("#i1").click(function() {
        $("#a2").slideUp();
        $("#b2").slideUp();
        $("#c2").slideUp();
        $("#d2").slideUp();
        $("#e2").slideUp();
        $("#f22").slideUp();
        $("#g2").slideUp();
        $("#h2").slideUp();
        $("#i2").slideDown();
        $("#i4").fadeIn();
        $("#b4").fadeOut();
        $("#c4").fadeOut();
        $("#d4").fadeOut();
        $("#e4").fadeOut();
        $("#f44").fadeOut();
        $("#g4").fadeOut();
        $("#h4").fadeOut();
        $("#a4").fadeOut();
    });


    $("#video").click(function() {
        $("iframe").show();
        $("#video").hide();
    });

    $("#header").click(function() {
        $("#context").fadeToggle();
    });


    $("#a1").mouseenter(function() {
        $("#b3").fadeTo("fast",0.5);
        $("#c3").fadeTo("fast",0.5);
        $("#d3").fadeTo("fast",0.5);
        $("#e3").fadeTo("fast",0.5);
        $("#f33").fadeTo("fast",0.5);
        $("#g3").fadeTo("fast",0.5);
        $("#h3").fadeTo("fast",0.5);
        $("#i3").fadeTo("fast",0.5);
    });
    $("#a1").mouseout(function() {
        $("#b3").fadeTo("fast",1);
        $("#c3").fadeTo("fast",1);
        $("#d3").fadeTo("fast",1);
        $("#e3").fadeTo("fast",1);
        $("#f33").fadeTo("fast",1);
        $("#g3").fadeTo("fast",1);
        $("#h3").fadeTo("fast",1);
        $("#i3").fadeTo("fast",1);
    });

    $("#b1").mouseenter(function() {
        $("#a3").fadeTo("fast",0.5);
        $("#c3").fadeTo("fast",0.5);
        $("#d3").fadeTo("fast",0.5);
        $("#e3").fadeTo("fast",0.5);
        $("#f33").fadeTo("fast",0.5);
        $("#g3").fadeTo("fast",0.5);
        $("#h3").fadeTo("fast",0.5);
        $("#i3").fadeTo("fast",0.5);
    });
    $("#b1").mouseout(function() {
        $("#a3").fadeTo("fast",1);
        $("#c3").fadeTo("fast",1);
        $("#d3").fadeTo("fast",1);
        $("#e3").fadeTo("fast",1);
        $("#f33").fadeTo("fast",1);
        $("#g3").fadeTo("fast",1);
        $("#h3").fadeTo("fast",1);
        $("#i3").fadeTo("fast",1);
    });

    $("#c1").mouseenter(function() {
        $("#b3").fadeTo("fast",0.5);
        $("#a3").fadeTo("fast",0.5);
        $("#d3").fadeTo("fast",0.5);
        $("#e3").fadeTo("fast",0.5);
        $("#f33").fadeTo("fast",0.5);
        $("#g3").fadeTo("fast",0.5);
        $("#h3").fadeTo("fast",0.5);
        $("#i3").fadeTo("fast",0.5);
    });
    $("#c1").mouseout(function() {
        $("#b3").fadeTo("fast",1);
        $("#a3").fadeTo("fast",1);
        $("#d3").fadeTo("fast",1);
        $("#e3").fadeTo("fast",1);
        $("#f33").fadeTo("fast",1);
        $("#g3").fadeTo("fast",1);
        $("#h3").fadeTo("fast",1);
        $("#i3").fadeTo("fast",1);
    });

    $("#d1").mouseenter(function() {
        $("#b3").fadeTo("fast",0.5);
        $("#c3").fadeTo("fast",0.5);
        $("#a3").fadeTo("fast",0.5);
        $("#e3").fadeTo("fast",0.5);
        $("#f33").fadeTo("fast",0.5);
        $("#g3").fadeTo("fast",0.5);
        $("#h3").fadeTo("fast",0.5);
        $("#i3").fadeTo("fast",0.5);
    });
    $("#d1").mouseout(function() {
        $("#b3").fadeTo("fast",1);
        $("#c3").fadeTo("fast",1);
        $("#a3").fadeTo("fast",1);
        $("#e3").fadeTo("fast",1);
        $("#f33").fadeTo("fast",1);
        $("#g3").fadeTo("fast",1);
        $("#h3").fadeTo("fast",1);
        $("#i3").fadeTo("fast",1);
    });

    $("#e1").mouseenter(function() {
        $("#b3").fadeTo("fast",0.5);
        $("#c3").fadeTo("fast",0.5);
        $("#d3").fadeTo("fast",0.5);
        $("#a3").fadeTo("fast",0.5);
        $("#f33").fadeTo("fast",0.5);
        $("#g3").fadeTo("fast",0.5);
        $("#h3").fadeTo("fast",0.5);
        $("#i3").fadeTo("fast",0.5);
    });
    $("#e1").mouseout(function() {
        $("#b3").fadeTo("fast",1);
        $("#c3").fadeTo("fast",1);
        $("#d3").fadeTo("fast",1);
        $("#a3").fadeTo("fast",1);
        $("#f33").fadeTo("fast",1);
        $("#g3").fadeTo("fast",1);
        $("#h3").fadeTo("fast",1);
        $("#i3").fadeTo("fast",1);
    });

    $("#f11").mouseenter(function() {
        $("#b3").fadeTo("fast",0.5);
        $("#c3").fadeTo("fast",0.5);
        $("#d3").fadeTo("fast",0.5);
        $("#e3").fadeTo("fast",0.5);
        $("#a3").fadeTo("fast",0.5);
        $("#g3").fadeTo("fast",0.5);
        $("#h3").fadeTo("fast",0.5);
        $("#i3").fadeTo("fast",0.5);
    });
    $("#f11").mouseout(function() {
        $("#b3").fadeTo("fast",1);
        $("#c3").fadeTo("fast",1);
        $("#d3").fadeTo("fast",1);
        $("#e3").fadeTo("fast",1);
        $("#a3").fadeTo("fast",1);
        $("#g3").fadeTo("fast",1);
        $("#h3").fadeTo("fast",1);
        $("#i3").fadeTo("fast",1);
    });

    $("#g1").mouseenter(function() {
        $("#b3").fadeTo("fast",0.5);
        $("#c3").fadeTo("fast",0.5);
        $("#d3").fadeTo("fast",0.5);
        $("#e3").fadeTo("fast",0.5);
        $("#f33").fadeTo("fast",0.5);
        $("#a3").fadeTo("fast",0.5);
        $("#h3").fadeTo("fast",0.5);
        $("#i3").fadeTo("fast",0.5);
    });
    $("#g1").mouseout(function() {
        $("#b3").fadeTo("fast",1);
        $("#c3").fadeTo("fast",1);
        $("#d3").fadeTo("fast",1);
        $("#e3").fadeTo("fast",1);
        $("#f33").fadeTo("fast",1);
        $("#a3").fadeTo("fast",1);
        $("#h3").fadeTo("fast",1);
        $("#i3").fadeTo("fast",1);
    });

    $("#h1").mouseenter(function() {
        $("#b3").fadeTo("fast",0.5);
        $("#c3").fadeTo("fast",0.5);
        $("#d3").fadeTo("fast",0.5);
        $("#e3").fadeTo("fast",0.5);
        $("#f33").fadeTo("fast",0.5);
        $("#g3").fadeTo("fast",0.5);
        $("#a3").fadeTo("fast",0.5);
        $("#i3").fadeTo("fast",0.5);
    });
    $("#h1").mouseout(function() {
        $("#b3").fadeTo("fast",1);
        $("#c3").fadeTo("fast",1);
        $("#d3").fadeTo("fast",1);
        $("#e3").fadeTo("fast",1);
        $("#f33").fadeTo("fast",1);
        $("#g3").fadeTo("fast",1);
        $("#a3").fadeTo("fast",1);
        $("#i3").fadeTo("fast",1);
    });

    $("#i1").mouseenter(function() {
        $("#b3").fadeTo("fast",0.5);
        $("#c3").fadeTo("fast",0.5);
        $("#d3").fadeTo("fast",0.5);
        $("#e3").fadeTo("fast",0.5);
        $("#f33").fadeTo("fast",0.5);
        $("#g3").fadeTo("fast",0.5);
        $("#h3").fadeTo("fast",0.5);
        $("#a3").fadeTo("fast",0.5);
    });
    $("#i1").mouseout(function() {
        $("#b3").fadeTo("fast",1);
        $("#c3").fadeTo("fast",1);
        $("#d3").fadeTo("fast",1);
        $("#e3").fadeTo("fast",1);
        $("#f33").fadeTo("fast",1);
        $("#g3").fadeTo("fast",1);
        $("#h3").fadeTo("fast",1);
        $("#a3").fadeTo("fast",1);
    });
    $("#j1").click(function() {
        $("#k1").toggle();
    });
    $("#j2").click(function() {
        $("#k2").slideToggle();
    });

});





//用來紀錄作用中頁籤的ID 預設是第一個頁籤
var currentLayer = "cell1";
//用來紀錄作用中頁籤的頁面ID 預設是第一個頁面
var currentDiv = "f1";
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
