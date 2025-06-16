"use strict";
export function quote() {
  async function fetchData() {
    try {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      return `"${data.content}" - ${data.author}`;
    } catch (error) {
      console.log("Data not fetch : ", error);
      return "Failed to fetch quote.";
    }
  }
  document.getElementById("QuoteBtn").addEventListener("click", async () => {
    const quoteDisplay = document.getElementById("quoteDisplay");

    quoteDisplay.textContent = "Loading...";
    quoteDisplay.style.border = "1px solid grey";
    quoteDisplay.style.borderRadius = "4px";
    quoteDisplay.style.padding = "4px 12px";
    quoteDisplay.style.marginBottom = "8px";
    try {
      const quote = await fetchData();
      quoteDisplay.textContent = quote;
    } catch (err) {
      quoteDisplay.textContent = `Error: ${err.message}`;
    }
  });
}
