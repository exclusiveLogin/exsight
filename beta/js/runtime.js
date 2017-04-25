Global.authkey=false;
Global.loginData={
    "login":"",
    "password":""
};
Global.version = {};
Global.version.v = "0.9.8b";
Global.version.build = "98100";
Global.version.desc = "<li>Добавлен компонент Причал[new]</li>" +
    "<li>Исправлен алгоритм расчета баланса парка[new]</li>" +
    "<li>Добавлен компонент трендов[new]</li>" +
    "<li>Исправлены мелкие недочеты</li>" +
    "<li>Произведен рефакторинг кода</li>";
function visit() {
    let req = {version:Global.version.v,build:Global.version.build};
    console.log("req:",req);
    $.ajax({
        url:"visitparser.php",
        dataType:"text",
        method:'GET',
        data:req,
        success:function(data){
            console.log(data);
        },
        error:function(){
            console.log("error visit");
        }
    });
}
$.ajaxSetup({
    cache:false
});
function adaptWin() {
    if(window.innerWidth < 1450 && window.innerWidth > 990){
        $("#minview").addClass("adapt");
        $("#header").addClass("adapt");
        $(".danger_field").addClass("adapt");
    }else {
        $("#minview").removeClass("adapt");
        $("#header").removeClass("adapt");
        $(".danger_field").removeClass("adapt");
    }
}
$(document).ready(function(){


    $("#fancydemo .version").html(Global.version.v);
    $("#fancydemo .verdescription").html(Global.version.desc);

    visit();
    adaptWin();
    $(window).on("resize",function (e) {
        adaptWin();
    });

    setTimeout(function(){
        panelStateToggle(false);
    },7000);
    $(document).on("mouseenter",".danger_field",function () {
        Global.panelsateQ = true;
        setTimeout(function () {
            if(Global.panelsateQ)panelStateToggle(true);
        },1000);
    });
    $(document).on("mouseleave","#panelstate",function () {
        panelStateToggle(false);
        Global.panelsateQ = false;
    });

    $(".btn_whatnew").on("click",function () {
        $("#fancydemo").fancybox({
            modal:true
        }).click();
        setTimeout(function(){
            $.fancybox.close();
        },20000);
    });

	if(Global.demo){
	    $("#fancydemo").fancybox({
	        modal:true
        }).click();
	    setTimeout(function(){
	        $.fancybox.close();
        },5000);
    }

    //Создаем ноду Резпарка
    Global.nodes.push(Node.createNode("respark","panelnodes","Парк"));

    //Создаем ссылку на тренды
    Global.nodes.push(Node.createNode("trends","panelnodes","Тренды парка"));

    //Создаем ссылку на причал
    Global.nodes.push(Node.createNode("port","panelnodes","Причал"));

    //Создаем ссылку на тренды причала
    Global.nodes.push(Node.createNode("porttrends","panelnodes","Тренды причала"));

    //Создаем ссылку на газы
    Global.nodes.push(Node.createNode("gas","panelnodes","СКЗ парка"));

    //Создаем ссылку на учел учета
    Global.nodes.push(Node.createNode("uku","panelnodes","Узел учета"));

    Global.jqready = true;
    Global.authkey = true;
    Global.loggedAs = "ssv";
    refreshLog();

    $('.btnlogin').on('click',function(){
        $(this).addClass('disabled active');
        $('#loginform').show(500);
    });
    $('#btnloginenter').on('click',function(){
        Global.loginData.login = $('#loginName').val();
        Global.loginData.password = $('#passwordName').val();
        $.ajax({
            url:"enter.php",
            dataType:"json",
            method:'GET',
            data:Global.loginData,
            success:function(data){
                if(data.auth)userEnter(data.login);
                loginToggle(0);
                if(data.msg){
                    var state = false;
                    if(data.auth){
                        state=true;
                    } 
                    showSysMsg(data.msg,state);
                }
                refreshLog();
            },
            error:function(){
                console.log("error to load auth ajax");
            }
        });
    });
    $('.btnlogincl').on('click',function(){
        $('.btnlogin').removeClass('disabled active');
        $('#loginform').hide(500);
    });
    $('.btnlogout').on('click',function(){
        Global.authkey = false;
        Global.loggedAs = "";
        showSysMsg("Вы успешно вышли из системы",true);
        refreshLog();
    });
    $('#minview').on('click','.tank',function(){
        var num = $(this).data("num");
        if(num){
            if(getNode(respark)>(-1)){
                Global.nodes[getNode(respark)].nodeObj.openTank(num);
            }
        }
    });
    $('#btn_close_parm').on('click',function(){
        if(getNode(respark)>(-1)){
            Global.nodes[getNode(respark)].nodeObj.tankparmToggle(0);
        }
    });
    $('.btn-fb').on('click',function(){
        toggleFancy();
    });
    $('.fancyemiter').fancybox({
        'scrolling':'yes',
        'padding':10,
        'margin':20,
        'hideOnOverlayClick':true,
        'hideOnContentClick':true,
        'type':'inline',
        afterClose:function () {
            Global.tankselect = false;
        }
    });
});

function getNode(classNode){
    let status = -1;
    if(typeof classNode === "function"){
        Global.nodes.map(function (node, index) {
            if(node.nodeObj instanceof classNode){
                status = index;
            }else {
            }
        });
        return status;
    }
    if(typeof classNode === "string"){
        Global.nodes.map(function (node, index) {
            if(node.nameNode === classNode){
                status = index;
            }else {
            }
        });
        return status;
    }
    return status;

}


// Global.blink1 = new Blink(".pereliv,.errortank,.blink",500);
// Global.blink1.init();
// Global.blink1.start();

//Global.blink2 = new blink("._neutral",1000);
//Global.blink2.init();
//Global.blink2.start();

// Global.blink3 = new Blink(".glyphicon-warning-sign",500);
// Global.blink3.init();
// Global.blink3.start();
