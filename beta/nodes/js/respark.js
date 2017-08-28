class respark{
    constructor(){
        this.coldstart = true;
        this.lastParkAjax = {};
    }
    rendermeteo(data){
        if (data){
            $(".wind_p .meteovalue").text(data.wind_p);
            $(".wind_nb .meteovalue").text(data.wind_nb);
            $(".temperature_air .meteovalue").text(data.temperature_air);
            $(".meteoupdate .meteovalue").text(data.fixtime);
            Global.meteo = data;
        }
    }
    tankparmToggle(state){
        if(state){
            $('#parm_panel').show(0,function () {
                $(this).removeClass("transparent");
                Global.TrendTankParm.reflow();
            });
        }else{
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
        //запрос резервуара
        if(this.lastParkAjax) {
            this.lastParkAjax.map(function (tankObj) {//выбираем и последнего респонса нужный резервуар
                if(tankObj.num == tank){
                    //отправляем его на рендер без доп запроса к серверу
                    wrapperRenderTank(tankObj);
                }
            }, this);
        }

        /*$.ajax({
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
         });*/
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
            $('.prog_val').removeClass("transparentStatic").removeClass("blinkClass");

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
                        $('.prog_val').addClass("blinkClass");
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

                if(data.service){
                    $(".tank_parm_service").html("<i class=\"label label-danger\"><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i> В ремонте</i>");
                }else {
                    $(".tank_parm_service").html("<i class=\"label label-success\"><i class='glyphicon glyphicon-ok-circle'></i> В работе</i>");
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
        this.led("ok");//сетим в норму изначально
        var wrapperRenderpark = renderPark.bind(this);
        var wrapperCheckPark = checkPark.bind(this);
        var wrapperCalcArrows = this.calcArrows.bind(this);
        var wrapperSummaryBalance = this.summaryBalance.bind(this);
        var wrapperAsnBalance = this.asnLoading.bind(this);
        var wrapperMeteo = this.rendermeteo.bind(this);

        let context = this;

        //запрос метео
        $.ajax({
            url:"getmeteo.php",
            dataType:"json",
            method:'GET',
            data:{meteo:true},
            success:function(data){
                wrapperMeteo(data);
            },
            error:function(){
                console.log("error to load refresh tank ajax data");
            }
        });
        //запрос парка
        $.ajax({
            url:"gettank.php",
            dataType:"json",
            method:'GET',
            data:{park:true},
            success:function(data){
                context.lastParkAjax = data;
                connectionState(1);
                wrapperCheckPark(data);
            },
            error:function(){
                console.log("error to load refresh park ajax data");
                connectionState(0);
            }
        });
        function checkPark(data) {
            //console.log("checkpark this:",this);
            if(data){
                /*Если это холодный старт то
                 надо список имеющихся активных резервуаров
                 передать на вычисление Тенденций*/
                if(Global.nodes[getNode(respark)].nodeObj.coldstart){
                    Global.nodes[getNode(respark)].nodeObj.coldstart = false; //Выставляем флаг горячего старта
                    this.tendsStart(data);
                }

                for(var elem in data) { //основной цикл анализа
                    //в рез парке кнотролируем
                    //-переливы
                    //-ошибки уровнемеров
                    //console.log("tank#"+data[elem].num+" level is:"+data[elem].level);
                    elem = Number(elem);//преобразование в Number

                    //-----WARNING SECTION------
                    if(Number(data[elem].pereliv)){
                        this.led("warning");

                    }
                    //-----ERROR SECTION--------
                    if(data[elem].level == "-1000"){//если уровнемер не возвращает данных уровня
                        if(!data[elem].service){// и нет "в ремонте"
                            this.led("error");
                        }
                    }
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
                            this.led("error");
                        }
                    }
                }


            }
            if(Global.nodes[getNode(respark)].nodeObj.showed){
                //console.log("рендерим парк");
                wrapperRenderpark(data);
                wrapperCalcArrows(data);
                wrapperSummaryBalance(data);
                wrapperAsnBalance();
            }else {
                //console.log("пропускаем рендер");
            }
            this.startedAndRefreshed.resolve();
            //console.log("Refreshed:",this.startedAndRefreshed);
            data = null;
        }
        function renderPark(data) {
            console.log("renderPark this :",this);
            if(data){
                for(var elem in data){ //основной цикл рендера
                    elem = Number(elem);
                    if(data[elem].level && data[elem].max_level){
                        if(data[elem].level == "-1000"){//если уровнемер не возвращает данных уровня
                            if(!data[elem].service){// и нет "в ремонте"
                                $(".tank[data-num="+(data[elem].num)+"]").find(".tank_error").removeClass("transparent");
                                $("[data-ts="+(data[elem].num)+"]").html(data[elem].num+" <i class='glyphicon glyphicon-remove-circle'></i>");

                                //this.led("error");
                            }

                            $(".tank[data-num="+(data[elem].num)+"]").css("opacity",0.6);
                            $(".tank[data-num="+(data[elem].num)+"]").find(".progress_tank").addClass("transparentStatic");

                        }else if(!data[elem].service){
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
                                //this.led("warning");
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
                            if(Utility.checkExpired(data[elem].datetime)){
                                $(".tank[data-num="+(data[elem].num)+"]").css("opacity",0.2);
                            }
                        }
                    }else {
                        Global.pr_tank[data[elem].num].animate(0,pr_opt);
                        //this.led("error");
                    }
                    //Если резервуар в ремонте
                    if(data[elem].service){//если в ремонте то ВСЕГДА
                        $(".tank[data-num="+(data[elem].num)+"]").find(".tank_service").removeClass("transparent");
                        $("[data-ts="+(data[elem].num)+"]").html(data[elem].num+" <i class=\"fa fa-wrench\" aria-hidden=\"true\"></i>");
                        $(".tank[data-num="+(data[elem].num)+"]").find(".tank_error").addClass("transparent");
                        $(".tank[data-num="+(data[elem].num)+"]").find(".progress_tank").addClass("transparentStatic");
                    }else {
                        $(".tank[data-num="+(data[elem].num)+"]").find(".tank_service").addClass("transparent");
                    }
                }
            }
            if(Global.tankselect){
                this.refreshTank(Global.tankselect);
            }
            data = null;
        }
    }
    calcArrows(data) {
        var filter = 3/60;
        if(Global.IntegratorCon){
            if(data){
                for(var el in data){//перебор резервуаров
                    var res = false;
                    var tmpnum = Number(data[el].num);
                    if(eval('Global.IntegratorForArrows'+data[el].num)){//тестируем первый резервуар
                        if(data[el].level && data[el].mass){//если есть уровень у выбранного резервуара
                            var tmpmass = Number(data[el].mass);
                            var result = eval('Global.IntegratorForArrows'+data[el].num+'.Integrity('+tmpmass+')');
                            // console.log("CALC ARROWS Data:",data,"Result:",result);
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
                            this.renderArrows(tmpnum,res,result);
                        }
                    }
                }
            }
        }
    }
    renderArrows(tank,result,res_val) {
        var TankObj = false;
        if(tank){
            TankObj = $(".tank[data-num="+tank+"]");
            TankObj.find(".tank_arrow_top").removeClass("_up _down _neutral");
            TankObj.find(".tank_arrow_bottom").removeClass("_up _down _neutral");

            TankObj.find(".tends").removeClass("_up _down");
        }
        if(tank && result){
            TankObj = $(".tank[data-num="+tank+"]");
            if(result=="up"){
                TankObj.find(".tank_arrow_top").addClass("_up");

                TankObj.find(".tends").addClass("_up");
                //статус резервуаров
                $("[data-ts="+tank+"]").html(tank+" <i class='glyphicon glyphicon-arrow-up'></i>");
            }else if(result=="down"){
                TankObj.find(".tank_arrow_bottom").addClass("_down");

                TankObj.find(".tends").addClass("_down");
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
        if(res_val){
            if(Math.abs(res_val*60) > 3){
                TankObj.find(".tends .val").text((res_val*60).toFixed(1));
            }else {
                TankObj.find(".tends .val").text("~ "+(res_val*60).toFixed(1));
            }
        }else {
            TankObj.find(".tends .val").text("---");
        }
        //refreshTooltips();
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
        var context = this;
        this.startedAndRefreshed = $.Deferred();

        //console.log("start node REZPARK",this.startedAndRefreshed);
        var resparkbodyPromise = fetch("nodes/templates/respark.html").then(function (response) {
            return response.text();
        }).then(function (text) {
            $('#resparkview').html(text);

            reloadProgressBar();


            $(".tank_pereliv").addClass("transparent");
            $(".tank_service").addClass("transparent");
            $(".tank_error").addClass("transparent").removeClass("label-danger").addClass("label-default");

            $(".pereliv,.errortank,.blink,.glyphicon-warning-sign,.glyphicon-remove-circle").addClass("blinkClass");

            $(".tank").each(function () {//расстановка номеров
                var tmp = $(this).data("num");
                $(this).find(".tank_title").text(tmp);
            });
            //Установка шаблона тенденций
            $(".tank").each(function () {
                $(this).find(".tends").html("<span class=\"val\">--</span> т/ч");
            });
            $('#resparkview').on('click','.tank',function(){//обработчик клика на резервуаре
                var num = $(this).data("num");
                if(num){
                    if(getNode(respark)>(-1)){
                        Global.nodes[getNode(respark)].nodeObj.openTank(num);
                    }
                }
            });
        });

        var resparkpanelPromise = fetch("nodes/templates/resparkpanel.html").then(function (response) {
            return response.text();
        });

        resparkpanelPromise.then(function (text) {
            $('#resparkpanel').html(text);
            $('#resparkpanel').addClass("cont_panel");
        });

        var wrapperStartOPC = this.startOPC.bind(this);

        Promise.all([resparkbodyPromise,resparkpanelPromise]).then(function () {
            //подключаем smartRender
            try {
                context.smartRender = new Utility.Renderer(context,["level","pereliv","product","service"]);
            }catch (e){
                console.error(e);
            }

            wrapperStartOPC();
        });
    }
    stopNode() {
        if (Global.refreshParkTimer)clearInterval(Global.refreshParkTimer);
        if (Global.refreshStateTimer)clearInterval(Global.refreshStateTimer);
        $('#resparkview').empty();
        this.led("unselect");

    }
    startOPC(){
        //console.log("respark startOPC this:",this);
        var wrapperRefreshPark = this.refreshPark.bind(this);
        function start() {
            //console.log("respark start function this:",this);
            wrapperRefreshPark();
            if (this.OPCTimer)clearInterval(this.OPCTimer);
            this.OPCTimer = setInterval(wrapperRefreshPark,60000);
        }

        start.bind(this)();
    }
    stopOPC(){
        if (this.OPCTimer)clearInterval(this.OPCTimer);
    }
    showNode(){
        console.log("Show node REZPARK");
        Global.nodes.map(function (elem) {
            if(elem.nodeObj){
                if(elem.nodeObj.hideNode){
                    elem.nodeObj.hideNode();
                }
            }
        });
        $("#resparkview").show();

        $(".tank").addClass("initScroll");//Плавный старт
        $(".tank").each(function (index, elem) {
            setTimeout(function () {
                $(elem).removeClass("initScroll");
            },index*70);
        });
        this.showed = true;
        this.led("select");

        //принудительно запускаем обновление данных парка
        this.refreshPark();
    }
    hideNode(){
        $("#resparkview").hide();
        this.led("unselect");
        this.showed = false;
        //-------подчищаем тренды
        if(Global.TrendFancy.series.length){
            Global.TrendFancy.series.forEach(function (elem) {
                elem.setData();
            })
        }
        if(Global.TrendTankParm.series.length){
            Global.TrendTankParm.series.forEach(function (elem) {
                elem.setData();
            })
        }
    }
    summaryBalance(data){
        if(data){

            let product = [];//инициализация массива

            data.map(function (elem) {
                var prodId = Number(elem.product);
                var prodText = this.getProduct(prodId);
                var tmpProdMass = Number(elem.mass);
                var tmpProdMassHideZone = Number(elem.hidezone);
                var tmpNum = Number(elem.num);

                if(!product[prodText.text]){//создаем продукт
                    product[prodText.text] = {
                        summ:tmpProdMass,
                        summexport:0,
                        tanks:[],
                        class:prodText.class
                    };
                    if(tmpProdMass > tmpProdMassHideZone){
                        product[prodText.text].tanks.push(tmpNum);
                        product[prodText.text].summexport = tmpProdMass - tmpProdMassHideZone;
                    }
                }else {//добавляем к продукту
                    let tmpOldObj = {};
                    Object.assign(tmpOldObj,product[prodText.text]);

                    product[prodText.text].summ = tmpOldObj.summ + tmpProdMass;
                    product[prodText.text].tanks = tmpOldObj.tanks;
                    if(tmpProdMass > tmpProdMassHideZone){
                        product[prodText.text].summexport = tmpOldObj.summexport + tmpProdMass - tmpProdMassHideZone;
                        product[prodText.text].tanks.push(tmpNum);
                    }
                }
            },this);

            renderSummary(product);

            function renderSummary(prod) {
                // console.log(prod);

                $(".scheme.summaryProd").html("").html(`<table width="100%" border="0" class="table table-condensed table-hover"></table>`).find("table").append(`
                    <thead>
                        <tr>
                            <td class="tab_prod" align="center">Продукт</td>
                            <td class="tab_mass" align="center">Общая масса</td>
                            <td class="tab_res" align="center">Резервуары</td>
                            <td class="tab_export" align="center">К отгрузке</td>
                        </tr>
                    </thead> 
                `);//чистим контайнер
                for(var key in prod){
                    // console.log("key:",key,"obj:",prod[key]);
                    $(".scheme.summaryProd").html();
                    $(".scheme.summaryProd table").append(`
                        <tr class="${prod[key].class}">
                            <td class="tab_prod">${key}</td>
                            <td class="tab_mass">${prod[key].summ.toFixed(1)} т.</td>
                            <td class="tab_res">${prod[key].tanks.join(", ")}</td>
                            <td class="tab_export">${prod[key].summexport.toFixed(1)} т.</td>
                        </tr>
                    `);
                }
            }
        }
    }
    tendsStart(data){
        var wrapperRenderArrows = this.renderArrows.bind(this);
        if(typeof data === "object"){
            data.map(function (elem,idx) {
                // console.log("TEnds Data:",data,"elem:",elem);
                //тут массив из 31 резервуара и одиночные замеры для каждого
                if(elem.level){
                    if(Number(elem.level) > -1 && elem.num){//если резервуар не в ремонте
                        //готовим AJAX
                        $.ajax({
                            url:"trendengine.php",
                            dataType:"json",
                            method:'GET',
                            data:{tends:true,coldstart:true,tanktends:elem.num},
                            success:function(data){
                                //сюда получаем 31 независимый запрос. из (60) элементов часового замера
                                let i = Number(elem.num);
                                data.map(function (el,elidx) {
                                    if(eval('Global.IntegratorForArrows'+i)){
                                        let filter = 3/60;
                                        //если есть объект интегратора для данного резервуара
                                        if(el.mass){//если есть уровень у выбранного резервуара
                                            var tmpmass = Number(el.mass);
                                            var result = eval('Global.IntegratorForArrows'+i+'.Integrity('+tmpmass+')');

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
                                                wrapperRenderArrows(i,res,result);
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
    asnLoading(){
        $.ajax({
            url:"gettank.php",
            dataType:"json",
            method:'GET',
            data:{asn2load:true},
            success:function(data){
                //сюда получаем массив из отгрузок ASN
                $(".asnLoad").html("").html(`<table border="0" class="table"></table>`).find("table").append(`
                    <thead>
                        <tr class="tab_asnHead">
                            <td align="center">Продукт</td>
                            <td align="center">Масса</td>
                        </tr>
                    </thead> 
                `);//чистим контайнер
                data.map(function (elem) {
                    var tmpValue = Number(elem.value.replace(",",".")).toFixed(3);
                    $(".asnLoad table").append(`
                         <tr>
                             <td class="tab_asnProduct">${elem.product}</td>
                             <td class="tab_asnValue"><i class="label-primary label asnlabel">${tmpValue}</i>  тонн</td>
                         </tr>
                     `);
                });

            },
            error:function(){
                console.log("error to load Tendentional ajax data from",elem.num);
            }
        });
    }
}