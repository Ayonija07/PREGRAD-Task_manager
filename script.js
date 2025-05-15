// File: task.js
let tasks = [];
function addTask() {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();
  if (value) {
    tasks.push({ id: Date.now(), desc: value });
    input.value = "";
    renderTasks();
  }
}
function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}
function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const newDesc = prompt("Edit task:", task.desc);
  if (newDesc) {
    task.desc = newDesc.trim();
    renderTasks();
  }
}
function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach(task => {
    const div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
      <span>${task.desc}</span>
      <div class="task-actions">
        <button onclick="editTask(${task.id})">Edit</button>
        <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;
    list.appendChild(div);
  });
}
