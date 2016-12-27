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

    fillShape(shape) {
        this.ctx.fillStyle = shape.color;
        
        const points = shape.points;
        this.ctx.beginPath();

        this.ctx.moveTo(points[0].x, points[0].y);
        for(let i = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        this.ctx.lineTo(points[0].x, points[0].y);

        this.ctx.fill();
    }
}

export default Graphics;
