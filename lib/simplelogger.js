// https://github.com/gonzaonisimchuk/SimpleLogger.git

const fs=require('fs');

var fn = new Date();

var dateY = fn.getFullYear().toString();

// Se suma 1 porque js numera los meses de 0 a 11
var dateM = (fn.getMonth() + 1).toString()

var dateD = fn.getDate().toString();

var fileName = dateY+dateM+dateD + '.log';

var writeInConsole = false;
var separator = "\r\n---------------------------------------------------------------------\r\n"

var dataCreate = separator + "   SimpleLogger started at " + fn.toISOString() + separator;

function createLogFile(inConsole, path) {
    if (inConsole != null && inConsole == true)
        writeInConsole = true;
    else
        writeInConsole = false;

    if (path != "" && path != null)
        fileName = path + fileName;

    if (fs.existsSync(__dirname.replace("lib", '') + fileName)) {
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

function closeLogFile() {
    var dateStop = new Date().toISOString();	
    var dataClose = separator + "   SimpleLogger ended at " + dateStop + separator;

    fs.appendFile(fileName, dataClose, function(error){
        writeConsole(error, dataClose);
    });   
}

function logSeparator() {
    fs.appendFile(fileName, separator, function(error){
        writeConsole(error, separator);
    });   
}

function logMessage(message) {
    var messageLine = new Date().toISOString();
    messageLine += "   " + message + "\r\n";

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

module.exports.createLogFile=createLogFile;
module.exports.closeLogFile=closeLogFile;
module.exports.logSeparator=logSeparator;
module.exports.logMessage=logMessage;