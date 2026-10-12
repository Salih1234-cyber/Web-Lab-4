# Task Dashboard

A simple task dashboard built with vanilla JavaScript. Tasks are loaded asynchronously from a simulated server, rendered to the DOM, and can be toggled or deleted.

## File Organization
- `index.html`: The page structure (heading, Load Tasks button, status message, task list container)
- `style.css`: Styles for completed tasks (line-through)
- `taskManager.js`: The `Task` and `TaskManager` classes
- `api.js`: The fake server request (`fetchTasks`) using a Promise and `setTimeout`
- `main.js`: DOM manipulation, event listeners, and async/await logic

## Challenges I Faced
- Updating arrays without mutating them (I used `map`, `filter`, and the spread operator)
- Understanding how Promises and `async/await` work
- Making the `id` read-only with `Object.defineProperty`
- Re-rendering the task list after every toggle or delete
- ... (add your own challenges here)
