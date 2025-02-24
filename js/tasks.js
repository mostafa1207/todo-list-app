const tasks = [
  {
    title: "قراءة كتاب",
    date: "1/1/2001",
    isDone: false,
  },
  {
    title: "إنهاء المشروع",
    date: "2/1/2001",
    isDone: false,
  },
  {
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
    title: taskTitle,
    date: dateStr,
    isDone: false,
  };

  tasks.push(newTask);
}

export { tasks, addTask };
