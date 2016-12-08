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
    Global.parmTank = new ProgressBar.Circle('#progress', {
        color: '#FCB03C',
        duration: 1000,
        easing: 'easeInOut',
        strokeWidth:10,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#f00'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });

    Global.pr_tank1 = new ProgressBar.Circle('#progress_tank1', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank2 = new ProgressBar.Circle('#progress_tank2', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank3 = new ProgressBar.Circle('#progress_tank3', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank4 = new ProgressBar.Circle('#progress_tank4', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank5 = new ProgressBar.Circle('#progress_tank5', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank6 = new ProgressBar.Circle('#progress_tank6', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank7 = new ProgressBar.Circle('#progress_tank7', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank8 = new ProgressBar.Circle('#progress_tank8', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank9 = new ProgressBar.Circle('#progress_tank9', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank10 = new ProgressBar.Circle('#progress_tank10', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank11 = new ProgressBar.Circle('#progress_tank11', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            circle.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank12 = new ProgressBar.Circle('#progress_tank12', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,circle,attachment){
            Global.parmTank.path.setAttribute("stroke",state.color);
        }
    });

    Global.parmTank.animate(0.1);
    Global.pr_tank1.animate(0.4);
    Global.pr_tank2.animate(0.4);
    Global.pr_tank3.animate(0.4);
    Global.pr_tank4.animate(0.4);
    Global.pr_tank5.animate(0.4);
    Global.pr_tank6.animate(0.4);
    Global.pr_tank7.animate(0.4);
    Global.pr_tank8.animate(0.4);
    Global.pr_tank9.animate(0.4);
    Global.pr_tank10.animate(0.4);
    Global.pr_tank11.animate(0.4);
    Global.pr_tank12.animate(0.4);


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
            url:"/enter.php",
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
        console.log("btn_tank num = "+num);
        if(num){
            tankparmToggle(true,num);
        }
    });
    $('#btn_close_parm').on('click',function(){
        tankparmToggle(0);
    });
});
function userEnter(user) {
    Global.authkey=true;
    Global.loggedAs = user;
}
function showSysMsg(msg,state) {
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
    setTimeout(hideSysMsg,5000);
    function hideSysMsg() {
        $("#sysmsg").addClass("myhide");
        
    }
    
}