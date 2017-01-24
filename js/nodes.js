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
        this.context = this;
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
        this.elem.innerHTML = this.pattern;
        if(Global.nodeDependencies[name]){
            this.start = Global.nodeDependencies[name].startNode;
            this.stop = Global.nodeDependencies[name].stopNode;
        }
    }
}
