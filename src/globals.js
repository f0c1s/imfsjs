const debug = true;
function log(...args) {
    if (debug) {
        console.log(...args);
    }
}

module.exports = {
    __DEBUG__: debug,
    log
}
