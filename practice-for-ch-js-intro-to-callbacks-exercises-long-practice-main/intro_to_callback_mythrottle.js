// class Neuron {
//   fire() {
//     console.log("Firing!");
//   }
// }

// const neuron = new Neuron();
// // When you create a new Neuron,
// // you can call #fire as frequently as you want

// // The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// // You can use clearInterval to stop the firing:
// clearInterval(interval);

// Define the myThrottle function as a prototype for Function objects.
// Define the myThrottle function as a prototype for Function objects.
// Define the myThrottle function as a prototype for Function objects.
Function.prototype.myThrottle = function (interval) {
    let lastCall = 0;
    let inThrottle = false;
    const originalFunction = this; // Store a reference to the original function
  
    return function (...args) {
      const now = Date.now();
  
      if (now - lastCall >= interval) {
        originalFunction(...args); // Call the original function
        lastCall = now;
      } else if (!inThrottle) {
        inThrottle = true;
        setTimeout(() => {
          originalFunction(...args); // Call the original function
          lastCall = Date.now();
          inThrottle = false;
        }, interval - (now - lastCall));
      }
    };
  };
  
  // Define the Neuron class
  class Neuron {
    constructor() {
      this.fire = this.fire.myThrottle(500);
    }
  
    fire() {
      console.log("Firing!");
    }
  }
  
  // Create a new instance of Neuron
  const neuron = new Neuron();
  
  // Set up an interval to repeatedly call neuron.fire
  const interval = setInterval(() => {
    neuron.fire();
  }, 10);
  