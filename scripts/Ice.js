import GameObject from "./GameObject.js";
import Animation from "./Animation.js";

export default class Ice extends GameObject{
    constructor(x,y){
        super(x, y);
        this.w = 0;
        this.h = 0;
        this.speed = 125;
        this.animation = new Animation("./assets/images/ice.png");

        this.type = "ice";
    }

    tick(elapsedTime){
        this.y+=elapsedTime*this.speed;
    }
    render(ctx,camera){
        this.w = ctx.canvas.width;
        this.h = ctx.canvas.height/2;
        this.animation.render(ctx,this.x,this.y-camera.y,this.w,this.h);
    }
}