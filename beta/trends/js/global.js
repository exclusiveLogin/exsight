let Global = {
    colorsPortLegend:["orange","red","yellow","#888","#666","#565","#090","#0f0","#CC5","CC6","9CC","6CC"],
    demo:true,
    pr_tank:[],
    jqready:false,
    swready:false,
    notifyallow:false,
    emer:{
        state:false,
        color:"",
        msg:"",
        users:[],
        user_msg:[]
    },
    loggedAs:"",
    tankselect:"",
    nodes:[],
    nodeDependencies:{},
    conerr:0
};
export default Global;