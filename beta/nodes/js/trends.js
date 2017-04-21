class trends{
    startNode() {
		this.led("ok");
        $('#btntrends').on("click",function () {
            // alert("Модуль находится в разработке");
            let win = window.open("trends/","_blank");
            win.focus();
        });
    }
    stopNode() {

    }
}