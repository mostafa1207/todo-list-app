import { tasks, deleteTask } from "./tasks.js";

function createBtns() {
  const btnTexts = ["❌", "✅", "✏️"];
  const btnsClasses = ["delete-btn", "done-btn", "edit-btn"];

  const btns = btnTexts.map((text, index) => {
    const btn = document.createElement("button");
    btn.classList.add("circular-btn");
    btn.classList.add(btnsClasses[index]);
    btn.textContent = text;
    return btn;
  });
  return btns;
}

function createTasksDivs() {
  const tasksDivs = tasks.map((task) => {
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
    const btns = createBtns();
    taskActions.append(...btns);

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.dataset.id = task.id;
    taskDiv.append(taskInfo, taskActions);

    return taskDiv;
  });
  return tasksDivs;
}

function appendTasks() {
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = "";
  const tasksDivs = createTasksDivs();
  tasksContainer.append(...tasksDivs);
}

function handleDeleteTask(deleteBtn) {
  const taskDiv = deleteBtn.closest(".task");
  if (!taskDiv) return;
  const taskTitle = taskDiv.querySelector(".task-title")?.textContent;
  if (!confirm(`هل أنت متأكد من أنك تريد حذف ${taskTitle}؟`)) return;
  taskDiv.remove();
  const taskId = Number(taskDiv.dataset.id);
  deleteTask(taskId);
  console.log(tasks);
}

export { appendTasks, handleDeleteTask };
