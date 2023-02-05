import GameObject from "./GameObject.js";
import Root from "./Root.js";
import Background from "./Background.js";
import Title from "./Title.js";
import Camera from "./Camera.js";

export default class DigDownRoot {



    constructor() {
        this.gameRunning = false;

        this.gameObjects = [];

        this.gamePadIndex = -1;


        this.lastTotalElapsedTime = 0;

        this.ctx;

        this.camera = new Camera();

        this.setupEvents();

        this.keyboardVelocity = {x:0,y:0};
        this.keyAPressed = false;
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


          window.addEventListener("keydown", (e)=>{
            if(e.key=="w") {
                if(this.keyboardVelocity.y!=1) {this.keyboardVelocity.y=-1;}
                else this.keyboardVelocity.y=0;
            }
            else if(e.key=="a"){
                if(this.keyboardVelocity.x!=1) {this.keyboardVelocity.x=-1;}
                else {
                    this.keyboardVelocity.x=0;
                }
                this.keyAPressed=true;
            }
            else if(e.key=="s") {
                if(this.keyboardVelocity.y!=-1) this.keyboardVelocity.y=1;
                else this.keyboardVelocity.y=0;
            }
            else if(e.key=="d") {
                if(this.keyboardVelocity.x!=-1) this.keyboardVelocity.x=1;
                else this.keyboardVelocity.x=0;
            }
          });

          window.addEventListener("keyup", (e)=>{
            if(e.key=="w") {
                if(this.keyboardVelocity.y==-1) this.keyboardVelocity.y=0;
            }
            else if(e.key=="a"){
                if(this.keyboardVelocity.x==-1) {
                    this.keyboardVelocity.x=0;
                }
                this.keyAPressed=false;
            }
            else if(e.key=="s") {
                if(this.keyboardVelocity.y==1) this.keyboardVelocity.y=0;
            }
            else if(e.key=="d") {
                if(this.keyboardVelocity.x==1) this.keyboardVelocity.x=0;
            }
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


      
        this.addGameObject(new Background(0,this.ctx.canvas.height));
        this.addGameObject(new Background(0,this.ctx.canvas.height*2));
        this.addGameObject(new Title(0,0));
        this.addGameObject(new Root(this.ctx.canvas.width/2,this.ctx.canvas.height/2));

        this.gameRunning=false;
        window.requestAnimationFrame((elapsedTime)=>{this.gameLoop(elapsedTime)});

      
      }
    

    tick(elapsedTime) {

let gamePad = {buttons:[], axes:[]};
        if(this.gamePadIndex!=-1) {
            gamePad = navigator.getGamepads()[this.gamePadIndex];
            // console.log(gamePad.axes[0], gamePad.axes[1]);
        }
        else {
            gamePad.buttons = [{pressed:this.keyAPressed}];
            // gamePad.buttons[0]={pressed:this.keyAPressed};
            gamePad.axes=[this.keyboardVelocity.x, this.keyboardVelocity.y];
           
        }
        // console.log(gamePad.buttons[0]);
        // console.log(this.keyAPressed);
            if(gamePad.buttons[0].pressed===true) this.gameRunning=true;
    
            if(this.gameRunning) {
                for(let i = 0; i < this.gameObjects.length; i++) {
                    this.gameObjects[i].tick(elapsedTime, gamePad);
                }
      
                this.camera.y = this.gameObjects[3].y-(this.ctx.canvas.height/2);
            }
       
     
      

    
    }

    render() {
        this.ctx.clearRect(0,0,this.ctx.canvas.width, this.ctx.canvas.height);
      for(let i = 0; i < this.gameObjects.length; i++) {
            this.gameObjects[i].render(this.ctx, this.camera);
        }
    }

};