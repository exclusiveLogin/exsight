class porttrends{
    startNode() {
        this.led("ok");
        $('#btnporttrends').on("click",function () {
            let win = window.open("trends/#port","_blank");
            win.focus();
        });
    }
    stopNode() {

    }
}