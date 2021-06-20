const bc = new BroadcastChannel('obs-lower-thirds');
const lowerthirds = document.querySelector('.lower-thirds');
const nm = document.querySelector('.name');
const func = document.querySelector('.function');


bc.onmessage = function(ev) {
    const data = ev.data;
    const action = data.action;
    if (action === 'show') {
        nm.innerHTML = data.name;
        func.innerHTML = `(${data.function})`;
        lowerthirds.classList.remove('animateOut');
        lowerthirds.classList.add('animateIn');
    }
    else if (action === 'hide') {
        lowerthirds.classList.remove('animateIn');
        lowerthirds.classList.add('animateOut');
    }
}