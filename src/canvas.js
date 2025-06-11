const canvas = document.getElementById("drawing-canvas");
const ctx = canvas.getContext("2d");
let isRed = true;

export function drawSquare() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = isRed ? "red" : "blue";
  ctx.fillRect(25, 25, 150, 150);
}

document.getElementById("btntoggle").addEventListener("click", () => {
  isRed = !isRed;
  drawSquare();
});
