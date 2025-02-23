let tasks = [
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

function createTasksContent() {
  let content = "";
  for (const task of tasks) {
    content += `
        <!-- task -->
        <div class="task">
            <!-- task info -->
            <div class="task-info">
                <p>${task.title}</p>
                <span>${task.date}</span>
            </div>
            <!--// task info //-->
    
            <!-- task actions -->
            <div class="task-actions">
                <button class="circular-btn">❌</button>
                <button class="circular-btn">✅</button>
                <button class="circular-btn">✏️</button>
            </div>
            <!--// task actions //-->
        </div>
        <!--// task //-->
    `;
  }
  return content;
}

const content = createTasksContent();
document.getElementById("tasks").innerHTML = content;
