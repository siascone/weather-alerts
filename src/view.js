import {counties} from '../scripts/util';

class View {
    constructor(el) {
        this.el = el;
        this.bindEvents();
    }

    showCounties() {
        let div = document.createElement('div');
        let c = JSON.stringify(counties('CA'));
        debugger;
        div.innerHTML = c;
        this.append(div);
    }

    bindEvents() {
        this.el.addEventListener('click', this.showCounties);
    }

}

export default View;