
class Task {
  constructor(id, title, completed) {
    
    Object.defineProperty(this, "id", {
      value: id,         
      writable: false,    
      enumerable: true    
    });
    this.title = title;         
    this.completed = completed; 
  }

  toggle() {
    // Eski nesneyi DEĞİŞTİRMİYORUZ, completed'ı tersine çevirip YENİ Task döndürüyoruz
    return new Task(this.id, this.title, !this.completed);
  }
}

class TaskManager {
  constructor() {
    this.tasks = [];  // başlangıçta boş dizi
  }

  setTasks(tasks) {
    this.tasks = [...tasks];  
  }

  addTask(task) {
    this.tasks = [...this.tasks, task];  
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  toggleTask(taskId) {
    this.tasks = this.tasks.map(task =>
      task.id === taskId ? task.toggle() : task
    );
  }
}