var simplelogger = require('./lib/simplelogger');

// For start the loging process
simplelogger.createLogFile();

// For log a message
simplelogger.logMessage("I want to log this message!");
simplelogger.logMessage("Another message here");
simplelogger.logMessage("One more message to be logged");


// For log a separator line
simplelogger.logSeparator();

// For end the loging process
simplelogger.closeLogFile();
