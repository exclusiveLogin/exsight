export default class Utility{
	trendToggle(state,tube) {
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
	loginToggle(state){
		if(state){
			$('.btnlogin').addClass('disabled active');
			$('#loginform').show(500);
		}
		else{
			$('.btnlogin').removeClass('disabled active');
			$('#loginform').hide(500);
		}
	}
    panelStateToggle(state){
        if(state){
			$("#panelstate").removeClass("panelstate_hide");
        }
        else{
            $("#panelstate").addClass("panelstate_hide");
        }
    }
	resultToggle(state){
		if(state){
			$('#result').removeClass("transparent");
		}
		else{
			$('#result').addClass("transparent");
		}
	}
	refreshLog() {
		if(Global.authkey){
			if(Global.jqready){
				$("#wrapper").removeClass("transparentStatic");
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
					$("#wrapper").addClass("transparentStatic");
				},1000);
				$('.btnlogout').hide();
				$('.btnlogin').show();
			}
		}
	}
	connectionState(state) {
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
	renderFancy() {
		$('#fancycontainer').fancybox({
			'scrolling':'no',
			'padding':10,
			'margin':20,
			'hideOnOverlayClick':true,
			'hideOnContentClick':true,
			'type':'inline'
		});
        $.fancybox.open("#fancycontainer");
		$('#fancycontainer').click(function (event) {
			if(!Global.fancy) {
				event.preventBubble();
			}
		});
	}
	toggleFancy(num,dep) {
		let index = 0;
		if(dep){
			index = getNode(dep);
		}
		Global.fancy = !Global.fancy;
		if(Global.fancy){
			$('.tank').addClass("fancyemiter");//переводим на fancy
			var tmpnum = Global.tankselect;
			Global.nodes[index].nodeObj.tankparmToggle(false);//закрываем окно
			Global.tankselect = tmpnum;
			Global.nodes[index].nodeObj.openTank(tmpnum);
			$.fancybox.open("#fancycontainer");
		}else {
			$('.tank').removeClass("fancyemiter");//delete fancy
			$.fancybox.close();
			Global.nodes[index].nodeObj.openTank(Global.tankselect);
		}
	}
	refreshTooltips() {
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
    nativeTooltipHandler() {
        $(document).on("mousemove","[data-tooltip]",function (eventObject) {

            var data_tooltip = $(this).attr("data-tooltip");


            var tmpoffset = $("#tooltip").offset().left;
            var tmpw = $("#tooltip").width();
            var tmppanelw = $(document).outerWidth();
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
	userEnter(user) {
		Global.authkey=true;
		Global.loggedAs = user;
	}
	showSysMsg(msg,state,statical) {
		if(state){
			$("#sysmsg").removeClass("sys_err");
			$("#sysmsg").addClass("sys_ok");
		}
		else {
			$("#sysmsg").removeClass("sys_ok");
			$("#sysmsg").addClass("sys_err");
		}
		//$("#sysmsg").show();
		$("#sysmsg").removeClass("myhide");
		$("#sysmsg_val").html(msg);
		if(!statical)setTimeout(hideSysMsg,5000);
		function hideSysMsg() {
			$("#sysmsg").addClass("myhide");
			
		}
		
	}
	stateRefresher(){
		$.ajax({
			url:"state.php",
			dataType:"json",
			method:'GET',
			data:{"getstate":true},
			success:function(data){
				connectionState(1);
				//console.log(data);
				if(data){
					for(var el in data){
						if(data[el].sector == "main"){//отлавливаем сектор
							//console.log("sector main");
							if(data[el].state == "reset"){
								//console.log("status = reset");
								showSysMsg("Страница будет перезагружена",false,true);
								setTimeout(function(){
									//console.log("сетим normal");
									$.ajax({
										url:"state.php",
										method:'GET',
										data:{"setstate":"normal","sector":"main"},
										error:function(){
											console.log("error");
										},
										complete:function () {
                                            setTimeout(function(){
                                                //console.log("рефрешим страницу");
                                                location.reload(true);
                                            },1000);
                                        }
									});
								},60000);
							}	
						}
					}
				}
			},
			error:function(){
				console.log("error to load state ajax");
				connectionState(0);
			}
		});
        $.ajax({
            url:"defferreloader.php",
            dataType:"json",
            method:'GET',
            data:{"ask":true},
            success:function(data){
                connectionState(1);
                if(data){
                	if(data.needreload) {
                		console.log("Страница будет перезагружена по IP");
                        showSysMsg("Страница будет перезагружена по IP", false, true);
                        setTimeout(function () {
                            $.ajax({
                                url: "defferreloader.php",
                                method: 'GET',
                                data: {"ipdel": true},
                                error: function () {
                                    console.log("error");
                                },
                                complete: function () {
                                    setTimeout(function () {
                                        location.reload(true);
                                    }, 1000);
                                }
                            });
                        }, 60000);
                    }
                }
            },
            error:function(){
                console.log("error to load defferreload ajax");
                connectionState(0);
            }
        });
	}

}
