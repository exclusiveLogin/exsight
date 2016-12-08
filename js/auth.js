function trendToggle(state,tube) {
    if(state){
        $("#tubecard").removeClass("transparent",function () {
            $("#arj_tube_num").text(tube);
            //Global.trend.reflow();
            //Global.trend.series[0].setData([]);
            //Global.trend.series[1].setData([]);

            //Global.trend.series[0].setData(Global[user].trend);
            //Global.trend.series[1].setData(Global[user].flags);
        });
    }else {
        $("#tubecard").addClass("transparent",function () {

        });
    }
}
function loginToggle(state){
    if(state){
        $('.btnlogin').addClass('disabled active');
        $('#loginform').show(500);
    }
    else{
        $('.btnlogin').removeClass('disabled active');
        $('#loginform').hide(500);
    }
}
function resultToggle(state){
    if(state){
        $('#result').removeClass("transparent");
    }
    else{
        $('#result').addClass("transparent");
    }
}
function refreshLog() {
    if(Global.authkey){
        if(Global.jqready){
            $("#wrapper").removeClass("transparent");
            setTimeout(function () {
                $("#panel").removeClass("transparent");
            },500);

            $('.btnlogout').show();
            $('.btnlogin').hide();
        }
    }else {
        if(Global.jqready){
            $("#tubecard").delay(2000).addClass("transparent");
            $('#result').addClass("transparent");
            setTimeout(function () {
                $("#panel").addClass("transparent");
            },500);
            setTimeout(function () {
                $("#wrapper").addClass("transparent");
            },1000);
            $('.btnlogout').hide();
            $('.btnlogin').show();
        }
    }
}
function tankparmToggle(state,tank){
    if(state){
        $('#tankparm_panel').show(0,function () {
            $(this).removeClass("transparent");
        });
        if(tank){
            $(".tank_num_val").text(tank);
            Global.tankselect = tank;
            refreshTank(tank);
        }
    }
    else{
        $('#tankparm_panel').hide(0,function () {
            $(this).addClass("transparent");
            Global.tankselect = "";
        });
    }
}
function refreshTank(tank) {
    $.ajax({
        url:"opcdata/gettank.php",
        dataType:"json",
        method:'GET',
        data:{tank:tank},
        success:function(data){
            renderTank(data);

        },
        error:function(){
            console.log("error to load refresh tank ajax data");
        }
    });
    function renderTank(data) {
        if(data.mass){
            $(".tank_parm_mass").text(data.mass);
        }
        if(data.volume){
            $(".tank_parm_volume").text(data.volume);
        }
        if(data.plot){
            $(".tank_parm_plot").text(data.plot);
        }
        if(data.temp){
            $(".tank_parm_temp").text(data.temp);
        }
        if(data.level){
            $(".tank_parm_level").text(data.level);
        }
        if(data.max_level){
            $(".tank_parm_maxlvl").text(data.max_level);
        }
        if(data.datetime){
            $(".tank_parm_upd").text(data.datetime);
        }
        if(data.level && data.max_level){
            var tmpperc = lvl2perc(data.level,data.max_level).toFixed(1);
            $('.prog_val').text(tmpperc+"%");
            
            pr_opt = {};
            if(tmpperc<10){
                $('.prog_val').css("color","#009");
                pr_opt={
                    from:{color:"#fff"},
                    to:{color:"#009"}
                };
            }else if(tmpperc>70 && tmpperc<90){
                $('.prog_val').css("color","#ff8f00");
                pr_opt={
                    from:{color:"#fff"},
                    to:{color:"#ff8f00"}
                };
            }else if(tmpperc>90){
                $('.prog_val').css("color","#f00");
                pr_opt={
                    from:{color:"#fff"},
                    to:{color:"#f00"}
                };
            }else{
                $('.prog_val').css("color","#090");
                pr_opt={
                    from:{color:"#fff"},
                    to:{color:"#090"}
                };
            }
            
            Global.parmTank.animate(tmpperc/100,pr_opt);
        }
    }
}
function refreshPark() {
    $.ajax({
        url:"opcdata/gettank.php",
        dataType:"json",
        method:'GET',
        data:{park:true},
        success:function(data){
            renderPark(data);
        },
        error:function(){
            console.log("error to load refresh park ajax data");
        }
    });
    function renderPark(data) {
        if(data){
            for(var elem in data){
                elem = Number(elem);
                //console.log(elem);
                if(data[elem].level && data[elem].max_level){
                    var tmpperc = lvl2perc(data[elem].level,data[elem].max_level).toFixed(0);
                    var tmpReal = $(".tank[data-num="+(elem+1)+"]").find(".progress_tank_val_real");
                    var tmpPerc = $(".tank[data-num="+(elem+1)+"]").find(".progress_tank_val");
                    
                    tmpPerc.text(tmpperc+"%");
                    tmpReal.text(data[elem].level);
                    
                    pr_opt = {};
                    if(tmpperc<10){
                        tmpPerc.css("color","#009");
                        tmpReal.css("color","#009");
                        pr_opt={
                            from:{color:"#fff"},
                            to:{color:"#009"}
                        };
                    }else if(tmpperc>70 && tmpperc<90){
                        tmpPerc.css("color","#ff8f00");
                        tmpReal.css("color","#ff8f00");
                        pr_opt={
                            from:{color:"#fff"},
                            to:{color:"#ff8f00"}
                        };
                    }else if(tmpperc>90){
                        tmpPerc.css("color","#f00");
                        tmpReal.css("color","#f00");
                        pr_opt={
                            from:{color:"#fff"},
                            to:{color:"#f00"}
                        };
                    }else{
                        tmpPerc.css("color","#090");
                        tmpReal.css("color","#090");
                        pr_opt={
                            from:{color:"#fff"},
                            to:{color:"#090"}
                        };
                    }
                    
                    Global.pr_tank[elem+1].animate(tmpperc/100,pr_opt);
                }
            }
            
        }
    }
}
function lvl2perc(val,max){
    var desc = max/100;
    var cur = val/desc;
    //console.log(cur);
    return cur;
}