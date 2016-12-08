console.log("progresslogic loaded");
$(document).ready(function () {
    Global.parmTank = new ProgressBar.Circle('#progress', {
        color: '#FCB03C',
        duration: 1000,
        easing: 'easeInOut',
        strokeWidth:10,
        trailColor: '#ddd',
        from:{color:"#fff"},
        to:{color:'#f00'},
        step:function(state){
            Global.parmTank.path.setAttribute("stroke",state.color);
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


    console.log("test");
});
