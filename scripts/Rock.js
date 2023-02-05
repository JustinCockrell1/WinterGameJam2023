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

    tick() {

    }

    render(ctx, camera) {
        this.animation.render(ctx, this.x, this.y-camera.y, this.w, this.h);
    }

}