import { tasks } from "./tasks.js";

function createBtns() {
  const btns = [];
  for (let i = 0; i < 3; ++i) {
    const btn = document.createElement("button");
    btn.classList.add("circular-btn");
    btns.push(btn);
  }
  return btns;
}

function createTasksDivs() {
  const tasksDivs = [];
  for (const task of tasks) {
    const taskTitle = document.createElement("p");
    taskTitle.textContent = `${task.title}`;

    const taskDate = document.createElement("span");
    taskDate.textContent = `${task.date}`;

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    taskInfo.append(taskTitle, taskDate);

    const btns = createBtns();
    btns[0].textContent = "❌";
    btns[1].textContent = "✅";
    btns[2].textContent = "✏️";

    const taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");
    taskActions.append(...btns);

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.append(taskInfo, taskActions);

    tasksDivs.push(taskDiv);
  }
  return tasksDivs;
}

function appendTasks() {
  const tasksContainer = document.getElementById("tasks");
  tasksContainer.innerHTML = "";
  const tasksDivs = createTasksDivs();
  tasksContainer.append(...tasksDivs);
}

export { appendTasks };
