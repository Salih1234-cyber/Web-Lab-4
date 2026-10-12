const loadBtn = document.getElementById("loadTasksBtn");
const taskList = document.getElementById("taskList");
const statusMessage = document.getElementById("statusMessage");

const manager = new TaskManager();

function renderTasks() {
  taskList.innerHTML = "";  

  manager.tasks.forEach((task) => {
    const div = document.createElement("div");  
    div.classList.add("task");                  

    if (task.completed) {
      div.classList.add("completed");          
    }

    const span = document.createElement("span");  
    span.textContent = task.title;                

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.addEventListener("click", () => {
      manager.toggleTask(task.id);  
      renderTasks();                
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      manager.removeTask(task.id);  
      renderTasks();                
    });

    div.appendChild(span);        
    div.appendChild(toggleBtn);   
    div.appendChild(deleteBtn);   
    taskList.appendChild(div);    
  });
}

loadBtn.addEventListener("click", async () => {
  statusMessage.textContent = "Loading tasks..."; 

  try {
    const rawTasks = await fetchTasks();  
    const jsonString = JSON.stringify(rawTasks);
    const parsedTasks = JSON.parse(jsonString);

    const taskObjects = parsedTasks.map(
      (item) => new Task(item.id, item.title, item.completed)
    );

    manager.setTasks(taskObjects);  
    renderTasks();                  
    statusMessage.textContent = ""; 
  } catch (error) {
    statusMessage.textContent = "Error: tasks could not be loaded.";
  }
});