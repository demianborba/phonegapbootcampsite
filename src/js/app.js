window.onload = function () {
    adjustListMenuLeftPaddingTop();
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

addEvent(document.getElementById('open-left'), 'click', function () {
    snapper.open('left');
});