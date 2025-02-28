import {
  renderTasks,
  appendTaskToUI,
  handleDeleteTask,
  handleEditTask,
  handleTaskCompletion,
} from "./ui.js";
import { addTask, initTasks } from "./tasks.js";

initTasks();
renderTasks();

document.getElementById("add-btn").addEventListener("click", () => {
  const taskTitle = prompt("الرجاء إدخال المهمة الجديدة");
  if (!taskTitle) return;

  const task = addTask(taskTitle);
  appendTaskToUI(task);
});

document.getElementById("tasks").addEventListener("click", (event) => {
  const targetBtn = event.target;
  switch (true) {
    case targetBtn.matches(".delete-btn"):
      handleDeleteTask(targetBtn);
      break;
    case targetBtn.matches(".edit-btn"):
      handleEditTask(targetBtn);
      break;
    case targetBtn.matches(".complete-btn"):
      handleTaskCompletion(targetBtn);
      break;
  }
});
