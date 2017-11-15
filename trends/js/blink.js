export default class Blink{
	constructor(selector,time){
		this.selector = selector;
		this.init = function () {
			$(selector).addClass("blink");
		};
		this.timeObj = false;
		this.toggleState = function () {
			$(selector).each(function () {
				var tmp = $(this).find(".transparent");
				//console.log(tmp[0]);
				if(!tmp[0]){
					$(this).toggleClass("transparentStatic");
				}
			});
		};
		this.start = function () {
			if(time){
				this.timeObj = setInterval(this.toggleState,time);
			}
		};
		this.stop = function () {
			if(this.timeObj){
				clearInterval(this.timeObj);
				this.timeObj = false;
				$(selector).removeClass("transparentStatic");
			}
		}
	}
}