class Clock {
    constructor() {
      const date = new Date();
      this.hours = date.getHours();
      this.minutes = date.getMinutes();
      this.seconds = date.getSeconds();
      this.printTime();
      setInterval(this._tick.bind(this), 1000);
    }
  
    printTime() {
      let formattedHours = ("0" + this.hours).slice(-2);
      let formattedMinutes = ("0" + this.minutes).slice(-2);
      let formattedSeconds = ("0" + this.seconds).slice(-2);
      console.log(`${formattedHours}: ${formattedMinutes}: ${formattedSeconds}`)
    }
  
    _tick() {
      this.seconds++;
      if(this.seconds === 60){
        this.seconds = 0;
        this.minutes++;
      }
      if(this.minutes === 60){
        this.minutes = 0;
        this.hours++;
      }
      if(this.hours > 12){
        this.hours = this.hours % 12;
      }
      this.printTime();
    }
  }
  
  const clock = new Clock();