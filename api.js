function fetchTasks() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: "Learn DOM", completed: false },
        { id: 2, title: "Practice async/await", completed: true },
        { id: 3, title: "Finish assignment", completed: false }
      ]);  // 1.5 sn sonra bu ham veri ile Promise tamamlanır
    }, 1500);
  });
}