let mouseEventLogged = false;

function logMouseCoordinates() {
  if (!mouseEventLogged) {
    let timeStart = 0;
    let timeEnd = 0;

    const data = {
      clickCount: 0,
      moves: [],
      clicks: [],
      scrollCount: 0
    };

    document.addEventListener("mousemove", (event) => {
      console.log('x = '+ event.clientX+ 'y = '+ event.clientY)
      if (timeStart === 0) {
        timeStart = event.timeStamp;
      } else {
        timeEnd = event.timeStamp;
        const timeDifference = (timeEnd - timeStart)/1000;
        console.log("Temps écoulé : " + timeDifference + " secondes");
        timeStart = 0;
        timeEnd = 0;
      }

      const move = {
        x: event.clientX,
        y: event.clientY,
        time: event.timeStamp
      };
      data.moves.push(move);
    });

    let startTime;

    document.addEventListener("mousedown", e => {
      startTime = new Date().getTime();
    });

    document.addEventListener("mouseup", e => {
      const endTime = new Date().getTime();
      const duration = (endTime - startTime)/1000;
      console.log(`La durée du clic de souris est de ${duration} s`);
      data.clicks.push({
        button: e.button,
        duration: duration,
        time: endTime
      });
    });

    document.addEventListener("mousedown", (event) => {
      if (event.button === 0) {
        console.log("Bouton gauche ");
      } else if (event.button === 1) {
        console.log("Bouton central ");
      } else if (event.button === 2) {
        console.log("Bouton droit ");
      }
      data.clickCount++;
    });

    document.addEventListener("scroll", (event) => {
      console.log("Scrolling");
      data.scrollCount++;
    });

    mouseEventLogged = true;
    return data;
  }
}

module.exports =  logMouseCoordinates;