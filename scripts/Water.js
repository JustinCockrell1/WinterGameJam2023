import GameObject from "./GameObject.js";
import Animation from "./Animation.js";

export default class Water extends GameObject {
    constructor(x,y) {
        super(x, y);
        this.w = Math.random()*150+20;
        this.h = Math.random()*150+20;

        this.animation = new Animation("./assets/images/water1.png");

        this.type="water";
        
    }
    tick() {

    }

    render(ctx, camera) {
        this.animation.render(ctx, this.x, this.y-camera.y, this.w, this.h);
    }

    
}