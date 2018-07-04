class Inventory {

    constructor(name, size) {
        this.size = size;
        this.name = name;
        this.content = [];
    }

    setItem(slot, item) {
        this.content[slot - 1] = item;
    }

    build() {
        let table = document.createElement("table");
        table.className = "inventory--embedded";
        let tBody = document.createElement("tbody");
        for (let i = 0; i < this.size / 9; i++) {
            tBody.appendChild(this.buildLine(i));
        }
        table.appendChild(tBody);

        /** */

        let mainTable = document.createElement("table");
        mainTable.className = "inventory";
        let mainTBody = document.createElement("tbody");
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.appendChild(this.buildName());
        td.appendChild(table);
        tr.appendChild(td);
        mainTBody.appendChild(tr);
        mainTable.appendChild(mainTBody);
        return mainTable;
    }


    buildName() {
        let div = document.createElement("div");
        div.className = "inventory-block-name";
        let a = document.createElement("a");
        a.className = "inventory-name";
        a.innerHTML = this.name;
        div.appendChild(a);
        return div;
    }

    buildLine(line) {
        let tr = document.createElement("tr");
        for (let i = 0; i < 9; i++) {
            let item = this.content[line * 9 + i];
            let td = document.createElement("td");
            td.className = "inventory__cell";
            if (item !== undefined) {
                let img = document.createElement("img");
                img.src = "image/" + item.nameItem + ".png";
                let span = document.createElement("span");
                span.className = "inventory__cell__quantity";
                span.innerHTML = item.countItem;
                td.appendChild(img);
                td.appendChild(span);
            }
            tr.appendChild(td);
        }
        return tr;

    }


}


class Item {
    constructor(name, count) {
        this.name = name;
        this.count = count;
    }

    get nameItem() {
        return this.name;
    }

    get countItem() {
        return this.count;
    }
}