document.addEventListener("DOMContentLoaded", () => {
  // Select the form
  const form = document.getElementById('create-task-form');

  // Add submit event listener
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Get the value of the input field
    const task = event.target['new-task-description'].value;

    // Call function to add task to the list
    buildToDo(task);

    // Clear input field
    event. target.reset();
  });

  // Function to create and append a new task
  function buildToDo(task) {
    const taskList = document.getElementById('tasks'); // Select the ul
    const li = document.createElement('li');           // Create li
    li.textContent = task;                             // Set li text
    taskList.appendChild(li);                          // Add li to ul
  }
});
