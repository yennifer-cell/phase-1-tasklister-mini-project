document.addEventListener("DOMContentLoaded", () => {
  // Select the form
  const form = document.getElementById('create-task-form');

  // Add submit event listener to the form
  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload

    // Get the value of the input field
    const taskInput = event.target['new-task-description'].value;

    // Check if input is not empty (basic error handling)
    if (taskInput.trim() === "") {
      console.warn("Cannot add an empty task!");
      return; // Stop if input is empty
    }

    // Call function to create new task
    buildToDo(taskInput);

    // Clear the input field after submitting
    event.target.reset();
  });

  // Function to build and append a new task
  function buildToDo(task) {
    // Select the task list
    const taskList = document.getElementById('tasks');

    // Create a new li element
    const li = document.createElement('li');

    // Set the task as the text content
    li.textContent = task;

    // Append the li to the task list
    taskList.appendChild(li);
  }
});
