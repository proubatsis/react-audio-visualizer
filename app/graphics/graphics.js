class Graphics {
    constructor(context) {
        this.ctx = context;
    }

    fillRect(x, y, width, height, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x, y, width, height);
    }

    fillCircle(x, y, radius, color) {
        this.ctx.fillStyle = color;
        this.ctx.moveTo(0, 0);
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
}

export default Graphics;
