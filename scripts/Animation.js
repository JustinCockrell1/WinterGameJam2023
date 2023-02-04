export default class Animation {
    constructor(img) {
        this.img = new Image();
        this.img.src = img;
    }

    render(ctx) {
        ctx.drawImage(this.img, this.x, this.y)
    }
    
}