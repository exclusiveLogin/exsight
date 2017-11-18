module.exports = class porttrends{
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
        let win = window.open("trends/#port","_blank");
        win.focus();
    }
    hideNode(){

    }
};