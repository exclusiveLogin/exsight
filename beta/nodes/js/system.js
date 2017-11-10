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
            console.log("templ:",text, " view:",context.view);
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
        /*$.ajax({
            url:"",
            dataType:"json",
            method:'GET',
            success:function(data){
                context.lastAjaxData = data;
                check(data);
            },
            error:function(){
                console.log("error UPES park ajax data");
                context.led("error");
            }
        });*/

        function check(data) {
            if(data){
                if(context.showed)render(data);
            }
        }

        function render(data){
            this.led("ok");//сетим в ок
            if(data){

            }
        }
    }
}