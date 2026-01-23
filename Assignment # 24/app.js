let tasks = [];
let editIndex = null;

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const errorMsg = document.getElementById("errorMsg");
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    errorMsg.textContent = "Task cannot be empty.";
    return;
  }

  errorMsg.textContent = "";

  if (editIndex === null) {
    tasks.push(taskValue);
  } else {
    tasks[editIndex] = taskValue;
    editIndex = null;
  }

  taskInput.value = "";
  renderTasks();
}

function renderTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    li.innerHTML = `
          <span>${task}</span>
          <div class="actions">
            <button class="edit-btn" onclick="editTask(${index})">Edit</button>
            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
          </div>
        `;

    taskList.appendChild(li);
  });
}

function editTask(index) {
  document.getElementById("taskInput").value = tasks[index];
  editIndex = index;
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}