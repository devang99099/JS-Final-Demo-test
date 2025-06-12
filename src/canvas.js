export function drawSquare() {
  const box = document.getElementById("box");
  document.getElementById("btntoggle").addEventListener("click", () => {
    box.classList.toggle("blue");
  });
}
