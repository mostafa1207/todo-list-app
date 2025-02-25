const tasks = [
  {
    id: 0,
    title: "قراءة كتاب",
    date: "1/1/2001",
    isDone: false,
  },
  {
    id: 1,
    title: "إنهاء المشروع",
    date: "2/1/2001",
    isDone: false,
  },
  {
    id: 2,
    title: "التسوق",
    date: "3/1/2001",
    isDone: false,
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
    isDone: false,
  };

  tasks.push(newTask);
}

function deleteTask(taskId) {
  const index = tasks.findIndex((task) => {
    return task.id == taskId;
  });
  if (index == -1) return;
  tasks.splice(index, 1);
}

export { tasks, addTask, deleteTask };
