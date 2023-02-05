import GameObject from "./GameObject.js";
import Animation from "./Animation.js";
export default class Title extends GameObject {
    constructor(x, y){
        super(x, y);
        this.animation = new Animation("./assets/images/title1.png")
    }

    render(ctx){
        this.animation.render(ctx,this.x,this.y,ctx.canvas.width,ctx.canvas.height);
    }
}