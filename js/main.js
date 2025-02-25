import { appendTasks, handleDeleteTask } from "./ui.js";
import { addTask } from "./tasks.js";

appendTasks();

document.getElementById("add-btn").addEventListener("click", () => {
  const taskTitle = prompt("الرجاء إدخال المهمة الجديدة");
  if (!taskTitle) return;

  addTask(taskTitle);
  appendTasks();
});

document.getElementById("tasks").addEventListener("click", (event) => {
  const targetBtn = event.target;
  if (targetBtn.matches(".delete-btn")) {
    handleDeleteTask(targetBtn);
  }
});
