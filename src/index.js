// Select the form
const form = document.querySelector('#create-task-form')

// Add submit event listener
form.addEventListener('submit', (event) => {
  // Prevent default form behavior
  event.preventDefault()

  // Gather data into an object
  const task = {
    description: event.target['new-task-description'].value
  }

  // Call buildToDo and pass in the task
  buildToDo(task)
})

// Function to build and add a task to the list
function buildToDo(task) {
  // Create new li element
  const li = document.createElement('li')

  // Add task text
  li.textContent = task.description

  // Append li to task list
  const taskList = document.querySelector('#tasks')
  taskList.appendChild(li)
}
