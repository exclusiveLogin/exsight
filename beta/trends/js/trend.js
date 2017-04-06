/**
 * Created by KotovVM on 05.04.2017.
 */
$(document).ready(function(){
    console.log("Модуль трендов загружен");

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

    //init objects for trends
    Global.MainTrend = document.getElementById("maintrend");

    var MainTrend_setting = {
        credits:{enabled:false},
        chart: {
            //animation:false,
            height:500,
            renderTo:Global.MainTrend,
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
        plotOptions: {
            line:{
                marker:{
                    enabled:false
                },
            },
        },
        series:[{
            type: 'line',
            name: 'Уровень',
            data:[0,1,2,3,4,5],
            tooltip: {
                valueDecimals: 2,
                valueSuffix:' мм.'
            },
            color:"orange",
            yAxis:"level"
        },
        {
            type: 'line',
            name: 'Масса',
            data:[0,3,4,3,12,15,2],
            tooltip: {
                valueDecimals: 2,
                valueSuffix:' т.'
            },
            color:"lightgreen",
            //yAxis:0
        },
        {
            type: 'line',
            name: 'Объем',
            data:[0,3,4,3,12,15,2],
            tooltip: {
                valueDecimals: 2,
                valueSuffix:' см3'
            },
            color:"blue",
            //yAxis:0
        },
        {
            type: 'line',
            name: 'Температура',
            data:[0,3,4,3,12,15,2],
            tooltip: {
                valueDecimals: 2,
                valueSuffix:' град. С.'
            },
            color:"red",
            yAxis:"temper"
        },
        {
            type: 'line',
            name: 'Т. паров',
            data:[0,3,4,3,12,15,2],
            tooltip: {
                valueDecimals: 2,
                valueSuffix:' град. С.'
            },
            color:"yellow",
            yAxis:"temper"
        },
        {
            type: 'line',
            name: 'Плотность',
            data:[0,3,4,3,12,15,2],
            tooltip: {
                valueDecimals: 2,
                valueSuffix:' кг/м3'
            },
            color:"grey",
            //yAxis:1
        }]
    };

    Global.MainTrend = new Highcharts.stockChart(MainTrend_setting);
    Global.MainTrend.showLoading("Нет данных для отображения");
});
