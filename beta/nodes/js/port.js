class port{
    startNode() {
        this.led("error");
        var autostart = this.showNode.bind(this);
        //console.log("start node PORT");
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
            //var wrapperStartOPC = this.startOPC.bind(this);
            //reloadProgressBar();
            //wrapperStartOPC();
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
}