class Pipe {
  constructor() {
    this.location = {
      x: canvas.width,
      y: Math.random() * (0 - -250) + -250,
    };
    this.size = {
      width: 50,
      height: 350,
    };
    this.velocity = {
      x: -1.5,
      y: 0,
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
      this.location.y + this.size.height + 70,
      this.size.width,
      this.size.height
    );
  }

  move() {
    if (this.location.x + this.size.width <= 0) {
      this.location.x = canvas.width;
      this.location.y = Math.random() * (0 - -250) + -250;
    }
    this.location.x += this.velocity.x;
  }
  collision() {
    if (
      this.location.x + this.size.width >=
        bird.location.x - bird.size.width / 2 &&
      this.location.x <=
        bird.location.x - bird.size.width / 2 + bird.size.width &&
      this.location.y + this.size.height >= bird.location.y &&
      this.location.y <= bird.location.y + bird.size.height
    ) {
      console.log("collision");
      bird.isDead = true;
    }

    if (
      this.location.x + this.size.width >=
        bird.location.x - bird.size.width / 2 &&
      this.location.x <=
        bird.location.x - bird.size.width / 2 + bird.size.width &&
      bird.location.y + bird.size.height >=
        this.location.y + this.size.height + 70
    ) {
      console.log("collision");
      bird.isDead = true;
    }
  }
  update() {
    this.draw();
    this.drawBelow();
    if (!bird.isDead) {
      this.move();
      this.collision();
    }
  }
}
