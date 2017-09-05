export default class renderer{
    //SmartRenderer component for EXSIGHT
    constructor(context, parms_ctrlArr){
        //проверка аргументов
        if(context){
            if(typeof(context) == "string"){
                this.connectNode = Global.nodes[getNode(context)].nodeObj;
            }else if(typeof (context) == "object"){
                this.connectNode = context;
            }

        }else {
            throw new Error("RENDERER:нет контекста");
        }
        if(parms_ctrlArr){
            this.parametrArray = parms_ctrlArr;
            this.dataOldAndRendered = [];
        }else {
            throw new Error("RENDERER: нет списка параметров");
        }
        this.renderedOnce = [];
        this.connectNode.lastRenderedData = [];
    }
    needRender(index){
        if(index == undefined) throw new Error("RENDERER: нет индекса");
        let dataNotUpdated = false;
        let result = false;
        if(this.renderedOnce[index]){
            //уже рендерилось
            if(this.connectNode.lastRenderedData && this.connectNode.lastAjaxData){//проверка наличия нужных массивов
                //сравниваем изменения
                this.parametrArray.map(function (parametr) {//перебор параметров
                    if(this.connectNode.lastRenderedData[index][parametr] == this.connectNode.lastAjaxData[index][parametr]){
                        //данные не разнятся проверка на устаревание
                        dataNotUpdated = true;
                    }else {
                        //данные разнятся
                        //console.log("RENDERER: данные отличаются");
                        this.dataOldAndRendered[index] = false;
                        result = true;
                    }
                },this);
                if (dataNotUpdated){
                    //проверка на устаревание
                    if(Utility.checkExpired(this.connectNode.lastAjaxData[index].datetime)){
                        //надо проверить не рендерилось ли еще
                        if(this.dataOldAndRendered[index]){
                            //console.log("RENDERER: данные устарели и уже рендерились");
                            if(this.connectNode.lastRenderedData[index]["fixtime"] != this.connectNode.lastAjaxData[index]["fixtime"]){
                                //данные уже рендерились но обновилось время записи
                                this.dataOldAndRendered[index] = false;
                                result = true;
                            }else {
                                //данные уже рендерились и время записи старое
                            }
                        }else {
                            //console.log("RENDERER: данные устарели но не рендерились до этого");
                            this.dataOldAndRendered[index] = true;
                            result = true;
                        }
                    }else {
                        //данные новые не устарели
                        //console.log("RENDERER: данные актуальны");
                    }
                }
            }else {
                throw new Error("ошибка Renderer нет требуемых массивов");
            }
        }else {
            //холодный старт
            //console.log("RENDERER: холодный старт, рендер");
            this.renderedOnce[index] = true;
            result = true;
        }
        this.connectNode.lastRenderedData[index] = this.connectNode.lastAjaxData[index];
        return result;

    }
}