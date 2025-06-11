"use strict";
export class TaskManager {
  constructor() {
    this.tasks = JSON.parse(localStorage.getItem("tasks")) ?? [];
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
    this.tasks = this.tasks.filter((task) => !task.completed);
    this.save();
    this.render();
  }
  clearData(task) {
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
          <input type="checkbox" ${task.completed ? "checked" : ""} data-id="${
          task.id
        }">
        
          ${task.text}
          
        </li>

      `
      )
      .join("");

    taskList.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener("change", (e) =>
        this.toggleTask(Number(e.target.dataset.id))
      );
    });

    const btndlt = document.getElementById("deleteAll");
    if (this.tasks.length == 0) {
      btndlt.style.display = "none";
    } else {
      btndlt.style.display = "block";
    }
    btndlt.addEventListener("click", (e) =>
      this.AlldeleteTask(e.target.dataset.id)
    );

    const btndltall = document.getElementById("deleteAllData");
    if (this.tasks.length == 0) {
      btndltall.style.display = "none";
    } else {
      btndltall.style.display = "block";
    }
    btndltall.addEventListener("click", (e) =>
      this.clearData(e.target.dataset)
    );
  }
}
