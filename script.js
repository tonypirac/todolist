const addButton = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// Add task to the list
addButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  
  if (taskText !== '') {
    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.classList.add('task-text');
    taskSpan.textContent = taskText;

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => {
      const newTaskText = prompt('Edit your task:', taskSpan.textContent);
      if (newTaskText !== null && newTaskText.trim() !== '') {
        taskSpan.textContent = newTaskText.trim();
      }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });

    li.appendChild(taskSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = ''; // Clear input field
  } else {
    alert('Please enter a task!');
  }
});

// Optionally, allow Enter key to add tasks
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addButton.click();
  }
});
