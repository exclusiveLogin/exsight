export default function() {
    console.log("reloadPB port");
    $('#portview .progress_tank_port').find("svg").remove();
    Global.pr_tank_port[0] = new ProgressBar.Line('#progress_tank_port_oil', {
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
    Global.pr_tank_port[1] = new ProgressBar.Line('#progress_tank_port_dt', {
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
    Global.pr_tank_port[2] = new ProgressBar.Line('#progress_tank_port_smt', {
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
    Global.pr_tank_port[3] = new ProgressBar.Line('#progress_tank_port_ecu1', {
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
    Global.pr_tank_port[4] = new ProgressBar.Line('#progress_tank_port_ecu2', {
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