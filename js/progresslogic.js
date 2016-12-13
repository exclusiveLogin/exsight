console.log("progresslogic loaded");
$(document).ready(function () {
    Global.parmTank = new ProgressBar.Line('#progress', {
        color: '#FCB03C',
        duration: 1000,
        easing: 'easeInOut',
        strokeWidth:10,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#f00'},
        step:function(state){
            Global.parmTank.path.setAttribute("stroke",state.color);
        }
    });


    Global.parmTankFancy = new ProgressBar.Line('#progress_fancy', {
        color: '#FCB03C',
        duration: 1000,
        easing: 'easeInOut',
        strokeWidth:10,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#f00'},
        step:function(state){
            Global.parmTankFancy.path.setAttribute("stroke",state.color);
        }
    });

    Global.pr_tank[1] = new ProgressBar.Circle('#progress_tank1', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[1].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[2] = new ProgressBar.Circle('#progress_tank2', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[2].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[3] = new ProgressBar.Circle('#progress_tank3', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[3].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[4] = new ProgressBar.Circle('#progress_tank4', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[4].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[5] = new ProgressBar.Circle('#progress_tank5', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[5].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[6] = new ProgressBar.Circle('#progress_tank6', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[6].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[7] = new ProgressBar.Circle('#progress_tank7', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[7].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[8] = new ProgressBar.Circle('#progress_tank8', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[8].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[9] = new ProgressBar.Circle('#progress_tank9', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[9].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[10] = new ProgressBar.Circle('#progress_tank10', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[10].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[11] = new ProgressBar.Circle('#progress_tank11', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[11].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[12] = new ProgressBar.Circle('#progress_tank12', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[12].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[13] = new ProgressBar.Circle('#progress_tank13', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[13].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[14] = new ProgressBar.Circle('#progress_tank14', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[14].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[15] = new ProgressBar.Circle('#progress_tank15', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[15].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[16] = new ProgressBar.Circle('#progress_tank16', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[16].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[17] = new ProgressBar.Circle('#progress_tank17', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[17].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[18] = new ProgressBar.Circle('#progress_tank18', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[18].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[19] = new ProgressBar.Circle('#progress_tank19', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[19].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[20] = new ProgressBar.Circle('#progress_tank20', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[20].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[51] = new ProgressBar.Circle('#progress_tank51', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[51].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[52] = new ProgressBar.Circle('#progress_tank52', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[52].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[53] = new ProgressBar.Circle('#progress_tank53', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[53].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[54] = new ProgressBar.Circle('#progress_tank54', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[54].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[55] = new ProgressBar.Circle('#progress_tank55', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[55].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[56] = new ProgressBar.Circle('#progress_tank56', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[56].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[69] = new ProgressBar.Circle('#progress_tank69', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[69].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[70] = new ProgressBar.Circle('#progress_tank70', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[70].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[71] = new ProgressBar.Circle('#progress_tank71', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[71].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[72] = new ProgressBar.Circle('#progress_tank72', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[72].path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[73] = new ProgressBar.Circle('#progress_tank73', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state){
            Global.pr_tank[73].path.setAttribute("stroke",state.color);
        }
    });
});
