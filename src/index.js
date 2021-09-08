import AddStateClicks from '../scripts/clickEvents';

document.addEventListener("DOMContentLoaded", () => {
    let map = document.getElementById('map');
    
    const stateClicks = function() {
        new AddStateClicks();
    }

    if (!map.innerHTML) {
        setTimeout(stateClicks, 1000);
    }

});


