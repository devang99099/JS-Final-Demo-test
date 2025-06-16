"use strict";
import { quote } from "/src/quote.js";
import { TaskManager } from "/src/task.js";
import { drawSquare } from "/src/canvas.js";
import { timer } from "/src/timer.js";
import { email } from "/src/emial.js";
import { FunTaskManager } from "/src/tasklist.js";

email();

//Task

const obj = new TaskManager();

//quote
quote();

//canvas

drawSquare();

//Task funcrion
FunTaskManager();

//timer
timer();
