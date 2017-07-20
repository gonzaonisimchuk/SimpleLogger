// https://github.com/gonzaonisimchuk/SimpleLogger.git

const fs = require('fs');
const config = require('../config.json');

var fn = new Date();

var dateY = fn.getFullYear().toString();

// Se suma 1 porque js numera los meses de 0 a 11
var dateM = (fn.getMonth() + 1).toString()

var dateD = fn.getDate().toString();

var fileName = __dirname + '/../' + config.logpath + dateY+dateM+dateD + '.log';

var writeInConsole = false;
var separator = "\r\n---------------------------------------------------------------------\r\n"

var dataCreate = separator + "   SimpleLogger started at " + fn.toISOString() + separator;

module.exports.createLogFile = function(inConsole) {
    if (inConsole != null && inConsole == true)
        writeInConsole = true;
    else
        writeInConsole = false;

    if (fs.existsSync(fileName)) {
        // write to file
        fs.appendFile(fileName, dataCreate, function(error){
        writeConsole(error, dataCreate);
    })}
    else {
        // create file
        fs.writeFile(fileName, dataCreate, function(error){
        writeConsole(error, dataCreate);
    })}
}

module.exports.closeLogFile = function() {
    var dateStop = new Date().toISOString();	
    var dataClose = separator + "   SimpleLogger ended at " + dateStop + separator;

    fs.appendFile(fileName, dataClose, function(error){
        writeConsole(error, dataClose);
    });   
}

module.exports.logSeparator = function() {
    fs.appendFile(fileName, separator, function(error){
        writeConsole(error, separator);
    });   
}

// module.exports.logMessage = function(message) {
//     var messageLine = new Date().toISOString();
//     messageLine += "   " + message + "\r\n";

//     fs.appendFile(fileName, messageLine, function(error){
//         writeConsole(error, messageLine);
//     });   
// }

module.exports.logDebug = function(message) {
    var messageLine = new Date().toISOString();
    messageLine += " - DEBUG - " + message + "\r\n";

    fs.appendFile(fileName, messageLine, function(error){
        writeConsole(error, messageLine);
    });   
}

module.exports.logInfo = function(message) {
    var messageLine = new Date().toISOString();
    messageLine += " - INFO - " + message + "\r\n";

    fs.appendFile(fileName, messageLine, function(error){
        writeConsole(error, messageLine);
    });   
}

module.exports.logWarn = function(message) {
    var messageLine = new Date().toISOString();
    messageLine += " - WARN - " + message + "\r\n";

    fs.appendFile(fileName, messageLine, function(error){
        writeConsole(error, messageLine);
    });   
}

module.exports.logError = function(message) {
    var messageLine = new Date().toISOString();
    messageLine += " - ERROR - " + message + "\r\n";

    fs.appendFile(fileName, messageLine, function(error){
        writeConsole(error, messageLine);
    });   
}

// private
function writeConsole(error, messageLine) {
    if (error)
        console.log(error);
    else
        if (writeInConsole)
            console.log(messageLine);
}