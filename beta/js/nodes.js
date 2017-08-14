'use strict';
class NodeCtrl{
    static createNode(name,container,alias){
        return new Node(name,container,alias);
    }
    static deleteNode(){}
    static replaceNode(){}
    static replaceAll(){}
}
class Node extends NodeCtrl{
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
                let script = document.createElement("script");
                document.body.appendChild(script);
                script.src = "nodes/js/"+name+".js?v=beta";

                script.onerror = ()=>{
                    console.log("error load module");
                    reject();
                };

                script.onload = ()=>{
                    resolve();
                };
            });
            pr_node.then(function () {
                //console.log("Promise ok");
                Global.nodes.map(function (node,index) {
                    if(node.nameNode==name){
                        //console.log("Есть такой узел - "+node.nameNode+"index - "+index);
                        //создает экземпляр объекта Ноды
                        Global.nodes[index].nodeObj = eval("new "+name+"();");

                        //Создаем метод led у ноды
                        Global.nodes[index].nodeObj.led = function (state) {
                            if(state == "ok"){
                                $("#btn"+name+" .led").removeClass("warn error");
                                $("#btn"+name+" .led").addClass("ok");
                            }
                            if(state == "error"){
                                $("#btn"+name+" .led").addClass("error");
                            }
                            if(state == "warning"){
                                $("#btn"+name+" .led").addClass("warn");
                            }
                            if(state == "off"){
                                $("#btn"+name+" .led").removeClass("warn ok error");
                            }
                            if(state == "select"){
                                $("#btn"+name).addClass("nodeselected");
                            }
                            if(state == "unselect"){
                                $("#btn"+name).removeClass("nodeselected");
                            }
                        };

                        //создаем panel для ноды
                        $("#panels").append("<div id='"+name+"panel' class='hidden-xs hidden-sm'></div>");
                        //создаем view для ноды
                        $("#container").append("<div id='"+name+"view' class='viewer'></div>");

                        Global.nodes[index].nodeObj.startNode();//temp

                        $("#btn"+name).on("click",function () {
                            node.nodeObj.showNode();
                        })
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
