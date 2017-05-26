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

            autostart();
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
        this.led("select");
    }
    hideNode(){
        $("#portview").hide();
        this.led("unselect");
    }
    startOPC(){
        var wrapperRefreshPort = this.refreshPort.bind(this);
        let start = function () {
            wrapperRefreshPort();

            if (Global.refreshPortTimer)clearInterval(Global.refreshParkTimer);
            Global.refreshPortTimer=setInterval(wrapperRefreshPort,60000);
        };
        start();
        Utility.nativeTooltipHandler();
    }
    checkExpired(datetime){
        let result = true;//по умолчанию дата старая
        //--------------
        var xtime = new Date(Date.parse(datetime));
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
        var compare_t = now-utctime;
        //console.log("now:"+now+" utc:"+utctime+" compare:"+compare_t);
        if(compare_t > 3*60*1000){
            result = true;
            //console.log("Expired");
        }else {
            result = false;
            //console.log("Actual");
        }
        //--------------
        return result;
    }
    refreshPort(){
        this.led("ok");//сетим в ОК ..если потом что то, то пересетим
        let context = this;
        $.ajax({
            url:"getport.php",
            dataType:"json",
            method:'GET',
            data:{tankselect:true},
            success:function(data){
                let label = "tankselect";
                //console.log("TANKSELECT:",data);
                renderPort(data,label);
            },
            error:function(){
                console.log("error TANKSELECT ajax data");
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
                renderPort(data,label);
            },
            error:function(){
                console.log("error VALVE ajax data");
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
                renderPort(data,label);
            },
            error:function(){
                console.log("error PLOTNOMER ajax data");
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
                renderPort(data,label);
            },
            error:function(){
                console.log("error ECU ajax data");
            }
        });

        function renderPort(data,label){
            if(data){
                if(label == "tankselect"){
                    if((data.tankdt!="0" && data.tankoil!="0" && data.tanksmt!="0")&&(data.tankdt && data.tankoil && data.tanksmt)){
                        $("#tankdt .tank_title_port").text(data.tankdt);
                        $("#tankoil .tank_title_port").text(data.tankoil);
                        $("#tanksmt .tank_title_port").text(data.tanksmt);
                        let renderSelectedTanks = function () {
                            var tmpRealOil = $("#minview .tank[data-num="+(data.tankoil)+"]")
                                .find(".progress_tank_val_real").text();
                            var tmpRealDt = $("#minview .tank[data-num="+(data.tankdt)+"]")
                                .find(".progress_tank_val_real").text();
                            var tmpRealSmt = $("#minview .tank[data-num="+(data.tanksmt)+"]")
                                .find(".progress_tank_val_real").text();

                            $("#tankdt .progress_tank_val_real").text(tmpRealDt);
                            $("#tankoil .progress_tank_val_real").text(tmpRealOil);
                            $("#tanksmt .progress_tank_val_real").text(tmpRealSmt);

                            $("#tankoil .prod_cont").html($(".tank[data-num="+(data.tankoil)+"]").find(".prod_cont").html());
                            $("#tankdt .prod_cont").html($(".tank[data-num="+(data.tankdt)+"]").find(".prod_cont").html());
                            $("#tanksmt .prod_cont").html($(".tank[data-num="+(data.tanksmt)+"]").find(".prod_cont").html());

                            $("#tankoil .pereliv").html($(".tank[data-num="+(data.tankoil)+"]").find(".pereliv").html());
                            $("#tankdt .pereliv").html($(".tank[data-num="+(data.tankdt)+"]").find(".pereliv").html());
                            $("#tanksmt .pereliv").html($(".tank[data-num="+(data.tanksmt)+"]").find(".pereliv").html());

                            $("#tankoil .errortank").html($(".tank[data-num="+(data.tankoil)+"]").find(".errortank").html());
                            $("#tankdt .errortank").html($(".tank[data-num="+(data.tankdt)+"]").find(".errortank").html());
                            $("#tanksmt .errortank").html($(".tank[data-num="+(data.tanksmt)+"]").find(".errortank").html());

                            $("#tankoil .service").html($(".tank[data-num="+(data.tankoil)+"]").find(".service").html());
                            $("#tankdt .service").html($(".tank[data-num="+(data.tankdt)+"]").find(".service").html());
                            $("#tanksmt .service").html($(".tank[data-num="+(data.tanksmt)+"]").find(".service").html());

                            setTimeout(function () {
                                var pr_color_oil = {
                                    from:{color:Global.pr_tank_port[0].path.getAttribute("stroke")},
                                    to:{color:Global.pr_tank[data.tankoil].path.getAttribute("stroke")}
                                };
                                var pr_color_dt = {
                                    from:{color:Global.pr_tank_port[1].path.getAttribute("stroke")},
                                    to:{color:Global.pr_tank[data.tankdt].path.getAttribute("stroke")}
                                };
                                var pr_color_smt = {
                                    from:{color:Global.pr_tank_port[2].path.getAttribute("stroke")},
                                    to:{color:Global.pr_tank[data.tanksmt].path.getAttribute("stroke")}
                                };
                                var pr_val_oil = Global.pr_tank[data.tankoil].value();
                                var pr_val_dt = Global.pr_tank[data.tankdt].value();
                                var pr_val_smt = Global.pr_tank[data.tanksmt].value();
                                Global.pr_tank_port[0].animate(pr_val_oil,pr_color_oil);
                                Global.pr_tank_port[1].animate(pr_val_dt,pr_color_dt);
                                Global.pr_tank_port[2].animate(pr_val_smt,pr_color_smt);
                                // console.log("rendering...oil:",pr_val_oil,"dt:",pr_val_dt,"smt:",pr_val_smt);
                                // console.log("color oil:",pr_color_oil,"dt:",pr_color_dt,"smt:",pr_color_smt);
                            },Global.pr_tank[1]._opts.duration);
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

                        // $("#tankoil .pereliv").text("ошибка");
                        // $("#tankdt .pereliv").text("ошибка");
                        // $("#tanksmt .pereliv").text("ошибка");

                        // $("#tankoil .errortank").text("ошибка");
                        // $("#tankdt .errortank").text("ошибка");
                        // $("#tanksmt .errortank").text("ошибка");

                        // $("#tankoil .service").text("ошибка");
                        // $("#tankdt .service").text("ошибка");
                        // $("#tanksmt .service").text("ошибка");
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
                    if(context.checkExpired(data.datetime)){
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
                            if(context.checkExpired(data[elem].datetime)){
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
                            if(context.checkExpired(data[elem].datetime)){
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
                                if(context.checkExpired(data[elem].datetime)){
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
                                if(context.checkExpired(data[elem].datetime)){
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
                window.Utility.nativeTooltipHandler();
            }
        }
    }
}