'use strict';
class NodeCtrl{
    static createNode(name,container){
        return new Node(name,container);
    }
    static deleteNode(){}
    static replaceNode(){}
    static replaceAll(){}
}
class Node extends NodeCtrl{
    constructor(name,container){
        super();
        //this.context = this;
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
        this.pattern = `<div class="node" id="btn${this.nameNode}">
                            <span>${this.nameNode}</span>
                            <div class="led"></div>
                        </div>`;
        this.elem = document.getElementById(this.containerNode);
        this.elem.innerHTML += this.pattern;
        /*require.ensure([],function () {
            let module = require("../nodes/js/"+name);
            console.log(module);
        });*/

        let pr_node = new Promise(function (resolve,reject) {
            let script = document.createElement("script");
            document.body.appendChild(script);
            script.src = "nodes/js/"+name+".js";

            script.onerror = ()=>{
                console.log("error load module");
                reject();
            };

            script.onload = ()=>{
                console.log("load ok");
                resolve();
            };
        });
        pr_node.then(function () {
            console.log("Promise ok");
            Global.nodes.map(function (node,index) {
                if(node.nameNode==name){
                    console.log("Есть такой узел - "+node.nameNode+"index - "+index);
                    Global.nodes[index].nodeObj = eval("new "+name+"();");
                }
            });
        },function () {
            console.log("Promise error");
        });
    }
}
