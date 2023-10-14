const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

function gameLoop() {
  requestAnimationFrame(gameLoop);
}
gameLoop();
