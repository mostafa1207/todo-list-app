import { appendTasks, handleDeleteTask, handleEditTask } from "./ui.js";
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
  if (targetBtn.matches(".delete-btn")) handleDeleteTask(targetBtn);
  else if (targetBtn.matches(".edit-btn")) handleEditTask(targetBtn);
});
