const tasks = [
  {
    id: 0,
    title: "قراءة كتاب",
    date: "1/1/2001",
    completed: false,
  },
  {
    id: 1,
    title: "إنهاء المشروع",
    date: "2/1/2001",
    completed: false,
  },
  {
    id: 2,
    title: "التسوق",
    date: "3/1/2001",
    completed: false,
  },
];

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
}

function getTaskIndex(taskId) {
  const index = tasks.findIndex((task) => task.id === taskId);
  return index;
}

function deleteTask(taskId) {
  const index = getTaskIndex(taskId);
  if (index === -1) return;
  tasks.splice(index, 1);
}

function editTaskTitle(taskId, newTitle) {
  const index = getTaskIndex(taskId);
  if (index === -1) return;
  tasks[index].title = newTitle;
}

function toggleTaskCompletion(taskId) {
  const index = getTaskIndex(taskId);
  if (index === -1) return;
  tasks[index].completed = !tasks[index].completed;
}

function getCompleted(taskId) {
  const index = getTaskIndex(taskId);
  if (index === -1) return;
  return tasks[index].completed;
}

export {
  tasks,
  addTask,
  deleteTask,
  editTaskTitle,
  toggleTaskCompletion,
  getTaskIndex,
  getCompleted,
};
