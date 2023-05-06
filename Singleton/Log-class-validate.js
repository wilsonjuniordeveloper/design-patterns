class ConsoleLog {
    constructor() {
      if (!ConsoleLog.instance) {
        ConsoleLog.instance = this;
        this.message = 'This is a console log.';
      }
      return ConsoleLog.instance;
    }
  
    log() {
      console.log(this.message);
    }
    
  }
  
  // Teste o objeto ConsoleLog
  const consoleLog1 = new ConsoleLog();
  const consoleLog2 = new ConsoleLog();
  console.log(consoleLog1 === consoleLog2); // Retorna true
  
  consoleLog1.message = "Hello World";
  consoleLog2.log(); // Retorna "Hello World"