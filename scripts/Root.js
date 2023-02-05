import GameObject from "./GameObject.js";
import {wrapTo360} from "./AngleHelper.js";
import Camera from "./Camera.js";
import Animation from "./Animation.js";

export default class Root extends GameObject {

    constructor(x, y) {
        super(x, y);
        this.angle = 90;
        this.speed = 200;

        this.parts = [];
        this.numParts = 100;
        this.animation = new Animation("./assets/images/Root.png");
        console.log(this.y, this.x);
    }

    tick(elapsedTime, gamePad) {
        let vx = gamePad.axes[0];
        let vy = gamePad.axes[1];
        let pressed = Math.abs(vx) > 0.05 || Math.abs(vy) > 0.05;

        

        let cAngle = Math.atan2(vy,vx)*180/Math.PI
        if(cAngle<0) {
            cAngle=360+cAngle;
        }

        //subtract the angle from the player angle
        // this.angle*=180/Math.PI;
        let change1 = cAngle - this.angle;
        let change2 = cAngle + (360-this.angle)
        if(this.angle<cAngle) {
            change2 = -(360-cAngle+this.angle);
        }

        let change = (Math.abs(change1) < Math.abs(change2)) ? change1 : change2;
        // if(this.angle<180) {
        //    change = 50;
        // }
        // else {
        //     change=-50;
        // }

        document.getElementById("change").innerHTML = change;
        document.getElementById("angle").innerHTML = cAngle;
       
        document.getElementById("ballAngle").innerHTML = this.angle;

        // console.log(vx, vy, change, angle, ballAngle);
        //update the player angle
        if(pressed) {
        this.angle+=(change/50);
        // this.angle = cAngle;
        this.angle= wrapTo360(this.angle);
        }
        let rAngle =this.angle*Math.PI/180;
        vy = Math.sin(rAngle);
        vx = Math.cos(rAngle);
       

        document.getElementById("vx").innerHTML = vx;
        document.getElementById("vy").innerHTML = vy;
       
    
        this.parts.push({x:this.x, y:this.y});
        this.x+=(vx * elapsedTime) * this.speed;
        this.y+=(vy * elapsedTime) * this.speed;

        // Wall Collision
        if(this.x < 0 ||this.x > 1000){
            // Game over screen
        }
        
    }

    render(ctx, camera) {
        ctx.fillStyle = "red";
        // ctx.fillRect(this.x, this.y, 15, 15);
        this.animation.render(ctx,this.x,this.y-camera.y,15, 15)
        for(let i = 0; i < this.parts.length; i++) {
            // ctx.fillRect(this.parts[i].x, this.parts[i].y, 15, 15);
            this.animation.render(ctx,this.parts[i].x,this.parts[i].y-camera.y,15,15);
        }
    }
}