window.onload = function () {

    //position list in drawer-left to be displayed in the middle vertically
    adjustListMenuLeftPaddingTop();

    // initialize snapjs
    var snapper = new Snap({
        element: document.getElementById('content'),
        disable: 'right'
    });

    // initialize fast click
    FastClick.attach(document.body);

    addEvent(document.getElementById('open-left-button'), 'click', function () {
        snapper.open('left');
    });
};

window.addEventListener("orientationchange", function () {
    adjustListMenuLeftPaddingTop();
}, false);

function adjustListMenuLeftPaddingTop() {
    document.getElementById('list-menu-left').style.paddingTop = window.innerHeight / 2 + "px";
}

var addEvent = function addEvent(element, eventName, func) {
    if (element.addEventListener) {
        return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
};