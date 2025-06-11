export function timer() {
  let sec = 0;
  setInterval(() => {
    document.getElementById("timer").textContent = ++sec;
  }, 1000);
}
