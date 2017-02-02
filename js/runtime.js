Global.authkey=false;
Global.loginData={
    "login":"",
    "password":""
};
if(navigator)Global.UA = detect.parse(navigator.userAgent);

//Global.bugFixEv = new Event("resize");
$.ajaxSetup({
    cache:false
});
$(document).ready(function(){
    //if(Global.UA){
    //    if(Global.UA.browser.family == "IE"){
    //        $('#panel').show().removeClass("transparent");
    //        $("#panel").html('<h2 class="label label-lg label-default conerror">Ваш браузер не поддерживается, воспользуйтесь нормальным (Chrome, Mozilla, Opera, Safari..и пр.)</h2>');
    //    }else {
            Global.nodes.push(Node.createNode("respark","panelnodes"));
            Global.nodes[Global.nodes.length-1].start();
    //    }
    //}
    Global.jqready = true;
    Global.authkey = true;
    Global.loggedAs = "ssv";
    refreshLog();

    if(!Global.lastrefresh){
        Global.lastrefresh = Date.now();
    }else {
        console.log("time:"+Global.lastrefresh+" now:"+Date.now());
        console.log("Вот тут надо думать над обработчиками");
    }

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
        //console.log("btn_tank num = "+num);
        if(num){
            Global.nodeDependencies.respark.openTank(num);
        }
    });
    $('#btn_close_parm').on('click',function(){
        Global.nodeDependencies.respark.tankparmToggle(0);
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
function userEnter(user) {
    Global.authkey=true;
    Global.loggedAs = user;
}
function showSysMsg(msg,state,statical) {
    if(state){
        $("#sysmsg").removeClass("sys_err");
        $("#sysmsg").addClass("sys_ok");
    }
    else {
        $("#sysmsg").removeClass("sys_ok");
        $("#sysmsg").addClass("sys_err");
    }
    //$("#sysmsg").show();
    $("#sysmsg").removeClass("myhide");
    $("#sysmsg_val").html(msg);
    if(!statical)setTimeout(hideSysMsg,5000);
    function hideSysMsg() {
        $("#sysmsg").addClass("myhide");
        
    }
    
}
function stateRefresher(){
    $.ajax({
		url:"state.php",
		dataType:"json",
		method:'GET',
		data:{"getstate":true},
		success:function(data){
		    connectionState(1);
			//console.log(data);
			if(data){
				for(var el in data){
					if(data[el].sector == "main"){//отлавливаем сектор
						//console.log("sector main");
						if(data[el].state == "reset"){
							//console.log("status = reset");
							showSysMsg("Страница будет перезагружена",false,true);
							setTimeout(function(){
								//console.log("сетим normal");
								$.ajax({
									url:"state.php",
									method:'GET',
									data:{"setstate":"normal","sector":"main"},
									success:function(data){
										//console.log("all ok");
									},
									error:function(){
										console.log("error");
									}
								});
								setTimeout(function(){
									//console.log("рефрешим страницу");
									location.reload(true);
								},10000);
							},60000);
						}	
					}
				}
			}
		},
		error:function(){
			console.log("error to load state ajax");
            connectionState(0);
		}
    });
}
function blink(selector,time) {
    this.selector = selector;
    this.init = function () {
        $(selector).addClass("blink");
    };
    this.timeObj = false;
    this.toggleState = function () {
        $(selector).each(function () {
            var tmp = $(this).find(".transparent");
            //console.log(tmp[0]);
            if(!tmp[0]){
                $(this).toggleClass("transparentStatic");
            }
        });
    };
    this.start = function () {
        if(time){
            this.timeObj = setInterval(this.toggleState,time);
        }
    };
    this.stop = function () {
        if(this.timeObj){
            clearInterval(this.timeObj);
            this.timeObj = false;
            $(selector).removeClass("transparentStatic");
        }
    }
}
Global.blink1 = new blink(".pereliv,.errortank,.blink",500);
Global.blink1.init();
Global.blink1.start();

//Global.blink2 = new blink("._neutral",1000);
//Global.blink2.init();
//Global.blink2.start();

Global.blink3 = new blink(".glyphicon-warning-sign",500);
Global.blink3.init();
Global.blink3.start();
