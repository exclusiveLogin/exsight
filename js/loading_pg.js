export default class Loading{
    constructor(DOMel,fancyElement){
        if(fancyElement){
            this.fancyElement = $("#"+fancyElement);
        }

        this.ProgressElem = new ProgressBar.Line('#'+DOMel, {
            color: '#f90',
            duration: 500,
            easing: 'easeInOut',
            strokeWidth:1,
            trailColor: '#333',
            from:{color:"#530"},
            to:{color:'#f90'},
            step:function(state,shape){
                shape.path.setAttribute("stroke",state.color);
            }
        });
    }
    setStep(percent,msg){
        if(Number(percent)){
            this.ProgressElem.animate(Number(percent)/100);
        }
        if(msg)this.fancyElement.find(".loadingMsg").text(msg);
    }
    hideLoading(){
        $.fancybox.close();
    }
    showLoading(){
        if(this.fancyElement){
            this.fancyElement.fancybox({
                modal:true
            }).click();
        }
    }
}