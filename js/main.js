import { appendTasks } from "./ui.js";
import { addTask } from "./tasks.js";

appendTasks();

document.getElementById("add-btn").addEventListener("click", () => {
  const taskTitle = prompt("الرجاء إدخال المهمة الجديدة");
  if (!taskTitle) return;

  addTask(taskTitle);
  appendTasks();
});
