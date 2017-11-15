class Tbl2Log{
    constructor(el,structure,key){
        if(el){
            this.Log = $(el);
            if(!this.Log[0])throw new Error("DOM элемент Log не найден");
        }else{
            throw new Error("Нет DOM элемента в конструкторе Log");
        }

        if(structure){
            this.structure = structure;
        }else{
            throw new Error("Нет структуры парсируемых данных в конструкторе Log");
        }

        this.showed = false;
        this.uniqID = key;
    }
    openLog(){
        this.Log.show();
    }
    closeLog(){
        this.Log.hide();
    }
    write2log(data){
        //если закрыт открываем
        if(!this.showed)this.openLog();

        let tableBody = '';

        for (let td in this.structure){
            tableBody += `<td>${data[this.structure[td]]}</td>`;
        }

        //console.log("structure log:",tableBody);
        let dataID = ``;
        if(this.uniqID)dataID = `data-key="${data[this.uniqID]}"`;

        //заполняем таблицу
        this.Log.append(`<tr class="logdata" ${dataID}>
                                            ${tableBody}
                                        </tr>`);
    }
    clearLog(){
        this.Log.find("tr.logdata").remove();
        this.closeLog();
    }
}

export default Tbl2Log;