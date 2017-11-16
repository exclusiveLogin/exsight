module.exports = class railgas{
    constructor(){
        this.showed = false;
    }
    startNode() {
        let wrapperStartOPC = this.startOPC.bind(this);

        let context = this;
        let autostart = this.showNode.bind(this);
        this.led("error");
        console.log("start node RAILGAS");
        let bodyPromise = fetch("nodes/templates/railgas.html").then(function (response) {
            return response.text();
        }).then(function (text) {
            $('#railgasview').html(text);

            //console.log("GAS template load completed trendElement:",context.TrendElement);

            //инициализируем тренд
            context.selectedGasPark = false;
            context.TrendElement  = $(".railgastrend")[0];
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
                    // events:{
                    //     setExtremes:function (e) {
                    //         console.log(e);
                    //         this.chart.context.Uploader(e);
                    //     }
                    // }
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
                    floating:true,
                    text:"",
                    style:{
                        fontSize:"13px"
                    }
                }
            };
            context.Trend = new Highcharts.Chart(MainTrend_setting);
            context.Trend.context = this;
            context.Trend.showLoading("Нет данных для отображения");
            //-----расставляем номера датчиков-----------
            $("#railgasview .gassensor").each(function () {
                let tmp = $(this).data("gassensor");
                if(tmp){
                    $(this).prepend("<p class=\"gasMiniTitle\">SGO"+tmp+"</p>");
                }
            });
            //--------------добавляем 3d со старта--------
            $(".railgas3dwrapper").addClass("with3d");
            $(".railgascontainer").addClass("with3d");
            $(".railgasgrid").addClass("with3d");
            $(".rail_container").addClass("with3d");

            //--------------------------------------------
            $(".railgasToggle3d .btn-toggle3d").on("click",function (elem) {
                $(".railgas3dwrapper").toggleClass("with3d");
                $(".railgascontainer").toggleClass("with3d");
                $(".railgasgrid").toggleClass("with3d");
                $(".rail_container").toggleClass("with3d");
                //$(".gassensor").toggleClass("with3d");
                //$(".gasparkname").toggleClass("with3d");
            });

            //подключаем smartRender
            try {
                context.smartRender = new Utility.Renderer(context,["value"]);
            }catch (e){
                console.error(e);
            }

            $(".railgas_refresh_btn").on("click",function () {
                context.refreshTrends();
            });

            //подключаем progressbar
            context.loading_trends_pb = new LoadingPGClass("loading_railtrends");

            wrapperStartOPC();
            //autostart();
        });

    }
    stopNode() {

    }
    showNode(){
        //убираем все
        Global.nodes.map(function (elem) {
            if(elem.nodeObj){
                if(elem.nodeObj.hideNode){
                    elem.nodeObj.hideNode();
                }
            }
        });
        //показываем наш
        $("#railgasview").show();
        this.led("select");

        //корректируем тренд
        this.Trend.reflow();

        //ставим флаг
        this.showed = true;

        //принудительно рефрешим порт при открытии вкладки
        this.refreshUPES();

    }
    hideNode(){
        if(this.showed){
            $("#railgasview").hide();
            this.led("unselect");
            this.showed = false;
            while(this.Trend.series[0]){
                this.Trend.series[0].remove(false);
            }
            this.Trend.redraw();
            this.Trend.showLoading("Нет данных для отображения");
        }
    }
    startOPC(){
        let wrapperRefreshUPES = this.refreshUPES.bind(this);
        function start () {
            wrapperRefreshUPES();

            if (this.OPCTimer)clearInterval(this.OPCTimer);
            this.OPCTimer=setInterval(wrapperRefreshUPES,60000);
        }
        start.bind(this)();
    }
    stopOPC(){
        if (this.OPCTimer)clearInterval(this.OPCTimer);
    }
    refreshUPES(){
        this.led("load");//сетим в loading
        let context = this;
        $.ajax({
            url:"getupes.php",
            dataType:"json",
            method:'GET',
            data:{"gaspark":true,"gaspark_min":7,"gaspark_max":45},
            success:function(data){
                context.lastAjaxData = data;
                checkUPES(data);
            },
            error:function(){
                console.log("error UPES park ajax data");
                context.led("error");
            }
        });

        function checkUPES(data) {
            context.led("ok");
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
                            let nowSensor = data[sensor].id;
                            let DOMelement = $("#railgasview .gassensor[data-gassensor="+nowSensor+"]");
                            let DOMvalue = DOMelement.find(".gasvalue");

                            //дефолтим дизайн элемента
                            DOMelement
                                .removeClass("ok warn emer error old");
                            DOMvalue
                                .removeClass("ok warn emer error old");

                            //рендерим значение датчика
                            DOMvalue.text(data[sensor].value);

                            //проверка на устаревание
                            if(Utility.checkExpired(data[sensor].datetime)){
                                DOMvalue.addClass("old");
                                DOMelement.addClass("old");
                                DOMvalue.text("Устарел");
                            }//проверка на уровень
                            else if(Number(data[sensor].value)>10 && Number(data[sensor].value)<50){
                                DOMvalue.addClass("warn");
                                DOMelement.addClass("warn");
                            }else if(Number(data[sensor].value)>49){
                                DOMvalue.addClass("emer");
                                DOMelement.addClass("emer");
                            }else {
                                DOMvalue.addClass("ok");
                                DOMelement.addClass("ok");
                            }
                            //проверка на ошибку датчика
                            if(Number(data[sensor].value)==-1000){
                                DOMvalue.addClass("error");
                                DOMelement.addClass("error");
                                DOMvalue.text("Ошибка");
                            }

                            //ставим tooltip с датой
                            DOMelement.attr("data-tooltip",data[sensor].fixtime);
                            DOMelement = null;
                            DOMvalue = null;
                        }
                    }catch (e){
                        //console.log("smartRender error");
                    }
                }
                //дефолтим кнопки
                $(".railgasparkbtnlabel")
                    .removeClass("label-warning label-danger label-primary")
                    .addClass("label-success")
                    .text("OK");
                $("#railgasview div[data-railgaspark]").each(function () {
                    //для каждого парка определяем id
                    let tmpnum = $(this).attr("data-railgaspark");
                    //ищем элемент label на кнопке для текущего парка
                    let parklabel = $(".railgasSelectParkPanel .railgas_btn_parkselect[data-railgaspark="+tmpnum+"]")
                        .find(".gasparkbtnlabel");

                    //бежим по кнопкам и ищем аварии устаревание и предупреждения
                    //warn btn
                    if($(this).find(".gassensor, .gassensortk").hasClass("warn")){
                        if(parklabel[0]){
                            parklabel.addClass("label-warning").text("Предупр.");
                        }
                    }
                    //emer btn
                    if($(this).find(".gassensor, .gassensortk").hasClass("emer")){
                        if(parklabel[0]){
                            parklabel.addClass("label-danger").text("Газ");
                        }
                    }
                    //old btn
                    if($(this).find(".gassensor, .gassensortk").hasClass("old")){
                        if(parklabel[0]){
                            parklabel.removeClass("label-success").addClass("label-primary").text("Устарел");
                        }
                    }
                    //error btn
                    if($(this).find(".gassensor, .gassensortk").hasClass("error")){
                        if(parklabel[0]){
                            parklabel.addClass("label-warning").text("Ошибка");
                        }
                    }
                });

                data = null;
            }
        }
    }
    refreshTrends(){
        if(!$(".railgas_refresh_btn").hasClass("disable")){
            //btn deactivation
            $("#loading_railtrends").fadeIn(500);
            $(".railgas_refresh_btn").addClass("active disable");
            //собираем сенсоры в полученном парке
            let context = this;
            while (context.Trend.series[0]){
                context.Trend.series[0].remove(false);
            }
            context.Trend.redraw();
            context.Trend.showLoading("Загрузка данных");


            let sensors = [];
            let sensorElements = $("#railgasview div[data-railgaspark]").find(".gassensor, .gassensortk");
            sensorElements.each(function(){
                let sens = $(this).data("gassensor");
                if(sens){
                    sensors.push($(this).data("gassensor"));
                }
            });

            /*function * serializer(sensors){
                for (let sensor in sensors){
                    //console.log("yield:",sensor," sensor:",sensors[sensor]);
                    yield sensor;
                }
                //console.log("done...all sensor is loaded");
            }*/

            //let gen = serializer(sensors);

            //getSensorTrend(gen.next().value);


            sensors.map(function (sensor,idx) {
                $.ajax({
                    url:"getupes.php",
                    dataType:"json",
                    method:'GET',
                    data:{"gaspark_hist":true,"gaspark_hist_id":sensor},
                    success:function(data){
                        renderTrends(data);
                        if(idx == sensors.length-1){
                            context.Trend.hideLoading();
                            $(".railgas_refresh_btn").removeClass("active disable");
                            context.loading_trends_pb.setStep(0.001);
                            setTimeout(function () {
                                $("#loading_railtrends").fadeOut(500);
                            },500);
                        }
                    },
                    error:function(){
                        console.log("error UPES HISTORY ajax");
                        context.led("error");
                    },
                    complete:function () {
                        context.loading_trends_pb.setStep(val2perc(idx,sensors.length));
                    }
                });
            });

            function val2perc(val,max){
                let tmp = max/100;
                return val/tmp;
            }

            function renderTrends(data) {
                if(data){
                    //шаблон для тренда
                    let trendSet = {
                        id:"sgo_"+data[0].num,
                        type: 'line',
                        name: 'Активность сенсора SGO_'+data[0].num,
                        tooltip: {
                            valueDecimals: 0,
                            valueSuffix:' %'
                        },
                    };
                    let trend = [];
                    for (var e in data){//пробег по массиву
                        if(data[e].utc && data[e].value){//проверка параметров
                            trend.push([Number(data[e].utc),Number(data[e].value)]);
                        }
                    }
                    trendSet.data = trend;
                    //тут имеем массив с трендом
                    context.Trend.addSeries(trendSet);
                    //context.Trend.hideLoading();
                }
            }
        }

    }
}