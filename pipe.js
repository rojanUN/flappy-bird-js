class Pipe {
  constructor() {
    this.location = {
      x: canvas.width - 70,
      y: Math.random() * (0 - -250) + -250,
    };
    this.size = {
      width: 60,
      height: 200,
    };
    this.pipeImg = new Image();
    this.pipeImg_below = new Image();
    this.pipeImg_below.src = "./pipe-green.png";
    this.pipeImg.src = "./pipe-green-upside-down.png";
  }
  draw() {
    c.beginPath();
    c.drawImage(
      this.pipeImg,
      this.location.x,
      this.location.y,
      this.size.width,
      this.size.height
    );
  }

  drawBelow() {
    c.beginPath();
    c.drawImage(
      this.pipeImg_below,
      this.location.x,
      this.location.y + this.size.height + 150,
      this.size.width,
      this.size.height
    );
  }

  update() {
    this.draw();
    this.drawBelow();
  }
}
