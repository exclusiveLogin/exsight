let Global = {
    demo:true,
    pr_tank:[],
    pr_tank_port:[],
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
    loggedAs:"",
    tankselect:"",
    nodes:[],
    nodeDependencies:{},
    conerr:0,
    application_state:"starting"
};
Global.authkey=false;
Global.loginData={
    "login":"",
    "password":""
};
Global.version = {};
Global.version.v = "1.0.7";
Global.version.build = "10007";
Global.version.desc = "";
export default Global;