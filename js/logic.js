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
            if(data.num == "2"){
                $(".tank_parm_mass").text(Number(data.mass/1000));
            }
        }
        if(data.volume){
            $(".tank_parm_volume").text(data.volume);
            if(data.num == "2"){
                $(".tank_parm_volume").text(Number(data.volume/1000));
            }
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
            $(".tank_parm_product").text(getProduct(Number(data.product)));
            $(".tank_parm_product").removeClass("label-danger").addClass("label-success");
        }else {
            $(".tank_parm_product").text("Нет продукта");
            $(".tank_parm_product").removeClass("label-success").addClass("label-danger");
        }
        if(data.level && data.max_level){
            if(data.level=="-1000"){
                $(".tank_parm_level").text("Ошибка!!!");
                $('.prog_val').text("Ошибка!!!");
                Global.parmTank.animate(0);
                Global.parmTankFancy.animate(0);
            }else {
                var tmpperc = lvl2perc(data.level,data.max_level).toFixed(1);
                $('.prog_val').text(tmpperc+"%");
                if(tmpperc>95){
                    $('.prog_val').addClass("blink");
                }
                pr_opt = {};
                if(tmpperc<10){
                    $('.prog_val').css("color","#009");
                    pr_opt={
                        from:{color:Global.parmTank.path.getAttribute("stroke")},
                        to:{color:"#009"}
                    };
                    pr_optfancy={
                        from:{color:Global.parmTankFancy.path.getAttribute("stroke")},
                        to:{color:"#009"}
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
                    }else {
                        $(".tank[data-num="+(data[elem].num)+"]").find(".tank_error").addClass("transparent");
                        var tmpperc = lvl2perc(Number(data[elem].level),Number(data[elem].max_level)).toFixed(0);
                        var tmpReal = $(".tank[data-num="+(data[elem].num)+"]").find(".progress_tank_val_real");
                        var tmpPerc = $(".tank[data-num="+(data[elem].num)+"]").find(".progress_tank_val");
                        var tmpProd = $(".tank[data-num="+(data[elem].num)+"]").find(".tank_prod");

                        if(tmpperc>95){
                            tmpPerc.addClass("blink");
                            tmpReal.addClass("blink");
                        }else {
                            tmpPerc.removeClass("blink");
                            tmpReal.removeClass("blink");
                        }

                        tmpPerc.text(tmpperc+"%");
                        tmpReal.text(data[elem].level);
                        if(Number(data[elem].product)){
                            tmpProd.text(getProduct(Number(data[elem].product)));
                            tmpProd.removeClass("label-danger label-warning").addClass("label-success");
                        }else {
                            tmpProd.text(getProduct(Number(data[elem].product)));
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
                            tmpPerc.css("color","#009");
                            tmpReal.css("color","#009");
                            pr_opt={
                                from:{color:Global.pr_tank[Number(data[elem].num)].path.getAttribute("stroke")},
                                to:{color:"#009"}
                            };
                        }else if(tmpperc>70 && tmpperc<90){
                            tmpPerc.css("color","#ff8f00");
                            tmpReal.css("color","#ff8f00");
                            pr_opt={
                                from:{color:Global.pr_tank[Number(data[elem].num)].path.getAttribute("stroke")},
                                to:{color:"#ff8f00"}
                            };
                        }else if(tmpperc>90){
                            tmpPerc.css("color","#f00");
                            tmpReal.css("color","#f00");
                            pr_opt={
                                from:{color:Global.pr_tank[Number(data[elem].num)].path.getAttribute("stroke")},
                                to:{color:"#f00"}
                            };
                        }else{
                            tmpPerc.css("color","#090");
                            tmpReal.css("color","#090");
                            pr_opt={
                                from:{color:Global.pr_tank[Number(data[elem].num)].path.getAttribute("stroke")},
                                to:{color:"#090"}
                            };
                        }

                        Global.pr_tank[data[elem].num].animate(tmpperc/100,pr_opt);




                    }

                }else {
                    Global.pr_tank[data[elem].num].animate(0,pr_opt);
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
function getProduct(code) {
    var textProd = "";
    switch (code) {
        case 1:
            textProd = "А-76 н/эт";
            break;
        case 2:
            textProd = "Нормал 80 н/эт";
            break;
        case 3:
            textProd = "Регуляр 92 н/эт";
            break;
        case 4:
            textProd = "Премиум 95 н/эт";
            break;
        case 5:
            textProd = "Диз. топливо 0.2-62 в.с";
            break;
        case 6:
            textProd = "Диз. топливо 0.2-62";
            break;
        case 7:
            textProd = "Диз. топливо 0.05-62";
            break;
        case 8:
            textProd = "Диз. топливо 0.05-35";
            break;
        case 9:
            textProd = "СМТ";
            break;
        case 10:
            textProd = "Диз. топливо Евро";
            break;
        case 11:
            textProd = "Супер 98";
            break;
        default:
            textProd = "Нет продукта";
            break;
    }
    return textProd;
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
        tankparmToggle(false);//закрываем окно
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