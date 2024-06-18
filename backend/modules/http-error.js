//when the logic has the error that error and code will display. 

class HttpError extends Error {  //this is only logic code
    constructor(message, errorCode) {
      super(message); // Add a "message" property
      this.code = errorCode; // Adds a "code" property
    }
  }
  
  module.exports = HttpError;