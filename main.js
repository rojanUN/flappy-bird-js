const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const bird = new Bird();
const bg = new Background(0, 0);
const bg1 = new Background(canvas.width, 0);
const pipe = new Pipe();
const score = new Score();

function gameLoop() {
  c.clearRect(0, 0, 300, 500);
  bg.update();
  bg1.update();
  bird.update();
  pipe.update();
  score.draw();
  requestAnimationFrame(gameLoop);
}
document.addEventListener("keydown", () => {
  bird.jump();
});

canvas.addEventListener("touchstart", () => {
  bird.jump();
});
gameLoop();
