let tasks = [];

function saveTasks() {
  const tasksStr = JSON.stringify(tasks);
  localStorage.setItem("tasks", tasksStr);
}

function loadTasks() {
  const tasksStr = localStorage.getItem("tasks");
  return JSON.parse(tasksStr) ?? [];
}

function initTasks() {
  tasks = loadTasks();
}

function addTask(taskTitle) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateStr = `${day}/${month}/${year}`;

  const newTask = {
    id: Date.now(),
    title: taskTitle,
    date: dateStr,
    completed: false,
  };

  tasks.push(newTask);
  saveTasks();
}

function getTaskIndex(taskId) {
  const index = tasks.findIndex((task) => task.id === taskId);
  return index;
}

function deleteTask(taskId) {
  const index = getTaskIndex(taskId);
  if (index === -1) return;
  tasks.splice(index, 1);
  saveTasks();
}

function editTaskTitle(taskId, newTitle) {
  const index = getTaskIndex(taskId);
  if (index === -1) return;
  tasks[index].title = newTitle;
  saveTasks();
}

function toggleTaskCompletion(taskId) {
  const index = getTaskIndex(taskId);
  if (index === -1) return;
  tasks[index].completed = !tasks[index].completed;
  saveTasks();
}

function getCompleted(taskId) {
  const index = getTaskIndex(taskId);
  if (index === -1) return;
  return tasks[index].completed;
}

export {
  tasks,
  initTasks,
  addTask,
  deleteTask,
  editTaskTitle,
  toggleTaskCompletion,
  getTaskIndex,
  getCompleted,
};
