import {
  tasks,
  deleteTask,
  editTaskTitle,
  toggleTaskCompletion,
  getCompleted,
} from "./tasks.js";

function createBtns(completed) {
  const btnTexts = completed ? ["❌", "✅", "✏️"] : ["❌", "⬜", "✏️"];
  const btnsClasses = ["delete-btn", "complete-btn", "edit-btn"];

  const btns = btnTexts.map((text, index) => {
    const btn = document.createElement("button");
    btn.classList.add("circular-btn");
    btn.classList.add(btnsClasses[index]);
    btn.textContent = text;
    return btn;
  });
  return btns;
}

function createTaskDiv(task) {
  const taskTitle = document.createElement("p");
  taskTitle.classList.add("task-title");
  taskTitle.textContent = task.title;

  const taskDate = document.createElement("span");
  taskDate.textContent = task.date;

  const taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");
  taskInfo.append(taskTitle, taskDate);

  const taskActions = document.createElement("div");
  taskActions.classList.add("task-actions");
  const btns = createBtns(task.completed);
  taskActions.append(...btns);

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  if (task.completed) taskDiv.classList.add("completed-task");
  taskDiv.dataset.id = task.id;
  taskDiv.append(taskInfo, taskActions);

  return taskDiv;
}

function renderTasks() {
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = "";
  const tasksDivs = tasks.map((task) => createTaskDiv(task));
  tasksContainer.append(...tasksDivs);
}

function appendTaskToUI(task) {
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.append(createTaskDiv(task));
}

function handleDeleteTask(deleteBtn) {
  const taskDiv = deleteBtn.closest(".task");
  if (!taskDiv) return;

  const taskTitle = taskDiv.querySelector(".task-title")?.textContent;
  if (!confirm(`هل أنت متأكد من أنك تريد حذف ${taskTitle}؟`)) return;

  taskDiv.remove();
  const taskId = Number(taskDiv.dataset.id);
  deleteTask(taskId);
}

function handleEditTask(btn) {
  const taskDiv = btn.closest(".task");
  if (!taskDiv) return;

  const taskTitleElement = taskDiv.querySelector(".task-title");
  if (!taskTitleElement) return;

  const newTitle = prompt(
    "الرجاء تعديل عنوان المهمة",
    taskTitleElement.textContent
  );
  if (newTitle === null) return;
  else if (newTitle === "") {
    alert("عذرا لا يمكنك إدخال عنوان فارغ");
    return;
  }

  taskTitleElement.textContent = newTitle;
  const taskId = Number(taskDiv.dataset.id);
  editTaskTitle(taskId, newTitle);
}

function handleTaskCompletion(btn) {
  const taskDiv = btn.closest(".task");
  if (!taskDiv) return;

  const taskId = Number(taskDiv.dataset.id);

  toggleTaskCompletion(taskId);

  const completed = getCompleted(taskId);

  taskDiv.classList.toggle("completed-task", completed);
  btn.textContent = completed ? "✅" : "⬜";
}

export {
  renderTasks,
  appendTaskToUI,
  handleDeleteTask,
  handleEditTask,
  handleTaskCompletion,
};
