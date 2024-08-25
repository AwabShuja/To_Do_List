function addTask() {
    const taskInput = document.getElementById('input');
    const taskText = taskInput.value.trim();
    if (taskText === '') 
        return alert("Enter a name of task!");
    
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    
    const actions = document.createElement('div');
    actions.classList.add('task-actions');
    
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = '✓';
    completeBtn.addEventListener('click', () => completeTask(taskItem));
    
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '✎';
    editBtn.addEventListener('click', () => editTask(taskItem));
    
    const deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '🗑';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => deleteTask(taskItem));
    
    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    
    taskItem.appendChild(actions);
    document.getElementById('tasks-list').appendChild(taskItem);
    
    taskInput.value = '';
    updateTaskCount();
}

function completeTask(taskItem) {
    taskItem.classList.add('completed');

    const actions = taskItem.querySelector('.task-actions');
    if (actions) {
        actions.remove();
    }

    const doneList = document.getElementById('done-list');
    doneList.appendChild(taskItem);
    updateTaskCount();
    updateDoneCount();
}

function editTask(taskItem) {
    const taskText = taskItem.firstChild.textContent.trim();
    
    const newTaskText = prompt('Edit task:', taskText);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.firstChild.nodeValue = newTaskText.trim();
    }
}

function deleteTask(taskItem) {
    taskItem.remove();
    updateTaskCount();
}

function updateTaskCount() {
    const taskCount = document.getElementById('tasks-list').childElementCount;
    document.getElementById('tasks-count').textContent = taskCount;
}

function updateDoneCount() {
    const doneCount = document.getElementById('done-list').childElementCount;
    document.getElementById('done-count').textContent = doneCount;
}
