class gas{
    constructor(){
        this.Gastrend = {}
    }
    startNode() {
        /*$('#btngas').on("click",function () {
            alert("Модуль находится в разработке");
            // let win = window.open("trends/","_blank");
            // win.focus();
        });*/
        //var wrapperStartOPC = this.startOPC.bind(this);
        var autostart = this.showNode.bind(this);
        this.led("error");
        //var autostart = this.showNode.bind(this);
        console.log("start node GAS");
        var bodyPromise = fetch("nodes/templates/gas.html").then(function (response) {
            return response.text();
        }).then(function (text) {
            $('#gasview').html(text);
            autostart();
            //wrapperStartOPC();
        });
    }
    stopNode() {

    }
    showNode(){
        //console.log("show node GAS");
        Global.nodes.map(function (elem) {
            if(elem.nodeObj){
                if(elem.nodeObj.hideNode){
                    elem.nodeObj.hideNode();
                }
            }
        });
        $("#gasview").show();
        this.led("select");
        //расчет размера блока газов
        let clH = document.documentElement.clientHeight;
        let elemOffset = $(".gascontainer").offset().top;
        //преобразование
        let gasH = clH-elemOffset;
        $(".gascontainer").css({maxHeight:gasH});
    }
    hideNode(){
        $("#gasview").hide();
        this.led("unselect");
    }
}