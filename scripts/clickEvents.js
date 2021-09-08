// let states = document.querySelectorAll('path[class*="sm_state"]');

// let stateRects = document.querySelectorAll('rect')

import { statesByClass, statesByClassAbreviation } from './constants';
import {activeStateAlerts} from './util';

class AddStateClicks {
    constructor() {
        this.states = document.querySelectorAll('path[class*=sm_state]');
        this.rects = document.querySelectorAll('rect');
        this.statesByClass = statesByClass
        this.statesByClassAbreviation = statesByClassAbreviation;
        this.activeStateAlerts = activeStateAlerts;
        // this.alerts = document.createElement('div');
        this.clickEvents.bind(this);
        this.loadAlerts.bind(this);
        this.clickEvents()
    }

    loadAlerts = function(e) {
        e.preventDefault();
        e.stopPropagation();

        // debugger
        // TODO: fix target nameing issues for rects
        let eventState = e.target
        const alertBox = document.querySelector('.alert-container');
        let state = this.statesByClassAbreviation[eventState.classList[0]];
        // let alerts = this.alerts;

        alertBox.innerText = `Alerts for ${this.statesByClass[eventState.classList[0]]}`

        this.activeStateAlerts(state).then(function(res) {
            // debugger
            let alerts = document.createElement('div')
            alerts.innerText = JSON.stringify(res);
            alertBox.appendChild(alerts);
        });

        

        
    }

    clickEvents() {

        // TODO: add event listener to parent not each state
        this.states.forEach(state => state.addEventListener('click', (e) => this.loadAlerts(e)));
        this.rects.forEach(rect => {
            // debugger
            if (this.rects.item(0) !== rect) {
                // debugger
                rect.addEventListener('click', (e) => this.loadAlerts(e))
            }
        })
    }

}

export default AddStateClicks;

