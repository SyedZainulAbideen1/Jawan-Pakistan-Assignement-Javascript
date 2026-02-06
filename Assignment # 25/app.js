// Task management state
let tasks = [];
let currentFilter = 'all';
let taskToEdit = null;

// DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const tasksList = document.getElementById('tasksList');
const emptyState = document.getElementById('emptyState');
const filterBtns = document.querySelectorAll('.filter-btn');
const totalTasksEl = document.getElementById('totalTasks');
const pendingTasksEl = document.getElementById('pendingTasks');
const completedTasksEl = document.getElementById('completedTasks');
const errorMessage = document.getElementById('errorMessage');
const editModal = document.getElementById('editModal');
const editTaskInput = document.getElementById('editTaskInput');
const editErrorMessage = document.getElementById('editErrorMessage');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');
const saveEditBtn = document.getElementById('saveEditBtn');

// Initialize the app
function init() {
  fetchTasksFromFirebase(); // Step 3: Firebase se tasks fetch
  setupEventListeners();
}

// Fetch tasks from Firebase (Realtime)
function fetchTasksFromFirebase() {
  database.ref("tasks").on("value", (snapshot) => {
    tasks = [];
    snapshot.forEach(child => {
      tasks.push({
        id: child.key,
        ...child.val()
      });
    });
    renderTasks();
    updateStats();
  });
}

// Set up event listeners
function setupEventListeners() {
  addTaskBtn.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
  });

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      renderTasks();
    });
  });

  closeModalBtn.addEventListener('click', closeEditModal);
  cancelEditBtn.addEventListener('click', closeEditModal);
  saveEditBtn.addEventListener('click', saveEditedTask);

  editModal.addEventListener('click', (e) => {
    if (e.target === editModal) closeEditModal();
  });
}

// Add a new task to Firebase
function addTask() {
  const taskText = taskInput.value.trim();

  if (!taskText) {
    showError(errorMessage, "Task cannot be empty");
    return;
  }

  if (taskText.length > 100) {
    showError(errorMessage, "Task cannot exceed 100 characters");
    return;
  }

  const newTaskRef = database.ref("tasks").push();
  newTaskRef.set({
    text: taskText,
    completed: false,
    date: new Date().toISOString().split('T')[0]
  });

  taskInput.value = '';
  hideError(errorMessage);
}

// Render tasks
function renderTasks() {
  const filteredTasks = filterTasks();

  if (filteredTasks.length === 0) {
    emptyState.style.display = 'block';
    tasksList.innerHTML = '';
    return;
  }

  emptyState.style.display = 'none';

  tasksList.innerHTML = filteredTasks.map(task => `
    <li class="task-item ${task.completed ? 'completed' : ''}" data-id="${task.id}">
      <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
      <div class="task-content">
        <div class="task-title">${escapeHtml(task.text)}</div>
        <div class="task-date">Added: ${task.date}</div>
      </div>
      <div class="task-actions">
        <button class="task-btn edit-btn" title="Edit task">
          <i class="fas fa-edit"></i>
        </button>
        <button class="task-btn delete-btn" title="Delete task">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </li>
  `).join('');

  // Add event listeners
  document.querySelectorAll('.task-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', toggleTaskStatus);
  });

  document.querySelectorAll('.edit-btn').forEach(btn => {
    btn.addEventListener('click', openEditModal);
  });

  document.querySelectorAll('.delete-btn').forEach(btn => {
    btn.addEventListener('click', deleteTask);
  });
}

// Filter tasks
function filterTasks() {
  switch (currentFilter) {
    case 'pending': return tasks.filter(task => !task.completed);
    case 'completed': return tasks.filter(task => task.completed);
    default: return tasks;
  }
}

// Update stats
function updateStats() {
  const total = tasks.length;
  const completed = tasks.filter(task => task.completed).length;
  const pending = total - completed;

  totalTasksEl.textContent = total;
  pendingTasksEl.textContent = pending;
  completedTasksEl.textContent = completed;
}

// Toggle task completion in Firebase
function toggleTaskStatus(e) {
  const taskId = e.target.closest('.task-item').dataset.id;
  database.ref("tasks/" + taskId).update({
    completed: e.target.checked
  });
}

// Edit task
function openEditModal(e) {
  const taskId = e.target.closest('.task-item').dataset.id;
  taskToEdit = tasks.find(t => t.id === taskId);

  if (taskToEdit) {
    editTaskInput.value = taskToEdit.text;
    editModal.style.display = 'flex';
    editTaskInput.focus();
    hideError(editErrorMessage);
  }
}

function closeEditModal() {
  editModal.style.display = 'none';
  taskToEdit = null;
  editTaskInput.value = '';
  hideError(editErrorMessage);
}

function saveEditedTask() {
  if (!taskToEdit) return;
  const newText = editTaskInput.value.trim();
  if (!newText) {
    showError(editErrorMessage, "Task cannot be empty");
    return;
  }
  database.ref("tasks/" + taskToEdit.id).update({ text: newText });
  closeEditModal();
}

// Delete task
function deleteTask(e) {
  const taskId = e.target.closest('.task-item').dataset.id;
  if (confirm("Are you sure you want to delete this task?")) {
    database.ref("tasks/" + taskId).remove();
  }
}

// Show/hide error
function showError(el, msg) {
  el.textContent = msg;
  el.style.display = 'block';
  setTimeout(() => el.style.display = 'none', 3000);
}

function hideError(el) {
  el.style.display = 'none';
}

// Escape HTML
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', init);
