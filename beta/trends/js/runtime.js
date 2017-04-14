Global.authkey=false;
Global.loginData={
    "login":"",
    "password":""
};
Global.version = {};
Global.version.v = "0.9.7t";
Global.version.build = "197100";
Global.version.desc = "<li>Работа только начата...</li>";
function visit() {
    let req = {version:Global.version.v,build:Global.version.build};
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

$(document).ready(function(){
    //visit();
    $.ajaxSetup({
        cache:false
    });
    $("#fancydemo .version").html(Global.version.v);
    $("#fancydemo .verdescription").html(Global.version.desc);

    $(".btn_whatnew").on("click",function () {
        $("#fancydemo").fancybox({
            modal:true
        }).click();
        setTimeout(function(){
            $.fancybox.close();
        },20000);
    });

    // if(Global.demo){
	 //    $("#fancydemo").fancybox({
	 //        modal:true
    //     }).click();
	 //    setTimeout(function(){
	 //        $.fancybox.close();
    //     },5000);
    // }

    Global.jqready = true;
    Global.authkey = true;
    Global.loggedAs = "ssv";
    Utility.refreshLog();

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
    $('#parkview').on('click','.btn_tank',function(){
        let numTank = $(this).data("num");
        if(numTank){
            if($(this).hasClass("tank_actived")){//дизактивируем резервуар
                $(this).removeClass("tank_actived");
                Global.MainTrend.CloseTank(numTank);
            }else{
                $(this).addClass("tank_actived");//активируем резервуар
                Global.MainTrend.OpenTank(numTank);
            }
            //отправлем тренду нажатый резервуар

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
// Global.blink1 = new Blink(".pereliv,.errortank,.blink",500);
// Global.blink1.init();
// Global.blink1.start();