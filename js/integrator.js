/**
 * Created by SavinSV on 15.12.16.
 */
function Integrator(){
    this.step = -1;
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
        this.step++;
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
        if(this.step<this.Buffer.length){
            return 0;
        }else{
            return Interg;    
        }
        
    };

    this.Filter = function(){
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

Global.IntegratorForArrows1 = new Integrator();
Global.IntegratorForArrows2 = new Integrator();
Global.IntegratorForArrows3 = new Integrator();
Global.IntegratorForArrows4 = new Integrator();
Global.IntegratorForArrows5 = new Integrator();
Global.IntegratorForArrows6 = new Integrator();
Global.IntegratorForArrows7 = new Integrator();
Global.IntegratorForArrows8 = new Integrator();
Global.IntegratorForArrows9 = new Integrator();
Global.IntegratorForArrows10 = new Integrator();
Global.IntegratorForArrows11 = new Integrator();
Global.IntegratorForArrows12 = new Integrator();
Global.IntegratorForArrows13 = new Integrator();
Global.IntegratorForArrows14 = new Integrator();
Global.IntegratorForArrows15 = new Integrator();
Global.IntegratorForArrows16 = new Integrator();
Global.IntegratorForArrows17 = new Integrator();
Global.IntegratorForArrows18 = new Integrator();
Global.IntegratorForArrows19 = new Integrator();
Global.IntegratorForArrows20 = new Integrator();

Global.IntegratorForArrows51 = new Integrator();
Global.IntegratorForArrows52 = new Integrator();
Global.IntegratorForArrows53 = new Integrator();
Global.IntegratorForArrows54 = new Integrator();
Global.IntegratorForArrows55 = new Integrator();
Global.IntegratorForArrows56 = new Integrator();

Global.IntegratorForArrows69 = new Integrator();
Global.IntegratorForArrows70 = new Integrator();
Global.IntegratorForArrows71 = new Integrator();
Global.IntegratorForArrows72 = new Integrator();
Global.IntegratorForArrows73 = new Integrator();
//Global.IntegratorForArrows.setFilter(2,2);
Global.IntegratorCon = true;