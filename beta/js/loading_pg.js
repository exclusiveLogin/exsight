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
    setStep(percent){
        if(Number(percent)){
            this.ProgressElem.animate(Number(percent)/100);
        }
    }
    hideLoading(){
        setTimeout(function () {
            $.fancybox.close();
        },2000);
    }
    showLoading(){
        if(this.fancyElement){
            this.fancyElement.fancybox({
                modal:true
            }).click();
        }
    }
}