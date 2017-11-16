require("jquery2");
require("fancybox")($);
require("./fancybox/jquery.fancybox.css");
require("bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/css/bootstrap-theme.min.css");
require("font-awesome/css/font-awesome.min.css");

$(document).ready(function(){
    $.ajaxSetup({
        cache:false
    });

    //Loading Progress bar init
    if(Global.demo){
        Global.LoadingPG = new LoadingPGClass("loading_pb","fancydemo");
        Global.LoadingPG.showLoading();
    }

    Utility.refreshTooltips();
    setInterval(function () {
        Utility.refreshTooltips();
    },120000);

    //опрос состояния приложения
    if (Global.StateTimer)clearInterval(Global.StateTimer);
    Global.StateTimer=setInterval(stateRefresher,10000);

    $("#fancydemo .version").html(Global.version.v);
    $("#fancydemo .verdescription").html(Global.version.desc);
    $("#header .demo").html("Бета версия с ранним доступом "+Global.version.v);

    visit();
    adaptWin();
    $(window).on("resize",function (e) {
        adaptWin();
    });

    $(document).on("mouseenter",".danger_field",function () {
        Global.panelsateQ = true;
        setTimeout(function () {
            if(Global.panelsateQ)panelStateToggle(true);
        },1000);
    });
    $(document).on("mouseleave",".danger_field",function () {
        Global.panelsateQ = false;
    });
    $(document).on("mouseleave","#panels",function () {
        panelStateToggle(false);
    });

    let nodeName = ["respark","trends","port","porttrends","gas","railgas","system"];
    let nodePanel = "panelnodes";
    let nodeAlias = ["Парк","Тренды парка","Причал","Тренды причала","СКЗ парка","СКЗ ЖД","О системе"];

    nodeName.map(function (node,idx) {
        setTimeout(function () {
            Global.nodes.push(AstridNode.createNode(node,nodePanel,nodeAlias[idx]));
            let full = nodeName.length;
            let curent = idx+1;
            let curPercent = 100/full*curent;
            Global.LoadingPG.setStep(curPercent);
            if(curent == nodeName.length){
                Global.LoadingPG.hideLoading();
            }
        },250*idx);
    });

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
    $('#btn_close_parm').on('click',function(){
        if(getNode(respark)>(-1)){
            Global.nodes[getNode(respark)].nodeObj.tankparmToggle(0);
        }
    });
    $('.btn-fb').on('click',function(){
        toggleFancy();
    });
    $('.fancyemiter').fancybox({
        'scrolling':'no',
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