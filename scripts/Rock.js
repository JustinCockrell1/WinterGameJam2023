import GameObject from "./GameObject.js";
import Animation from "./Animation.js";

export default class Rock extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.animation = new Animation("./assets/images/rock1.png");
        this.w = Math.random()*150+20;
        this.h = Math.random()*150+20;

        this.type="rock";
       
    }

    tick(elapsedTime, gamePad, game) {
        if(this.y-game.camera.y<-this.h) {
            this.respawn(game);
        }
    }

    respawn(game) {
        
            this.x = Math.random()*1000;
            this.y = Math.random()*1000 + game.camera.y+game.ctx.canvas.height;
     
    }

    render(ctx, camera) {
        this.animation.render(ctx, this.x, this.y-camera.y, this.w, this.h);
    }

}