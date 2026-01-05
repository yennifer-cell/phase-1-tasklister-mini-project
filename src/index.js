document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskInput = event.target.elements['new-task-description'].value;
    buildToDo(taskInput);
    event.target.reset();
  });

  function buildToDo(task) {
    const li = document.createElement('li');
    li.textContent = task;
    document.getElementById('task').appendChild(li);
  }
});
