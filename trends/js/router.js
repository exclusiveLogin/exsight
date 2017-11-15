$(document).ready(function () {
    $("#portswitchnode .btn_trends_respark").off("click");
    $("#portswitchnode .btn_trends_port").off("click");

    checkHash();

    $("#portswitchnode .btn_trends_respark").on("click",function () {
        let check = $(this).hasClass("portproduct_actived");
        if(!check){
            location.hash = "#respark";
            checkHash();
        }
    });
    $("#portswitchnode .btn_trends_port").on("click",function () {
        let check = $(this).hasClass("portproduct_actived");
        if(!check) {
            location.hash = "#port";
            checkHash();
        }
    });
});

Global.trendResparkBlank = {};
Global.trendPortBlank = {};
//respark
Global.trendResparkBlank.levelroot = {
    id:"levelroot",
    type: 'line',
    name: 'Уровень',
    tooltip: {
        valueDecimals: 2,
        valueSuffix:' мм.'
    },
    color:"orange",
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.level = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.level = true;
            event.target.chart.context.Uploader();
        }
    },
    visible:true,
    showInNavigator:false,
};
Global.trendResparkBlank.massroot = {
    id:"massroot",
    type: 'line',
    name: 'Масса',
    tooltip: {
        valueDecimals: 2,
        valueSuffix:' т.'
    },
    color:"lightgreen",
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.mass = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.mass = true;
            event.target.chart.context.Uploader();
        }
    },
    visible:false,
    showInNavigator:false,
};
Global.trendResparkBlank.volumeroot = {
    id:"volumeroot",
    type: 'line',
    name: 'Объем',
    tooltip: {
        valueDecimals: 2,
        valueSuffix:' см3'
    },
    color:"blue",
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.volume = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.volume = true;
            event.target.chart.context.Uploader();
        }
    },
    visible:false,
    showInNavigator:false,
};
Global.trendResparkBlank.temperatureroot = {
        id:"temperatureroot",
        type: 'line',
        name: 'Температура',
        tooltip: {
            valueDecimals: 2,
            valueSuffix:' град. С.'
        },
        color:"red",
        events:{
            hide:function (event) {
                event.target.chart.context.schemeParm.temperature = false;
            },
            show:function (event) {
                event.target.chart.context.schemeParm.temperature = true;
                event.target.chart.context.Uploader();
            }
        },
        visible:false,
        showInNavigator:false,
    };
Global.trendResparkBlank.vaportemperatureroot = {
        id:"vaportemperatureroot",
        type: 'line',
        name: 'Т. паров',
        tooltip: {
            valueDecimals: 2,
            valueSuffix:' град. С.'
        },
        color:"yellow",
        events:{
            hide:function (event) {
                event.target.chart.context.schemeParm.vapor_temperature = false;
            },
            show:function (event) {
                event.target.chart.context.schemeParm.vapor_temperature = true;
                event.target.chart.context.Uploader();
            }
        },
        visible:false,
        showInNavigator:false,
    };
Global.trendResparkBlank.plotroot = {
        id:"plotroot",
        type: 'line',
        name: 'Плотность',
        tooltip: {
            valueDecimals: 2,
            valueSuffix:' кг/м3'
        },
        color:"grey",
        events:{
            hide:function (event) {
                event.target.chart.context.schemeParm.plot = false;
            },
            show:function (event) {
                event.target.chart.context.schemeParm.plot = true;
                event.target.chart.context.Uploader();
            }
        },
        visible:false,
        showInNavigator:false,
    };
//plotnomer
Global.trendPortBlank.t_root = {
    id:"t_root",
    type: 'line',
    name: 'Температура',
    tooltip: {
        valueDecimals: 1,
        valueSuffix:' град. С.'
    },
    color:Global.colorsPortLegend[0],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.t = false;
            console.log("ev:",event);
        },
        show:function (event) {
            event.target.chart.context.schemeParm.t = true;
        }
    },
    visible:true,
    showInNavigator:true,
    showInLegend:true
};
Global.trendPortBlank.t1_root = {
    id:"t1_root",
    type: 'line',
    name: 'Температура 1',
    tooltip: {
        valueDecimals: 1,
        valueSuffix:' град. С.'
    },
    color:Global.colorsPortLegend[1],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.t1 = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.t1 = true;
        }
    },
    visible:true,
};
Global.trendPortBlank.t2_root = {
    id:"t2_root",
    type: 'line',
    name: 'Температура 2',
    tooltip: {
        valueDecimals: 1,
        valueSuffix:' град. С.'
    },
    color:Global.colorsPortLegend[2],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.t2 = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.t2 = true;
        }
    },
    visible:true,
};
Global.trendPortBlank.p_root = {
    id:"p_root",
    type: 'line',
    name: 'Давление',
    tooltip: {
        valueDecimals: 2,
        valueSuffix:' кг/см2.'
    },
    color:Global.colorsPortLegend[3],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.p = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.p = true;
        }
    },
    visible:true,
};
Global.trendPortBlank.p1_root = {
    id:"p1_root",
    type: 'line',
    name: 'Плотность 1',
    tooltip: {
        valueDecimals: 1,
        valueSuffix:' кг/м3.'
    },
    color:Global.colorsPortLegend[4],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.p1 = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.p1 = true;
        }
    },
    visible:true,
};
Global.trendPortBlank.p2_root = {
    id:"p2_root",
    type: 'line',
    name: 'Плотность 2',
    tooltip: {
        valueDecimals: 1,
        valueSuffix:' кг/м3.'
    },
    color:Global.colorsPortLegend[5],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.p2 = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.p2 = true;
        }
    },
    visible:true,
};
Global.trendPortBlank.f1_root = {
    id:"f1_root",
    type: 'line',
    name: 'Расход 1',
    tooltip: {
        valueDecimals: 0,
        valueSuffix:' кг/ч.'
    },
    color:Global.colorsPortLegend[6],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.f1 = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.f1 = true;
        }
    },
    visible:true,
};
Global.trendPortBlank.f2_root = {
    id:"f2_root",
    type: 'line',
    name: 'Расход 2',
    tooltip: {
        valueDecimals: 0,
        valueSuffix:' кг/ч.'
    },
    color:Global.colorsPortLegend[7],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.f2 = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.f2 = true;
        }
    },
    visible:true,
};
Global.trendPortBlank.m1_root = {
    id:"m1_root",
    type: 'line',
    name: 'Счетчик текущий 1',
    tooltip: {
        valueDecimals: 2,
        valueSuffix:' град. С.'
    },
    color:Global.colorsPortLegend[8],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.m1 = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.m1 = true;
        }
    },
    visible:true,
};
Global.trendPortBlank.m2_root = {
    id:"m2_root",
    type: 'line',
    name: 'Счетчик текущий 2',
    tooltip: {
        valueDecimals: 0,
        valueSuffix:' кг.'
    },
    color:Global.colorsPortLegend[9],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.m2 = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.m2 = true;
        }
    },
    visible:true,
};
Global.trendPortBlank.ms1_root = {
    id:"ms1_root",
    type: 'line',
    name: 'Счетчик Суммарный 1',
    tooltip: {
        valueDecimals: 0,
        valueSuffix:' кг.'
    },
    color:Global.colorsPortLegend[10],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.ms1 = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.ms1 = true;
        }
    },
    visible:true,
};
Global.trendPortBlank.ms2_root = {
    id:"ms2_root",
    type: 'line',
    name: 'Счетчик суммарный 2',
    tooltip: {
        valueDecimals: 0,
        valueSuffix:' кг.'
    },
    color:Global.colorsPortLegend[11],
    events:{
        hide:function (event) {
            event.target.chart.context.schemeParm.ms2 = false;
        },
        show:function (event) {
            event.target.chart.context.schemeParm.ms2 = true;
        }
    },
    visible:true,
};

function checkHash(){
    if(Global.MainTrend){
        if(Global.MainTrend.Trend){
            Global.MainTrend.selectedTanks = [];
            Global.MainTrend.selectedProductPort = [];
            $(".btn_tank").removeClass("tank_actived");
            $("#portswitchproduct .btn_portproduct").removeClass("portproduct_actived");

            while (Global.MainTrend.Trend.series[0]){
                Global.MainTrend.Trend.series[0].remove(false);
            }
            Global.MainTrend.Trend.redraw();
            Global.MainTrend.Trend.showLoading("Нет данных для отображения");
        }
    }
    if(location.hash == "#respark"){

        $("#portswitchnode .btn_trends_respark").addClass("portproduct_actived");
        $("#portswitchnode .btn_trends_port").removeClass("portproduct_actived");

        $("#parkview").show(500);
        $("#portswitchproduct").hide(500);

        if(Global.MainTrend){
            if(Global.MainTrend.Trend){
                Global.MainTrend.selectedNode = "respark";
                Global.MainTrend.Trend.get("level").update({visible:true});
                Global.MainTrend.Trend.get("mass").update({visible:true});
                Global.MainTrend.Trend.get("plot").update({visible:true});
                Global.MainTrend.Trend.get("temper").update({visible:true});
                Global.MainTrend.Trend.get("volume").update({visible:true});
                Global.MainTrend.Trend.get("flow").update({visible:false});
                Global.MainTrend.Trend.get("press").update({visible:false});

                Global.MainTrend.Trend.addSeries(Global.trendResparkBlank.levelroot,false);
                Global.MainTrend.Trend.addSeries(Global.trendResparkBlank.massroot,false);
                Global.MainTrend.Trend.addSeries(Global.trendResparkBlank.volumeroot,false);
                Global.MainTrend.Trend.addSeries(Global.trendResparkBlank.temperatureroot,false);
                Global.MainTrend.Trend.addSeries(Global.trendResparkBlank.vaportemperatureroot,false);
                Global.MainTrend.Trend.addSeries(Global.trendResparkBlank.plotroot,false);
                Global.MainTrend.Trend.redraw();
            }
        }
    }
    if(location.hash == "#port"){

        $("#portswitchnode .btn_trends_respark").removeClass("portproduct_actived");
        $("#portswitchnode .btn_trends_port").addClass("portproduct_actived");

        $("#parkview").hide(500);
        $("#portswitchproduct").show(500);

        if(Global.MainTrend){
            if(Global.MainTrend.Trend){
                Global.MainTrend.selectedNode = "port";
                Global.MainTrend.Trend.get("level").update({visible:false});
                Global.MainTrend.Trend.get("mass").update({visible:true});
                Global.MainTrend.Trend.get("plot").update({visible:true});
                Global.MainTrend.Trend.get("temper").update({visible:true});
                Global.MainTrend.Trend.get("volume").update({visible:false});
                Global.MainTrend.Trend.get("flow").update({visible:true});
                Global.MainTrend.Trend.get("press").update({visible:true});

                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.t_root,false);
                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.t1_root,false);
                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.t2_root,false);
                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.p_root,false);
                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.p1_root,false);
                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.p2_root,false);
                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.f1_root,false);
                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.f2_root,false);
                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.m1_root,false);
                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.m2_root,false);
                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.ms1_root,false);
                Global.MainTrend.Trend.addSeries(Global.trendPortBlank.ms2_root,false);
                Global.MainTrend.Trend.redraw();
            }
        }
    }
    if(location.hash == ""){
        if(Global.MainTrend){
            location.hash="#respark";
            checkHash();
        }
    }
}

