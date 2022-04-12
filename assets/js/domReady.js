// https://www.competa.com/blog/cross-browser-document-ready-with-vanilla-javascript/
var domIsReady = ((domIsReady) => {

    var isBrowserIeOrNot = () => {
        return (!document.attachEvent || typeof document.attachEvent === "undefined" ? 'not-ie' : 'ie');
    }

    domIsReady = (callback) => {
        if(callback && typeof callback === 'function'){
            if(isBrowserIeOrNot() !== 'ie') {
                document.addEventListener("DOMContentLoaded", () => {
                    return callback();
                });
            } else {
                document.attachEvent("onreadystatechange", () => {
                    if(document.readyState === "complete") {
                        return callback();
                    }
                });
            }
        } else {
            console.error('The callback is not a function!');
        }
    }

    return domIsReady;
})(domIsReady || {});
