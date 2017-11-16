module.exports = class system{
    constructor(){
        this.showed = false;
        this.view = {};
    }
    startNode() {
        let wrapperStartOPC = this.startOPC.bind(this);

        let context = this;
        let autostart = this.showNode.bind(this);
        this.led("error");
        console.log("start node SYSTEM");
        let bodyPromise = fetch("nodes/templates/system.html").then(function (response) {
            return response.text();
        }).then(function (text) {
            context.view = $('#systemview');
            context.view.html(text);

            //создаем логеры
            context.visitLog = new Tbl2log("table.tbl_visits",["id","ip","rip","datetime","ver","build","os","device"]);
            context.uniqueLog = new Tbl2log("table.tbl_uniq",["id","ip","datetime","ver","build","os","device","btn"],"id");
            context.defferLog = new Tbl2log("table.tbl_deffered",["id","ip","datetime","ver","build","os","device","btn"],"id");

            context.fancyLog = new Tbl2log("table.tbl_fancy",["cnt","ip","rip"]);

            $(".system-about .fancy").fancybox();

            $(".system-about .header .fa-table").on("click", function () {
                if($(this).hasClass("table_btn_vd")){
                    context.fancyLog.clearLog();
                    context.lastVisitsD.forEach(
                        (el) => context.fancyLog.write2log(el)
                    );
                }
                if($(this).hasClass("table_btn_vw")){
                    context.fancyLog.clearLog();
                    context.lastVisitsW.forEach(
                        (el) => context.fancyLog.write2log(el)
                    );
                }
                if($(this).hasClass("table_btn_vm")){
                    context.fancyLog.clearLog();
                    context.lastVisitsM.forEach(
                        (el) => context.fancyLog.write2log(el)
                    );
                }
                if($(this).hasClass("table_btn_vy")){
                    context.fancyLog.clearLog();
                    context.lastVisitsY.forEach(
                        (el) => context.fancyLog.write2log(el)
                    );
                }
                $(".system-about .fancy").click();
            });

            $(".system-logs").on("click",".btn-refresh-ip",function () {
                let id = $(this).closest(".logdata").data("key");
                //console.log("id for refresh:",id);
                $.ajax({
                    url:"defferreloader.php?idset="+id,
                    method:'GET',
                    success:function(text){
                        //console.log("text:",text);
                        context.refresh();
                    },
                    error:function(err){
                        console.log("error set reload ip error:",err);
                        context.led("error");
                    }
                });
            });
            $(".system-logs").on("click",".btn-trash-ip",function () {
                let id = $(this).closest(".logdata").data("key");
                //console.log("id for trash:",id);
                $.ajax({
                    url:"defferreloader.php?iddel="+id,
                    method:'GET',
                    success:function(text){
                        //console.log("text:",text);
                        context.refresh();
                    },
                    error:function(err){
                        console.log("error set reload ip error:",err);
                        context.led("error");
                    }
                });
            });
            //старт обновления
            wrapperStartOPC();
            //autostart();
        });

    }
    stopNode() {

    }
    showNode(){
        //убираем все
        Global.nodes.map(function (elem) {
            if(elem.nodeObj){
                if(elem.nodeObj.hideNode){
                    elem.nodeObj.hideNode();
                }
            }
        });
        //показываем наш
        this.view.show();
        this.led("select");

        //ставим флаг
        this.showed = true;

        //принудительно рефрешим порт при открытии вкладки
        this.refresh();

        //rescale();

        function rescale() {
            //расчет размера блока
            let clH = document.documentElement.clientHeight;
            let headerH = $("#header")[0].offsetHeight;
            let footerH = $("#footer")[0].offsetHeight;
            //преобразование
            let H = clH - headerH - footerH;
            //$(".gascontainer").css({maxHeight:gasH});
            console.log("clientH:",clH," header:",headerH," footer:", footerH," system:",H);
        }

    }
    hideNode(){
        if(this.showed){
            this.view.hide();
            this.led("unselect");
            this.showed = false;
        }
    }
    startOPC(){
        let wrapperRefresh = this.refresh.bind(this);
        function start () {
            wrapperRefresh();

            if (this.OPCTimer)clearInterval(this.OPCTimer);
            this.OPCTimer=setInterval(wrapperRefresh,60000);
        }
        start.bind(this)();
    }
    stopOPC(){
        if (this.OPCTimer)clearInterval(this.OPCTimer);
    }
    refresh(){
        this.led("load");//сетим в loading
        let context = this;
        $.ajax({
            url:"getsystem.php?visits=1",
            dataType:"json",
            method:'GET',
            success:function(data){
                let tbl = "visits";
                check(data,tbl);
            },
            error:function(){
                console.log("error SYSTEM ajax data");
                context.led("error");
            }
        });
        $.ajax({
            url:"getsystem.php?uniqueip=1",
            dataType:"json",
            method:'GET',
            success:function(data){
                let tbl = "uniqueip";
                check(data,tbl);
            },
            error:function(){
                console.log("error SYSTEM ajax data");
                context.led("error");
            }
        });
        $.ajax({
            url:"getsystem.php?defferreload=1",
            dataType:"json",
            method:'GET',
            success:function(data){
                let tbl = "defferreload";
                check(data,tbl);
            },
            error:function(){
                console.log("error SYSTEM ajax data");
                context.led("error");
            }
        });
        $.ajax({
            url:"getsystem.php?status=1",
            dataType:"json",
            method:'GET',
            success:function(data){
                let tbl = "status";
                check(data,tbl);
            },
            error:function(){
                console.log("error SYSTEM ajax data");
                context.led("error");
            }
        });

        $.ajax({
            url:"getsystem.php?visits_d=1",
            dataType:"json",
            method:'GET',
            success:function(data){
                let tbl = "visits_d";
                check(data,tbl);
            },
            error:function(){
                console.log("error SYSTEM ajax data");
                context.led("error");
            }
        });

        $.ajax({
            url:"getsystem.php?visits_w=1",
            dataType:"json",
            method:'GET',
            success:function(data){
                let tbl = "visits_w";
                check(data,tbl);
            },
            error:function(){
                console.log("error SYSTEM ajax data");
                context.led("error");
            }
        });

        $.ajax({
            url:"getsystem.php?visits_m=1",
            dataType:"json",
            method:'GET',
            success:function(data){
                let tbl = "visits_m";
                check(data,tbl);
            },
            error:function(){
                console.log("error SYSTEM ajax data");
                context.led("error");
            }
        });

        $.ajax({
            url:"getsystem.php?visits_y=1",
            dataType:"json",
            method:'GET',
            success:function(data){
                let tbl = "visits_y";
                check(data,tbl);
            },
            error:function(){
                console.log("error SYSTEM ajax data");
                context.led("error");
            }
        });

        function check(data,tbl) {
            context.led("ok");//сетим в ок
            if(data){
                if(context.showed)render(data,tbl);
            }
        }

        function render(data,tbl){
            if(data && tbl){
                if(tbl == "visits"){
                    if(context.visitLog)context.visitLog.clearLog();
                    data.forEach(function (element) {
                        if(element.ua){
                            let browser = Global.detect.parse(element.ua);
                            element.device = browser.browser.name;
                            element.os = browser.os.name+"("+browser.device.type+")";
                        }

                        if(context.visitLog)context.visitLog.write2log(element);
                    });
                    $(".system-about .header .visits").text(data.length);
                }
                if(tbl == "uniqueip"){
                    if(context.uniqueLog)context.uniqueLog.clearLog();
                    data.forEach(function (element) {
                        if(element.ua){
                            let browser = Global.detect.parse(element.ua);
                            element.device = browser.browser.name;
                            element.os = browser.os.name+"("+browser.device.type+")";
                        }

                        element.btn = `<i class="fa fa-refresh btn-refresh-ip" aria-hidden="true"></i>`;

                        if(context.uniqueLog)context.uniqueLog.write2log(element);
                    });
                    $(".system-about .header .uniqueips").text(data.length);
                }
                if(tbl == "defferreload"){
                    if(context.defferLog)context.defferLog.clearLog();
                    data.forEach(function (element) {
                        if(element.ua){
                            let browser = Global.detect.parse(element.ua);
                            element.device = browser.browser.name;
                            element.os = browser.os.name+"("+browser.device.type+")";
                        }

                        element.btn = `<i class="fa fa-trash btn-trash-ip" aria-hidden="true"></i>`;
                        if(context.defferLog)context.defferLog.write2log(element);
                    });
                    $(".system-about .header .deffered").text(data.length);
                }
                if(tbl == "status"){
                    $(".system-about .status span.status").text(data[0].state);
                    $(".system-about .status span.sector").text(data[0].sector);
                    $(".system-about .status span.userLogin").text(Global.loggedAs);

                }
                if(tbl == "visits_d"){
                    let summ = 0;
                    for(let i in data){
                        summ += Number(data[i].cnt);
                    }
                    $(".system-about .header .visits_d").text(summ);
                    $(".system-about .header .visits_du").text(data.length);
                    context.lastVisitsD = data;
                }
                if(tbl == "visits_w"){
                    let summ = 0;
                    for(let i in data){
                        summ += Number(data[i].cnt);
                    }
                    $(".system-about .header .visits_w").text(summ);
                    $(".system-about .header .visits_wu").text(data.length);
                    context.lastVisitsW = data;
                }
                if(tbl == "visits_m"){
                    let summ = 0;
                    for(let i in data){
                        summ += Number(data[i].cnt);
                    }
                    $(".system-about .header .visits_m").text(summ);
                    $(".system-about .header .visits_mu").text(data.length);
                    context.lastVisitsM = data;
                }
                if(tbl == "visits_y"){
                    let summ = 0;
                    for(let i in data){
                        summ += Number(data[i].cnt);
                    }
                    $(".system-about .header .visits_y").text(summ);
                    $(".system-about .header .visits_yu").text(data.length);
                    context.lastVisitsY = data;
                }
            }
        }
    }
};