class port{
    startNode() {
        var wrapperStartOPC = this.startOPC.bind(this);
        this.led("error");
        var autostart = this.showNode.bind(this);
        console.log("start node PORT");
        var resparkbodyPromise = fetch("nodes/templates/port.html").then(function (response) {
            return response.text();
        }).then(function (text) {
            //console.log("include asserts PORT");
            $('#portview').html(text);
            //console.log("after include asserts PORT");
            reloadProgressBarPort();

            $(".tank_pereliv").addClass("transparent");
            $(".tank_service").addClass("transparent");
            $(".tank_error").addClass("transparent").removeClass("label-danger").addClass("label-default");

            $(".pereliv,.errortank,.blink,.glyphicon-warning-sign,.glyphicon-remove-circle").addClass("blinkClass");

            //autostart();
            //console.log("this:",this);

            wrapperStartOPC();
        });
    }
    stopNode() {

    }
    showNode(){
        //console.log("show node PORT");
        Global.nodes.map(function (elem) {
            if(elem.nodeObj){
                if(elem.nodeObj.hideNode){
                    elem.nodeObj.hideNode();
                }
            }
        });
        $("#portview").show();
        this.showed = true;
        this.led("select");

        //принудительно рефрешим порт при открытии вкладки
        this.refreshPort();
    }
    hideNode(){
        $("#portview").hide();
        this.led("unselect");
        this.showed = false;
    }
    startOPC(){
        let wrapperRefreshPort = this.refreshPort.bind(this);
        function start () {
            wrapperRefreshPort();

            if (this.OPCTimer)clearInterval(this.OPCTimer);
            this.OPCTimer=setInterval(wrapperRefreshPort,60000);
        }
        start.bind(this)();
        //Utility.nativeTooltipHandler();
    }
    stopOPC(){
        if (this.OPCTimer)clearInterval(this.OPCTimer);
    }
    refreshPort(){
        this.led("load");//сетим в ОК ..если потом что то, то пересетим
        let context = this;
        $.ajax({
            url:"getport.php",
            dataType:"json",
            method:'GET',
            data:{tankselect:true},
            success:function(data){
                let label = "tankselect";
                //console.log("TANKSELECT:",data);
                checkPort(data,label);
            },
            error:function(){
                console.log("error TANKSELECT ajax data");
                context.led("error");
            }
        });
        $.ajax({
            url:"getport.php",
            dataType:"json",
            method:'GET',
            data:{valve:true},
            success:function(data){
                let label = "valve";
                //console.log("VALVE:",data);
                checkPort(data,label);
            },
            error:function(){
                console.log("error VALVE ajax data");
                context.led("error");
            }
        });
        $.ajax({
            url:"getport.php",
            dataType:"json",
            method:'GET',
            data:{plotnomer:true},
            success:function(data){
                let label = "plotnomer";
                //console.log("PLOTNOMER:",data);
                checkPort(data,label);
            },
            error:function(){
                console.log("error PLOTNOMER ajax data");
                context.led("error");
            }
        });
        $.ajax({
            url:"getport.php",
            dataType:"json",
            method:'GET',
            data:{ecu:true},
            success:function(data){
                let label = "ecu";
                //console.log("ECU:",data);
                checkPort(data,label);
            },
            error:function(){
                console.log("error ECU ajax data");
                context.led("error");
            }
        });

        function checkPort(data,label) {
            context.led("ok");
            //console.log("checkport this:",this,"context:",context);
            if(data){
                //в порту кнотролируем
                //-устаревание информации
                //-налив

                //-----WARNING SECTION------
                if(label == "plotnomer"){
                    for(var elem in data){
                        if(data[elem].num == "1"){
                            if(Number(data[elem].f1)>0 || Number(data[elem].f2)>0)context.led("warning");
                        }
                        if(data[elem].num == "2"){
                            if(Number(data[elem].f1)>0 || Number(data[elem].f2)>0)context.led("warning");
                        }
                    }
                }
                //-----ERROR SECTION--------
                if(label == "tankselect"){
                    if((data.tankdt!="0" && data.tankoil!="0" && data.tanksmt!="0")&&(data.tankdt && data.tankoil && data.tanksmt)){
                    }else {
                        context.led("error");
                    }
                }
                if(label == "valve"){
                    if(Utility.checkExpired(data.datetime))context.led("error");
                }
                if(label == "plotnomer"){
                    for(var elem in data){
                        if(data[elem].num == "1"){
                            if(Utility.checkExpired(data[elem].datetime))context.led("error");
                        }
                        if(data[elem].num == "2"){
                            if(Utility.checkExpired(data[elem].datetime))context.led("error");
                        }
                    }
                }
                if(context.showed)renderPort(data,label);
            }
            data = null;
        }

        function renderPort(data,label){
            if(data){
                if(label == "tankselect"){
                    if((data.tankdt!="0" && data.tankoil!="0" && data.tanksmt!="0")&&(data.tankdt && data.tankoil && data.tanksmt)){
                        $("#tankdt .tank_title_port").text(data.tankdt);
                        $("#tankoil .tank_title_port").text(data.tankoil);
                        $("#tanksmt .tank_title_port").text(data.tanksmt);
                        let renderSelectedTanks = function () {
                            let lastData = {};
                            //берем последние данные с парка
                            if(getNode(respark)>(-1)){
                                lastData = Global.nodes[getNode(respark)].nodeObj.lastAjaxData;
                                let rezpark  = Global.nodes[getNode(respark)].nodeObj;
                                //рендерим резервуары в порту
                                //хранит объект с данными для выбранного резервуара
                                let tmpOil = {};
                                let tmpDt = {};
                                let tmpSmt = {};

                                let tmpProdSmt = $("#tanksmt .prod_cont .tank_prod");
                                let tmpProdDt = $("#tankdt .prod_cont .tank_prod");
                                let tmpProdOil = $("#tankoil .prod_cont .tank_prod");

                                let tmpPerelivSmt = $("#tanksmt .pereliv");
                                let tmpPerelivDt = $("#tankdt .pereliv");
                                let tmpPerelivOil = $("#tankoil .pereliv");

                                let tmpErrorSmt = $("#tanksmt .errortank");
                                let tmpErrorDt = $("#tankdt .errortank");
                                let tmpErrorOil = $("#tankoil .errortank");

                                let tmpServiceSmt = $("#tanksmt .service");
                                let tmpServiceDt = $("#tankdt .service");
                                let tmpServiceOil = $("#tankoil .service");

                                lastData.map(function (tmpElement) {
                                    if(tmpElement.num == data.tankdt)tmpDt = tmpElement;
                                    if(tmpElement.num == data.tankoil)tmpOil = tmpElement;
                                    if(tmpElement.num == data.tanksmt)tmpSmt = tmpElement;
                                },this);
                                //-----------------------Render level and product name--------------------------------
                                $("#portview #tankdt .progress_tank_val_real").text(Number(tmpDt.level).toFixed(0));
                                $("#portview #tankoil .progress_tank_val_real").text(Number(tmpOil.level).toFixed(0));
                                $("#portview #tanksmt .progress_tank_val_real").text(Number(tmpSmt.level).toFixed(0));

                                //для Oil
                                if(Number(tmpOil.product)){
                                    let product = rezpark.getProduct(Number(tmpOil.product));
                                    tmpProdOil.text(product.text);
                                    tmpProdOil.removeClass("disel diseleuro a76 a80 a92 a95 a98 smt");//подготовка
                                    tmpProdOil.removeClass("label-danger label-warning");
                                    tmpProdOil.addClass(product.class);
                                }else {
                                    tmpProdOil.text(rezpark.getProduct(Number(tmpOil.product)).text);
                                    tmpProdOil.removeClass("label-success label-warning").addClass("label-danger");
                                }
                                //для DT
                                if(Number(tmpDt.product)){
                                    let product = rezpark.getProduct(Number(tmpDt.product));
                                    tmpProdDt.text(product.text);
                                    tmpProdDt.removeClass("disel diseleuro a76 a80 a92 a95 a98 smt");//подготовка
                                    tmpProdDt.removeClass("label-danger label-warning");
                                    tmpProdDt.addClass(product.class);
                                }else {
                                    tmpProdDt.text(rezpark.getProduct(Number(tmpDt.product)).text);
                                    tmpProdDt.removeClass("label-success label-warning").addClass("label-danger");
                                }
                                //для SMT
                                if(Number(tmpSmt.product)){
                                    let product = rezpark.getProduct(Number(tmpSmt.product));
                                    tmpProdSmt.text(product.text);
                                    tmpProdSmt.removeClass("disel diseleuro a76 a80 a92 a95 a98 smt");//подготовка
                                    tmpProdSmt.removeClass("label-danger label-warning");
                                    tmpProdSmt.addClass(product.class);
                                }else {
                                    tmpProdSmt.text(rezpark.getProduct(Number(tmpSmt.product)).text);
                                    tmpProdSmt.removeClass("label-success label-warning").addClass("label-danger");
                                }
                                //----------------------------Render pereliv-----------------------
                                //для Oil
                                if(Number(tmpOil.pereliv)){
                                    tmpPerelivOil.removeClass("transparent");
                                }else {
                                    tmpPerelivOil.addClass("transparent");
                                }
                                //для Smt
                                if(Number(tmpSmt.pereliv)){
                                    tmpPerelivSmt.removeClass("transparent");
                                }else {
                                    tmpPerelivSmt.addClass("transparent");
                                }
                                //для Dt
                                if(Number(tmpDt.pereliv)){
                                    tmpPerelivDt.removeClass("transparent");
                                }else {
                                    tmpPerelivDt.addClass("transparent");
                                }

                                //-----------------------Render errors-----------------------------
                                //Oil
                                if(tmpOil.level == "-1000"){//если уровнемер не возвращает данных уровня
                                    if(!tmpOil.service){// и нет "в ремонте"
                                        tmpErrorOil.removeClass("transparent");
                                        $("#portview #tankoil").css("opacity",0.6);
                                        $("#portview #tankoil").find(".progress_tank").addClass("transparentStatic");
                                    }
                                }else {
                                    $("#portview #tankoil").css("opacity",1);
                                    $("#portview #tankoil").find(".progress_tank").removeClass("transparentStatic");
                                }
                                //dt
                                if(tmpDt.level == "-1000"){//если уровнемер не возвращает данных уровня
                                    if(!tmpDt.service){// и нет "в ремонте"
                                        tmpErrorDt.removeClass("transparent");
                                        $("#portview #tankdt").css("opacity",0.6);
                                        $("#portview #tankdt").find(".progress_tank").addClass("transparentStatic");
                                    }
                                }else {
                                    $("#portview #tankdt").css("opacity",1);
                                    $("#portview #tankdt").find(".progress_tank").removeClass("transparentStatic");
                                }
                                //Smt
                                if(tmpSmt.level == "-1000"){//если уровнемер не возвращает данных уровня
                                    if(!tmpSmt.service){// и нет "в ремонте"
                                        tmpErrorSmt.removeClass("transparent");
                                        $("#portview #tanksmt").css("opacity",0.6);
                                        $("#portview #tanksmt").find(".progress_tank").addClass("transparentStatic");
                                    }
                                }else {
                                    $("#portview #tanksmt").css("opacity",1);
                                    $("#portview #tanksmt").find(".progress_tank").removeClass("transparentStatic");
                                }
                                //-----------------------Render service-----------------------------
                                //Если резервуар в ремонте
                                //Oil
                                if(tmpOil.service){
                                    tmpServiceOil.removeClass("transparent");
                                    tmpErrorOil.addClass("transparent");
                                    $("#portview #tankoil").find(".progress_tank").addClass("transparentStatic");
                                }else {
                                    tmpServiceOil.addClass("transparent");
                                }
                                //smt
                                if(tmpSmt.service){
                                    tmpServiceSmt.removeClass("transparent");
                                    tmpErrorSmt.addClass("transparent");
                                    $("#portview #tanksmt").find(".progress_tank").addClass("transparentStatic");
                                }else {
                                    tmpServiceSmt.addClass("transparent");
                                }
                                //dt
                                if(tmpDt.service){
                                    tmpServiceDt.removeClass("transparent");
                                    tmpErrorDt.addClass("transparent");
                                    $("#portview #tankdt").find(".progress_tank").addClass("transparentStatic");
                                }else {
                                    tmpServiceDt.addClass("transparent");
                                }
                                //--------------------------------------------------------------------------------
                                //Render progressbar

                                let tmpPercentOil = rezpark.lvl2perc(Number(tmpOil.level),Number(tmpOil.max_level)).toFixed(0);
                                let tmpPercentDt = rezpark.lvl2perc(Number(tmpDt.level),Number(tmpDt.max_level)).toFixed(0);
                                let tmpPercentSmt = rezpark.lvl2perc(Number(tmpSmt.level),Number(tmpSmt.max_level)).toFixed(0);

                                let pr_opt = {
                                    from:{
                                        color:"#000"
                                    },
                                    to:{
                                        color:"#000"
                                    }
                                };

                                pr_opt.from.color = Global.pr_tank_port[0].path.getAttribute("stroke");
                                pr_opt.to.color = val2Color(tmpPercentOil);
                                //console.log("pr_opt1",pr_opt," tmpPercentOil:",tmpPercentOil);
                                Global.pr_tank_port[0].animate(tmpPercentOil/100,pr_opt);

                                pr_opt.from.color = Global.pr_tank_port[1].path.getAttribute("stroke");
                                pr_opt.to.color = val2Color(tmpPercentDt);
                                //console.log("pr_opt2",pr_opt," tmpPercentDT:",tmpPercentDt);
                                Global.pr_tank_port[1].animate(tmpPercentDt/100,pr_opt);

                                pr_opt.from.color = Global.pr_tank_port[2].path.getAttribute("stroke");
                                pr_opt.to.color = val2Color(tmpPercentSmt);
                                //console.log("pr_opt3",pr_opt," tmpPercentSMT:",tmpPercentSmt);
                                Global.pr_tank_port[2].animate(tmpPercentSmt/100,pr_opt);

                                function val2Color(tmppercent) {
                                    let color = "#000";

                                    if(tmppercent<10){
                                        color = "#08f";
                                    }else if(tmppercent>70 && tmppercent<90){
                                        color = "rgb(200, 100, 0)";
                                    }else if(tmppercent>90){
                                        color="#a00";
                                    }else{
                                        color="#090";
                                    }

                                    return color;
                                }
                            }
                        };
                        let renderPortWind = function(){
                            if(Global.meteo){
                                if(Global.meteo.wind_direction){
                                    let winddirection = Number(Global.meteo.wind_direction);
                                    $(".port_wind_arrow").css({"transform":"rotateZ("+winddirection+"deg)"});
                                    $(".port_winddirection_val").html(winddirection+"&deg;");
                                }
                            }
                        };
                        if(Global.nodes[getNode("respark")].nodeObj.startedAndRefreshed.state() != "resolved"){
                            Global.nodes[getNode("respark")].nodeObj.startedAndRefreshed.then(
                                function () {
                                    renderSelectedTanks();
                                    renderPortWind();
                                }
                            );
                        }else {
                            renderSelectedTanks();
                            renderPortWind();
                        }
                    }else {
                        $("#tankdt .tank_title_port").text("ошибка");
                        $("#tankoil .tank_title_port").text("ошибка");
                        $("#tanksmt .tank_title_port").text("ошибка");

                        $("#tankdt .progress_tank_val_real").text("ошибка");
                        $("#tankoil .progress_tank_val_real").text("ошибка");
                        $("#tanksmt .progress_tank_val_real").text("ошибка");

                        $("#tankoil .prod_cont").html($(".tank[data-num="+(1)+"]").find(".prod_cont").html());
                        $("#tankdt .prod_cont").html($(".tank[data-num="+(1)+"]").find(".prod_cont").html());
                        $("#tanksmt .prod_cont").html($(".tank[data-num="+(1)+"]").find(".prod_cont").html());
                    }
                }
                if(label == "valve"){
                    if(data.valve_smt1 == "0"){
                        $("#zadvsmt1").find("path").css({"fill":"greenyellow"});
                    }else{
                        $("#zadvsmt1").find("path").css({"fill":"red"});
                    }
                    if(data.valve_smt2 == "0"){
                        $("#zadvsmt2").find("path").css({"fill":"greenyellow"});
                    }else{
                        $("#zadvsmt2").find("path").css({"fill":"red"});
                    }if(data.valve_oil1 == "0"){
                        $("#zadvoil1").find("path").css({"fill":"greenyellow"});
                    }else{
                        $("#zadvoil1").find("path").css({"fill":"red"});
                    }if(data.valve_oil2 == "0"){
                        $("#zadvoil2").find("path").css({"fill":"greenyellow"});
                    }else{
                        $("#zadvoil2").find("path").css({"fill":"red"});
                    }if(data.valve_dt1 == "0"){
                        $("#zadvdt1").find("path").css({"fill":"greenyellow"});
                    }else{
                        $("#zadvdt1").find("path").css({"fill":"red"});
                    }if(data.valve_dt2 == "0"){
                        $("#zadvdt2").find("path").css({"fill":"greenyellow"});
                    }else{
                        $("#zadvdt2").find("path").css({"fill":"red"});
                    }
                    //timestamp
                    $(".timestamp_port_valve").attr("data-tooltip",data.fixtime);
                    $(".timestamp_port_valve").removeClass("label-success label-danger");
                    if(Utility.checkExpired(data.datetime)){
                        $(".timestamp_port_valve").addClass("label-danger");
                        context.led("error");
                    }else {
                        $(".timestamp_port_valve").addClass("label-success");
                    }
                }
                if(label == "plotnomer"){
                    $(".portstatus").removeClass("off naliv reconstuction");
                    $(".portstatus").text("Простой");
                    for(var elem in data){
                        if(data[elem].num == "1"){

                            if(Number(data[elem].f1)>0 || Number(data[elem].f2)>0){
                                $(".portstatus").addClass("naliv");
                                $(".portstatus").text("Идет налив");
                                context.led("warning");
                            }

                            $(".table_port .port_plot_t_dt").text(data[elem].t);
                            $(".table_port .port_plot_p_dt").text(data[elem].p);
                            $(".table_port .port_plot_p1_dt").text(data[elem].p1);
                            $(".table_port .port_plot_t1_dt").text(data[elem].t1);
                            $(".table_port .port_plot_f1_dt").text(data[elem].f1);
                            $(".table_port .port_plot_m1_dt").text(data[elem].m1);
                            $(".table_port .port_plot_ms1_dt").text(data[elem].ms1);
                            $(".table_port .port_plot_p2_dt").text(data[elem].p2);
                            $(".table_port .port_plot_t2_dt").text(data[elem].t2);
                            $(".table_port .port_plot_f2_dt").text(data[elem].f2);
                            $(".table_port .port_plot_m2_dt").text(data[elem].m2);
                            $(".table_port .port_plot_ms2_dt").text(data[elem].ms2);

                            $(".table_port .timestamp_port_dt").removeClass("label-success label-danger");
                            if(Utility.checkExpired(data[elem].datetime)){
                                $(".table_port .timestamp_port_dt").addClass("label-danger");
                                context.led("error");
                            }else {
                                $(".table_port .timestamp_port_dt").addClass("label-success");
                            }
                            $(".table_port .timestamp_port_dt").attr("data-tooltip",data[elem].fixtime);

                        }
                        if(data[elem].num == "2"){

                            if(Number(data[elem].f1)>0 || Number(data[elem].f2)>0){
                                $(".portstatus").addClass("naliv");
                                $(".portstatus").text("Идет налив");
                                context.led("warning");
                            }

                            $(".table_port .port_plot_t_smt").text(data[elem].t);
                            $(".table_port .port_plot_p_smt").text(data[elem].p);
                            $(".table_port .port_plot_p1_smt").text(data[elem].p1);
                            $(".table_port .port_plot_t1_smt").text(data[elem].t1);
                            $(".table_port .port_plot_f1_smt").text(data[elem].f1);
                            $(".table_port .port_plot_m1_smt").text(data[elem].m1);
                            $(".table_port .port_plot_ms1_smt").text(data[elem].ms1);
                            $(".table_port .port_plot_p2_smt").text(data[elem].p2);
                            $(".table_port .port_plot_t2_smt").text(data[elem].t2);
                            $(".table_port .port_plot_f2_smt").text(data[elem].f2);
                            $(".table_port .port_plot_m2_smt").text(data[elem].m2);
                            $(".table_port .port_plot_ms2_smt").text(data[elem].ms2);

                            $(".table_port .timestamp_port_smt").removeClass("label-success label-danger");
                            if(Utility.checkExpired(data[elem].datetime)){
                                $(".table_port .timestamp_port_smt").addClass("label-danger");
                                context.led("error");
                            }else {
                                $(".table_port .timestamp_port_smt").addClass("label-success");
                            }
                            $(".table_port .timestamp_port_smt").attr("data-tooltip",data[elem].fixtime);
                        }
                    }
                }
                if(label == "ecu"){
                    for(var elem in data){
                        if(data[elem].num == "1") {
                            let pr_opt = {};
                            let percent = disctreetToFloat(data[elem].level1,data[elem].level2,data[elem].level3,
                                data[elem].level4,data[elem].level5,data[elem].level6);
                            if(percent>0.9){
                                pr_opt={
                                    from:{color:Global.pr_tank_port[3].path.getAttribute("stroke")},
                                    to:{color:"#f00"}
                                };
                            }else if(percent>0.79){
                                pr_opt={
                                    from:{color:Global.pr_tank_port[3].path.getAttribute("stroke")},
                                    to:{color:"#ff0"}
                                };
                            }else {
                                pr_opt={
                                    from:{color:Global.pr_tank_port[3].path.getAttribute("stroke")},
                                    to:{color:"#090"}
                                };
                            }

                            if (percent != -1){
                                Global.pr_tank_port[3].animate(percent,pr_opt);
                                //timestamp
                                $(".timestamp_port_ecu1").attr("data-tooltip",data[elem].fixtime);
                                $(".timestamp_port_ecu1").removeClass("label-success label-danger");
                                if(Utility.checkExpired(data[elem].datetime)){
                                    $(".timestamp_port_ecu1").addClass("label-danger");
                                    context.led("error");
                                }else {
                                    $(".timestamp_port_ecu1").addClass("label-success");
                                }
                            }
                        }
                        if(data[elem].num == "2"){
                            let pr_opt = {};
                            let percent = disctreetToFloat(data[elem].level1,data[elem].level2,data[elem].level3,
                                data[elem].level4,data[elem].level5,data[elem].level6);
                            if(percent>0.9){
                                pr_opt={
                                    from:{color:Global.pr_tank_port[4].path.getAttribute("stroke")},
                                    to:{color:"#f00"}
                                };
                            }else if(percent>0.79){
                                pr_opt={
                                    from:{color:Global.pr_tank_port[4].path.getAttribute("stroke")},
                                    to:{color:"#ff0"}
                                };
                            }else {
                                pr_opt={
                                    from:{color:Global.pr_tank_port[4].path.getAttribute("stroke")},
                                    to:{color:"#090"}
                                };
                            }
                            if (percent != -1){
                                Global.pr_tank_port[4].animate(percent,pr_opt);
                                //timestamp
                                $(".timestamp_port_ecu2").attr("data-tooltip",data[elem].fixtime);
                                $(".timestamp_port_ecu2").removeClass("label-success label-danger");
                                if(Utility.checkExpired(data[elem].datetime)){
                                    $(".timestamp_port_ecu2").addClass("label-danger");
                                    context.led("error");
                                }else {
                                    $(".timestamp_port_ecu2").addClass("label-success");
                                }
                            }
                        }
                    }
                    function disctreetToFloat(l1,l2,l3,l4,l5,l6) {
                        let percent = -1;
                        if(l1=="1" && l2=="1" && l3=="1" && l4=="1" && l5=="1" && l6=="1"){
                            percent = 1;
                        }
                        if(l1=="0" && l2=="1" && l3=="1" && l4=="1" && l5=="1" && l6=="1"){
                            percent = 0.8;
                        }
                        if(l1=="0" && l2=="0" && l3=="1" && l4=="1" && l5=="1" && l6=="1"){
                            percent = 0.64;
                        }
                        if(l1=="0" && l2=="0" && l3=="0" && l4=="1" && l5=="1" && l6=="1"){
                            percent = 0.48;
                        }
                        if(l1=="0" && l2=="0" && l3=="0" && l4=="0" && l5=="1" && l6=="1"){
                            percent = 0.32;
                        }
                        if(l1=="0" && l2=="0" && l3=="0" && l4=="0" && l5=="0" && l6=="1"){
                            percent = 0.16;
                        }
                        if(l1=="0" && l2=="0" && l3=="0" && l4=="0" && l5=="0" && l6=="0"){
                            percent = 0;
                        }
                        return percent;
                    }
                }
                //window.Utility.nativeTooltipHandler();
            }
            data = null;
        }
    }
}