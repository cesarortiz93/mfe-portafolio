// wwwroot/js/mfe-navigation.js
window.notifyShellNavigation = function (path) {
    window.parent.postMessage(
        { type: 'mfe-navigation', path: path },
        '*'
    );
};