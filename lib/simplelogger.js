

var fs=require('fs');

// var fn = Date();
// var fn = new Date(year, month, day, hours, minutes, seconds, milliseconds);

var fn = new Date().toISOString().
  replace(/T/, ' ').      // replace T with a space
  replace(/\..+/, '')     // delete the dot and everything after


var fileName = fn + '.txt';

var dataCreate = "---------------------------------------------------------------------";
dataCreate += "\r\n"; // new line
dataCreate += "   SimpleLogger started at " + fn;
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
 
var dateStop = Date();	

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
 
var messageLine = Date();
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
