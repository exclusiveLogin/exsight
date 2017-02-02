function trendToggle(state,tube) {
    if(state){
        $("#tubecard").removeClass("transparent",function () {
            $("#arj_tube_num").text(tube);
            //Global.trend.reflow();
            //Global.trend.series[0].setData([]);
            //Global.trend.series[1].setData([]);

            //Global.trend.series[0].setData(Global[user].trend);
            //Global.trend.series[1].setData(Global[user].flags);
        });
    }else {
        $("#tubecard").addClass("transparent",function () {

        });
    }
}
function loginToggle(state){
    if(state){
        $('.btnlogin').addClass('disabled active');
        $('#loginform').show(500);
    }
    else{
        $('.btnlogin').removeClass('disabled active');
        $('#loginform').hide(500);
    }
}
function resultToggle(state){
    if(state){
        $('#result').removeClass("transparent");
    }
    else{
        $('#result').addClass("transparent");
    }
}
function refreshLog() {
    if(Global.authkey){
        if(Global.jqready){
            $("#wrapper").removeClass("transparent");
            setTimeout(function () {
                $("#panel").removeClass("transparent");
            },500);

            $('.btnlogout').show();
            $('.btnlogin').hide();
        }
    }else {
        if(Global.jqready){
            $("#tubecard").delay(2000).addClass("transparent");
            $('#result').addClass("transparent");
            setTimeout(function () {
                $("#panel").addClass("transparent");
            },500);
            setTimeout(function () {
                $("#wrapper").addClass("transparent");
            },1000);
            $('.btnlogout').hide();
            $('.btnlogin').show();
        }
    }
}
function connectionState(state) {
    if(state){
        $('#panel').hide().addClass("transparent");
        $('#minview').removeClass("transparent");
        Global.conerr = 0;
    }else{
        Global.conerr++;
        $('#panel').show().removeClass("transparent");
        if(Global.conerr>3){
            $('#minview').addClass("transparent");
            $('#panel').html('<h2 class="label label-lg label-default conerror">Связь с сервером отключена</h2>');
        }else {
            $('#panel').html('<h2 class="label label-lg label-default conerror">Возникли проблемы со связью</h2>');
        }
    }
}
function renderFancy() {
    $('#fancycontainer').fancybox({
        'scrolling':'no',
        'padding':10,
        'margin':20,
        'hideOnOverlayClick':true,
        'hideOnContentClick':true,
        'type':'inline'
    });
    $('#fancycontainer').click();
    $('#fancycontainer').click(function (event) {
        if(!Global.fancy) {
            event.preventBubble();
        }
    });
}
function toggleFancy(num) {
    Global.fancy = !Global.fancy;
    if(Global.fancy){
        $('.tank').addClass("fancyemiter");//переводим на fancy
        var tmpnum = Global.tankselect;
        Global.nodeDependencies.respark.tankparmToggle(false);//закрываем окно
        Global.tankselect = tmpnum;
        $.fancybox.open("#fancycontainer");
    }else {
        $('.tank').removeClass("fancyemiter");//delete fancy
        $.fancybox.close();
        Global.nodeDependencies.respark.tankparmToggle(true,Global.tankselect);
    }
}
function refreshTooltips() {
    $('.glyphicon-warning-sign').each(function () {
        $(this).attr("data-tooltip", "давно не обновлялся");
    });
    $('.glyphicon-arrow-down').each(function () {
        $(this).attr("data-tooltip", "Идет слив НП");
    });
    $('.glyphicon-arrow-up').each(function () {
        $(this).attr("data-tooltip", "Идет налив НП");
    });
    $('.glyphicon-remove-circle').each(function () {
        $(this).attr("data-tooltip", "Ошибка уровнемера");
    });
    $("#panelstate").off();
    tooltipHandler();
    function tooltipHandler() {
        $("#panelstate").on("mousemove","[data-tooltip]",function (eventObject) {

            var data_tooltip = $(this).attr("data-tooltip");


            var tmpoffset = $("#tooltip").offset().left;
            var tmpw = $("#tooltip").width();
            var tmppanelw = $("#panelstate").outerWidth();
            //console.log("offset:"+tmpoffset+"width:"+tmpw+"panelwidth:"+tmppanelw);
            if((tmpoffset+tmpw+100)>tmppanelw){
                $("#tooltip").text(data_tooltip)
                    .css({
                        "top" : eventObject.pageY + 10,
                        "left" : eventObject.pageX - 10 - tmpw
                    })
                    .show();
            }else {
                $("#tooltip").text(data_tooltip)
                    .css({
                        "top" : eventObject.pageY + 10,
                        "left" : eventObject.pageX + 10
                    })
                    .show();
            }

        }).mouseout(function () {

            $("#tooltip").hide(0,function () {
                $(this).text("")
                    .css({
                        "top" : 0,
                        "left" : 0
                    });
            })

        });
    }
}