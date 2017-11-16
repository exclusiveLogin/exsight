module.exports = class porttrends{
    startNode() {
        this.led("ok");
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