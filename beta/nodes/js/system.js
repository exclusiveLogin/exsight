class system{
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
            context.visitLog = new Tbl2log("table.tbl_visits",["id","ip","rip","datetime","ver","build"]);
            context.uniqueLog = new Tbl2log("table.tbl_uniq",["id","ip","datetime","ver","build"]);
            context.defferLog = new Tbl2log("table.tbl_deffered",["id","ip","rip","datetime","ver","build"]);

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

        rescale();

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
        this.view.hide();
        this.led("unselect");
        this.showed = false;
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

        function check(data,tbl) {
            if(data){
                if(context.showed)render(data,tbl);
            }
        }

        function render(data,tbl){
            context.led("ok");//сетим в ок
            if(data && tbl){
                if(tbl == "visits"){
                    if(context.visitLog)context.visitLog.clearLog();
                    data.forEach(function (element) {
                        if(context.visitLog)context.visitLog.write2log(element);
                    });
                }
                if(tbl == "uniqueip"){
                    if(context.uniqueLog)context.uniqueLog.clearLog();
                    data.forEach(function (element) {
                        if(context.uniqueLog)context.uniqueLog.write2log(element);
                    });
                }
                if(tbl == "defferreload"){
                    if(context.defferLog)context.defferLog.clearLog();
                    data.forEach(function (element) {
                        if(context.defferLog)context.defferLog.write2log(element);
                    });
                }
                if(tbl == "status"){
                    $(".system-about .status span.status").text(data[0].state);
                    $(".system-about .status span.sector").text(data[0].sector);
                }
            }
        }
    }
}