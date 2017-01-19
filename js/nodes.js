'use strict';
class Node{
    constructor(name,container){
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
    }


}