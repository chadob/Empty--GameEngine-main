class Animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
    }
    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        const frame = this.currentFrame();
        console.log(this.width);
        ctx.drawImage(this.spritesheet,
            this.xStart + this.width*frame, this.yStart,
            this.width, this.height,
            10 * this.currentFrame(), y,
            this.width, this.height);
    };
    drawSolo(ctx, sX, sY, sWidth, sHeight, dX, dY) {
        ctx.drawImage(this.spritesheet, sX, sY, sWidth, sHeight, dX, dY, sWidth, sHeight)
    }
    currentFrame() {
        return Math.floor(this.elapsedTime/this.frameDuration);
    };
    isDone() {
        return (this.elapsedTime >= this.totalTime);
    }
}