class TrendEngine{
    constructor(domid){
        this.selectedTanks = [];
        this.selectedProductPort = [];
        this.schemeParm = {
            level:true,
            mass:false,
            volume:false,
            temperature:false,
            vapor_temperature:false,
            plot:false,
            t:true,
            t1:true,
            t2:true,
            p:true,
            p1:true,
            p2:true,
            f1:true,
            f2:true,
            m1:true,
            m2:true,
            ms1:true,
            ms2:true
        };
        Highcharts.theme = {
            colors: ["#2b908f", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
                "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
            chart: {
                backgroundColor: {
                    //linearGradient: { x1: 0, y1: 0, x2: 1, y2: 1 },
                    stops: [
                        [0, '#2a2a2b'],
                        [1, '#3e3e40']
                    ]
                },
                style: {
                    fontFamily: "'Arial', sans-serif"
                },
                plotBorderColor: '#606063'
            },
            title: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '16px'
                }
            },
            subtitle: {
                style: {
                    color: '#E0E0E3',
                    textTransform: 'uppercase'
                }
            },
            xAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                title: {
                    style: {
                        color: '#A0A0A3'

                    }
                }
            },
            yAxis: {
                gridLineColor: '#707073',
                labels: {
                    style: {
                        color: '#E0E0E3'
                    }
                },
                lineColor: '#707073',
                minorGridLineColor: '#505053',
                tickColor: '#707073',
                tickWidth: 1,
                title: {
                    style: {
                        color: '#A0A0A3'
                    }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                style: {
                    color: '#F0F0F0'
                }
            },
            legend: {
                itemStyle: {
                    color: '#E0E0E3'
                },
                itemHoverStyle: {
                    color: '#FFF'
                },
                itemHiddenStyle: {
                    color: '#606063'
                }
            },
            credits: {
                style: {
                    color: '#666'
                }
            },
            labels: {
                style: {
                    color: '#707073'
                }
            },

            drilldown: {
                activeAxisLabelStyle: {
                    color: '#F0F0F3'
                },
                activeDataLabelStyle: {
                    color: '#F0F0F3'
                }
            },

            navigation: {
                buttonOptions: {
                    symbolStroke: '#DDDDDD',
                    theme: {
                        fill: '#505053'
                    }
                }
            },

            // scroll charts
            rangeSelector: {
                buttonTheme: {
                    fill: '#505053',
                    stroke: '#000000',
                    style: {
                        color: '#CCC'
                    },
                    states: {
                        hover: {
                            fill: '#707073',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        },
                        select: {
                            fill: '#000003',
                            stroke: '#000000',
                            style: {
                                color: 'white'
                            }
                        }
                    }
                },
                inputBoxBorderColor: '#505053',
                inputStyle: {
                    backgroundColor: '#333',
                    color: 'silver'
                },
                labelStyle: {
                    color: 'silver'
                }
            },

            navigator: {
                handles: {
                    backgroundColor: '#666',
                    borderColor: '#AAA'
                },
                outlineColor: '#CCC',
                maskFill: 'rgba(255,255,255,0.1)',
                series: {
                    color: '#7798BF',
                    lineColor: '#A6C7ED'
                },
                xAxis: {
                    gridLineColor: '#505053'
                }
            },

            scrollbar: {
                barBackgroundColor: '#808083',
                barBorderColor: '#808083',
                buttonArrowColor: '#CCC',
                buttonBackgroundColor: '#606063',
                buttonBorderColor: '#606063',
                rifleColor: '#FFF',
                trackBackgroundColor: '#404043',
                trackBorderColor: '#404043'
            },

            // special colors for some of the
            legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
            background2: '#505053',
            dataLabelsColor: '#B0B0B3',
            textColor: '#C0C0C0',
            contrastTextColor: '#F0F0F3',
            maskColor: 'rgba(255,255,255,0.3)'
        };
        Highcharts.setOptions(Highcharts.theme);
        var G_Setting = {
            global:{
                getTimezoneOffset:function () {
                    var offset = new Date().getTimezoneOffset();
                    return offset;
                }}
        };
        Highcharts.setOptions(G_Setting);
        var MainTrend_setting = {
            credits:{enabled:false},
            chart: {
                height:500,
                renderTo:document.getElementById(domid),
                zoomType: 'x'
            },
            legend: {
                enabled: true
            },
            loading:{
                labelStyle:{
                    color:"black"
                }
            },
            scrollbar:{
                liveRedraw:true,
                enabled:true
            },
            xAxis: {
                id:"timeline",
                type: 'datetime',
                ordinal:false,
                events:{
                    setExtremes:function (e) {
                        console.log(e);
                        this.chart.context.Uploader(e);
                    }
                }
            },
            navigator:{
                adaptToUpdateData:false,
                enabled:false
            },
            yAxis: [{
                id:"level",
                title: {
                    text: 'Уровень'
                },
                visible:false
            },{
                id:"temper",
                title: {
                    text: 'Температура'
                },
                visible:false
            },{
                id:"mass",
                title: {
                    text: 'Масса'
                },
                visible:false
            },{
                id:"volume",
                title: {
                    text: 'Объем'
                },
                visible:false
            },{
                id:"plot",
                title: {
                    text: 'Плотность'
                },
                visible:false
            },{
                id:"flow",
                title: {
                    text: 'Расход'
                },
                visible:false
            },{
                id:"press",
                title: {
                    text: 'Давление'
                },
                visible:false
            }],
            rangeSelector:{
                buttonTheme: {
                    width: 60
                },
                selected:3,
                buttons:[
                    {
                        type:'hour',
                        count:6,
                        text:"6 часов"
                    },
                    {
                        type:'hour',
                        count:12,
                        text:"12 часов"
                    },
                    {
                        type:'hour',
                        count:24,
                        text:"24 часа"
                    },
                    {
                        type:'day',
                        count:3,
                        text:"3 дня"
                    },
                    {
                        type:'day',
                        count:7,
                        text:"7 дней"
                    },
                    {
                        type:'month',
                        count:1,
                        text:"3 мес"
                    },
                    {
                        type:'month',
                        count:6,
                        text:"6 мес"
                    },
                    {
                        type:'year',
                        count:1,
                        text:"1 год"
                    },
                    {
                        type:'all',
                        text:"All"
                    }
                ]
            },
            plotOptions: {
                line:{
                    marker:{
                        enabled:false
                    },
                },
            },
            series:[]
        };
        this.Trend = new Highcharts.stockChart(MainTrend_setting);
        this.Trend.context = this;
        this.Uploader = function(e,tank,product){
            var upload = function(minmax) {
                var context = this;
                $.ajax({
                     sync:true,
                     url:"trendengine.php",
                     dataType:"json",
                     method:'GET',
                     data:data,
                     success:function(data){
                         if(data){
                             if(data[0].node){
                                 if(data[0].node == "respark"){
                                     if(data[1].num){
                                         let level = [],
                                             mass=[],
                                             volume=[],
                                             temperature=[],
                                             vapor_temperature=[],
                                             plot=[];
                                         let tanknum = Number(data[1].num);
                                         data.map(function (elem,idx) {
                                             if(idx>0){
                                                 let utc;
                                                 if(elem.utc)utc = Number(elem.utc);

                                                 if(elem.level && context.schemeParm.level){
                                                     level.push([utc,Number(elem.level)]);
                                                 }
                                                 if(elem.mass && context.schemeParm.mass){
                                                     mass.push([utc,Number(elem.mass)]);
                                                 }
                                                 if(elem.volume && context.schemeParm.volume){
                                                     volume.push([utc,Number(elem.volume)]);
                                                 }
                                                 if(elem.temperature && context.schemeParm.temperature){
                                                     temperature.push([utc,Number(elem.temperature)]);
                                                 }
                                                 if(elem.vapor_temperature && context.schemeParm.vapor_temperature){
                                                     vapor_temperature.push([utc,Number(elem.vapor_temperature)]);
                                                 }
                                                 if(elem.plot && context.schemeParm.plot){
                                                     plot.push([utc,Number(elem.plot)]);
                                                 }
                                             }
                                         });
                                         //setter
                                         // context.Trend.get("level"+tanknum).setData([]);
                                         context.Trend.get("level"+tanknum).setData(level,false);

                                         // context.Trend.get("mass"+tanknum).setData([]);
                                         context.Trend.get("mass"+tanknum).setData(mass,false);
                                         //
                                         // context.Trend.get("volume"+tanknum).setData([]);
                                         context.Trend.get("volume"+tanknum).setData(volume,false);
                                         //
                                         // context.Trend.get("temperature"+tanknum).setData([]);
                                         context.Trend.get("temperature"+tanknum).setData(temperature,false);
                                         //
                                         // context.Trend.get("tempvapor"+tanknum).setData([]);
                                         context.Trend.get("tempvapor"+tanknum).setData(vapor_temperature,false);
                                         //
                                         // context.Trend.get("plot"+tanknum).setData([]);
                                         context.Trend.get("plot"+tanknum).setData(plot,false);

                                         context.Trend.redraw();

                                         context.Trend.hideLoading();

                                         if(minmax){
                                             $.ajax({
                                                 url:"trendengine.php",
                                                 dataType:"json",
                                                 method:'GET',
                                                 data:{"minmax":true,"tank":tanknum},
                                                 success:function(data){
                                                     if(data){
                                                         if(data[0] && data[1]){

                                                             let tmpExtr = context.Trend.get("timeline").getExtremes();
                                                             //console.log("extremes:",tmpExtr);
                                                             //console.log("user interval:",tmpExtr.userMax - tmpExtr.userMin,"abs interval:",
                                                             //     tmpExtr.max - tmpExtr.min,"data interval:",tmpExtr.dataMax - tmpExtr.dataMin);

                                                             context.Trend.get("level"+tanknum).addPoint([Number(data[0].utc),Number(data[0].level)],false);
                                                             context.Trend.get("level"+tanknum).addPoint([Number(data[1].utc),Number(data[1].level)],false);

                                                             context.Trend.get("mass"+tanknum).addPoint([Number(data[0].utc),Number(data[0].mass)],false);
                                                             context.Trend.get("mass"+tanknum).addPoint([Number(data[1].utc),Number(data[1].mass)],false);

                                                             context.Trend.get("volume"+tanknum).addPoint([Number(data[0].utc),Number(data[0].volume)],false);
                                                             context.Trend.get("volume"+tanknum).addPoint([Number(data[1].utc),Number(data[1].volume)],false);

                                                             context.Trend.get("temperature"+tanknum).addPoint([Number(data[0].utc),Number(data[0].temperature)],false);
                                                             context.Trend.get("temperature"+tanknum).addPoint([Number(data[1].utc),Number(data[1].temperature)],false);

                                                             context.Trend.get("tempvapor"+tanknum).addPoint([Number(data[0].utc),Number(data[0].vapor_temperature)],false);
                                                             context.Trend.get("tempvapor"+tanknum).addPoint([Number(data[1].utc),Number(data[1].vapor_temperature)],false);

                                                             context.Trend.get("plot"+tanknum).addPoint([Number(data[0].utc),Number(data[0].plot)],false);
                                                             context.Trend.get("plot"+tanknum).addPoint([Number(data[1].utc),Number(data[1].plot)],false);


                                                             context.Trend.redraw();
                                                             context.Trend.get("timeline").setExtremes(tmpExtr.dataMin,tmpExtr.dataMax);

                                                         }
                                                     }
                                                 },
                                                 error:function(err){
                                                     console.log("error to load state ajax :",err);
                                                 }
                                             });
                                         }
                                     }
                                 }
                                 if(data[0].node == "port"){
                                     if(data[0].plotnomer){
                                         let t = [],
                                             t1=[],
                                             t2=[],
                                             p=[],
                                             p1=[],
                                             p2=[],
                                             f1 = [],
                                             f2=[],
                                             m1=[],
                                             m2=[],
                                             ms1=[],
                                             ms2=[];
                                         let plotnomer = undefined;
                                         if(data[0].plotnomer == "1")plotnomer="dt";
                                         if(data[0].plotnomer == "2")plotnomer="smt";

                                         data.map(function (elem,idx) {
                                             if(idx>0){
                                                 let utc;
                                                 if(elem.utc)utc = Number(elem.utc);

                                                 if(elem.t && context.schemeParm.t){
                                                     t.push([utc,Number(elem.t)]);
                                                 }
                                                 if(elem.t1 && context.schemeParm.t1){
                                                     t1.push([utc,Number(elem.t1)]);
                                                 }
                                                 if(elem.t2 && context.schemeParm.t2){
                                                     t2.push([utc,Number(elem.t2)]);
                                                 }
                                                 if(elem.p && context.schemeParm.p){
                                                     p.push([utc,Number(elem.p)]);
                                                 }
                                                 if(elem.p1 && context.schemeParm.p1){
                                                     p1.push([utc,Number(elem.p1)]);
                                                 }
                                                 if(elem.p2 && context.schemeParm.p2){
                                                     p2.push([utc,Number(elem.p2)]);
                                                 }
                                                 if(elem.f1 && context.schemeParm.f1){
                                                     f1.push([utc,Number(elem.f1)]);
                                                 }
                                                 if(elem.f2 && context.schemeParm.f2){
                                                     f2.push([utc,Number(elem.f2)]);
                                                 }
                                                 if(elem.m1 && context.schemeParm.m1){
                                                     m1.push([utc,Number(elem.m1)]);
                                                 }
                                                 if(elem.m2 && context.schemeParm.m2){
                                                     m2.push([utc,Number(elem.m2)]);
                                                 }
                                                 if(elem.ms1 && context.schemeParm.ms1){
                                                     ms1.push([utc,Number(elem.ms1)]);
                                                 }
                                                 if(elem.ms2 && context.schemeParm.ms2){
                                                     ms2.push([utc,Number(elem.ms2)]);
                                                 }
                                             }
                                         });
                                         //setter
                                         context.Trend.get("t_"+plotnomer).setData(t,false);
                                         context.Trend.get("t1_"+plotnomer).setData(t1,false);
                                         context.Trend.get("t2_"+plotnomer).setData(t2,false);
                                         context.Trend.get("p_"+plotnomer).setData(p,false);
                                         context.Trend.get("p1_"+plotnomer).setData(p1,false);
                                         context.Trend.get("p2_"+plotnomer).setData(p2,false);
                                         context.Trend.get("f1_"+plotnomer).setData(f1,false);
                                         context.Trend.get("f2_"+plotnomer).setData(f2,false);
                                         context.Trend.get("m1_"+plotnomer).setData(m1,false);
                                         context.Trend.get("m2_"+plotnomer).setData(m2,false);
                                         context.Trend.get("ms1_"+plotnomer).setData(ms1,false);
                                         context.Trend.get("ms2_"+plotnomer).setData(ms2,false);

                                         context.Trend.redraw();

                                         context.Trend.hideLoading();

                                         if(minmax){
                                             $.ajax({
                                                 url:"trendengine.php",
                                                 dataType:"json",
                                                 method:'GET',
                                                 data:{"minmax":true,"product":plotnomer},
                                                 success:function(data){
                                                     if(data){
                                                         if(data[0] && data[1]){

                                                             let tmpExtr = context.Trend.get("timeline").getExtremes();

                                                             context.Trend.get("t_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].t)],false);
                                                             context.Trend.get("t_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].t)],false);

                                                             context.Trend.get("t1_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].t1)],false);
                                                             context.Trend.get("t1_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].t1)],false);

                                                             context.Trend.get("t2_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].t2)],false);
                                                             context.Trend.get("t2_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].t2)],false);

                                                             context.Trend.get("p_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].p)],false);
                                                             context.Trend.get("p_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].p)],false);

                                                             context.Trend.get("p1_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].p1)],false);
                                                             context.Trend.get("p1_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].p1)],false);

                                                             context.Trend.get("p2_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].p2)],false);
                                                             context.Trend.get("p2_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].p2)],false);

                                                             context.Trend.get("f1_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].f1)],false);
                                                             context.Trend.get("f1_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].f1)],false);

                                                             context.Trend.get("f2_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].f2)],false);
                                                             context.Trend.get("f2_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].f2)],false);

                                                             context.Trend.get("m1_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].m1)],false);
                                                             context.Trend.get("m1_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].m1)],false);

                                                             context.Trend.get("m2_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].m2)],false);
                                                             context.Trend.get("m2_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].m2)],false);

                                                             context.Trend.get("ms1_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].ms1)],false);
                                                             context.Trend.get("ms1_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].ms1)],false);

                                                             context.Trend.get("ms2_"+plotnomer).addPoint([Number(data[0].utc),Number(data[0].ms2)],false);
                                                             context.Trend.get("ms2_"+plotnomer).addPoint([Number(data[1].utc),Number(data[1].ms2)],false);

                                                             context.Trend.redraw();
                                                             context.Trend.get("timeline").setExtremes(tmpExtr.dataMin,tmpExtr.dataMax);

                                                         }
                                                     }
                                                 },
                                                 error:function(err){
                                                     console.log("error to load state ajax :",err);
                                                 }
                                             });
                                         }
                                     }
                                 }
                             }
                         }

                     },
                     error:function(err){
                        console.log("error to load state ajax :",err);
                     }
                 });
            };

            //init req obj
            var data = {};

            //logic upload requests
            if(Global.MainTrend.selectedNode == "respark"){
                if(e){
                    if(tank){//now ver no uses
                        // console.log("with tanks");
                        // data = {"trend":true,"coldtrend":true,"tank":tank};
                        // if(e.rangeSelectorButton){
                        //     if(e.rangeSelectorButton._range){
                        //         if(e.rangeSelectorButton._range<10*24*3600*1000){
                        //             data = {"trend":true,"tank":tank,"interval":1,"trendmin":e.min,"trendmax":e.max};
                        //         }else {
                        //             data = {"trend":true,"tank":tank,"interval":0,"trendmin":e.min,"trendmax":e.max};
                        //         }
                        //     }else {
                        //         data = {"trend":true,"tank":tank,"trendall":true};
                        //     }
                        // }
                        // if(e.trigger == "zoom"){
                        //     var tmpInterval = e.max - e.min;
                        //     if(tmpInterval < 10*24*3600*1000){
                        //         data = {"trend":true,"tank":tank,"interval":1,"trendmin":e.min,"trendmax":e.max};
                        //     }else {
                        //         data = {"trend":true,"tank":tank,"interval":0,"trendmin":e.min,"trendmax":e.max};
                        //     }
                        // }
                        // if(e.triggerOp){
                        //     if(e.triggerOp == "navigator-drag"){
                        //         if(e.DOMEvent){
                        //             if(e.DOMEvent.type == "mouseup"){
                        //                 var tmpInterval = e.max - e.min;
                        //                 if(tmpInterval < 10*24*3600*1000){
                        //                     data = {"trend":true,"tank":tank,"interval":1,"trendmin":e.min,"trendmax":e.max};
                        //                 }else {
                        //                     data = {"trend":true,"tank":tank,"interval":0,"trendmin":e.min,"trendmax":e.max};
                        //                 }
                        //             }
                        //         }
                        //     }
                        // }
                        // upload.apply(this);
                    }else {
                        this.selectedTanks.map(function (element,idx,tanks) {
                            let minmaxflag = false;
                            if(idx == tanks.length-1)minmaxflag = true;
                            if(e.rangeSelectorButton){
                                if(e.rangeSelectorButton._range){
                                    if(e.rangeSelectorButton._range<10*24*3600*1000){
                                        data = {"trend":true,"tank":element,"interval":1,"trendmin":e.min,"trendmax":e.max};
                                        upload.call(this,minmaxflag);
                                    }else {
                                        data = {"trend":true,"tank":element,"interval":0,"trendmin":e.min,"trendmax":e.max};
                                        upload.call(this,minmaxflag);
                                    }
                                }else {
                                    data = {"trend":true,"tank":element,"trendall":true};
                                    upload.call(this,minmaxflag);
                                }
                            }
                            if(e.trigger == "zoom"){
                                var tmpInterval = e.max - e.min;
                                if(tmpInterval < 10*24*3600*1000){
                                    data = {"trend":true,"tank":element,"interval":1,"trendmin":e.min,"trendmax":e.max};
                                    upload.call(this,minmaxflag);
                                }else {
                                    data = {"trend":true,"tank":element,"interval":0,"trendmin":e.min,"trendmax":e.max};
                                    upload.call(this,minmaxflag);
                                }
                            }
                            if(e.trigger == "keydown"){
                                let tmpExtr = this.Trend.get("timeline").getExtremes();
                                var tmpInterval = tmpExtr.userMax - tmpExtr.userMin;
                                var step = tmpInterval/2;

                                if(e.front){
                                    if(!e.ctrl){//simple key
                                        data = {"trend":true,"tank":element,"trendmin":tmpExtr.userMin+step,"trendmax":tmpExtr.userMax+step};
                                    }else {//with ctrl
                                        data = {"trend":true,"tank":element,"trendmin":tmpExtr.userMin,"trendmax":tmpExtr.userMax+step};
                                    }
                                }else {
                                    if(!e.ctrl){//simple key
                                        data = {"trend":true,"tank":element,"trendmin":tmpExtr.userMin-step,"trendmax":tmpExtr.userMax-step};
                                    }else {//with ctrl
                                        data = {"trend":true,"tank":element,"trendmin":tmpExtr.userMin-step,"trendmax":tmpExtr.userMax};
                                    }
                                }

                                if(tmpInterval < 10*24*3600*1000){
                                    data.interval=1;
                                    upload.call(this,minmaxflag);
                                }else {
                                    data.interval=0;
                                    upload.call(this,minmaxflag);
                                }
                            }
                            if(e.trigger == "navigator"){
                                var tmpInterval = e.max - e.min;
                                if(tmpInterval < 10*24*3600*1000){
                                    data = {"trend":true,"tank":element,"interval":1,"trendmin":e.min,"trendmax":e.max};
                                    upload.call(this,minmaxflag);
                                }else {
                                    data = {"trend":true,"tank":element,"interval":0,"trendmin":e.min,"trendmax":e.max};
                                    upload.call(this,minmaxflag);
                                }
                            }
                        },this);
                    }
                }else {
                    if(tank){
                        if(this.selectedTanks.length>1) {
                            let tmpExtr = this.Trend.get("timeline").getExtremes();
                            var tmpInterval = tmpExtr.dataMax - tmpExtr.dataMin;
                            if(tmpInterval < 10*24*3600*1000){
                                data = {"trend":true,"tank":tank,"interval":1,"trendmin":tmpExtr.dataMin,"trendmax":tmpExtr.dataMax};
                                upload.call(this);
                            }else {
                                data = {"trend":true,"tank":tank,"interval":0,"trendmin":tmpExtr.dataMin,"trendmax":tmpExtr.dataMax};
                                upload.call(this);
                            }
                        }else {
                            data = {"trend":true,"coldtrend":true,"tank":tank};
                            upload.call(this);
                        }
                    }else {
                        let tmpExtr = this.Trend.get("timeline").getExtremes();
                        var tmpInterval = tmpExtr.dataMax - tmpExtr.dataMin;
                        this.selectedTanks.map(function (element,idx,tanks) {
                            if(tmpInterval < 10*24*3600*1000){
                                data = {"trend":true,"tank":element,"interval":1,"trendmin":tmpExtr.dataMin,"trendmax":tmpExtr.dataMax};
                                upload.call(this);
                            }else {
                                data = {"trend":true,"tank":element,"interval":0,"trendmin":tmpExtr.dataMin,"trendmax":tmpExtr.dataMax};
                                upload.call(this);
                            }
                        },this);
                    }
                }
            }
            if(Global.MainTrend.selectedNode == "port"){
                if(e){
                    this.selectedProductPort.map(function (element,idx,products) {
                            let minmaxflag = false;
                            if(idx == products.length-1)minmaxflag = true;
                            if(e.rangeSelectorButton){
                                if(e.rangeSelectorButton._range){
                                    if(e.rangeSelectorButton._range<10*24*3600*1000){
                                        data = {"trend":true,"product":element,"interval":1,"trendmin":e.min,"trendmax":e.max};
                                        upload.call(this,minmaxflag);
                                    }else {
                                        data = {"trend":true,"product":element,"interval":0,"trendmin":e.min,"trendmax":e.max};
                                        upload.call(this,minmaxflag);
                                    }
                                }else {
                                    data = {"trend":true,"product":element,"trendall":true};
                                    upload.call(this,minmaxflag);
                                }
                            }
                            if(e.trigger == "zoom"){
                                var tmpInterval = e.max - e.min;
                                if(tmpInterval < 10*24*3600*1000){
                                    data = {"trend":true,"product":element,"interval":1,"trendmin":e.min,"trendmax":e.max};
                                    upload.call(this,minmaxflag);
                                }else {
                                    data = {"trend":true,"product":element,"interval":0,"trendmin":e.min,"trendmax":e.max};
                                    upload.call(this,minmaxflag);
                                }
                            }
                            if(e.trigger == "keydown"){
                                let tmpExtr = this.Trend.get("timeline").getExtremes();
                                var tmpInterval = tmpExtr.userMax - tmpExtr.userMin;
                                var step = tmpInterval/2;

                                if(e.front){
                                    if(!e.ctrl){//simple key
                                        data = {"trend":true,"product":element,"trendmin":tmpExtr.userMin+step,"trendmax":tmpExtr.userMax+step};
                                    }else {//with ctrl
                                        data = {"trend":true,"product":element,"trendmin":tmpExtr.userMin,"trendmax":tmpExtr.userMax+step};
                                    }
                                }else {
                                    if(!e.ctrl){//simple key
                                        data = {"trend":true,"product":element,"trendmin":tmpExtr.userMin-step,"trendmax":tmpExtr.userMax-step};
                                    }else {//with ctrl
                                        data = {"trend":true,"product":element,"trendmin":tmpExtr.userMin-step,"trendmax":tmpExtr.userMax};
                                    }
                                }

                                if(tmpInterval < 10*24*3600*1000){
                                    data.interval=1;
                                    upload.call(this,minmaxflag);
                                }else {
                                    data.interval=0;
                                    upload.call(this,minmaxflag);
                                }
                            }
                            if(e.trigger == "navigator"){
                                var tmpInterval = e.max - e.min;
                                if(tmpInterval < 10*24*3600*1000){
                                    data = {"trend":true,"product":element,"interval":1,"trendmin":e.min,"trendmax":e.max};
                                    upload.call(this,minmaxflag);
                                }else {
                                    data = {"trend":true,"product":element,"interval":0,"trendmin":e.min,"trendmax":e.max};
                                    upload.call(this,minmaxflag);
                                }
                            }
                        },this);
                }else {
                    if(product){
                        if(this.selectedProductPort.length>1) {
                            let tmpExtr = this.Trend.get("timeline").getExtremes();
                            var tmpInterval = tmpExtr.dataMax - tmpExtr.dataMin;
                            if(tmpInterval < 10*24*3600*1000){
                                data = {"trend":true,"product":product,"interval":1,"trendmin":tmpExtr.dataMin,"trendmax":tmpExtr.dataMax};
                                upload.call(this);
                            }else {
                                data = {"trend":true,"product":product,"interval":0,"trendmin":tmpExtr.dataMin,"trendmax":tmpExtr.dataMax};
                                upload.call(this);
                            }
                        }else {
                            data = {"trend":true,"coldtrend":true,"product":product};
                            upload.call(this);
                        }
                    }
                }
            }
        };
    };
    //Prototype context
    OpenTank(numTank) {
        //проверяем наличие
        if((this.selectedTanks.indexOf(numTank)) == (-1)){
            //в массиве нет элемента
            this.selectedTanks.push(numTank);
            let levelPlot = {
                id:"level"+numTank,
                showInNavigator:true,
                type: 'line',
                name: 'Уровень резервуара '+numTank,
                tooltip: {
                    valueDecimals: 2,
                    valueSuffix:' мм.'
                },
                color:"orange",
                yAxis:"level",
                linkedTo:"levelroot"
            };
            let massPlot = {
                id:"mass"+numTank,
                type: 'line',
                    name: 'Масса в резервуаре '+numTank,
                tooltip: {
                valueDecimals: 2,
                    valueSuffix:' т.'
                },
                color:"lightgreen",
                yAxis:"mass",
                linkedTo:"massroot"
            };
            let volumePlot = {
                id:"volume"+numTank,
                type: 'line',
                name: 'Объем в резервуаре '+numTank,
                tooltip: {
                    valueDecimals: 2,
                    valueSuffix: ' см3'
                },
                color: "blue",
                yAxis:"volume",
                linkedTo:"volumeroot"
            };
            let temperaturePlot = {
                id:"temperature"+numTank,
                type: 'line',
                    name: 'Температура в резервуаре '+numTank,
                tooltip: {
                valueDecimals: 2,
                    valueSuffix:' град. С.'
                },
                color:"red",
                yAxis:"temper",
                linkedTo:"temperatureroot"
                };
            let tempvaporPlot = {
                id:"tempvapor"+numTank,
                type: 'line',
                name: 'Т. паров в резервуаре '+numTank,
                tooltip: {
                    valueDecimals: 2,
                    valueSuffix: ' град. С.'
                },
                color: "yellow",
                yAxis: "temper",
                linkedTo:"vaportemperatureroot"
            };
            let plotPlot = {
                id:"plot"+numTank,
                type: 'line',
                    name: 'Плотность продукта в резервуаре'+numTank,
                tooltip: {
                valueDecimals: 2,
                    valueSuffix:' кг/м3'
                },
                color:"grey",
                yAxis: "plot",
                linkedTo:"plotroot"
            };

            //add series for tank
            this.Trend.addSeries(levelPlot);
            this.Trend.addSeries(massPlot);
            this.Trend.addSeries(volumePlot);
            this.Trend.addSeries(temperaturePlot);
            this.Trend.addSeries(tempvaporPlot);
            this.Trend.addSeries(plotPlot);

            //init Loading tank on trend
            this.Uploader(false,numTank);
        }
    };
    CloseTank(numTank) {
        let index = this.selectedTanks.indexOf(numTank);
        if(index > -1){
            this.selectedTanks.splice(index,1);
            this.Trend.get("level"+numTank).remove();
            this.Trend.get("mass"+numTank).remove();
            this.Trend.get("volume"+numTank).remove();
            this.Trend.get("temperature"+numTank).remove();
            this.Trend.get("tempvapor"+numTank).remove();
            this.Trend.get("plot"+numTank).remove();

            if(this.selectedTanks.length == 0){
                this.Trend.showLoading("Нет данных для отображения");
            }
        }
    };
    OpenPlotProduct(product){
        console.log("Open:",product);
        //проверяем наличие
        if((this.selectedProductPort.indexOf(product)) == (-1)) {
            //в массиве нет элемента
            this.selectedProductPort.push(product);

            let ser_t = {
                id:"t_"+product,
                type: 'line',
                color:Global.colorsPortLegend[0],
                name: 'Температура '+product,
                tooltip: {
                    valueDecimals: 2,
                    valueSuffix:' град С.'
                },
                yAxis:"temper",
                linkedTo:"t_root"
            };
            let ser_t1 = {
                id:"t1_"+product,
                color:Global.colorsPortLegend[1],
                type: 'line',
                name: 'Температура 1 '+product,
                tooltip: {
                    valueDecimals: 2,
                    valueSuffix:' град С.'
                },
                yAxis:"temper",
                linkedTo:"t1_root"
            };
            let ser_t2 = {
                id:"t2_"+product,
                color:Global.colorsPortLegend[2],
                type: 'line',
                name: 'Температура 2 '+product,
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix:' град С.'
                },
                yAxis:"temper",
                linkedTo:"t2_root"
            };
            let ser_p = {
                id:"p_"+product,
                color:Global.colorsPortLegend[3],
                type: 'line',
                name: 'Давление '+product,
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix:' кг/см2'
                },
                yAxis:"press",
                linkedTo:"p_root"
            };
            let ser_p1 = {
                id:"p1_"+product,
                color:Global.colorsPortLegend[4],
                type: 'line',
                name: 'Плотность 1 '+product,
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix:' кг/м3'
                },
                yAxis:"plot",
                linkedTo:"p1_root"
            };
            let ser_p2 = {
                id:"p2_"+product,
                color:Global.colorsPortLegend[5],
                type: 'line',
                name: 'Плотность 2 '+product,
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix:' кг/м3'
                },
                yAxis:"plot",
                linkedTo:"p2_root"
            };
            let ser_f1 = {
                id:"f1_"+product,
                color:Global.colorsPortLegend[6],
                type: 'line',
                name: 'Расход 1 '+product,
                tooltip: {
                    valueDecimals: 0,
                    valueSuffix:' кг/ч.'
                },
                yAxis:"flow",
                linkedTo:"f1_root"
            };
            let ser_f2 = {
                id:"f2_"+product,
                color:Global.colorsPortLegend[7],
                type: 'line',
                name: 'Расход 2 '+product,
                tooltip: {
                    valueDecimals: 0,
                    valueSuffix:' кг/ч.'
                },
                yAxis:"flow",
                linkedTo:"f2_root"
            };
            let ser_m1 = {
                id:"m1_"+product,
                color:Global.colorsPortLegend[8],
                type: 'line',
                name: 'Тек. счетчик 1 '+product,
                tooltip: {
                    valueDecimals: 0,
                    valueSuffix:' кг.'
                },
                yAxis:"mass",
                linkedTo:"m1_root"
            };
            let ser_m2 = {
                id:"m2_"+product,
                color:Global.colorsPortLegend[9],
                type: 'line',
                name: 'Тек. счетчик 2 '+product,
                tooltip: {
                    valueDecimals: 2,
                    valueSuffix:' кг.'
                },
                yAxis:"mass",
                linkedTo:"m2_root"
            };
            let ser_ms1 = {
                id:"ms1_"+product,
                color:Global.colorsPortLegend[10],
                type: 'line',
                name: 'Суммарный счетчик 1 '+product,
                tooltip: {
                    valueDecimals: 0,
                    valueSuffix:' кг.'
                },
                yAxis:"mass",
                linkedTo:"ms1_root"
            };
            let ser_ms2 = {
                id:"ms2_"+product,
                color:Global.colorsPortLegend[11],
                type: 'line',
                name: 'Суммарный счетчик 2 '+product,
                tooltip: {
                    valueDecimals: 0,
                    valueSuffix:' кг.'
                },
                yAxis:"mass",
                linkedTo:"ms2_root"
            };

            //add series for tank
            this.Trend.addSeries(ser_t);
            this.Trend.addSeries(ser_t1);
            this.Trend.addSeries(ser_t2);
            this.Trend.addSeries(ser_p);
            this.Trend.addSeries(ser_p1);
            this.Trend.addSeries(ser_p2);
            this.Trend.addSeries(ser_f1);
            this.Trend.addSeries(ser_f2);
            this.Trend.addSeries(ser_m1);
            this.Trend.addSeries(ser_m2);
            this.Trend.addSeries(ser_ms1);
            this.Trend.addSeries(ser_ms2);

            this.Uploader(false,false,product);
        }
    }
    ClosePlotProduct(product){
        console.log("Close:",product);
        let index = this.selectedProductPort.indexOf(product);
        if(index > -1) {
            //в массиве нет элемента
            this.selectedProductPort.splice(index, 1);

            this.Trend.get("t_"+product).remove();
            this.Trend.get("t1_"+product).remove();
            this.Trend.get("t2_"+product).remove();
            this.Trend.get("p_"+product).remove();
            this.Trend.get("p1_"+product).remove();
            this.Trend.get("p2_"+product).remove();
            this.Trend.get("f1_"+product).remove();
            this.Trend.get("f2_"+product).remove();
            this.Trend.get("m1_"+product).remove();
            this.Trend.get("m2_"+product).remove();
            this.Trend.get("ms1_"+product).remove();
            this.Trend.get("ms2_"+product).remove();

            if(this.selectedProductPort.length == 0){
                this.Trend.showLoading("Нет данных для отображения");
            }
        }
    }
}
$(document).ready(function(){
    Global.MainTrend = new TrendEngine("maintrend");
    Global.MainTrend.Trend.showLoading("Нет данных для отображения");

    $(document).on("keydown",function (e) {
        console.log("key down:",e);
        if(e.keyCode == 37 && !e.ctrlKey){//Left No ctrl
            var request = {trigger:"keydown",front:false,ctrl:false};
            Global.MainTrend.Uploader(request);
        }
        if(e.keyCode == 37 && e.ctrlKey){//Left with ctrl
            var request = {trigger:"keydown",front:false,ctrl:true};
            Global.MainTrend.Uploader(request);
        }
        if(e.keyCode == 39 && !e.ctrlKey){//Right No ctrl
            var request = {trigger:"keydown",front:true,ctrl:false};
            Global.MainTrend.Uploader(request);
        }
        if(e.keyCode == 39 && e.ctrlKey){//Right with ctrl
            var request = {trigger:"keydown",front:true,ctrl:true};
            Global.MainTrend.Uploader(request);
        }
    });
});
