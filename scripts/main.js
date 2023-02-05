import Root from "./Root.js";

let gamePadIndex =-1;
let ctx;

let ballX = 10;
let ballY = 10;
let ballAngle = 1;
let root = new Root(200,200);
let gameRunning = false;

window.addEventListener("gamepadconnected", (e) => {
    gamePadIndex = e.gamepad.index;
    // gp = navigator.getGamepads()[e.gamepad.index];
    // console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    // gp.index, gp.id,
    // gp.buttons.length, gp.axes.length);
    // console.log(gp.buttons);
  });


  window.addEventListener("gamepaddisconnected", (e) => {
    console.log("Gamepad disconnected from index %d: %s",
      e.gamepad.index, e.gamepad.id);
      gamePadIndex = -1;
  });



let lastTotalElapsedTime = 0;
//Main Game Loop
  function gameLoop(totalElapsedTime) {
    //get the time past since the last animation frame and save it in elapsed time
    const elapsedTime = (totalElapsedTime - lastTotalElapsedTime)/1000;
    lastTotalElapsedTime = totalElapsedTime;
    tick(elapsedTime);
    render();

    window.requestAnimationFrame(gameLoop);
  }


  function tick(elapsedTime) {
    //Pull in the current state of the controller
    let vx, vy, angle;
    const speed = 100;
    if(gamePadIndex!=-1) {
        const gamePad = navigator.getGamepads()[gamePadIndex];
        // console.log(gamePad.axes[0], gamePad.axes[1]);
        if(gamePad.buttons[0].pressed) gameRunning=true;

        if(gameRunning)
        root.tick(elapsedTime, gamePad);
        //Get the angle of the controller
  


   
 
    }

    }

  function render() {
    root.render(ctx);
  
  }


  

  window.onload = function() {
    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.canvas.width = 600;
    ctx.canvas.height = 600;
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height); 
    window.requestAnimationFrame(gameLoop);  
  }

  window.addEventListener("keydown", (e)=>{
    if(e.key=="LEFT") {

    }
    else if(e.key=="RIGHT") {

    }
  });