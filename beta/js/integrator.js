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


    this.Buffer = [0,0];

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
            this.Buffer.shift();
            this.Buffer.push(val);
            if(this.integrityOnly){
                var Interg = this.DFilter();
            }else{
                var Interg = this.Filter();
            }
        }
        if(this.init){
            for(var el = 0; el<this.Buffer.length; el++){
                this.Buffer[el]=val;
            }
            this.init = false;
            return 0;
        }else{
            //Global.blink2.stop();
            return Interg;    
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
            ret = avrPre*10 - avrPost*10;
            return ret/10;
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