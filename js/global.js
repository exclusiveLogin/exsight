let Global = {
    demo:false,
    pr_tank:[],
    jqready:false,
    swready:false,
    notifyallow:false,
    trend1_data:[],
    trend2_data:[],
    trend3_data:[],
    trend4_data:[],
    Trend1:undefined,
    Trend2:undefined,
    Trend3:undefined,
    Trend4:undefined,
    trend1Container:undefined,
    trend2Container:undefined,
    trend3Container:undefined,
    trend4Container:undefined,
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