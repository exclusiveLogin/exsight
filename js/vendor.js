require("jquery");
require("@fancyapps/fancybox/dist/jquery.fancybox.css");
require("@fancyapps/fancybox");
//require("fancybox")($);
//require("./fancybox/jquery.fancybox.css");
require("bootstrap");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/css/bootstrap-theme.min.css");
require("font-awesome/css/font-awesome.min.css");
const detect = require("detect.js");

$(document).ready(function(){
    $.ajaxSetup({
        cache:false
    });

    Global.detect = detect;

    //Loading Progress bar init
    if(Global.demo){
        Global.LoadingPG = new LoadingPGClass("loading_pb","fancyload");
        Global.LoadingPG.showLoading();
    }

    Utility.refreshTooltips();
    setInterval(function () {
        Utility.refreshTooltips();
    },120000);

    //опрос состояния приложения
    if (Global.StateTimer)clearInterval(Global.StateTimer);
    Global.StateTimer=setInterval(stateRefresher,10000);

    $("#fancyload .version").html(Global.version.v);
    $("#fancyload .verdescription").html(Global.version.desc);
    $("#header .demo").html("Версия с ранним доступом "+Global.version.v);

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

    setTimeout(function(){
        $("#footer").removeClass("mainPanelInit");
        LoadNodes(nodeName,nodePanel,nodeAlias);
    },1000);
    
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
});
function LoadNodes(nodeName,nodePanel,nodeAlias){
    let GStarter = function *(){
        for(let nodeG in nodeName){
            yield {
                node:nodeName[nodeG],
                alias:nodeAlias[nodeG],
                panel:nodePanel,
                idx:Number(nodeG)
            };
        }
        return true;
    };
    Global._gen = GStarter();
    Global._GenFunc = function(){
        let _result = Global._gen.next();
        
    
        if(_result.done){
            console.log("All Node is loaded");
            $(".node").each(function(index,elem){
                setTimeout(function(){
                    $(elem).removeClass("mainPanelItemInit");
                },index*120);
            });
            setTimeout(()=>StartNodes(),3000);
            
            Global._GenFunc = null;
            Global._gen = null;
        }else{
            //Сдвигаем прогресс и подписываемся на сл итерацию и запуск модуля
            let full = nodeName.length;
            let curent = _result.value.idx+1;
            let curPercent = 100/full*curent;
            Global.LoadingPG.setStep(curPercent,"загрузка модулей ядра: "+curent+" из "+full);
            
            let _node = AstridNode.createNode(_result.value.node,_result.value.panel,_result.value.alias);
            debugger;
            _node.loading.done(function(){
                console.log("Module "+curent+" is loaded");
                Global._GenFunc();
            });
            Global.nodes.push(_node);
            
        }
    };
    Global._GenFunc();
}
function StartNodes(){
    let GStarter = function *(){
        for(let nodeG in Global.nodes){
            //console.log("NodeG:",nodeG," node:",Global.nodes[nodeG]);
            yield {
                node:Global.nodes[nodeG].nodeObj,
                idx:Number(nodeG),
                nodeParent:Global.nodes[nodeG]
            };
        }
        return true;
    };
    Global._gen = GStarter();
    Global._GenFunc = function(){
        let _result = Global._gen.next();
        
    
        if(_result.done){
            //Закрываем progress
            Global.LoadingPG.hideLoading();
            Global._GenFunc = null;
            Global._gen = null;
        }else{
            //Сдвигаем прогресс и подписываемся на сл итерацию и запуск модуля
            let full = Global.nodes.length;
            let curent = _result.value.idx+1;
            let curPercent = 100/full*curent;
            Global.LoadingPG.setStep(curPercent,"загрузка модулей АСТРИД: "+curent+" из "+full);
            
            let _subscribe = function(){
                _result.value.node.startedAndRefreshed.always(function(){
                    Global._GenFunc();
                });
                _result.value.node.startNode();
            }
            
            if(_result.value.node){
                _subscribe();
            }else{
                //надо проверить промис для загрузки бандла
                //если есть, подписаться
                //после загрузки сделать то что выше.
                _result.value.nodeParent.loading.done(function(){
                    subscribe();
                });
                
            }
            
            
        }
    };
    Global._GenFunc();
}