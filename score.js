let gameScore = 0;
class Score {
  constructor() {
    this.intervalId = setInterval(() => {
      gameScore++;
    }, 1000);
  }
  draw() {
    c.beginPath();
    c.fillStyle = "white";
    c.font = "30px sans serif";
    c.fillText(gameScore, 10, 40);
    if (bird.isDead) {
      clearInterval(this.intervalId);
      c.beginPath();
      c.fillStyle = "red";
      c.font = "50px sans serif";
      c.fillText("Game Over", 35, 250);
    }
  }
}
