class TrendEngine{
    constructor(domid){
        this.selectedTanks = [];
        //console.log("constructor this:",this);
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
            xAxis: {
                type: 'datetime',
                ordinal:false,
                events:{
                    setExtremes:function (e) {
                        this.chart.context.Uploader(e);
                    }
                }
            },
            navigator:{
                adaptToUpdateData:false
            },
            yAxis: [{
                id:"level",
                title: {
                    text: 'Уровень'
                }
            },{
                id:"temper",
                title: {
                    text: 'Температура'
                }
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
            series:[
                {
                    id:"levelroot",
                    type: 'line',
                    name: 'Уровень',
                    tooltip: {
                        valueDecimals: 2,
                        valueSuffix:' мм.'
                    },
                     color:"orange",
                     yAxis:"level"
                },{
                    id:"massroot",
                    type: 'line',
                    name: 'Масса',
                    tooltip: {
                        valueDecimals: 2,
                        valueSuffix:' т.'
                    },
                    color:"lightgreen",
                },{
                    id:"volumeroot",
                    type: 'line',
                    name: 'Объем',
                    tooltip: {
                    valueDecimals: 2,
                    valueSuffix:' см3'
                    },
                    color:"blue",
                },{
                    id:"temperatureroot",
                    type: 'line',
                    name: 'Температура',
                    tooltip: {
                     valueDecimals: 2,
                     valueSuffix:' град. С.'
                    },
                    color:"red",
                    yAxis:"temper"
                },{
                    id:"vaportemperatureroot",
                    type: 'line',
                    name: 'Т. паров',
                    tooltip: {
                     valueDecimals: 2,
                     valueSuffix:' град. С.'
                    },
                    color:"yellow",
                    yAxis:"temper"
                },{
                    id:"plotroot",
                    type: 'line',
                    name: 'Плотность',
                    tooltip: {
                     valueDecimals: 2,
                     valueSuffix:' кг/м3'
                    },
                    color:"grey",
                }
            ]
        };
        this.Trend = new Highcharts.stockChart(MainTrend_setting);
        this.Trend.context = this;
        this.Uploader = function(e,tank){
            //init upload func
            var upload = function(minmax) {
                var context = this;
                 $.ajax({
                     sync:true,
                     url:"trendengine.php",
                     dataType:"json",
                     method:'GET',
                     data:data,
                     success:function(data){
                         context.Trend.hideLoading();
                         if(data){
                             let level = [],
                             mass=[],
                             volume=[],
                             temperature=[],
                             vapor_temperature=[],
                             plot=[];
                             let tanknum = Number(data[0].num);
                             data.map(function (elem) {
                                 let utc;
                                 if(elem.utc)utc = Number(elem.utc);
                                 if(elem.level && elem.mass && elem.volume && elem.temperature && elem.vapor_temperature && elem.plot){
                                     level.push([utc,Number(elem.level)]);
                                     mass.push([utc,Number(elem.mass)]);
                                     volume.push([utc,Number(elem.volume)]);
                                     temperature.push([utc,Number(elem.temperature)]);
                                     vapor_temperature.push([utc,Number(elem.vapor_temperature)]);
                                     plot.push([utc,Number(elem.plot)]);
                                 }
                             });
                             //setter
                             context.Trend.get("level"+tanknum).setData([]);
                             context.Trend.get("level"+tanknum).setData(level);

                             // context.Trend.get("mass"+tanknum).setData([]);
                             // context.Trend.get("mass"+tanknum).setData(mass);
                             //
                             // context.Trend.get("volume"+tanknum).setData([]);
                             // context.Trend.get("volume"+tanknum).setData(volume);
                             //
                             // context.Trend.get("temperature"+tanknum).setData([]);
                             // context.Trend.get("temperature"+tanknum).setData(temperature);
                             //
                             // context.Trend.get("tempvapor"+tanknum).setData([]);
                             // context.Trend.get("tempvapor"+tanknum).setData(vapor_temperature);
                             //
                             // context.Trend.get("plot"+tanknum).setData([]);
                             // context.Trend.get("plot"+tanknum).setData(plot);


                             if(minmax){
                                 $.ajax({
                                     url:"trendengine.php",
                                     dataType:"json",
                                     method:'GET',
                                     data:{"minmax":true,"tank":tanknum},
                                     success:function(data){
                                         if(data){
                                             if(data[0] && data[1]){
                                                 let tmpExtr = context.Trend.get("level").getExtremes();
                                                 console.log("extremes:",tmpExtr);
                                                 console.log("user interval:",tmpExtr.userMax - tmpExtr.userMin,"abs interval:",
                                                     tmpExtr.max - tmpExtr.min,"data interval:",tmpExtr.dataMax - tmpExtr.dataMin);

                                                 context.Trend.get("level"+tanknum).addPoint([Number(data[0].utc),Number(data[0].level)],false);
                                                 context.Trend.get("level"+tanknum).addPoint([Number(data[1].utc),Number(data[1].level)],false);

                                                 // context.Trend.get("mass"+tanknum).addPoint([Number(data[0].utc),Number(data[0].mass)],false);
                                                 // context.Trend.get("mass"+tanknum).addPoint([Number(data[1].utc),Number(data[1].mass)],false);
                                                 //
                                                 // context.Trend.get("volume"+tanknum).addPoint([Number(data[0].utc),Number(data[0].volume)],false);
                                                 // context.Trend.get("volume"+tanknum).addPoint([Number(data[1].utc),Number(data[1].volume)],false);
                                                 //
                                                 // context.Trend.get("temperature"+tanknum).addPoint([Number(data[0].utc),Number(data[0].temperature)],false);
                                                 // context.Trend.get("temperature"+tanknum).addPoint([Number(data[1].utc),Number(data[1].temperature)],false);
                                                 //
                                                 // context.Trend.get("tempvapor"+tanknum).addPoint([Number(data[0].utc),Number(data[0].vapor_temperature)],false);
                                                 // context.Trend.get("tempvapor"+tanknum).addPoint([Number(data[1].utc),Number(data[1].vapor_temperature)],false);
                                                 //
                                                 // context.Trend.get("plot"+tanknum).addPoint([Number(data[0].utc),Number(data[0].plot)],false);
                                                 // context.Trend.get("plot"+tanknum).addPoint([Number(data[1].utc),Number(data[1].plot)],false);

                                                 context.Trend.redraw();
                                                 context.Trend.get("level").setExtremes(tmpExtr.dataMin,tmpExtr.dataMax);

                                             }
                                         }
                                     },
                                     error:function(err){
                                         console.log("error to load state ajax :",err);
                                     }
                                 });
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
                        if(e.triggerOp){
                            if(e.triggerOp == "navigator-drag"){
                                if(e.DOMEvent){
                                    if(e.DOMEvent.type == "mouseup"){
                                        var tmpInterval = e.max - e.min;
                                        if(tmpInterval < 10*24*3600*1000){
                                            data = {"trend":true,"tank":element,"interval":1,"trendmin":e.min,"trendmax":e.max};
                                            upload.call(this,minmaxflag);
                                        }else {
                                            data = {"trend":true,"tank":element,"interval":0,"trendmin":e.min,"trendmax":e.max};
                                            upload.call(this,minmaxflag);
                                        }
                                    }
                                }
                            }
                        }
                    },this);

                }
            }else {
                if(tank){
                    data = {"trend":true,"coldtrend":true,"tank":tank};
                    upload.call(this);
                }
            }
        };
    }
    //Prototype context
    OpenTank(numTank) {
        //проверяем наличие
        if((this.selectedTanks.indexOf(numTank)) == (-1)){
            //в массиве нет элемента
            this.selectedTanks.push(numTank);
            let levelPlot = {
                id:"level"+numTank,
                type: 'line',
                name: 'Уровень',
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
                    name: 'Масса',
                tooltip: {
                valueDecimals: 2,
                    valueSuffix:' т.'
                },
                color:"lightgreen",
                linkedTo:"massroot"
            };
            let volumePlot = {
                id:"volume"+numTank,
                type: 'line',
                name: 'Объем',
                tooltip: {
                    valueDecimals: 2,
                    valueSuffix: ' см3'
                },
                color: "blue",
                linkedTo:"volumeroot"
            };
            let temperaturePlot = {
                id:"temperature"+numTank,
                type: 'line',
                    name: 'Температура',
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
                name: 'Т. паров',
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
                    name: 'Плотность',
                tooltip: {
                valueDecimals: 2,
                    valueSuffix:' кг/м3'
                },
                color:"grey",
                linkedTo:"plotroot"
            };

            //add series for tank
            this.Trend.addSeries(levelPlot);
            // this.Trend.addSeries(massPlot);
            // this.Trend.addSeries(volumePlot);
            // this.Trend.addSeries(temperaturePlot);
            // this.Trend.addSeries(tempvaporPlot);
            // this.Trend.addSeries(plotPlot);

            //init Loading tank on trend
            this.Uploader(false,numTank);
        }
    };
    CloseTank(numTank) {
        let index = this.selectedTanks.indexOf(numTank);
        if(index > -1){
            this.selectedTanks.slice(index,1);
        }
    };
}
$(document).ready(function(){
    Global.MainTrend = new TrendEngine("maintrend");
    Global.MainTrend.Trend.showLoading("Нет данных для отображения");
});
