const object = {
  message: 'Hello, World!',

  logMessage() {
    console.log(this.message); 
  }
};

// a(object.logMessage);

// function a(b){
//   b();
// }
setTimeout(console.log('hheee'), 1000)
