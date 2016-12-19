Global.authkey=false;
Global.loginData={
    "login":"",
    "password":""
};
Global.bugFixEv = new Event("resize");

function tooltipHandler() {
    $("[data-tooltip]").mousemove(function (eventObject) {

        var data_tooltip = $(this).attr("data-tooltip");

        $("#tooltip").text(data_tooltip)
            .css({
                "top" : eventObject.pageY + 10,
                "left" : eventObject.pageX + 10
            })
            .show();

    }).mouseout(function () {

        $("#tooltip").hide()
            .text("")
            .css({
                "top" : 0,
                "left" : 0
            });
    });
}
$(document).ready(function(){
    $(".tank_pereliv").addClass("transparent");
    $(".tank_error").addClass("transparent").removeClass("label-danger").addClass("label-default");
    $('.tank').each(function (index,element) {
        var tmp = $(this).data("num");
        $(this).find(".tank_title").text(tmp);
    });


    refreshPark();
    Global.refreshParkTimer=setInterval(refreshPark,30000);
	Global.refreshParkTimer=setInterval(stateRefresher,10000);
    Global.jqready = true;

    Global.authkey = true;
    Global.loggedAs = "ssv";

    refreshLog();
    $.ajaxSetup({
        cache:false
    });
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
    $('.tank').on('click',function(){
        var num = $(this).data("num");
        //console.log("btn_tank num = "+num);
        if(num){
            openTank(num);
        }
    });
    $('#btn_close_parm').on('click',function(){
        tankparmToggle(0);
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
        $(selector).toggleClass("transparentStatic");
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
Global.blink1 = new blink(".pereliv, .errortank,.blink",500);
Global.blink1.init();
Global.blink1.start();

Global.blink2 = new blink("._neutral",1000);
Global.blink2.init();
Global.blink2.start();
