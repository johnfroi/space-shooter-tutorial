function Player() {
  this.xPos = 0;
  this.yPos = 0;
  this.width = 0;
  this.height = 0;
  this.animationSpeed = 0;
  this.animationStep = 0;
  this.animationMaxStep = 0;
  this.image = new Image();
  this.speed = 0;
  this.direction = null;

  this.init = () => {
    this.width = 60;
    this.height = 30;
    this.xPos = 50;
    this.yPos = CANVAS_DIMENSION.height / 2 - (this.width / 2);
    this.animationMaxStep = 5;
    this.animationSpeed = 0.1;
    this.speed = 2;
    this.image.src = 'alpha-1/alpha-1.png';
  }

  this.draw = () => {
    if(this.animationStep > this.animationMaxStep) {
      this.animationStep = 0;
    }

    STAGE.save();
      STAGE.translate(this.xPos, this.yPos);
      STAGE.drawImage(
        this.image,
        this.width * Math.floor(this.animationStep),
        0,
        this.width,
        this.height,
        0,
        0,
        this.width,
        this.height
      );
    STAGE.restore();
  }
}
