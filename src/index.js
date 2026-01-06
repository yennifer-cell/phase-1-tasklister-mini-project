// Select the form
const form = document.querySelector('#create-task-form')

// Add submit event listener
form.addEventListener('submit', (event) => {
  event.preventDefault()

  // Select the input directly
  const input = document.querySelector('#new-task-description')

  // Gather data into an object
  const task = {
    description: input.value
  }

  // Call buildToDo with the task
  buildToDo(task)
})

// Build and append task to the list
function buildToDo(task) {
  const li = document.createElement('li')
  li.textContent = task.description

  const taskList = document.querySelector('#tasks')
  taskList.appendChild(li)
}

expect(taskList.textContent).to.include('Wash the dishes')


