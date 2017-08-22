class gas{
    startNode() {
        //var wrapperStartOPC = this.startOPC.bind(this);

        var context = this;
        var autostart = this.showNode.bind(this);
        this.led("error");
        //var autostart = this.showNode.bind(this);
        console.log("start node GAS");
        var bodyPromise = fetch("nodes/templates/gas.html").then(function (response) {
            return response.text();
        }).then(function (text) {
            $('#gasview').html(text);

            console.log("GAS template load completed trendElement:",context.TrendElement);

            //инициализируем тренд
            context.selectedGasPark = false;
            context.TrendElement  = $(".gastrend")[0];
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
                    height:150,
                    renderTo:context.TrendElement,
                    zoomType: 'x'
                },
                legend: {
                    enabled: false
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
                series:[],
                title:{
                    text:"",
                    style:{
                        fontSize:"13px"
                    }
                }
            };
            context.Trend = new Highcharts.Chart(MainTrend_setting);
            context.Trend.context = this;
            //-------------------------------------------
            $(".gas_btn_parkselect").on("click",function (elem) {
                let numOfPark = $(this).data("gaspark");
                if(numOfPark){
                    context.Trend.setTitle({text:"Активность датчиков загазованности парка "+numOfPark});
                    if(numOfPark=="6")context.Trend.setTitle({text:"Активность датчиков загазованности парка АСН"});
                    Utility.scrollTo(".gascontainer",".gasparkgrid[data-gaspark="+numOfPark+"]");
                }

                //console.log("this:",this,"element:",elem," numOfPark:",numOfPark);
            });

            autostart();
            //wrapperStartOPC();
        });
    }
    stopNode() {

    }
    showNode(){
        //console.log("show node GAS");
        Global.nodes.map(function (elem) {
            if(elem.nodeObj){
                if(elem.nodeObj.hideNode){
                    elem.nodeObj.hideNode();
                }
            }
        });
        $("#gasview").show();
        this.led("select");
        //расчет размера блока газов
        let clH = document.documentElement.clientHeight;
        let elemOffset = $(".gascontainer").offset().top;
        let footerH = $("#footer")[0].offsetHeight;
        //преобразование
        let gasH = clH-elemOffset-footerH;
        $(".gascontainer").css({maxHeight:gasH});
        this.Trend.reflow();
    }
    hideNode(){
        $("#gasview").hide();
        this.led("unselect");
    }
}