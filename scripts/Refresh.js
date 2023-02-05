import GameObject from "./GameObject.js";
import Animation from "./Animation.js";
export default class Refresh extends GameObject {
    constructor(x, y){
        super(x, y);
        this.animation = new Animation("./assets/images/title1.png")
    }

    render(ctx){
        // this.animation.render(ctx,this.x,this.y,ctx.canvas.width,ctx.canvas.height);
        ctx.fillStyle="white";
        ctx.font="60px Serif"
        // ctx.fillText("Depth:" + Math.round(this.y/100), (ctx.canvas.width/2)-150,ctx.canvas.height/4.1);

    }
}