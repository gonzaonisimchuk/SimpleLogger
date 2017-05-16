

var fs=require('fs');

var fn = Date();

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


 fs.writeFile(fileName, dataClose, function(error){
    if (error)
        console.log(error);
    else
        /* console.log('El archivo fue creado') */;
});   
}

module.exports.createLogFile=createLogFile;
module.exports.closeLogFile=closeLogFile;





/*
var misfunciones = {

pepe: function() { console.log('soy pepe'); },
pepa: function() { console.log('soy pepa'); }

}

module.exports = misfunciones

tambien se puede usar module.exports = { ..... }
*/





/*


initialize
	self createLogFile.

ACTIONS

createLogFile

	logFile := FileDirectory default newFileNamed:  TimeStamp now asString, '.txt'.
	
	logFile nextPutAll: '------------------------------------------------------------------------------',String crlf.
	logFile nextPutAll: 'G9Logger started at:  ',TimeStamp now asString, String crlf.
	logFile nextPutAll: '------------------------------------------------------------------------------',String crlf.

closeLogFile 
	
	logFile nextPutAll: '------------------------------------------------------------------------------',String crlf.
	logFile nextPutAll: 'G9Logger ended at: ',TimeStamp now asString, String crlf.
	logFile nextPutAll: '------------------------------------------------------------------------------',String crlf.
	logFile nextPutAll: '-------------------G9Logger is a product from Arduino Software--------------------',String crlf.
	logFile nextPutAll: '----------Web: http://www.arduinosoftware.com---Mail: info@arsol.net----------',String crlf.

	logFile close. 
	
log: anObject
	
	logFile nextPutAll: anObject, String crlf.

logSeparator
	
	logFile nextPutAll: '------------------------------------------------------------------------------',String crlf.

logWithTimeStamp: anObject
	
	logFile nextPutAll: anObject,' ',TimeStamp now asString, String crlf.


ACCESSING

logFile
	^ logFile

logFile: anObject
	logFile := anObject

*/
