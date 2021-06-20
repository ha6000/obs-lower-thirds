const nameList = document.querySelector('.names');
let activeItem;
const bc = new BroadcastChannel('obs-lower-thirds');

function show() {
    if (!activeItem) return null;
    bc.postMessage({
        action: 'show',
        name: activeItem.getAttribute('name'),
        function: activeItem.getAttribute('function')
    });
}

function hide() {
    bc.postMessage({
        action: 'hide'
    })
}

function config() {

}

function active() {
    if (activeItem) activeItem.classList.remove('active');
    if (activeItem === this) {
        activeItem = null;
        return;
    };
    activeItem = this;
    activeItem.classList.add('active');
}

function loadNames() {
    Object.entries(names).forEach((name, index) => {
        const entry = document.createElement('li');
        entry.innerHTML = `${name[0]} - ${name[1]}`;
        entry.setAttribute('name', name[0]);
        entry.setAttribute('function', name[1]);
        entry.onclick = active;

        nameList.append(entry);
    });
}

loadNames();