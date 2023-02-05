export default class Animation {
    constructor(path) {
        this.img = new Image();
        this.img.src = path;
    }

    render(ctx, x, y, w, h,) {
        ctx.drawImage(this.img, x, y, w, h);

    }
    
}