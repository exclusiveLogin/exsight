module.exports = class trends{
    constructor(){
        this.startedAndRefreshed = $.Deferred();
    }
    startNode() {
        this.led("ok");
        this.startedAndRefreshed.resolve();
    }
    stopNode() {

    }
    showNode(){
        let win = window.open("trends/#respark","_blank");
        win.focus();
    }
    hideNode(){

    }
}