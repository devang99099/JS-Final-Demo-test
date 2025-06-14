"use strict";
import { fetchData } from "/src/quote.js";
import { TaskManager } from "/src/task.js";
import { drawSquare } from "/src/canvas.js";
import { timer } from "/src/timer.js";
import { email } from "/src/emial.js";
import { FunTaskManager } from "/src/tasklist.js";

email();

//Task

const taskManager = new TaskManager();

document.getElementById("addTask").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  taskManager.addTask(input.value);
  input.value = "";
});

//quote

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

//canvas

drawSquare();

//Task funcrion
FunTaskManager();

//timer
timer();
