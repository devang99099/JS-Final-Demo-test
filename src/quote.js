"use strict";

export async function fetchData() {
  try {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    return `"${data.content}" - ${data.author}`;
  } catch (error) {
    console.log("Data not fetch : ", error);
    return "Failed to fetch quote.";
  }
}
