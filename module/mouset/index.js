function logMouseCoordinates() {
    document.addEventListener("mousemove", (event) => {
      console.log("x: " + event.clientX + ", y: " + event.clientY);
    });
  }
  function logKeyboardEvents() {
    document.addEventListener("keydown", (event) => {
      console.log("key pressed: " + event.key);
    });
  }
  
  module.exports = { logMouseCoordinates, logKeyboardEvents };
  