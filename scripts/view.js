import {activeAlerts} from '../scripts/util';

class View {
    constructor(el) {
        this.el = el;
        this.addEvents();
        this.getActiveAlerts.bind(this);
    }

    getActiveAlerts() {
        let div = document.createElement('div');
        activeAlerts().then(function(res) {
            debugger;
            div.innerText = JSON.stringify(res);
        }).then(() => this.append(div));
    }

    addEvents() {
        this.el.addEventListener('click', this.getActiveAlerts);
    }

}

export default View;