let mouseEventLogged = false;
let keyEventLogged = false;
let clickEventLogged = false;

function logMouseCoordinates() {
  if (!mouseEventLogged) {
    document.addEventListener("mousemove", (event) => {
      console.log("x: " + event.clientX + ", y: " + event.clientY);
    });
    mouseEventLogged = true;
  }
}

function logKeyboardEvents() {
  if (!keyEventLogged) {
    document.addEventListener("keydown", (event) => {
      console.log("key pressed: " + event.key);
    });
    keyEventLogged = true;
  }
}

function logClickCount() {
  if (!clickEventLogged) {
    const button = document.querySelector("button");
    button.addEventListener("click", (event) => {
      button.textContent = `Click count: ${event.detail}`;
    });
    clickEventLogged = true;
  }
}

module.exports = { logMouseCoordinates, logKeyboardEvents, logClickCount };
