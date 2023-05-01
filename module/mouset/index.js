let mouseEventLogged = false;

function logMouseCoordinates() {
  if (!mouseEventLogged) {
    document.addEventListener("mousemove", (event) => {
      console.log("x: " + event.clientX + ", y: " + event.clientY);
    });
    mouseEventLogged = true;
  }
}

let keyEventLogged = false;

function logKeyboardEvents() {
  if (!keyEventLogged) {
    document.addEventListener("keydown", (event) => {
      console.log("key pressed: " + event.key);
    });
    keyEventLogged = true;
  }
}

module.exports = { logMouseCoordinates, logKeyboardEvents };
