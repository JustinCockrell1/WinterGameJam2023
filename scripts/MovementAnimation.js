import Animation from "./Animation.js";

class MovementAnimation extends Animation {
    constructor(path, distance, speed) {
        super(path);
        this.distance = distance;
        this.offset = 0;
        this.speed = 0;
        this.distanceTravelled = 0;
        this.inProgress = true;
    }
    
    tick(elapsedTime) {
        if(this.distanceTravelled<this.distance) {
        this.offset+=this.speed*elapsedTime;
        this.distanceTravelled+=Math.abs(this.speed*elapsedTime);
        }
        else {
            this.inProgress=false;
        }

    }

    render(ctx, x, y, w, h) {
        
    }
}