import GameObject from "./GameObject.js";
import Root from "./Root.js";
import Background from "./Background.js";

export default class DigDownRoot {



    constructor() {
        this.gameRunning = false;

        this.gameObjects = [];

        this.gamePadIndex = -1;


        this.lastTotalElapsedTime = 0;

        this.ctx;

        this.setupEvents();
    }

    setupEvents() {
        window.addEventListener("gamepadconnected", (e) => {
            console.log("controller connected");
            this.gamePadIndex = e.gamepad.index;
            // gp = navigator.getGamepads()[e.gamepad.index];
            // console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
            // gp.index, gp.id,
            // gp.buttons.length, gp.axes.length);
            // console.log(gp.buttons);
          });

          window.addEventListener("gamepaddisconnected", (e) => {
            console.log("Gamepad disconnected from index %d: %s",
              e.gamepad.index, e.gamepad.id);
              this.gamePadIndex = -1;
          });
        
    }

    addGameObject(object) {
        this.gameObjects.push(object);
    }

    gameLoop(totalElapsedTime) {
        //get the time past since the last animation frame and save it in elapsed time
        const elapsedTime = (totalElapsedTime - this.lastTotalElapsedTime)/1000;
        this.lastTotalElapsedTime = totalElapsedTime;
        this.tick(elapsedTime);
        this.render(this.ctx);
    
        window.requestAnimationFrame((totalElapsedTime)=>this.gameLoop(totalElapsedTime));
      }

      startGame() {


      
        this.addGameObject(new Background(0,0));
        this.addGameObject(new Root(50,50));

        this.gameRunning=true;
        this.gameLoop();

      
      }
    

    tick(elapsedTime) {
console.log(this.gamePadIndex);
        if(this.gamePadIndex!=-1) {
            const gamePad = navigator.getGamepads()[this.gamePadIndex];
            // console.log(gamePad.axes[0], gamePad.axes[1]);
            if(gamePad.buttons[0].pressed) this.gameRunning=true;
    
            if(this.gameRunning) {
                for(let i = 0; i < this.gameObjects.length; i++) {
                    this.gameObjects[i].tick(elapsedTime, gamePad);
                }
      
    
            }
       
     
        }

    
    }
    render() {
      for(let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].render(this.ctx);
        }
    }

};