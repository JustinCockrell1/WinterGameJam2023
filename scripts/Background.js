import GameObject from "./GameObject.js";
import Animation from "./Animation.js";
export default class Background extends GameObject {
    constructor(x, y){
        super(x, y);
        this.animation= new Animation("./assets/images/dirt1.png")
    }

    render(ctx, camera){
        // let y = this.y-(camera.y%ctx.canvas.height);
        this.animation.render(ctx,this.x,this.y-camera.y,ctx.canvas.width,ctx.canvas.height);
        if(this.y-camera.y<-ctx.canvas.height) {
            this.y+=ctx.canvas.height*2;
        }
        else if(this.y-camera.y>ctx.canvas.height) {
            this.y-=ctx.canvas.height*2;
        }
    }
}