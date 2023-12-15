class Counter {
    constructor() {
      this.value = 0;
      this.intervalId = null;
      this.isAutoIncrementing = false;
  
      this.toggleButton = document.getElementById('toggleButton');
      this.incrementButton = document.getElementById('incrementButton');
      this.decrementButton = document.getElementById('decrementButton');
      this.counterValue = document.getElementById('counterValue');
  
      this.toggleButton.addEventListener('click', () => this.toggleCounter());
      this.incrementButton.addEventListener('click', () => this.increment());
      this.decrementButton.addEventListener('click', () => this.decrement());
    }
  
    toggleCounter() {
      if (this.isAutoIncrementing) {
        this.stopAutoIncrement();
      } else {
        this.startAutoIncrement();
      }
    }
  
    startAutoIncrement() {
      this.isAutoIncrementing = true;
      this.intervalId = setInterval(() => {
        this.value++;
        this.updateDisplay();
      }, 1000);
      this.toggleButton.textContent = 'Stop';
    }
  
    stopAutoIncrement() {
      this.isAutoIncrementing = false;
      clearInterval(this.intervalId);
      this.toggleButton.textContent = 'Start';
    }
  
    increment() {
      if (!this.isAutoIncrementing) {
        this.value++;
        this.updateDisplay();
      }
    }
  
    decrement() {
      if (!this.isAutoIncrementing && this.value > 0) {
        this.value--;
        this.updateDisplay();
      }
    }
  
    updateDisplay() {
      this.counterValue.textContent = this.value;
    }
  }
  
  const counter = new Counter();
  