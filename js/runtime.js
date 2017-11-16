Global.authkey=false;
Global.loginData={
    "login":"",
    "password":""
};
Global.version = {};
Global.version.v = "1.0.5";
Global.version.build = "10005";
Global.version.desc = "";

function visit() {
    let req = {version:Global.version.v,build:Global.version.build};
    //console.log("req:",req);
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
        $("#container").addClass("adapt");
        $("#header").addClass("adapt");
        $(".danger_field").addClass("adapt");
    }else {
        $("#container").removeClass("adapt");
        $("#header").removeClass("adapt");
        $(".danger_field").removeClass("adapt");
    }
}
$(document).ready(function(){
    //Loading Progress bar init
    if(Global.demo){
        Global.LoadingPG = new LoadingPGClass("loading_pb","fancydemo");
        Global.LoadingPG.showLoading();
    }


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

    setTimeout(function(){
        panelStateToggle(false);
    },7000);
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
