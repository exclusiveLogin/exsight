'use strict';
class NodeCtrl{
    static createNode(name,container,alias,cb){
        return new AstridNode(name,container,alias,cb);
    }
    static deleteNode(){}
    static replaceNode(){}
    static replaceAll(){}
}
class AstridNode{
    constructor(name,container,alias,cb){
        //проверка аргументов
        if(name){
            this.nameNode = name;
        }else {
            return new Error("нет имени");
        }
        if(container){
            this.containerNode = container;
        }else {
            return new Error("нет контейнера");
        }
        let localName;
        if(!alias){
            localName = name;
        }else {
            localName = alias;
        }

        //проверка дубликатов
        if(getNode(name)==(-1)){
            //создаем паттерн кнопки
            this.pattern = `<div class="node" id="btn${name}">
                                <span>${localName}</span>
                                <div class="led"></div>
                            </div>`;
            this.elem = document.getElementById(this.containerNode);
            this.elem.innerHTML += this.pattern;


            let context = this;

            //создаем загрузку скриптов

            //создает экземпляр объекта Ноды
            let bundle = require("bundle-loader!../nodes/js/"+name+".js");

            bundle(function (module) {
                context.nodeObj = new module();

                //Создаем метод led у ноды
                context.nodeObj.led = function (state) {
                    if(state == "ok"){
                        $("#btn"+name+" .led").removeClass("warn error loading");
                        $("#btn"+name+" .led").addClass("ok");
                    }
                    if(state == "error"){
                        $("#btn"+name+" .led").addClass("error");
                    }
                    if(state == "warning"){
                        $("#btn"+name+" .led").addClass("warn");
                    }
                    if(state == "off"){
                        $("#btn"+name+" .led").removeClass("warn ok error loading");
                    }
                    if(state == "select"){
                        $("#btn"+name).addClass("nodeselected");
                    }
                    if(state == "unselect"){
                        $("#btn"+name).removeClass("nodeselected");
                    }
                    if(state == "load"){
                        $("#btn"+name+" .led").addClass("loading");
                    }
                };
                //создаем свойство showed у ноды
                context.nodeObj.showed = false;

                //создаем свойство loaded у ноды
                context.nodeObj.loaded = false;

                //создаем panel для ноды
                $("#panels").append("<div id='"+name+"panel' class='hidden-xs hidden-sm'></div>");
                //создаем view для ноды
                $("#container").append("<div id='"+name+"view' class='viewer'></div>");

                context.nodeObj.startNode();//temp

                $(document).off("click","#btn"+name);
                $(document).on("click","#btn"+name,function () {
                    //console.log("click on btn "+name);
                    context.nodeObj.showNode();
                });

                if(cb && typeof cb == "function"){cb();}
            });
        }else {
            console.log("Node has dublicates");
            return new Error("Node has dublicates");
        }
    }
}
export default NodeCtrl;
