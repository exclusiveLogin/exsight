/**
 * Created by KotovVM on 28.03.2017.
 */
class port{
    startNode() {
        var autostart = this.showNode.bind(this);
        var resparkbodyPromise = fetch("nodes/templates/port.html").then(function (response) {
            return response.text();
        }).then(function (text) {
            $('#portview').html(text);
            autostart();
            //var wrapperStartOPC = this.startOPC.bind(this);
            //reloadProgressBar();
            //wrapperStartOPC();
        });
    }
    stopNode() {

    }
    showNode(){
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