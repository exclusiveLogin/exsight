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
function tankparmToggle(state){
    if(state){
        $('#tankparm_panel').show(0,function () {
            $(this).removeClass("transparent");
        });
    }
    else{
        $('#tankparm_panel').hide(0,function () {
            $(this).addClass("transparent");
            Global.tankselect = false;
        });
    }
}
function refreshTank(tank) {
    $.ajax({
        url:"gettank.php",
        dataType:"json",
        method:'GET',
        data:{"tank":tank},
        success:function(data){
            renderTank(data);

        },
        error:function(){
            console.log("error to load refresh tank ajax data");
        }
    });
    function renderTank(data) {
        $('.prog_val').removeClass("transparentStatic").removeClass("blink");

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
        if(data.signallevel){
            $(".tank_parm_signallvl").text(data.signallevel);
        }
        if(data.avlevel){
            $(".tank_parm_avlevel").text(data.avlevel);
        }
        if(data.tempvapor){
            $(".tank_parm_vaportemp").text(data.tempvapor);
        }
        if(data.templab){
            $(".tank_parm_temp_lab").text(data.templab);
        }
        if(data.plotlab){
            $(".tank_parm_plot_lab").text(data.plotlab);
        }
        if(data.datetime){
            $(".tank_parm_upd").text(data.datetime);
        }
        if(Number(data.pereliv)){
            $(".tank_parm_pereliv").text("Перелив");
            $(".tank_parm_pereliv").removeClass("label-success").addClass("label-danger");
        }else {
            $(".tank_parm_pereliv").text("Нет перелива");
            $(".tank_parm_pereliv").removeClass("label-danger").addClass("label-success");
        }
        if(Number(data.product)>0){
            var product = getProduct(Number(data.product));
            $(".tank_parm_product").text(product.text);
            $(".tank_parm_product").removeClass("label-danger").addClass("label-success");
            $(".tank_parm_product").removeClass("disel diseleuro a76 a80 a92 a95 a98 smt").addClass(product.class);
        }else {
            $(".tank_parm_product").text("Нет продукта");
            $(".tank_parm_product").removeClass("disel diseleuro a76 a80 a92 a95 a98 smt label-success").addClass("label-danger");//подготовка
        }
        if(data.level && data.max_level){
            if(data.level=="-1000"){
                $(".tank_parm_level").text("Ошибка!!!");
                $('.prog_val').text("---");
                $('.prog_val').css("color","#fff");
                Global.parmTank.animate(0);
                Global.parmTankFancy.animate(0);
            }else {
                var tmpperc = lvl2perc(data.level,data.max_level).toFixed(1);
                //$('.prog_val').text(tmpperc+"%");
                $('.prog_val').text(data.level);
                if(tmpperc>95){
                    $('.prog_val').addClass("blink");
                }
                pr_opt = {};
                if(tmpperc<10){
                    $('.prog_val').css("color","#08f");
                    pr_opt={
                        from:{color:Global.parmTank.path.getAttribute("stroke")},
                        to:{color:"#08f"}
                    };
                    pr_optfancy={
                        from:{color:Global.parmTankFancy.path.getAttribute("stroke")},
                        to:{color:"#08f"}
                    };
                }else if(tmpperc>70 && tmpperc<90){
                    $('.prog_val').css("color","#ff8f00");
                    pr_opt={
                        from:{color:Global.parmTank.path.getAttribute("stroke")},
                        to:{color:"#ff8f00"}
                    };
                    pr_optfancy={
                        from:{color:Global.parmTankFancy.path.getAttribute("stroke")},
                        to:{color:"#ff8f00"}
                    };
                }else if(tmpperc>90){
                    $('.prog_val').css("color","#f00");
                    pr_opt={
                        from:{color:Global.parmTank.path.getAttribute("stroke")},
                        to:{color:"#f00"}
                    };
                    pr_optfancy={
                        from:{color:Global.parmTankFancy.path.getAttribute("stroke")},
                        to:{color:"#f00"}
                    };
                }else{
                    $('.prog_val').css("color","#090");
                    pr_opt={
                        from:{color:Global.parmTank.path.getAttribute("stroke")},
                        to:{color:"#090"}
                    };
                    pr_optfancy={
                        from:{color:Global.parmTankFancy.path.getAttribute("stroke")},
                        to:{color:"#090"}
                    };
                }

                Global.parmTank.animate(tmpperc/100,pr_opt);
                Global.parmTankFancy.animate(tmpperc/100,pr_optfancy);
            }

        }else {
            Global.parmTank.animate(0);
            Global.parmTankFancy.animate(0);
            $('.prog_val').css("color","#000");
            $('.prog_val').text("---");
        }
    }
}
function refreshPark() {
    $.ajax({
        url:"gettank.php",
        dataType:"json",
        method:'GET',
        data:{park:true},
        success:function(data){
            renderPark(data);
            calcArrows(data);
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
                    if(data[elem].level == "-1000"){
                        $(".tank[data-num="+(data[elem].num)+"]").find(".tank_error").removeClass("transparent");
                        $(".tank[data-num="+(data[elem].num)+"]").css("opacity",0.6);
                        $(".tank[data-num="+(data[elem].num)+"]").find(".progress_tank").addClass("transparentStatic");

                        //статус резервуаров
                        $("[data-ts="+(data[elem].num)+"]").html(data[elem].num+" <i class='glyphicon glyphicon-remove-circle'></i>");
                    }else {
                        //статус резервуаров
                        $("[data-ts="+(data[elem].num)+"]").html(data[elem].num+" <i class='glyphicon glyphicon-ok-circle'></i>");

                        $(".tank[data-num="+(data[elem].num)+"]").find(".tank_error").addClass("transparent");
                        $(".tank[data-num="+(data[elem].num)+"]").css("opacity",1);
                        $(".tank[data-num="+(data[elem].num)+"]").find(".progress_tank").removeClass("transparentStatic");
                        
                        var tmpperc = lvl2perc(Number(data[elem].level),Number(data[elem].max_level)).toFixed(0);
                        var tmpReal = $(".tank[data-num="+(data[elem].num)+"]").find(".progress_tank_val_real");
                        var tmpPerc = $(".tank[data-num="+(data[elem].num)+"]").find(".progress_tank_val");
                        var tmpProd = $(".tank[data-num="+(data[elem].num)+"]").find(".tank_prod");
/*
                        if(tmpperc>95){
                            tmpPerc.addClass("blink");
                            tmpReal.addClass("blink");
                        }else {
                            tmpPerc.removeClass("blink");
                            tmpReal.removeClass("blink");
                        }
*/
                        tmpPerc.text(tmpperc+"%");
                        tmpReal.text(Number(data[elem].level).toFixed(0));
                        if(Number(data[elem].product)){
                            var product = getProduct(Number(data[elem].product));
                            tmpProd.text(product.text);
                            tmpProd.removeClass("disel diseleuro a76 a80 a92 a95 a98 smt");//подготовка
                            tmpProd.removeClass("label-danger label-warning").addClass("label-success");
                            tmpProd.addClass(product.class);
                        }else {
                            tmpProd.text(getProduct(Number(data[elem].product)).text);
                            tmpProd.removeClass("label-success label-warning").addClass("label-danger");
                        }

                        //console.log("pereliv:"+Number(data[elem].pereliv));
                        if(Number(data[elem].pereliv)){
                            $(".tank[data-num="+(data[elem].num)+"]").find(".tank_pereliv").removeClass("transparent");
                        }else {
                            $(".tank[data-num="+(data[elem].num)+"]").find(".tank_pereliv").addClass("transparent");
                        }


                        pr_opt = {};
                        if(tmpperc<10){
                            tmpPerc.css("color","#08f");
                            tmpReal.css("color","#333");
                            pr_opt={
                                from:{color:Global.pr_tank[Number(data[elem].num)].path.getAttribute("stroke")},
                                to:{color:"#08f"}
                            };
                        }else if(tmpperc>70 && tmpperc<90){
                            tmpPerc.css("color","rgb(200, 100, 0)");
                            //tmpReal.css("color","rgb(200, 100, 0)");
                            tmpReal.css("color","#333");
                            pr_opt={
                                from:{color:Global.pr_tank[Number(data[elem].num)].path.getAttribute("stroke")},
                                to:{color:"rgb(200, 100, 0)"}
                            };
                        }else if(tmpperc>90){
                            tmpPerc.css("color","#a00");
                            tmpReal.css("color","#a00");
                            pr_opt={
                                from:{color:Global.pr_tank[Number(data[elem].num)].path.getAttribute("stroke")},
                                to:{color:"#a00"}
                            };
                        }else{
                            tmpPerc.css("color","#090");
                            //tmpReal.css("color","#090");
                            tmpReal.css("color","#333");
                            pr_opt={
                                from:{color:Global.pr_tank[Number(data[elem].num)].path.getAttribute("stroke")},
                                to:{color:"#090"}
                            };
                        }

                        Global.pr_tank[data[elem].num].animate(tmpperc/100,pr_opt);
                        //проверка на устаревание данных
                        {
                            var xtime = new Date(Date.parse(data[elem].datetime));
                            var t_year = xtime.getFullYear();
                            var t_month = xtime.getMonth();
                            var t_day = xtime.getDate();
                            var t_hour = xtime.getHours();
                            var t_minute = xtime.getMinutes();
                            var t_second = xtime.getSeconds();
                            var offset = new Date().getTimezoneOffset()*60000;
                            var utctime = Date.UTC(t_year,t_month,t_day,t_hour,t_minute,t_second);
                            var nowt = Date.now();
                            var now = nowt - offset;
                            //var now = nowt;
                            var compare_t = now-utctime;
                            //console.log("elem:"+elem+"tank:"+data[elem].num+"now:"+now+" utc:"+utctime+" compare:"+compare_t);
                            if(compare_t > 15*60*1000){
                                $("[data-ts="+(data[elem].num)+"]").html(data[elem].num+" <i class='glyphicon glyphicon-transfer'></i>");
                            }
                            if(compare_t > 30*60*1000){
                                $("[data-ts="+(data[elem].num)+"]").html(data[elem].num+" <i class='glyphicon glyphicon-warning-sign'></i>");
                                $(".tank[data-num="+(data[elem].num)+"]").css("opacity",0.3);
                            }
                        }
                    }
                }else {
                    Global.pr_tank[data[elem].num].animate(0,pr_opt);
                }


            }
        }
        if(Global.tankselect){
            refreshTank(Global.tankselect);
        }

    }

}
function lvl2perc(val,max){
    var desc = max/100;
    var cur = val/desc;
    //console.log(cur);
    return cur;
}
function getProduct(code) {
    var textProd = "";
    var className = "";
    switch (code) {
        case 1:
            textProd = "А-76";
            className = "a76";
            break;
        case 2:
            textProd = "Нормал 80";
            className = "a80";
            break;
        case 3:
            textProd = "Регуляр 92";
            className = "a92";
            break;
        case 4:
            textProd = "Премиум 95";
            className = "a95";
            break;
        case 5:
            textProd = "ДТ 0.2-62 в.с";
            className = "disel";
            break;
        case 6:
            textProd = "ДТ 0.2-62";
            className = "disel";
            break;
        case 7:
            textProd = "ДТ 0.05-62";
            className = "disel";
            break;
        case 8:
            textProd = "ДТ 0.05-35";
            className = "disel";
            break;
        case 9:
            textProd = "СМТ";
            className = "smt";
            break;
        case 10:
            textProd = "ДТ Евро";
            className = "diseleuro";
            break;
        case 11:
            textProd = "Супер 98";
            className = "a98";
            break;
        default:
            textProd = "Нет продукта";
            break;
    }
    return {text:textProd,class:className};
}
function renderFancy() {
    $('#fancycontainer').fancybox({
        'scrolling':'no',
        'padding':10,
        'margin':20,
        'hideOnOverlayClick':true,
        'hideOnContentClick':true,
        'type':'inline'
    });
    $('#fancycontainer').click();
    $('#fancycontainer').click(function (event) {
        if(!Global.fancy) {
            event.preventBubble();
        }
    });
}
function toggleFancy(num) {
    Global.fancy = !Global.fancy;
    if(Global.fancy){
        $('.tank').addClass("fancyemiter");//переводим на fancy
        var tmpnum = Global.tankselect;
        tankparmToggle(false);//закрываем окно
        Global.tankselect = tmpnum;
        $.fancybox.open("#fancycontainer");
    }else {
        $('.tank').removeClass("fancyemiter");//delete fancy
        $.fancybox.close();
        tankparmToggle(true,Global.tankselect);
    }
}
function openTank(num) {
    if(num){
        Global.tankselect = num;
        $(".tank_num_val").text(num);
        Global.tankselect = num;
        refreshTank(num);
    }
    if(Global.fancy){
        //renderFancy(num);
        refreshTank(num);
    }else {
        tankparmToggle(true);
    }
}
function calcArrows(data) {
    var filter = 1;
    if(Global.IntegratorCon){
        if(data){
            for(var el in data){//перебор резервуаров
                var res = false;
                var tmpnum = Number(data[el].num);
                if(eval('Global.IntegratorForArrows'+data[el].num)){//тестируем первый резервуар
                    if(data[el].level){//если есть уровень у выбранного резервуара
                        var tmplevel = Number(data[el].level);
                        var result = eval('Global.IntegratorForArrows'+data[el].num+'.Integrity(tmplevel)');
                        if(Math.abs(result)>filter){//значение выходит на рамки
                            if(result>0){
                                //console.log("Значение растет:"+result);
                                res = "up";
                            }else {
                                //console.log("Значение падает:"+result);
                                res = "down";
                            }
                        }else {
                            //console.log("Значение без изменений:"+result);
                        }
                        renderArrows(tmpnum,res);
                    }
                }
            }
        }
    }
    function renderArrows(tank,result) {
        var TankObj = false;
        if(tank){
            TankObj = $(".tank[data-num="+tank+"]");
            TankObj.find(".tank_arrow_top").removeClass("_up _down _neutral");
            TankObj.find(".tank_arrow_bottom").removeClass("_up _down _neutral");
        }
        if(tank && result){
            TankObj = $(".tank[data-num="+tank+"]");
            if(result=="up"){
                TankObj.find(".tank_arrow_top").addClass("_up");
                //статус резервуаров
                $("[data-ts="+tank+"]").html(tank+" <i class='glyphicon glyphicon-arrow-up'></i>");
            }else if(result=="down"){
                TankObj.find(".tank_arrow_bottom").addClass("_down");
                //статус резервуаров
                $("[data-ts="+tank+"]").html(tank+" <i class='glyphicon glyphicon-arrow-down'></i>");
            }
            else{
                TankObj.find(".tank_arrow_top").addClass("_neutral");
                TankObj.find(".tank_arrow_bottom").addClass("_neutral");
            }
        }
        if(tank && !result){
            TankObj.find(".tank_arrow_top").addClass("_neutral");
            TankObj.find(".tank_arrow_bottom").addClass("_neutral");
        }
        refreshTooltips();
    }
}

function refreshTooltips() {
    $('.glyphicon-warning-sign').each(function () {
        $(this).attr("data-tooltip", "давно не обновлялся");
    });
    $('.glyphicon-arrow-down').each(function () {
        $(this).attr("data-tooltip", "Идет слив НП");
    });
    $('.glyphicon-arrow-up').each(function () {
        $(this).attr("data-tooltip", "Идет налив НП");
    });
    $('.glyphicon-remove-circle').each(function () {
        $(this).attr("data-tooltip", "Ошибка уровнемера");
    });
    $("#panelstate").off();
    tooltipHandler();
    function tooltipHandler() {
        $("#panelstate").on("mousemove","[data-tooltip]",function (eventObject) {

            var data_tooltip = $(this).attr("data-tooltip");


            var tmpoffset = $("#tooltip").offset().left;
            var tmpw = $("#tooltip").width();
            var tmppanelw = $("#panelstate").outerWidth();
            //console.log("offset:"+tmpoffset+"width:"+tmpw+"panelwidth:"+tmppanelw);
            if((tmpoffset+tmpw+100)>tmppanelw){
                $("#tooltip").text(data_tooltip)
                    .css({
                        "top" : eventObject.pageY + 10,
                        "left" : eventObject.pageX - 10 - tmpw
                    })
                    .show();
            }else {
                $("#tooltip").text(data_tooltip)
                    .css({
                        "top" : eventObject.pageY + 10,
                        "left" : eventObject.pageX + 10
                    })
                    .show();
            }

        }).mouseout(function () {

            $("#tooltip").hide(0,function () {
                $(this).text("")
                    .css({
                        "top" : 0,
                        "left" : 0
                    });
            })

        });
    }
}
function startRezpark() {
    $.ajax({
        url:"nodes/respark.html",
        dataType:"html",
        method:'GET',
        success:function(data){
            if(data)$('#minview').html(data);
            reloadProgressBar();
            $(".tank").addClass("initScroll");
            $(".tank").each(function (index, elem) {
                setTimeout(function () {
                    $(elem).removeClass("initScroll");
                },index*70);
            });
            $(".tank_pereliv").addClass("transparent");
            $(".tank_error").addClass("transparent").removeClass("label-danger").addClass("label-default");
            $(".tank").each(function () {
                var tmp = $(this).data("num");
                $(this).find(".tank_title").text(tmp);
            });
            refreshPark();
            if (Global.refreshParkTimer)clearInterval(Global.refreshParkTimer);
            if (Global.refreshStateTimer)clearInterval(Global.refreshStateTimer);
            Global.refreshParkTimer=setInterval(refreshPark,60000);
            Global.refreshStateTimer=setInterval(stateRefresher,10000);
        },
        error:function(){
            console.log("error to load respark");
        }
    });

}
function stopRezpark() {
    if (Global.refreshParkTimer)clearInterval(Global.refreshParkTimer);
    if (Global.refreshStateTimer)clearInterval(Global.refreshStateTimer);
}