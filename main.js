const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

const bird = new Bird();
function gameLoop() {
  c.clearRect(0, 0, 300, 500);
  bird.update();
  requestAnimationFrame(gameLoop);
}
document.addEventListener("keydown", () => {
  bird.jump();
});
gameLoop();
