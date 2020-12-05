function Stopwatch() {
  let startTime,
    stopTime,
    running,
    duration = 0;

  this.start = () => {
    running = true;
    startTime = new Date();
  };

  this.stop = () => {
    running = false;
    stopTime = new Date();

    duration += stopTime.getTime() - startTime.getTime();
  };

  this.reset = () => {
    startTime = null;
    stopTime = null;
    running = false;
    duration = 0;
  };
}

new Stopwatch();
