

var fs=require('fs');

// var fn = Date();
// var fn = new Date(year, month, day, hours, minutes, seconds, milliseconds);

// var fn = new Date().toISOString().
//  replace(/T/, ' ').      // replace T with a space
//  replace(/\..+/, '')     // delete the dot and everything after


var fn = new Date();

var dateY = fn.getFullYear().toString();

// Se suma 1 porque js numera los meses de 0 a 11
var dateM1 = fn.getMonth() + 1;
var dateM = dateM1.toString()

var dateD = fn.getDate().toString();

var dateH = fn.getHours().toString();

var dateMin = fn.getMinutes().toString();

var dateS = fn.getSeconds().toString();

var dateMill = fn.getMilliseconds().toString();

var dateF = dateY+dateM+dateD+dateH+dateMin+dateS+dateMill;

var fileName = dateF + '.log';

var dataCreate = "---------------------------------------------------------------------";
dataCreate += "\r\n"; // new line
dataCreate += "   SimpleLogger started at " + fn.toISOString();
dataCreate += "\r\n"; // new line
dataCreate += "---------------------------------------------------------------------";
dataCreate += "\r\n"; // new line



function createLogFile() {
 
 fs.writeFile(fileName, dataCreate, function(error){
    if (error)
        console.log(error);
    else
        /* console.log('El archivo fue creado') */;
});   
}



function closeLogFile() {
 
var dateStop = new Date().toISOString();	

var dataClose = "---------------------------------------------------------------------";
dataClose += "\r\n"; // new line
dataClose += "   SimpleLogger ended at " + dateStop;
dataClose += "\r\n"; // salto de linea
dataClose += "---------------------------------------------------------------------";
dataClose += "\r\n"; // salto de linea


 fs.appendFile(fileName, dataClose, function(error){
    if (error)
        console.log(error);
    else
        // TO-DO close is not working.
        // fs.close(fileName);
    	/* console.log("Logging Finalizado") */;
});   
}


function logSeparator() {
 
var separator = "---------------------------------------------------------------------";
separator += "\r\n"; // new line

 fs.appendFile(fileName, separator, function(error){
    if (error)
        console.log(error);
    else
        
    	/* Nothing here yet */;
});   
}


function logMessage(message) {
 
var messageLine = new Date().toISOString();
messageLine += "   ";
messageLine += message;
messageLine += "\r\n"; // new line

 fs.appendFile(fileName, messageLine, function(error){
    if (error)
        console.log(error);
    else
        
    	/* Nothing here yet */;
});   
}




module.exports.createLogFile=createLogFile;
module.exports.closeLogFile=closeLogFile;
module.exports.logSeparator=logSeparator;
module.exports.logMessage=logMessage;
