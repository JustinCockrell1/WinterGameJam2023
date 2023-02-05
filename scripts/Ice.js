import GameObject from "./GameObject.js";
import Animation from "./Animation.js";

export default class Ice extends GameObject{
    constructor(x,y){
        super(x, y);
        this.speed = 50;
        this.animation = new Animation("./assets/images/ice.png");
    }

    tick(elapsedTime){
        this.y+=elapsedTime*this.speed;
    }
    render(ctx,camera){
        this.animation.render(ctx,this.x,this.y-camera.y,ctx.canvas.width,ctx.canvas.height/2);
    }
}