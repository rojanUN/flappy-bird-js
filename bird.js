class Bird {
  constructor() {
    this.location = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    this.size = {
      width: 30,
      height: 20,
    };

    this.velocity = {
      x: 0,
      y: 2,
    };

    this.isDead = false;
    this.acceleration = 0.1;
    this.img = new Image();
    this.img.src = "./yellowbird-downflap.png";
    this.swoosh = new Audio();
    this.wing = new Audio();
    this.wing.src = "./audio_wing.ogg";
    this.swoosh.src = "./audio_swoosh.ogg";
    this.isSpaceDown = false;
  }

  draw() {
    c.beginPath();
    c.drawImage(
      this.img,
      this.location.x - this.size.width / 2,
      this.location.y,
      this.size.width,
      this.size.height
    );
  }

  checkBorderCollision() {
    if (this.location.y + this.size.height >= canvas.height) {
      this.location.y = canvas.height - this.size.height;
      this.isDead = true;
    }
  }

  jump() {
    this.velocity.y = -2;
    console.log(this.velocity, this.location.y);
  }
  move() {
    this.velocity.y += this.acceleration;
    this.location.y += this.velocity.y;
  }

  update() {
    this.draw();
    if (!this.isDead) {
      this.move();
      this.checkBorderCollision();
    }
  }
}
