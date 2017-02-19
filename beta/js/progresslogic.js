export default function reloadProgressBar() {
    Global.parmTank = new ProgressBar.Line('#progress', {
        color: '#FCB03C',
        duration: 1000,
        easing: 'easeInOut',
        strokeWidth:10,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#f00'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
	console.log(Global.parmTank);
    Global.parmTankFancy = new ProgressBar.Line('#progress_fancy', {
        color: '#FCB03C',
        duration: 1000,
        easing: 'easeInOut',
        strokeWidth:10,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#f00'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    $('.progress_tank').find("svg").remove();
    Global.pr_tank[1] = new ProgressBar.Line('#progress_tank1', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[2] = new ProgressBar.Line('#progress_tank2', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[3] = new ProgressBar.Line('#progress_tank3', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[4] = new ProgressBar.Line('#progress_tank4', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[5] = new ProgressBar.Line('#progress_tank5', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[6] = new ProgressBar.Line('#progress_tank6', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[7] = new ProgressBar.Line('#progress_tank7', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[8] = new ProgressBar.Line('#progress_tank8', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[9] = new ProgressBar.Line('#progress_tank9', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[10] = new ProgressBar.Line('#progress_tank10', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[11] = new ProgressBar.Line('#progress_tank11', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[12] = new ProgressBar.Line('#progress_tank12', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[13] = new ProgressBar.Line('#progress_tank13', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[14] = new ProgressBar.Line('#progress_tank14', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[15] = new ProgressBar.Line('#progress_tank15', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[16] = new ProgressBar.Line('#progress_tank16', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[17] = new ProgressBar.Line('#progress_tank17', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[18] = new ProgressBar.Line('#progress_tank18', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[19] = new ProgressBar.Line('#progress_tank19', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[20] = new ProgressBar.Line('#progress_tank20', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[51] = new ProgressBar.Line('#progress_tank51', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[52] = new ProgressBar.Line('#progress_tank52', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[53] = new ProgressBar.Line('#progress_tank53', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[54] = new ProgressBar.Line('#progress_tank54', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[55] = new ProgressBar.Line('#progress_tank55', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[56] = new ProgressBar.Line('#progress_tank56', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[69] = new ProgressBar.Line('#progress_tank69', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[70] = new ProgressBar.Line('#progress_tank70', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[71] = new ProgressBar.Line('#progress_tank71', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[72] = new ProgressBar.Line('#progress_tank72', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
    Global.pr_tank[73] = new ProgressBar.Line('#progress_tank73', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        strokeWidth:8,
        trailColor: '#333',
        from:{color:"#fff"},
        to:{color:'#090'},
        step:function(state,shape){
            shape.path.setAttribute("stroke",state.color);
        }
    });
	$('.prog_cont>svg').css({
		"width":"",
		"display":""
	});
}