"use strict";

export function FunTaskManager() {
  let datas = JSON.parse(localStorage.getItem("datas")) || [];
  let editingId = null;

  function save() {
    localStorage.setItem("datas", JSON.stringify(datas));
  }

  function addData(text) {
    if (!text.trim()) {
      return;
    }
    if (editingId !== null) {
      datas = datas.map((data) =>
        data.id === editingId ? { ...data, text: text } : data
      );
      editingId = null;
      document.getElementById("addTaskfun").textContent = "Add Task";
    } else {
      const NewData = {
        id: Date.now(),
        text,
        completed: false,
      };
      datas.push(NewData);
    }
    save();
    render();
  }

  function AlldeleteTask(id) {
    datas = datas.filter((data) => data.id !== id);
    save();
    render();
  }

  function UpdateData(id) {
    const data = datas.find((d) => d.id === id);
    if (!data) return;

    const input = document.getElementById("taskInputfun");
    input.value = data.text;
    editingId = id;
    document.getElementById("addTaskfun").textContent = "Update Task";
  }

  function dataToggel(id) {
    datas = datas.map((data) =>
      data.id === id ? { ...data, completed: !data.completed } : data
    );
    save();
    render();
  }

  function render() {
    const dataList = document.getElementById("taskListfun");
    dataList.innerHTML = "";
    dataList.innerHTML = datas
      .map(
        (data) => `
        <li class="  data ${data.completed ? "completed" : ""}">
          <input type="checkbox" ${data.completed ? "checked" : ""} id="${
          data.id
        }">
          ${data.text}
          <button class=" hover:scale-103 deleteBtn bg-red-500 text-white font-md px-4 py-1 rounded hover:bg-red-700 transition mt-1 mx-4" id="${
            data.id
          }">
            Delete
          </button>
          <button class=" hover:scale-103 EditBtn bg-green-500 text-white font-md px-4 py-1 rounded hover:bg-green-700 transition mt-1" id="${
            data.id
          }">
            Update
          </button>
        </li>

      `
      )
      .join("");

    dataList.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener("change", (e) =>
        dataToggel(Number(e.target.id))
      );
    });
    dataList.querySelectorAll(".deleteBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => AlldeleteTask(Number(e.target.id)));
    });
    dataList.querySelectorAll(".EditBtn").forEach((btn) => {
      btn.addEventListener("click", (e) => UpdateData(Number(e.target.id)));
    });
  }
  document.getElementById("addTaskfun").addEventListener("click", () => {
    const input = document.getElementById("taskInputfun");
    addData(input.value);
    input.value = "";
  });
  render();
}
