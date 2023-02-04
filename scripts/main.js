let gamePadIndex =-1;
let ctx;

let ballX = 10;
let ballY = 10;
let ballAngle = 1;

window.addEventListener("gamepadconnected", (e) => {
    gamePadIndex = e.gamepad.index;
    gp = navigator.getGamepads()[e.gamepad.index];
    console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    gp.index, gp.id,
    gp.buttons.length, gp.axes.length);
    console.log(gp.buttons);
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

  function wrapTo360(a) {
    if(a>=0) return a%360;
    return 360+a;
  }

  function tick(elapsedTime) {
    //Pull in the current state of the controller
    let vx, vy, angle;
    const speed = 100;
    if(gamePadIndex!=-1) {
        const gamePad = navigator.getGamepads()[gamePadIndex];
        // console.log(gamePad.axes[0], gamePad.axes[1]);
        vx = gamePad.axes[0];
        vy = gamePad.axes[1];
    
        //Get the angle of the controller
        angle = Math.atan2(vy,vx)*180/Math.PI
        if(angle<0) {
            angle=360+angle;
        }

        //subtract the angle from the player angle
        ballAngle*=180/Math.PI;
        const change1 = angle - ballAngle;
        const change2 = ballAngle - angle;
        let change;
        if(Math.abs(change1) < Math.abs(change2)){
          change = change1;
          
        }else {
          change = change2;
        }


   
        document.getElementById("change").innerHTML = change;
        document.getElementById("angle").innerHTML = angle;
       
        document.getElementById("ballAngle").innerHTML = ballAngle;

        // console.log(vx, vy, change, angle, ballAngle);
        //update the player angle
        ballAngle+=(change/100);
        ballAngle=wrapTo360(ballAngle);
        ballAngle*=Math.PI/180;
        vy = Math.sin(ballAngle);
        vx = Math.cos(ballAngle);
           
        document.getElementById("vx").innerHTML = vx;
        document.getElementById("vy").innerHTML = vy;
       
    
        ballX+=(vx * elapsedTime) *speed;
        ballY+=(vy * elapsedTime) *speed;
    }

    }

  function render() {

    ctx.fillStyle = "red";
    ctx.fillRect(ballX, ballY, 15, 15);
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