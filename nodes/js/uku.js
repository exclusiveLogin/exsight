module.exports = class uku{
    constructor(){
        this.startedAndRefreshed = $.Deferred();
    }
    startNode() {
        this.led("ok");
        this.startedAndRefreshed.resolve();
    }
    stopNode() {

    }
}