Global.authkey=false;
Global.loginData={
    "login":"",
    "password":""
};
Global.version = "0.9.1 beta";
function visit() {
    let req = {version:Global.version};
    $.ajax({
        url:"visitparser.php",
        dataType:"text",
        method:'GET',
        data:req,
        success:function(data){
            //console.log(data);
        },
        error:function(){
            console.log("error visit");
        }
    });
}
$.ajaxSetup({
    cache:false
});
$(document).ready(function(){
    visit();

    setTimeout(function(){
        panelStateToggle(false);
    },5000);
    $(document).on("mouseenter","#panelstate",function () {
        Global.panelsateQ = true;
        setTimeout(function () {
            if(Global.panelsateQ)panelStateToggle(true);
        },1000);
    });
    $(document).on("mouseleave","#panelstate",function () {
        panelStateToggle(false);
        Global.panelsateQ = false;
    });

	if(Global.demo){
	    $("#fancydemo").fancybox({
	        modal:true
        }).click();
	    setTimeout(function(){
	        $.fancybox.close();
        },5000);
    }


    //if(Global.UA){
    //    if(Global.UA.browser.family == "IE"){
    //        $('#panel').show().removeClass("transparent");
    //        $("#panel").html('<h2 class="label label-lg label-default conerror">Ваш браузер не поддерживается, воспользуйтесь нормальным (Chrome, Mozilla, Opera, Safari..и пр.)</h2>');
    //    }else {
            Global.nodes.push(Node.createNode("respark","panelnodes"));
            //Global.nodes[Global.nodes.length-1].start();
    //    }
    //}
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
    Global.nodes.map(function (node, index) {
        if(node.nodeObj instanceof classNode){
            //console.log("node ok index:"+index);
            status = index;
        }else {
            //console.log("node NOT OK index:-1");
        }
    });
    return status;
}

Global.blink1 = new Blink(".pereliv,.errortank,.blink",500);
Global.blink1.init();
Global.blink1.start();

//Global.blink2 = new blink("._neutral",1000);
//Global.blink2.init();
//Global.blink2.start();

Global.blink3 = new Blink(".glyphicon-warning-sign",500);
Global.blink3.init();
Global.blink3.start();
