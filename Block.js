const object = {
    message: 'Hello, World!'
  };
  function logMessage() {
    console.log(this.message); // logs 'Hello, World!'
  }
  // Using func.call() method
  logMessage.call(object);
  // Using func.apply() method
  logMessage.apply(object);
  // Creating a bound function
  const boundLogMessage = logMessage.bind(object);
  console.log(boundLogMessage)