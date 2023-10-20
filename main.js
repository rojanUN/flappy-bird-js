const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const bird = new Bird();
const bg = new Background(0, 0);
const bg1 = new Background(canvas.width, 0);
function gameLoop() {
  c.clearRect(0, 0, 300, 500);
  bg.update(bird.isDead);
  bg1.update(bird.isDead);
  bird.update();
  requestAnimationFrame(gameLoop);
}
document.addEventListener("keydown", () => {
  bird.jump();
});
gameLoop();
