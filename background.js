const backgroundImages = ["/background-day.png", "/background-night.png"];
class Background {
  constructor(x, y) {
    this.location = {
      x: x,
      y: y,
    };
    this.size = {
      width: canvas.width,
      height: canvas.height,
    };
    this.velocity = {
      x: -1,
      y: 0,
    };

    this.bgImg = new Image();
    this.ImageIndex = 0;
    this.bgImg.src = backgroundImages[this.ImageIndex];

    setInterval(() => this.changeBackground(), 30000);
  }
  changeBackground() {
    this.ImageIndex = (this.ImageIndex + 1) % backgroundImages.length;
    this.bgImg.src = backgroundImages[this.ImageIndex];
  }
  draw() {
    c.beginPath();
    c.drawImage(
      this.bgImg,
      this.location.x,
      this.location.y,
      this.size.width,
      this.size.height
    );
  }

  move() {
    if (this.location.x + this.size.width <= 0) {
      this.location.x = this.size.width;
    }
    this.location.x += this.velocity.x;
  }
  update() {
    this.draw();
    if (!bird.isDead) {
      this.move();
    }
  }
}
