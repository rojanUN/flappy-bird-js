class Bird {
  constructor() {
    this.location = {
      x: canvas.width / 2,
      y: 0,
    };

    this.size = {
      width: 50,
      height: 40,
    };

    this.velocity = {
      x: 0,
      y: 2,
    };

    this.acceleration = 0.1;
    this.img = new Image();
    this.img.src = "./yellowbird-downflap.png";
  }

  draw() {
    c.beginPath();
    c.drawImage(
      this.img,
      this.location.x,
      this.location.y,
      this.size.width,
      this.size.height
    );
  }

  jump() {
    this.velocity.y = -2;
    this.img.src = "./yellowbird-upflap.png";
    console.log(this.velocity, this.location.y);
  }
  move() {
    this.velocity.y += this.acceleration;
    this.location.y += this.velocity.y;
  }

  update() {
    this.draw();
    this.move();
  }
}
