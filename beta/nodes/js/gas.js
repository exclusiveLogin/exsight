class gas{
    constructor(){
        this.showed = false;
    }
    startNode() {
        let wrapperStartOPC = this.startOPC.bind(this);

        let context = this;
        let autostart = this.showNode.bind(this);
        this.led("error");
        //var autostart = this.showNode.bind(this);
        console.log("start node GAS");
        let bodyPromise = fetch("nodes/templates/gas.html").then(function (response) {
            return response.text();
        }).then(function (text) {
            $('#gasview').html(text);

            //console.log("GAS template load completed trendElement:",context.TrendElement);

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
            let G_Setting = {
                global:{
                    getTimezoneOffset:function () {
                        var offset = new Date().getTimezoneOffset();
                        return offset;
                    }}
            };
            Highcharts.setOptions(G_Setting);
            let MainTrend_setting = {
                credits:{enabled:false},
                chart: {
                    height:100,
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
            //-----расставляем номера датчиков-----------
            $("#gasview .gassensor,#gasview .gassensortk").each(function () {
                let tmp = $(this).data("gassensor");
                //console.log("DOM:",this,"data:",tmp);
                if(tmp){
                    $(this).prepend("<p class=\"gasMiniTitle\">SGO"+tmp+"</p>");
                }
            });
            //-------------------------------------------
            $(".gas_btn_parkselect").on("click",function (elem) {
                let numOfPark = $(this).data("gaspark");
                if(numOfPark){
                    context.Trend.setTitle({text:"Активность датчиков загазованности парка "+numOfPark});
                    if(numOfPark=="6")context.Trend.setTitle({text:"Активность датчиков загазованности парка АСН"});
                    if(numOfPark=="clearfacilities")context.Trend.setTitle({text:"Активность датчиков загазованности очистных сооружений"});
                    if(numOfPark=="azs")context.Trend.setTitle({text:"Активность датчиков загазованности АЗС"});
                    if(numOfPark=="subearthtank")context.Trend.setTitle({text:"Активность датчиков загазованности подземного резервуара"});
                    Utility.scrollTo(".gascontainer",".gascontainer div[data-gaspark="+numOfPark+"]");
                }

                //console.log("this:",this,"element:",elem," numOfPark:",numOfPark);
            });
            //--------------------------------------------
            $(".gasToggle3d .btn-toggle3d").on("click",function (elem) {
                $(".gas3dwrapper").addClass("with3d");
                $(".gascontainer").addClass("with3d");
                $(".gastank").addClass("with3d");
                $(".gaspark").addClass("with3d");
                $(".gasparkgrid").addClass("with3d");
                $(".gassensor").addClass("with3d");
                $(".gasparkname").addClass("with3d");
            });
            $(".gasToggle3d .btn-toggle2d").on("click",function (elem) {
                $(".gas3dwrapper").removeClass("with3d");
                $(".gascontainer").removeClass("with3d");
                $(".gastank").removeClass("with3d");
                $(".gaspark").removeClass("with3d");
                $(".gasparkgrid").removeClass("with3d");
                $(".gassensor").removeClass("with3d");
                $(".gasparkname").removeClass("with3d");
            });

            //подключаем smartRender
            try {
                context.smartRender = new Utility.Renderer(context,["value"]);
            }catch (e){
                console.error(e);
            }


            wrapperStartOPC();
            autostart();
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

        this.showed = true;
    }
    hideNode(){
        $("#gasview").hide();
        this.led("unselect");
        this.showed = false;
    }
    startOPC(){
        let wrapperRefreshUPES = this.refreshUPES.bind(this);
        function start () {
            wrapperRefreshUPES();

            if (this.OPCTimer)clearInterval(this.OPCTimer);
            this.OPCTimer=setInterval(wrapperRefreshUPES,10000);
        }
        start.bind(this)();
    }
    stopOPC(){
        if (this.OPCTimer)clearInterval(this.OPCTimer);
    }
    refreshUPES(){
        this.led("ok");//сетим в ОК ..если потом что то, то пересетим
        let context = this;
        $.ajax({
            url:"getupes.php",
            dataType:"json",
            method:'GET',
            data:{"gaspark":true,"gaspark_min":76,"gaspark_max":202},
            success:function(data){
                //console.log("UPES park:",data);
                context.lastAjaxData = data;
                checkUPES(data);
            },
            error:function(){
                console.log("error UPES park ajax data");
                context.led("error");
            }
        });

        function checkUPES(data) {
            //console.log("checkport this:",this,"context:",context);
            if(data){
                //console.log("data from check");
                //в UPES контролируем
                // - устаревание информации
                // - уровни загазованности
                // - ошибки сенсоров

                for (let sensor in data){
                    //проверка на устаревание
                    if(Utility.checkExpired(data[sensor].datetime)){
                        context.led("error");
                    }
                    if(Number(data[sensor].value)>10 && Number(data[sensor].value)<50){
                        context.led("warning");
                    }else if(Number(data[sensor].value)>49){
                        context.led("error");
                    }
                    //проверка на ошибку датчика
                    if(Number(data[sensor].value)==-1000){
                        context.led("error");
                    }
                }

                if(context.showed)renderUPES(data);
                data = null;
            }
        }

        function renderUPES(data){
            if(data && context.smartRender){
                for(var sensor in data){
                    try {
                        if(context.smartRender.needRender(sensor)){
                            /*if(sensor == "0"){//если первая запись сетим в дефолт
                                //console.log("RENDER 0 el value:",data[sensor].value,"lad value:",context.lastAjaxData[sensor].value);
                                //сетим кнопки в ОК
                                $(".gasSelectParkPanel .gas_btn_parkselect")
                                    .find(".gasparkbtnlabel")
                                    .removeClass("label-warning label-danger label-primary")
                                    .addClass("label-success")
                                    .text("OK");
                                $("#gasview .gassensor, #gasview .gassensortk")
                                    .removeClass("ok warn emer error old");
                                $("#gasview .gasvalue")
                                    .removeClass("ok warn emer error old");
                            }*/
                            let nowSensor = data[sensor].id;
                            let DOMelement = $("#gasview .gassensor[data-gassensor="+nowSensor+"],#gasview" +
                                " .gassensortk[data-gassensor="+nowSensor+"]");
                            let DOMvalue = DOMelement.find(".gasvalue");

                            //дефолтим дизайн элемента
                            DOMelement
                                .removeClass("ok warn emer error old");
                            DOMvalue
                                .removeClass("ok warn emer error old");

                            //определяем номер парка по DOM элементу
                            let park = DOMelement.closest("[data-gaspark]");
                            let parknum = park.attr("data-gaspark");
                            //находим кнопку для парка
                            let parklabel = false;
                            if(parknum){
                                parklabel = $(".gasSelectParkPanel .gas_btn_parkselect[data-gaspark="+parknum+"]")
                                    .find(".gasparkbtnlabel")
                                    .removeClass("label-warning label-danger label-primary")
                                    .addClass("label-success")
                                    .text("OK");
                                //дефолтим кнопку

                                //console.log("DOM gas btn label:",parklabel);
                            }
                            //-рендерим значение датчика
                            DOMvalue.text(data[sensor].value);
                            //-убираем лишние классы с элемента и значения
                            //проверка на устаревание
                            if(Utility.checkExpired(data[sensor].datetime)){
                                DOMvalue.addClass("old");
                                DOMelement.addClass("old");
                                DOMvalue.text("Устарел");
                                if(parklabel)parklabel.removeClass("label-success").addClass("label-primary").text("Устарел");
                            }//проверка на уровень
                            else if(Number(data[sensor].value)>10 && Number(data[sensor].value)<50){
                                DOMvalue.addClass("warn");
                                DOMelement.addClass("warn");
                                if(parklabel)parklabel.addClass("label-warning").text("Предупр.");
                            }else if(Number(data[sensor].value)>49){
                                DOMvalue.addClass("emer");
                                DOMelement.addClass("emer");
                                if(parklabel)parklabel.addClass("label-danger").text("Газ");
                            }else {
                                DOMvalue.addClass("ok");
                                DOMelement.addClass("ok");
                            }
                            //проверка на ошибку датчика
                            if(Number(data[sensor].value)==-1000){
                                DOMvalue.addClass("error");
                                DOMelement.addClass("error");
                                DOMvalue.text("Ошибка");
                                if(parklabel)parklabel.addClass("label-warning").text("Ошибка");
                            }

                            //стави tooltip с датой
                            DOMelement.attr("data-tooltip",data[sensor].fixtime);
                            DOMelement = null;
                            DOMvalue = null;
                            parklabel = null;
                            park = null;
                        }
                    }catch (e){
                        //console.log("smartRender error");
                    }




                }
                data = null;
            }
        }
    }
}