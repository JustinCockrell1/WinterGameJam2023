import GameObject from "./GameObject.js";
import Animation from "./Animation.js";

export default class Water extends GameObject {
    constructor(x,y) {
        super(x, y);
        this.w = Math.random()*200+30;
        this.h = Math.random()*100+30;

        this.animation = new Animation("./assets/images/water1.png");

        this.type="water";
        
        this.full=true;

    }
    tick(elapsedTime, gamePad, game) {
        if(this.y-game.camera.y<-this.h) {
            this.x = Math.random()*1000;
            this.y = Math.random()*1000 + game.camera.y+game.ctx.canvas.height;
            this.full=true;
        }
    }

    render(ctx, camera) {
        this.animation.render(ctx, this.x, this.y-camera.y, this.w, this.h);
    }

    collision(object, game) {
        if(object.type=="rock") {
            object.respawn(game);
        }
    }

    
}