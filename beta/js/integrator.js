/**
 * Created by SavinSV on 15.12.16.
 */
function Integrator(){
    this.init = true;
    this.lastPoint = 0;
    this.filtered = true;
    this.integrityOnly = false;
    this.prefilterPoints = 1;
    this.postfilterPoints = 1;
    this.current = 0;
    this.flowControl = true;


    this.Buffer = [0,0];
    this.relBuffer = [];

    this.setFilter = function(pre, post){
        this.Buffer = [];
        //----------Post points------------
        for(var el=0; el<post; el++){
            this.Buffer.push(0);
        }
        //-----------Pre points------------
        for(var el=0; el<pre; el++){
            this.Buffer.push(0);
        }

        this.prefilterPoints = pre;
        this.postfilterPoints = post;

        if(pre || post){
            this.filtered = true;
        }else{
            this.filtered = false;
        }
    };

    this.Integrity = function(val){
        var ret;
        if(!this.filtered){
            ret = val - this.lastPoint;
            this.lastPoint = val;

        }else{
            this.lastPoint = this.Buffer.shift();
            this.Buffer.push(val);
            if(this.integrityOnly){
                var Interg = this.DFilter();
            }else{
                if (this.flowControl){
                    Interg = this.FlowFilter();
                }else {
                    Interg = this.Filter();
                }
                
            }
        }
        if(this.init){
            for(var el = 0; el<this.Buffer.length; el++){
                this.Buffer[el]=val;
            }
            this.init = false;
            return 0;
        }else{
            this.current = Interg;
            return Interg;    
        }
        
    };
    
    this.FlowFilter = function(){
        if(this.Buffer.length){
            var summ = 0;

            var relBuffer = this.Buffer.map(function (el,idx) {
                if(idx>0){
                    summ += el - this.Buffer[idx-1];
                    return el - this.Buffer[idx-1];
                }else {
                    summ += el - this.lastPoint;
                    return el - this.lastPoint;
                }
            },this);
            //теперь у нас есть буффер можно даже вывести в область видимости объекта(свойство)
            // this.relBuffer = [];
            // this.relBuffer = relBuffer;
            return summ / relBuffer.length;
        }
    };

    this.Filter = function(){
        var ret;
        if(this.Buffer.length){
            var summPost = 0;
            var summPre = 0;
            for(var el = 0; el<this.Buffer.length; el++){
                if(el<this.postfilterPoints){
                    summPost += this.Buffer[el];
                }else{
                    summPre += this.Buffer[el];
                }

            }
            var avrPost = summPost/this.postfilterPoints;
            var avrPre = summPre/this.prefilterPoints;
            ret = avrPre - avrPost;
            return ret;
        }
    };
    this.DFilter = function(){
        if(this.Buffer.length){
            var summ = 0.0;
            for(var el = 0; el<this.Buffer.length; el++){
                summ += this.Buffer[el];
            }
            var avr = summ/this.Buffer.length;
            return avr;
        }
    };
};

export default Integrator;