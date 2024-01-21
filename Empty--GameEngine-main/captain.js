class Captain {
    constructor(game) {
        this.game = game;
        this.frames = {
          idle: [[40,20,43,60, 0, 0]],
          punch: [[47, 110, 53, 60, 0, 0],[120, 110, 80, 60, 0, 0]],
          kick: [[30, 200, 53, 60, 0, 0],
          [40, 410, 90, 40, 0, 0], [40, 410, 100, 40, 50, 0], [40, 410, 110, 40, 100, 0], [40, 410, 110, 40, 150, 0]]
        }
        this.action = "idle";
        this.activeFrame = 0;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./17153.gif"), 0, 0, 500, 500, 3, 0.5);	
        this.animator2 = new Animator(ASSET_MANAGER.getAsset("./falconkick.png"), 0, 0, 90, 60, 5, 0.25);											
    };
    update() {
      if (this.game.keys["d"] === true) {
        this.action = "punch";
        for (let i = 0; i < this.frames[this.action].length; i++) {
          setTimeout(()=> {
            this.activeFrame = i;
          }, 500);
        }
        setTimeout(()=> {
          this.action = "idle";
          this.activeFrame = 0;
        }, this.frames[this.action].length*500);
      } else if (this.game.keys["f"]) {
        this.action = "kick";
      };
    }
    draw(ctx) {
      ctx.save();
      ctx.scale(4,4);
      if (this.action === "punch") {
        this.animator.drawSolo(
          ctx,
          this.frames[this.action][this.activeFrame][0],
          this.frames[this.action][this.activeFrame][1],
          this.frames[this.action][this.activeFrame][2],
          this.frames[this.action][this.activeFrame][3],
          this.frames[this.action][this.activeFrame][4],
          this.frames[this.action][this.activeFrame][5],
          );
      } else if (this.action === "kick") {
        this.animator2.drawFrame(this.game.clockTick, ctx, 0, 0)
      } else {
        this.animator.drawSolo(
          ctx,
          this.frames[this.action][this.activeFrame][0],
          this.frames[this.action][this.activeFrame][1],
          this.frames[this.action][this.activeFrame][2],
          this.frames[this.action][this.activeFrame][3],
          this.frames[this.action][this.activeFrame][4],
          this.frames[this.action][this.activeFrame][5],
          );
      }
      
         
      ctx.restore();
	};
}