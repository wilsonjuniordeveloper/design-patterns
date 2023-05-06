var ConsoleLog = (function () {
    var instance;

    function createInstance() {
        var object = new Object("This is a console log.");
        return object;
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Teste o objeto ConsoleLog
var consoleLog1 = ConsoleLog.getInstance();
var consoleLog2 = ConsoleLog.getInstance();
console.log(consoleLog1 === consoleLog2); // Retorna true

consoleLog1.message = "Hello World";
console.log(consoleLog2.message); // Retorna "Hello World"
