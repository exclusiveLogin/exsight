'use strict';
class NodeCtrl{
    static createNode(name,container,alias){
        return new AstridNode(name,container,alias);
    }
    static deleteNode(){}
    static replaceNode(){}
    static replaceAll(){}
}
class AstridNode extends NodeCtrl{
    constructor(name,container,alias){
        super();
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



            //создаем загрузку скриптов
            let pr_node = new Promise(function (resolve,reject) {
                // let script = document.createElement("script");
                // document.body.appendChild(script);
                // script.src = "nodes/js/"+name+".js?v=beta";
                //
                // script.onerror = ()=>{
                //     console.log("error load module");
                //     reject();
                // };
                //
                // script.onload = ()=>{
                //     resolve();
                // };
                resolve();
            });
            pr_node.then(function () {
                Global.nodes.map(function (node,index) {
                    if(node.nameNode==name){
                        require.ensure([],function () {
                            //создает экземпляр объекта Ноды
                            let module = require("../nodes/js/"+name+".js");
                            Global.nodes[index].nodeObj = new module();

                            //Создаем метод led у ноды
                            Global.nodes[index].nodeObj.led = function (state) {
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
                            Global.nodes[index].nodeObj.showed = false;

                            //создаем свойство loaded у ноды
                            Global.nodes[index].nodeObj.loaded = false;

                            //создаем panel для ноды
                            $("#panels").append("<div id='"+name+"panel' class='hidden-xs hidden-sm'></div>");
                            //создаем view для ноды
                            $("#container").append("<div id='"+name+"view' class='viewer'></div>");

                            Global.nodes[index].nodeObj.startNode();//temp

                            $(document).off("click","#btn"+name);
                            $(document).on("click","#btn"+name,function () {
                                console.log("click on btn "+name);
                                node.nodeObj.showNode();
                            });
                        });
                    }
                });

            },function () {
                console.log("Promise error");
            });
        }else {
            console.log("Node has dublicates");
            return new Error("Node has dublicates");
        }
    }
}
export default NodeCtrl;
