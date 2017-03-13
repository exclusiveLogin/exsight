class respark{
    constructor(){
        this.coldstart = true;
    }
    tankparmToggle(state){
        if(state){
            $('#parm_panel').show(0,function () {
                $(this).removeClass("transparent");
            });
        }
        else{
            $('#parm_panel').hide(0,function () {
                $(this).addClass("transparent");
                Global.tankselect = false;
            });
        }
    }
    renderTrendTankParm(data) {
        this.lastLazyTrend = data;
        //console.log("hello from render method:",data);
        //parsing zone
        let level = [],
            mass=[],
            volume=[],
            temperature=[],
            vapor_temperature=[],
            plot=[];
        data.map(function (elem,index) {
			let utc;
			if(elem.utc)utc = Number(elem.utc);
			if(elem.level && elem.mass && elem.volume && elem.temperature && elem.vapor_temperature && elem.plot){
				level.push([utc,Number(elem.level)]);
				mass.push([utc,Number(elem.mass)]);
				volume.push([utc,Number(elem.volume)]);
				temperature.push([utc,Number(elem.temperature)]);
				vapor_temperature.push([utc,Number(elem.vapor_temperature)]);
				plot.push([utc,Number(elem.plot)]);
			}            
        });
		if(Global.fancy){
			//Trend in fancy
			setTimeout(function(){
				Global.TrendFancy.series[0].setData(level);
			},100);
			setTimeout(function(){
				Global.TrendFancy.series[1].setData(mass);
			},200);
			setTimeout(function(){
				Global.TrendFancy.series[2].setData(volume);
			},300);
			setTimeout(function(){
				Global.TrendFancy.series[3].setData(temperature);
			},400);
			setTimeout(function(){
				Global.TrendFancy.series[4].setData(vapor_temperature);
			},500);
			setTimeout(function(){
				Global.TrendFancy.series[5].setData(plot);
				Global.TrendFancy.hideLoading();
			},600);
		}else{
			//Trend In Tank Parm
			
			setTimeout(function(){
				Global.TrendTankParm.series[0].setData(level);
			},100);
			setTimeout(function(){
				Global.TrendTankParm.series[1].setData(mass);
			},200);
			setTimeout(function(){
				Global.TrendTankParm.series[2].setData(volume);
			},300);
			setTimeout(function(){
				Global.TrendTankParm.series[3].setData(temperature);
			},400);
			setTimeout(function(){
				Global.TrendTankParm.series[4].setData(vapor_temperature);
			},500);
			setTimeout(function(){
				Global.TrendTankParm.series[5].setData(plot);
				Global.TrendTankParm.hideLoading();
			},600);
		}
    }
    refreshTank(tank) {
        var wrapperRenderTank = renderTank.bind(this);
        var wrapperTrend = this.renderTrendTankParm.bind(this);
        $.ajax({
            url:"gettank.php",
            dataType:"json",
            method:'GET',
            data:{"tank":tank},
            success:function(data){
                wrapperRenderTank(data);
            },
            error:function(){
                console.log("error to load refresh tank ajax data");
            }
        });
        //запрос на HD
        Global.TrendTankParm.showLoading("Загрузка данных");
        $.ajax({
            url:"trendengine.php",
            dataType:"json",
            method:'GET',
            data:{"tank":tank,"lazy":true},
            success:function(data){
                wrapperTrend(data);
            },
            error:function(){
                console.log("error to load refresh tank LazyTrends ajax data");
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
                var product = this.getProduct(Number(data.product));
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
                    var tmpperc = this.lvl2perc(data.level,data.max_level).toFixed(1);
                    //$('.prog_val').text(tmpperc+"%");
                    $('.prog_val').text(data.level);
                    if(tmpperc>95){
                        $('.prog_val').addClass("blink");
                    }
                    let pr_opt = {};
                    let pr_optfancy ={};
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
    refreshPark(){
        var wrapperRenderpark = renderPark.bind(this);
        var wrapperCalcArrows = this.calcArrows.bind(this);
        $.ajax({
            url:"gettank.php",
            dataType:"json",
            method:'GET',
            data:{park:true},
            success:function(data){
                connectionState(1);
                wrapperRenderpark(data);
                wrapperCalcArrows(data);
            },
            error:function(){
                console.log("error to load refresh park ajax data");
                connectionState(0);
            }
        });
        function renderPark(data) {
            if(data){
                /*Если это холодный старт то
                надо список имеющихся активных резервуаров
                передать на вычисление Тенденций*/
                if(Global.nodes[getNode(respark)].nodeObj.coldstart){
                    Global.nodes[getNode(respark)].nodeObj.coldstart = false //Выставляем флаг горячего старта
                    this.tendsStart(data);
                }
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
                            // if(Global.nodes[getNode(respark)].){
                            //
                            // }

                            //статус резервуаров
                            $("[data-ts="+(data[elem].num)+"]").html(data[elem].num+" <i class='glyphicon glyphicon-ok-circle'></i>");

                            $(".tank[data-num="+(data[elem].num)+"]").find(".tank_error").addClass("transparent");
                            $(".tank[data-num="+(data[elem].num)+"]").css("opacity",1);
                            $(".tank[data-num="+(data[elem].num)+"]").find(".progress_tank").removeClass("transparentStatic");

                            var tmpperc = this.lvl2perc(Number(data[elem].level),Number(data[elem].max_level)).toFixed(0);
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
                                var product = this.getProduct(Number(data[elem].product));
                                tmpProd.text(product.text);
                                tmpProd.removeClass("disel diseleuro a76 a80 a92 a95 a98 smt");//подготовка
                                tmpProd.removeClass("label-danger label-warning").addClass("label-success");
                                tmpProd.addClass(product.class);
                            }else {
                                tmpProd.text(this.getProduct(Number(data[elem].product)).text);
                                tmpProd.removeClass("label-success label-warning").addClass("label-danger");
                            }

                            //console.log("pereliv:"+Number(data[elem].pereliv));
                            if(Number(data[elem].pereliv)){
                                $(".tank[data-num="+(data[elem].num)+"]").find(".tank_pereliv").removeClass("transparent");
                            }else {
                                $(".tank[data-num="+(data[elem].num)+"]").find(".tank_pereliv").addClass("transparent");
                            }


                            let pr_opt = {};
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
                                if(compare_t > 2*60*1000){
                                    $("[data-ts="+(data[elem].num)+"]").html(data[elem].num+" <i class='glyphicon glyphicon-transfer'></i>");
                                }
                                if(compare_t > 3*60*1000){
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
                this.refreshTank(Global.tankselect);
            }

        }
    }
    calcArrows(data) {
        var filter = 1;
        if(Global.IntegratorCon){
            if(data){
                for(var el in data){//перебор резервуаров
                    var res = false;
                    var tmpnum = Number(data[el].num);
                    if(eval('Global.IntegratorForArrows'+data[el].num)){//тестируем первый резервуар
                        if(data[el].level){//если есть уровень у выбранного резервуара
                            var tmpmass = Number(data[el].mass);
                            var result = eval('Global.IntegratorForArrows'+data[el].num+'.Integrity('+tmpmass+')');
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
                            this.renderArrows(tmpnum,res);
                        }
                    }
                }
            }
        }
    }
    renderArrows(tank,result) {
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
    lvl2perc(val,max){
        var desc = max/100;
        var cur = val/desc;
        //console.log(cur);
        return cur;
    }
    getProduct(code){
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
    openTank(num) {
        if(num){
            Global.tankselect = num;
            $(".tank_num_val").text(num);
            Global.TrendTankParm.setTitle({text:"Параметры резервуара "+num});
			Global.TrendFancy.setTitle({text:"Параметры резервуара "+num});
            this.refreshTank(num);
        }
        if(Global.fancy){
            //renderFancy(num);
            this.refreshTank(num);
        }else {
            this.tankparmToggle(true);
        }
    }
    startNode() {
        $("#btnrespark").addClass("nodeselected");
        var resparkbodyPromise = fetch("nodes/templates/respark.html").then(function (response) {
            return response.text();
        });
        resparkbodyPromise.then(function (text) {
            $('#minview').html(text);

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
        });

        var resparkpanelPromise = fetch("nodes/templates/resparkpanel.html").then(function (response) {
            return response.text();
        });

        resparkpanelPromise.then(function (text) {
            $('#panelstate').html(text);
        });

        /*var context;
        if(this instanceof respark){
            context = this;
        }else {
            Global.nodes.map(function (node,index) {
                if(node.nodeObj instanceof respark){
                    context = node.nodeObj;
                }
            });
        }*/

        var wrapperStartOPC = this.startOPC.bind(this);

        Promise.all([resparkbodyPromise,resparkpanelPromise]).then(function () {
            reloadProgressBar();
            wrapperStartOPC();
        });
    }
    stopNode() {
        if (Global.refreshParkTimer)clearInterval(Global.refreshParkTimer);
        if (Global.refreshStateTimer)clearInterval(Global.refreshStateTimer);
        $('#minview').empty();
        $("#btnrespark").removeClass("nodeselected");

    }
    startOPC(){
        var wrapperRefreshPark = this.refreshPark.bind(this);
        let start = function () {
            wrapperRefreshPark();

            if (Global.refreshParkTimer)clearInterval(Global.refreshParkTimer);
            if (Global.refreshStateTimer)clearInterval(Global.refreshStateTimer);
            Global.refreshParkTimer=setInterval(wrapperRefreshPark,60000);
            Global.refreshStateTimer=setInterval(stateRefresher,10000);
        };

        start();
    }
    tendsStart(data){
        var wrapperRenderArrows = this.renderArrows.bind(this);
        if(typeof data === "object"){
            data.map(function (elem,idx) {
                if(elem.level){
                    if(Number(elem.level) > -1){//если резервуар не в ремонте
                        //готовим AJAX
                        $.ajax({
                            url:"trendengine.php",
                            dataType:"json",
                            method:'GET',
                            data:{tends:true,coldstart:true,tanktends:elem.num},
                            success:function(data){
                                let i = Number(elem.num);
                                data.map(function (el,elidx) {
                                    if(eval('Global.IntegratorForArrows'+elem.num)){
                                        let filter = 1;
                                        //если есть объект интегратора для данного резервуара
                                        if(el.mass){//если есть уровень у выбранного резервуара
                                            var tmpmass = Number(el.mass);
                                            var result = eval('Global.IntegratorForArrows'+elem.num+'.Integrity('+tmpmass+')');
                                            var res = false;
                                            if(Math.abs(result)>filter){//значение выходит на рамки
                                                if(result>0){
                                                    res = "up";
                                                }else {
                                                    res = "down";
                                                }
                                            }else {
                                                //console.log("Значение без изменений:"+result);
                                            }
                                            if(data.length-1 == elidx){
                                                wrapperRenderArrows(elem.num,res);
                                            }
                                        }
                                    }
                                });
                            },
                            error:function(){
                                console.log("error to load Tendentional ajax data from",elem.num);
                            }
                        });
                    }
                }
            });
        }
    }
}