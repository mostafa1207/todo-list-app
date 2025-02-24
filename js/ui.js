import { tasks } from "./tasks.js";

function createBtns() {
  const btnTexts = ["❌", "✅", "✏️"];
  const btns = btnTexts.map((text) => {
    const btn = document.createElement("button");
    btn.classList.add("circular-btn");
    btn.textContent = text;
    return btn;
  });
  return btns;
}

function createTasksDivs() {
  const tasksDivs = tasks.map((task) => {
    const taskTitle = document.createElement("p");
    taskTitle.textContent = `${task.title}`;

    const taskDate = document.createElement("span");
    taskDate.textContent = `${task.date}`;

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    taskInfo.append(taskTitle, taskDate);

    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");
    const btns = createBtns();
    taskActions.append(...btns);

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
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

export { appendTasks };
