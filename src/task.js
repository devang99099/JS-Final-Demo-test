"use strict";
export class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    this.render();
  }

  save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  addTask(text) {
    if (!text.trim()) {
      return;
    }
    const NewTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    this.tasks.push(NewTask);
    this.save();
    this.render();
  }

  toggleTask(id) {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.save();
    this.render();
  }

  AlldeleteTask(id) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.save();
    this.render();
  }
  clearData() {
    this.tasks = [];
    this.save();
    this.render();
  }

  render() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = this.tasks
      .map(
        (task) => `
        <li class="task ${task.completed ? "completed" : ""}">
          <input type="checkbox" ${task.completed ? "checked" : ""} id="${
          task.id
        }">
        
          ${task.text}
          <button class=" hover:scale-103 deleteBtn bg-red-500 text-white font-md px-4 rounded hover:bg-red-700 transition mt-1 mx-4" id="${
            task.id
          }">
            Delete
          </button>
        </li>

      `
      )
      .join("");

    taskList.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener("change", (e) =>
        this.toggleTask(Number(e.target.id))
      );
    });

    taskList.querySelectorAll(".deleteBtn").forEach((btn) => {
      btn.addEventListener("click", (e) =>
        this.AlldeleteTask(Number(e.target.id))
      );
    });

    const btndltall = document.getElementById("deleteAllData");
    if (this.tasks.length == 0) {
      btndltall.style.display = "none";
    } else {
      btndltall.style.display = "block";
    }
    btndltall.addEventListener("click", (e) => this.clearData());
  }
}

const taskManager = new TaskManager();

document.getElementById("addTask").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  taskManager.addTask(input.value);
  input.value = "";
});
